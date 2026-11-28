import test from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import * as icons from "lucide-react";

const require = createRequire(import.meta.url);

function installedVersion(name) {
  // Walk up from the resolved entry point until the package's own package.json
  // is found. This works whether or not the package restricts deep imports.
  let dir = path.dirname(require.resolve(name));
  for (;;) {
    const candidate = path.join(dir, "package.json");
    if (existsSync(candidate)) {
      const pkg = JSON.parse(readFileSync(candidate, "utf8"));
      if (pkg.name === name) return pkg.version;
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

// Icons introduced by lucide-react 1.83.0. None of these exist in 1.81.0, so
// this test fails until the dependency is upgraded.
const iconsAddedIn183 = [
  "MailSend",
  "StairsArrowDownLeft",
  "StairsArrowUpRight",
  "SquareTextAlignBottomCenter",
  "SquareTextAlignBottomLeft",
  "SquareTextAlignBottomRight",
  "ChevronsDownUpOffset",
  "ChevronsRightLeftOffset",
  "BoxingGlove",
  "Balcony",
];

// Icons from earlier releases whose artwork was refreshed in 1.83.0. They must
// keep the same canonical names after the upgrade.
const refreshedIcons = ["ListClock", "PartyPopper"];

// Canonical names the app imports directly. They must keep working after the
// upgrade (no alias or shape change may remove them).
const iconsUsedByApp = [
  "ArrowLeft",
  "ArrowRight",
  "Award",
  "Beaker",
  "Building",
  "Calendar",
  "Check",
  "ChevronDown",
  "ChevronLeft",
  "ChevronRight",
  "ChevronUp",
  "Circle",
  "CircleCheck",
  "Clock",
  "Construction",
  "Dot",
  "Download",
  "Ellipsis",
  "Factory",
  "FileCheck",
  "FolderOpen",
  "GraduationCap",
  "GripVertical",
  "House",
  "Landmark",
  "Layers",
  "Mail",
  "MapPin",
  "Menu",
  "MessageCircle",
  "MessageSquare",
  "Microscope",
  "Newspaper",
  "PanelLeft",
  "Phone",
  "Search",
  "Send",
  "Shield",
  "Target",
  "TrendingUp",
  "User",
  "Users",
  "Wrench",
  "X",
  "Zap",
];

test("lucide-react is 1.83+ and exposes the new icons without dropping app icons", () => {
  const version = installedVersion("lucide-react");
  assert.ok(
    compareVersions(version, "1.83.0") >= 0,
    `expected lucide-react >= 1.83.0, found ${version}`,
  );

  for (const name of [...iconsAddedIn183, ...refreshedIcons, ...iconsUsedByApp]) {
    assert.ok(name in icons, `missing lucide-react export: ${name}`);
  }
});
