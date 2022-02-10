// priority: 0

onEvent('recipes', event => {

    // --------- WATER BOTTLES Minecraft to Croptopia --------- //
    event.remove({ output: "minecraft:water_bottle" });
    event.replaceInput({}, "minecraft:water_bottle", "croptopia:water_bottle");

});