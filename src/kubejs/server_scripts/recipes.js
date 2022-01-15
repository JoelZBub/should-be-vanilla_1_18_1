// priority: 0
// ---------  --------- //

onEvent('recipes', event => {
  // --------- REMOVE WOOD TOOLS AND WEAPONS BY OUTPUT --------- //
  event.remove({output: 'minecraft:wooden_axe'})
  event.remove({output: 'minecraft:wooden_hoe'})
  event.remove({output: 'minecraft:wooden_pickaxe'})
  event.remove({output: 'minecraft:wooden_shovel'})
  event.remove({output: 'minecraft:wooden_sword'})
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
