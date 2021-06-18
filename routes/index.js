const {getItems, getItem, addItem, removeItem, updateItem} = require('../controllers')

//Item schema
const Item = {
  type: 'object',
  properties:{
      id:{type:'string'},
      name:{type:'string'},
  }
}

//options for get all items
const getItemsOpts = {
    schema: {
      response: {
        200: {
          type: 'array',
          items: Item, 
        },
      },
    },

    handler: getItems
}

//options for get single item
const getItemOpts = {
  schema: {
    response: {
      200: Item, 
    },
  },

  handler: getItem
}

//options for add item
const postItemOpts = {
  schema: {
    body:{
      type:'object',
      required:['name'],
      properties:{
        name:{type:'string'}
      }
    },
    response: {
      201: Item, 
    },
  },

  handler: addItem
}

//options for delete item
const removeItemOpts = {
  schema: {
    response: {
      200: {
        type:'object',
        properties:{
          message:{tyep:'string'}
        }
      }, 
    },
  },

  handler:removeItem
}

//options for update item
const updateItemOpts = {
  schema: {
    response: {
      200: Item
      }, 
  },

  handler: updateItem
}


function itemRoutes(fastify,options,done) { 
    //get all items
    fastify.get('/items', getItemsOpts)

    //get single item 
    fastify.get('/items/:id', getItemOpts)
   

    //Add item
    fastify.post('/items',postItemOpts)

    //Delete item
    fastify.delete('/items/:id',removeItemOpts)

    //Update item
    fastify.put('/items/:id',updateItemOpts)

    done()
}

module.exports = itemRoutes