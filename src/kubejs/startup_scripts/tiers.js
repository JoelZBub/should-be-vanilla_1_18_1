// priority: 0

// Tool Tiers
// Add Toy Tier with garbage stats for toy tools made of wood
onEvent('item.registry.tool_tiers', event => {
  event.add('toy', tier => {
    tier.uses = 2
    tier.speed = 0.0
    tier.attackDamageBonus = 0.0
    tier.level = 0
    tier.enchantmentValue = 1
    tier.repairIngredient = '#minecraft:planks'
  })
})