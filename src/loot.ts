import {
    loot
} from "@grindstone/utils";
import {
    world
} from "@minecraft/server";

/**
 * 注册自定义战利品表
 */
export function registryLoot() {
    world.afterEvents.entityDie.subscribe((event) => {
        const deadEntity = event.deadEntity;

        // 骆驼死亡时生成骆驼肉
        if (deadEntity.typeId === "minecraft:camel") {
            loot(deadEntity.dimension, deadEntity.location, "entity/camel_meat");
        }

        // 木乃伊死亡时生成干腐之肉
        if (deadEntity.typeId === "hy:mummy") {
            loot(deadEntity.dimension, deadEntity.location, "entity/dry_rot_meat");
        }

        // 猪或猪灵死亡时25%概率生成肥肉
        if (
            (deadEntity.typeId === "minecraft:pig" || deadEntity.typeId === "minecraft:piglin") &&
            Math.random() < 0.25
        ) {
            loot(deadEntity.dimension, deadEntity.location, "entity/fat_meat");
        }
    });
}