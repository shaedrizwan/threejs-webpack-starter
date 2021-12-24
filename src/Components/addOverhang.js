import { generateBox } from "./generateBox";

export function addOverhang({x, z, width, depth,boxHeight,stack,overhangs,scene,world}) {
    const y = boxHeight * (stack.length - 1);
    const overhang = generateBox(x, y, z, width, depth, true,scene,world,stack);
    // scene.add(overhang.threejs)
    // world.addBody(overhang.cannonjs)

    overhangs.push(overhang);

    return overhangs
  }