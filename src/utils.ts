import { giveItem } from "@grindstone/utils";
import {
  ItemCompleteUseAfterEvent,
  ItemStack,
  system,
  world,
} from "@minecraft/server";

/**
 * 食用冰棍时的的事件
 * @param event 事件数据
 */
export function onEatPopsicle(event: ItemCompleteUseAfterEvent) {
  event.source.addTag("hy:immune_desert_debuff");
  event.source.onScreenDisplay.setActionBar({
    translate: "hiddendelight.message.immune_desert_debuff",
  });
  system.runTimeout(() => {
    if (event.source.isValid())
      event.source.removeTag("hy:immune_desert_debuff");
  });
}

/**
 * 给予玩家古遗食谱
 */
export function giveAncientRecipe() {
  world.afterEvents.playerSpawn.subscribe((event) => {
    if (!event.player.hasTag("hy.get_ancient_recipe")) {
      event.player.addTag("hy.get_ancient_recipe");
      giveItem(event.player, new ItemStack("hiddendelight:ancient_recipe"));
    }
  });
}

/**
 * 铜食物食用次数计数器
 */
export function copperFoodCounter() {
  world.afterEvents.itemCompleteUse.subscribe((event) => {
    const [PLAYER, ITEM] = [event.source, event.itemStack];
    /**
     * @tag `hiddendelight:copper_foods` 标记一个物品为铜食物，并统计其食用次数
     * 铜食物食用12次后会中毒
     */
    if (ITEM.hasTag("hiddendelight:copper_foods")) {
      let eatFrequency = PLAYER.getDynamicProperty(
        "hiddendelight:copper_foods"
      );
      if (!eatFrequency) {
        PLAYER.setDynamicProperty("hiddendelight:copper_foods", 0);
      }
      if (typeof eatFrequency !== "number") return;
      PLAYER.setDynamicProperty("hiddendelight:copper_foods", eatFrequency++);
      if (eatFrequency > 12) {
        PLAYER.addEffect("poison", 100);
        PLAYER.setDynamicProperty("hiddendelight:copper_foods", 0);
      }
      system.runTimeout(() => {
        if (PLAYER.isValid())
          PLAYER.setDynamicProperty("hiddendelight:copper_foods", 0);
      }, 600);
    }
  });
}

/**
 * 注册农夫乐事配方
 */
export function registyRecipes() {
  world.afterEvents.worldInitialize.subscribe((event) => {
    world
      .getDimension("overworld")
      .runCommandAsync("function hiddendelight/registiesRecipes");
  });
}
