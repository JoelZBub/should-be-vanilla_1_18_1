// priority: 0

console.info('Registering Custom Items')

// Texture must be placed in kubejs/assets/kubejs/textures/item/test_item.png
// Toy Axe Item
onEvent('item.registry', event => {

	event.create('toy_axe', item => {
		item.texture('kubejs:item/toy_axe')
			.group('tools')
			.type('pickaxe')
			.tier('toy')
			.tooltip('Cute Toy. Make a real tool from rocks.')
			.displayName('Toy Axe')
	})

	event.create('toy_hoe', item => {
		item.texture('kubejs:item/toy_hoe')
			.group('tools')
			.type('hoe')
			.tier('toy')
			.tooltip('Cute Toy. Make a real tool from rocks.')
			.displayName('Toy Hoe')
	})

	event.create('toy_pickaxe', item => {
		item.texture('kubejs:item/toy_pickaxe')
			.group('tools')
			.type('pickaxe')
			.tier('toy')
			.tooltip('Cute Toy. Make a real tool from rocks.')
			.displayName('Toy Pickaxe')
	})
		
	event.create('toy_shovel', item => {
		item.texture('kubejs:item/toy_shovel')
			.group('tools')
			.type('shovel')
			.tier('toy')
			.tooltip('Cute Toy. Make a real tool from rocks.')
			.displayName('Toy Shovel')
	})

	event.create('toy_sword', item => {
	  	item.texture('kubejs:item/toy_sword')
	  		.group('combat')
	  		.type('pickaxe')
	  		.tier('toy')
	  		.tooltip('Cute Toy. Make a real weapon from rocks.')
	  		.displayName('Toy Sword')
	})	
})
