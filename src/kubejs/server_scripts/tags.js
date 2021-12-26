// priority: 0


onEvent('item.tags', event => {

  event.get('c:millable_grain').add('croptopia:barley')
  event.get('c:millable_grain').add('croptopia:oat')
  event.get('c:millable_grain').add('minecraft:wheat')

});