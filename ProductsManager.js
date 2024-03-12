class ProductsManager {
    static #users = []
    create(data) {
        const user = {
            id: ProductsManager.#users.length === 0 ? 1 : ProductsManager.#users[UserManager.#users.length - 1].id + 1,
            foto: data.foto,
            email: data.email,
            password: data.password,
            role: 0
        }
        ProductsManager.#users.push(user);
        console.log("usuariocreado");
    }
    read(){
        return ProductsManager.#users
    }
}
const gestorUsuarios = new UserManager()
gestorUsuarios.create({
    foto: 'javapic.jpg',
    email: "valenreale123@gmail.com",
    password: "hola123",
})
gestorUsuarios.create({
    foto: 'javaimg.jpg',
    email: "santiagocalvoatlante@gmail.com",
    password: "hola1234",
})

console.log(gestorUsuarios.read())
