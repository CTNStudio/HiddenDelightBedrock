import { loot } from "@grindstone/utils";
import { world } from "@minecraft/server";

/**
 * 注册自定义战利品表
 */
export function registryLoot() {
  world.afterEvents.entityDie.subscribe((event) => {
    if (event.deadEntity.typeId === "minecraft:camel") {
      const camel = event.deadEntity;
      loot(camel.dimension, camel.location, "entity/camel_meat");
    }
  });
}
