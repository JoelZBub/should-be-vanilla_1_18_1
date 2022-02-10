// priority: 0
// ---------  --------- //

onEvent('recipes', event => {
  // --------- REPLACE WOOD TOOLS AND WEAPONS BY OUTPUT --------- //
  event.replaceOutput({}, 'minecraft:wooden_axe', 'kubejs:toy_axe')
  event.replaceOutput({}, 'minecraft:wooden_hoe', 'kubejs:toy_hoe')
  event.replaceOutput({}, 'minecraft:wooden_pickaxe', 'kubejs:toy_pickaxe')
  event.replaceOutput({}, 'minecraft:wooden_shovel', 'kubejs:toy_shovel')
  event.replaceOutput({}, 'minecraft:wooden_sword', 'kubejs:toy_sword')
// --------- REMOVE WOOD TOOLS AND WEAPONS BY OUTPUT --------- //
  event.remove({output: 'vanilla-hammers:wooden_hammer'})
  event.remove({output: 'vanillaexcavators:wooden_excavator'})

  // --------- REMOVE MISCELLANEOUS BY OUTPUT --------- //
  //event.remove({output: 'allure:lit_redstone_lamp'})
  //event.remove({output: 'betterend:crystalline_sulfur'})
  event.remove({output: 'croptopia:guide'})

  // --------- REMOVE MISCELLANEOUS BY RECIPE ID --------- //
  //event.remove({ id: "minecraft:bone_meal"})
  //event.remove({ id: "minecraft:bone_meal_from_bone_block"})
  event.remove({ id: "minecraft:white_dye"})

  // --------- ADD MISCELLANEOUS --------- //
  //event.shapeless(item.of('minecraft:slime_ball', 9), ['minecraft:honey_bottle', 'mechanicaltech:starch', 'croptopia:salt', 'croptopia:water_bottle', 'minecraft:green_dye'])
})
