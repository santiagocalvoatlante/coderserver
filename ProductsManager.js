class ProductsManager {
    static #products = []
    create(data) {
        const user = {
            id: ProductsManager.#products.length === 0 ? 1 : ProductsManager.#products[ProductsManager.#products.length - 1].id + 1,
            title: data.title,
            photo: data.photo,
            category: data.category,
            price: data.price,
            stock: data.stock,
            role: 0,
        }
        ProductsManager.#products.push(user);
        console.log("producto creado");
    }
    read(){
        return ProductsManager.#products
    }
}
const gestorProductos = new ProductsManager()
gestorProductos.create({
    foto: 'javapic.jpg',
    email: "valenreale123@gmail.com",
    password: "hola123",
})
gestorProductos.create({
    foto: 'javaimg.jpg',
    email: "santiagocalvoatlante@gmail.com",
    password: "hola1234",
})

console.log(gestorUsuarios.read())
