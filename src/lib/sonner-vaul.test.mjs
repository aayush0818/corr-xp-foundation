import test from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

// These are the versions this app's UI components are written against.
const MINIMUM_VERSIONS = {
  sonner: "2.0.8",
  vaul: "1.1.2",
};

const require = createRequire(import.meta.url);

// sonner 2.x schedules toast dismissals on the next animation frame. Node has no
// browser frame loop, so provide a tiny timer-based stand-in.
globalThis.requestAnimationFrame ??= (callback) => setTimeout(() => callback(Date.now()), 0);
globalThis.cancelAnimationFrame ??= (handle) => clearTimeout(handle);

function installedPackageJson(name) {
  // Walk up from the resolved entry point until the package's own package.json
  // is found. This works whether or not the package restricts deep imports.
  let dir = path.dirname(require.resolve(name));
  for (;;) {
    const candidate = path.join(dir, "package.json");
    if (existsSync(candidate)) {
      const pkg = JSON.parse(readFileSync(candidate, "utf8"));
      if (pkg.name === name) return pkg;
    }
    const parent = path.dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  throw new Error(`could not locate package.json for ${name}`);
}

function compareVersions(a, b) {
  const left = a.split(".").map(Number);
  const right = b.split(".").map(Number);
  for (let i = 0; i < Math.max(left.length, right.length); i += 1) {
    const diff = (left[i] ?? 0) - (right[i] ?? 0);
    if (diff !== 0) return diff;
  }
  return 0;
}

test("sonner is upgraded to the API version used by the toaster component", async () => {
  const pkg = installedPackageJson("sonner");
  assert.ok(
    compareVersions(pkg.version, MINIMUM_VERSIONS.sonner) >= 0,
    `expected sonner >= ${MINIMUM_VERSIONS.sonner}, found ${pkg.version}`,
  );

  const { Toaster, toast } = await import("sonner");
  assert.equal(typeof Toaster, "object");
  assert.equal(typeof toast, "function");
  assert.equal(typeof toast.success, "function");
  assert.equal(typeof toast.dismiss, "function");
});

test("sonner keeps toast history bounded after the 2.x upgrade", async () => {
  const { toast } = await import("sonner");

  // Synthetic toasts only: create and immediately dismiss more toasts than the
  // history window, then add one more to trigger pruning.
  for (let i = 0; i < 105; i += 1) {
    const id = `synthetic-history-${i}`;
    toast(`synthetic toast ${i}`, { id });
    toast.dismiss(id);
  }
  toast("synthetic trigger", { id: "synthetic-history-trigger" });

  const historySize = toast.getHistory().length;
  assert.ok(
    historySize <= 100,
    `sonner 2.x should cap history at 100 entries, found ${historySize}`,
  );
});

test("vaul is upgraded to the API version used by the drawer component", async () => {
  const pkg = installedPackageJson("vaul");
  assert.ok(
    compareVersions(pkg.version, MINIMUM_VERSIONS.vaul) >= 0,
    `expected vaul >= ${MINIMUM_VERSIONS.vaul}, found ${pkg.version}`,
  );

  const { Drawer } = await import("vaul");
  for (const part of ["Root", "Trigger", "Portal", "Close", "Overlay", "Content", "Title", "Description"]) {
    assert.ok(Drawer[part], `missing Drawer.${part}`);
  }
});
