import React from "react";
import { importMDX } from "mdx.macro"
// import {voidDungeon} from "./voidDungeon";

const voidDungeon = React.lazy(() => import("./voidDungeon.js"))

export const projectLongForms = {
    "void-dungeon": voidDungeon
}