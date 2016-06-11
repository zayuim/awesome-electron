const test = require('tape')
const awesome = require('./')()
var categories = ['apps', 'boilerplates', 'tools', 'components']

test('awesome', function (t) {
  t.ok(awesome.length, 'is an array')

  awesome.forEach(item => {
    t.ok(item.name.length, `${item.name} has a name`)
    t.ok(item.href.length, `${item.name} has an href`)
  })

  categories.forEach(category => {
    var itemsInCategory = awesome.filter(item => item.category === category)
    t.ok(itemsInCategory.length, `${category} category is not empty`)

    itemsInCategory.forEach(item => {
      t.ok(item.description, `${item.name} has a description`)
    })

    if (category === 'tools') {
      itemsInCategory.forEach(tool => {
        t.ok(tool.subcategory, `tool '${tool.name}' has a subcategory`)
      })
    }
  })

  t.end()
})
