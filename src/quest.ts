import { ItemStack } from "@minecraft/server";
import { Quest } from "@grindstone/quest-kit";

/**
 * 任务-开垦荒地
 */
export const WHEAT = new Quest(
  "wheat",
  { translate: "hiddendelight.quest.wheat.title" },
  { translate: "hiddendelight.quest.wheat.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("wheat"),
        name: {
          translate: "item.wheat.name",
        },
      },
    },
    award: {
      item: {
        name: {
          translate: "hiddendelight.item.amethyst_ingot",
        },
        itemStack: new ItemStack("gold_ingot", 2),
      },
    },
    iconPath: "textures/items/wheat",
  }
);

/**
 * 任务-炎炎夏日
 */
export const MELON_SLICE = new Quest(
  "melon_slice",
  { translate: "hiddendelight.quest.melon_slice.title" },
  { translate: "hiddendelight.quest.melon_slice.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("melon_slice"),
        name: {
          translate: "item.melon.name",
        },
      },
    },
    award: {
      item: {
        name: {
          translate: "hiddendelight.item.amethyst_ingot",
        },
        itemStack: new ItemStack("gold_ingot", 2),
      },
    },
    iconPath: "textures/items/melon",
  }
);

/**
 * 任务-重金属超标
 */
export const COPPER_APPLE = new Quest(
  "copper_apple",
  { translate: "hiddendelight.quest.copper_apple.title" },
  { translate: "hiddendelight.quest.copper_apple.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("hiddendelight:copper_apple"),
        name: {
          translate: "hiddendelight.item.copper_apple",
        },
      },
    },
    award: {
      item: {
        name: {
          translate: "hiddendelight.item.amethyst_ingot",
        },
        itemStack: new ItemStack("gold_ingot", 3),
      },
    },
    iconPath: "textures/items/copper_apple",
  }
);

/**
 * 任务-不太好吃
 */
export const ROTTEN_FLESH = new Quest(
  "rotten_flesh",
  { translate: "hiddendelight.quest.rotten_flesh.title" },
  { translate: "hiddendelight.quest.rotten_flesh.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("rotten_flesh"),
        name: {
          translate: "item.rotten_flesh.name",
        },
      },
    },
    award: {
      item: {
        name: {
          translate: "item.iron_ingot.name",
        },
        itemStack: new ItemStack("iron_ingot"),
      },
    },
    iconPath: "textures/items/rotten_flesh",
  }
);

/**
 * 任务-与蜂共舞
 */
export const HONEY_BOTTLE = new Quest(
  "honey_bottle",
  { translate: "hiddendelight.quest.honey_bottle.title" },
  { translate: "hiddendelight.quest.honey_bottle.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("honey_bottle"),
        name: {
          translate: "item.honey_bottle.name",
        },
      },
    },
    award: {
      item: {
        name: {
          translate: "item.iron_ingot.name",
        },
        itemStack: new ItemStack("iron_ingot", 2),
      },
    },
    iconPath: "textures/items/honey_bottle",
  }
);

/**
 * 任务-巧克力！
 */
export const CHOCOLATE = new Quest(
  "chocolate",
  { translate: "hiddendelight.quest.chocolate.title" },
  { translate: "hiddendelight.quest.chocolate.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("hiddendelight:chocolate"),
        name: {
          translate: "hiddendelight.item.chocolate",
        },
      },
    },
    award: {
      item: {
        name: {
          translate: "item.iron_ingot.name",
        },
        itemStack: new ItemStack("iron_ingot", 2),
      },
    },
    iconPath: "textures/items/chocolate",
  }
);

/**
 * 任务-轻飘飘的
 */
export const MARSHALLOW = new Quest(
  "marshallow",
  { translate: "hiddendelight.quest.marshallow.title" },
  { translate: "hiddendelight.quest.marshallow.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("hiddendelight:marshallow"),
        name: {
          translate: "hiddendelight.item.marshallow",
        },
      },
    },
    award: {
      item: {
        name: {
          translate: "item.iron_ingot.name",
        },
        itemStack: new ItemStack("iron_ingot", 2),
      },
    },
    iconPath: "textures/items/marshallow",
  }
);

/**
 * 任务-美味的甜品？
 */
export const COOKIE = new Quest(
  "cookie",
  { translate: "hiddendelight.quest.cookie.title" },
  { translate: "hiddendelight.quest.cookie.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("cookie"),
        name: {
          translate: "item.cookie.name",
        },
      },
    },
    award: {
      item: {
        name: {
          translate: "item.iron_ingot.name",
        },
        itemStack: new ItemStack("iron_ingot", 2),
      },
    },
    iconPath: "textures/items/cookie",
  }
);

/**
 * 任务-甜菜汤
 */
export const BEETROOT_SOUP = new Quest(
  "beetroot_soup",
  { translate: "hiddendelight.quest.beetroot_soup.title" },
  { translate: "hiddendelight.quest.beetroot_soup.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("beetroot_soup"),
        name: {
          translate: "item.beetroot_soup.name",
        },
      },
    },
    award: {
      item: {
        name: {
          translate: "item.iron_ingot.name",
        },
        itemStack: new ItemStack("iron_ingot", 2),
      },
    },
    iconPath: "textures/items/beetroot_soup",
  }
);

/**
 * 任务-来吃南瓜吧！
 */
export const PUMKIN_PIE = new Quest(
  "pumpkin_pie",
  { translate: "hiddendelight.quest.pumpkin_pie.title" },
  { translate: "hiddendelight.quest.pumpkin_pie.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("pumpkin_pie"),
        name: {
          translate: "item.pumpkin_pie.name",
        },
      },
    },
    award: {
      item: {
        name: {
          translate: "item.iron_ingot.name",
        },
        itemStack: new ItemStack("iron_ingot", 3),
      },
    },
    iconPath: "textures/items/pumpkin_pie",
  }
);

/**
 * 任务-良药甜口
 */
export const MILK_BUCKET = new Quest(
  "milk_bucket",
  { translate: "hiddendelight.quest.milk_bucket.title" },
  { translate: "hiddendelight.quest.milk_bucket.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("milk_bucket"),
        name: {
          translate: "item.milk.name",
        },
      },
    },
    award: {
      item: {
        name: {
          translate: "item.iron_ingot.name",
        },
        itemStack: new ItemStack("iron_ingot", 3),
      },
    },
    iconPath: "textures/items/bucket_milk",
  }
);

/**
 * 任务-祝你生日快乐
 */
export const CAKE = new Quest(
  "cake",
  { translate: "hiddendelight.quest.cake.title" },
  { translate: "hiddendelight.quest.cake.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("cake"),
        name: {
          translate: "item.cake.name",
        },
      },
    },
    award: {
      item: {
        name: {
          translate: "item.iron_ingot.name",
        },
        itemStack: new ItemStack("iron_ingot", 4),
      },
    },
    iconPath: "textures/items/cake",
  }
);

/**
 * 任务-麦田守望
 */
export const HAY_BLOCK = new Quest(
  "hay_block",
  { translate: "hiddendelight.quest.hay_block.title" },
  { translate: "hiddendelight.quest.hay_block.body" },
  {
    condition: {
      item: {
        itemStack: new ItemStack("hay_block", 45),
        name: {
          translate: "tile.hay_block.name",
        },
      },
    },
    award: {
      item: {
        name: {
          translate: "item.diamond.name",
        },
        itemStack: new ItemStack("diamond", 8),
      },
    },
    iconPath: "textures/ui/quest/hay_bale",
  }
);

/**
 * 任务-善恶之果
 */
export const ENCH_GOLDEN_APPLE = new Quest(
  "enchanted_golden_apple",
  { translate: "hiddendelight.quest.enchanted_golden_apple.title" },
  {
    rawtext: [
      { translate: "hiddendelight.quest.enchanted_golden_apple.body0" },
      { text: "\n\n" },
      { translate: "hiddendelight.quest.enchanted_golden_apple.body1" },
      { text: "\n" },
      { translate: "hiddendelight.quest.enchanted_golden_apple.body2" },
      { text: "\n" },
      { translate: "hiddendelight.quest.enchanted_golden_apple.body3" },
    ],
  },
  {
    condition: {
      item: {
        itemStack: new ItemStack("enchanted_golden_apple"),
        name: {
          translate: "item.appleEnchanted.name",
        },
      },
    },
    award: {
      item: {
        name: {
          translate: "item.diamond.name",
        },
        itemStack: new ItemStack("diamond", 7),
      },
    },
    iconPath: "textures/items/apple_golden",
    tips: {
      translate: "hiddendelight.quest.enchanted_golden_apple.tips",
    },
  }
);
