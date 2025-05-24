let productos = [
    {id:1, nombre:"monitor", precio:48000},
    {id:2, nombre:"gabinete", precio:5000}
]

const getProducts = (req, res)=>{
    res.json({data: productos
        ,status: 200
        ,message: 'producto obtenido de manera axitosa'
    })
}

//funcion que obtiene un producto a traves de su ID
const getProductById = (req, res) => {
    const producto = productos.find(item => item.id === parseInt(req.params.id))
    console.log(producto)
    if (!producto) return res.json({ status: 400, message: 'producto no encontrado' })
        res.json({ data: producto, status: 200, message: 'producto encontrado' })
}

const createProduct = (req, res)=>{
    const nuevoProducto = req.body
    nuevoProducto.id = productos.length + 1
    productos.push(nuevoProducto)
    res.json({ status:201, data: nuevoProducto, message: 'producto creado exitosamente' })
}

const updateProduct = (req, res) =>{
    const producto = productos.find(item => item.id === parseInt(req.params.id))
    if (!producto) return res.json({ status: 400, message: 'producto no encontrado' })
    const {nombre, precio} = req.body
    producto.nombre = nombre || producto.nombre
    producto.precio = precio || producto.precio

    res.json({ status: 201, message: 'producto editado exitosamente'})

}

const deleteProduct = (req, res) =>{
    let producto = productos.find(item => item.id === parseInt(req.params.id))
    console.log(producto);

    if (!producto) return res.json({ status: 404, message: 'producto no encontrado' })
    productos = productos.filter(item => item.id !== producto.id)

    res.json({ status: 201, message: 'producto eliminado correctamente'})
}

module.exports = {
    getProductById,
    getProducts,
    deleteProduct,
    createProduct,
    updateProduct
}
