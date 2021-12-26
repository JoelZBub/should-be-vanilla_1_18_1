// priority: 0

onEvent('recipes', event => {

    // --------- FLOUR Croptopia to MechanicalTech --------- //
    event.remove({ output: "croptopia:flour" });
    event.replaceInput({}, "croptopia:flour", "mechanicaltech:flour");

    // --------- WATER BOTTLES Minecraft to Croptopia --------- //
    event.remove({ output: "minecraft:water_bottle" });
    event.replaceInput({}, "minecraft:water_bottle", "croptopia:water_bottle");

});