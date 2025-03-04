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
import { copperFoodCounter, giveAncientRecipe, onEatPopsicle, registyRecipes } from "./utils";
import { registryLoot } from "./loot";

const HONEY_CANDY = new FoodItemBuilder("hiddendelight:honey_candy", [
  { effectType: "saturation", duration: 600 },
]);

const SYRUP = new FoodItemBuilder("hiddendelight:syrup", [
  { effectType: "fire_resistance", duration: 160 },
]);

const CHOCOLATE_PASTE = new FoodItemBuilder("hiddendelight:chocolate_paste", [
  {
    effectType: "fire_resistance",
    duration: 900,
  },
]);

const MILK_CHOCOLATE = new FoodItemBuilder("hiddendelight:milk_chocolate", [], (event) => {
  clearEffect(event.source, EffectGroups.all);
});

const SWEET_BERRY_CHOCOLATE = new FoodItemBuilder("hiddendelight:sweet_berry_chocolate", [
  { effectType: "instant_health", duration: 1, amplifier: 1 },
]);

const AMETHYST_CHOCOLATE = new FoodItemBuilder(
  "hiddendelight:amethyst_chocolate",
  [],
  (event) => {
    event.source.addLevels(2);
  }
);

const MARSHMALLOW = new FoodItemBuilder("hiddendelight:marshmallow", [], (event) => {
  withPercentChance({
    chance: 0.5,
    event: () => {
      event.source.addEffect("levitation", 100);
    },
  });
});

const SWEET_BERRY_MARSHMALLOW = new FoodItemBuilder(
  "hiddendelight:sweet_berry_marshmallow",
  [{ effectType: "instant_health", duration: 1 }]
);

const AMETHYST_MARSHMALLOW = new FoodItemBuilder(
  "hiddendelight:amethyst_marshmallow",
  [],
  (event) => {
    event.source.addLevels(3);
  }
);

const COPPER_APPLE = new FoodItemBuilder("hiddendelight:copper_apple", [
  { effectType: "absorption", duration: 600 },
  { effectType: "fire_resistance", duration: 200 },
]);

const ENCHANTED_COPPER_APPLE = new FoodItemBuilder(
  "hiddendelight:enchanted_copper_apple",
  [
    { effectType: "absorption", duration: 1200 },
    { effectType: "fire_resistance", duration: 1200 },
    { effectType: "speed", duration: 200 },
  ]
);

const CHOCOLATE_POPSICLE = new FoodItemBuilder(
  "hiddendelight:chocolate_popsicle",
  [],
  (event) => {
    onEatPopsicle(event);
  }
);

const AMETHYST_POPSICLE = new FoodItemBuilder(
  "hiddendelight:amethyst_popsicle",
  [],
  (event) => {
    onEatPopsicle(event);
  }
);

const SWEET_BERRY_POPSICLE = new FoodItemBuilder(
  "hiddendelight:sweet_berry_popsicle",
  [],
  (event) => {
    onEatPopsicle(event);
  }
);

const DRY_ROT_MEAT = new FoodItemBuilder("hiddendelight:dry_rot_meat", [
  { effectType: "poison", duration: 15 },
]);

const BAKED_DRY_ROT_MEAT = new FoodItemBuilder("hiddendelight:baked_dry_rot_meat", [], (event) => {
  withPercentChance({
    chance: 0.05,
    event: () => {
      event.source.addEffect("poison", 5);
    },
  });
});

const BLAZE_LARD_ROTTEN_FLESS = new FoodItemBuilder("hiddendelight:baked_dry_rot_meat", [], (event) => {
  withPercentChance({
    chance: 0.25,
    event: () => {
      event.source.addEffect("poison", 5);
    },
  });
});

const BLAZE_LARD_ROTTEN_FLESS = new FoodItemBuilder("hiddendelight:dry_rot_meatblaze_lard_rotten_flesh", [
  { effectType: "fire_resistance", duration: 15 },
]);

const SPICY_CHICKEN_WRAP = new FoodItemBuilder("hiddendelight:spicy_chicken_wrap", [
  { effectType: "fire_resistance", duration: 15 },
]);

QuestManager.setNameSpace("hy-q");
const QUEST_BOOK = new QuestBookBuilder(
  "hiddendelight:ancient_recipe",
  { translate: "hiddendelight.quest.interlude_food.title" },
  { translate: "hiddendelight.quest.interlude.body" },
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
CHOCOLATE_POPSICLE.build();
SWEET_BERRY_POPSICLE.build();
AMETHYST_POPSICLE.build();
registyRecipes();
registryLoot();
giveAncientRecipe();
copperFoodCounter();