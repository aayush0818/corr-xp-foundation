import test from "node:test";
import assert from "node:assert/strict";
import * as icons from "lucide-react";

// Icons introduced by lucide-react 1.74.0. These do not exist in 0.462.0,
// so this test fails until the dependency is upgraded.
const iconsAddedIn174 = [
  "NigerianNaira",
  "StrokeWidth",
  "Doghouse",
  "Cinema",
  "BotCheck",
  "BotMinus",
  "BotPlus",
  "BotX",
  "HandTruck",
  "CircleBounce",
  "WarehouseWaves",
  "CirclePersonArmsSpread",
  "HouseArrowLeft",
  "HouseArrowRight",
];

// Canonical names the app imports after dropping the aliases that lucide-react
// removed (Building2, CheckCircle2, Home and MoreHorizontal).
const iconsUsedByApp = ["Building", "CircleCheck", "House", "Ellipsis"];

test("lucide-react exposes the icons required by the app", () => {
  for (const name of [...iconsUsedByApp, ...iconsAddedIn174]) {
    assert.ok(name in icons, `missing lucide-react export: ${name}`);
  }
});
