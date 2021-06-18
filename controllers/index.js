const {v4:uuidv4} = require('uuid')
let items = require('../Items')

const getItems = (req,res)=>{
    res.send(items)
}

const getItem = async(req,res)=>{
    const {id} = req.params
    
    const item = items.find(x=>(x.id == id))

    await res.send(item)
}

const addItem = async(req,res)=>{
    const {name} = req.body

    const newItem = {
        id:uuidv4(),
        name:name
    }
    
    items = [...items, newItem]

    await res.code(201).send(newItem)
}

const removeItem = async(req,res)=>{
    const {id} = req.params
    
    items = items.filter(x=>x.id != id)

    await res.send({
        'message': `item ${id} was deleted`
    })
}

const updateItem = async(req,res)=>{
    const {id} = req.params
    const {name} = req.body
    
    items = items.map(x=>x.id === Number(id) ?{
        id:id,
        name:name
    }:x)

    item = items.find(x=>x.id == id)

    await res.send(item)
}

module.exports = {
    getItems,
    getItem,
    addItem,
    removeItem,
    updateItem
}