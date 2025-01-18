import { ItemStack, world } from "@minecraft/server";
import { FoodItemBuilder } from "@grindstone/item-kit";
import {
  clearEffect,
  EffectGroups,
  giveItem,
  withPercentChance,
} from "@grindstone/utils";
import { QuestBookBuilder, QuestManager } from "@grindstone/quest-kit";
import * as quests from "./quest";

const HONEY_CANDY = new FoodItemBuilder("hy:honey_candy", [
  { effectType: "saturation", duration: 600 },
]);

const SYRUP = new FoodItemBuilder("hy:syrup", [
  { effectType: "fire_resistance", duration: 160 },
]);

const CHOCOLATE_PASTE = new FoodItemBuilder("hy:chocolate_paste", [
  {
    effectType: "fire_resistance",
    duration: 900,
  },
]);

const MILK_CHOCOLATE = new FoodItemBuilder("hy:milk_chocolate", [], (event) => {
  clearEffect(event.source, EffectGroups.all);
});

const SWEET_BERRY_CHOCOLATE = new FoodItemBuilder("hy:sweet_berry_chocolate", [
  { effectType: "instant_health", duration: 1, amplifier: 1 },
]);

const AMETHYST_CHOCOLATE = new FoodItemBuilder(
  "hy:amethyst_chocolate",
  [],
  (event) => {
    event.source.addLevels(2);
  }
);

const MARSHMALLOW = new FoodItemBuilder("hy:marshmallow", [], (event) => {
  withPercentChance({
    chance: 0.5,
    event: () => {
      event.source.addEffect("levitation", 100);
    },
  });
});

const SWEET_BERRY_MARSHMALLOW = new FoodItemBuilder(
  "hy:sweet_berry_marshmallow",
  [{ effectType: "instant_health", duration: 1 }]
);

const AMETHYST_MARSHMALLOW = new FoodItemBuilder(
  "hy:amethyst_marshmallow",
  [],
  (event) => {
    event.source.addLevels(3);
  }
);

const COPPER_APPLE = new FoodItemBuilder("hy:copper_apple", [
  { effectType: "absorption", duration: 600 },
  { effectType: "fire_resistance", duration: 200 },
]);

const ENCHANTED_COPPER_APPLE = new FoodItemBuilder(
  "hy:enchanted_copper_apple",
  [
    { effectType: "absorption", duration: 1200 },
    { effectType: "fire_resistance", duration: 1200 },
    { effectType: "speed", duration: 200 },
  ]
);

QuestManager.setNameSpace("hy-q");
const QUEST_BOOK = new QuestBookBuilder(
  "hy:ancient_recipe",
  { translate: "hy.quest.interlude_food.title" },
  { translate: "hy.quest.interlude.body" },
  [
    quests.WHEAT,
    quests.MELON_SLICE,
    quests.COPPER_APPLE,
    quests.ROTTEN_FLESH,
    quests.HONEY_BOTTLE,
    quests.CHOCOLATE,
    quests.COOKIE,
    quests.PUMKIN_PIE,
    quests.MARSHALLOW,
    quests.MILK_BUCKET,
    quests.CAKE,
    quests.HAY_BLOCK,
    quests.ENCH_GOLDEN_APPLE,
  ]
);

world.afterEvents.playerSpawn.subscribe((event) => {
  if (!event.player.hasTag("hy.get_ancient_recipe")) {
    event.player.addTag("hy.get_ancient_recipe");
    giveItem(event.player, new ItemStack("hy:ancient_recipe"));
  }
});
world.afterEvents.itemCompleteUse.subscribe((event) => {
  const [PLAYER, ITEM] = [event.source, event.itemStack];
  /**
   * @tag `hy:copper_foods` 标记一个物品为铜食物，并统计其食用次数
   * 铜食物食用12次后会中毒
   */
  if (ITEM.hasTag("hy:copper_foods")) {
    let eatFrequency = PLAYER.getDynamicProperty("hy:copper_foods") as number;
    if (!eatFrequency) PLAYER.setDynamicProperty("hy:copper_foods", 0);
    PLAYER.setDynamicProperty("hy:copper_foods", eatFrequency++);
    if (eatFrequency > 12) {
      PLAYER.addEffect("poison", 100);
      PLAYER.setDynamicProperty("hy:copper_foods", 0);
    }
  }
});

HONEY_CANDY.build();
SYRUP.build();
CHOCOLATE_PASTE.build();
MILK_CHOCOLATE.build();
SWEET_BERRY_CHOCOLATE.build();
AMETHYST_CHOCOLATE.build();
MARSHMALLOW.build();
SWEET_BERRY_MARSHMALLOW.build();
AMETHYST_MARSHMALLOW.build();
COPPER_APPLE.build();
ENCHANTED_COPPER_APPLE.build();
QUEST_BOOK.build();
