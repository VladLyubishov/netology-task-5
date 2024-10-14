import Cart from '../../Cart';

test("add new cart", () => {
    let cart = new Cart();
    cart.add({
        id: 100,
        name: 'Фильм',
        price: 150,
        author: '',
        year: 2023,
        genre: 'Боевик',
        time: 100500,
        pages: 0,
        country: 'Китай',
        slogan: 'Чана намбер ван'
    })
    let items = cart.items
    expect(items[0]['id']).toBe(100)
})

test("get price", () => {
    let cart = new Cart();
    cart.add({
        id: 100,
        name: 'Фильм',
        price: 150,
        author: '',
        year: 2023,
        genre: 'Боевик',
        time: 100500,
        pages: 0,
        country: 'Китай',
        slogan: 'Чана намбер ван'
    })
    cart.add({
        id: 101,
        name: 'Фильм2',
        price: 150,
        author: '',
        year: 2024,
        genre: 'Боевик',
        time: 100500,
        pages: 0,
        country: 'Китай',
        slogan: 'Чана намбер ту'
    })
    let price = cart.getPrice();
    
    expect(price).toBe(300)
})

test("get price with discount", () => {
    let cart = new Cart();
    cart.add({
        id: 100,
        name: 'Фильм',
        price: 150,
        author: '',
        year: 2023,
        genre: 'Боевик',
        time: 100500,
        pages: 0,
        country: 'Китай',
        slogan: 'Чана намбер ван'
    })
    cart.add({
        id: 101,
        name: 'Фильм2',
        price: 150,
        author: '',
        year: 2024,
        genre: 'Боевик',
        time: 100500,
        pages: 0,
        country: 'Китай',
        slogan: 'Чана намбер ту'
    })
    let price = cart.priceWithDiscount(50);

    expect(price).toBe(150)
})

test("remove from cart", () => {
    let cart = new Cart();
    cart.add({
        id: 100,
        name: 'Фильм',
        price: 150,
        author: '',
        year: 2023,
        genre: 'Боевик',
        time: 100500,
        pages: 0,
        country: 'Китай',
        slogan: 'Чана намбер ван'
    })
    cart.add({
        id: 101,
        name: 'Фильм2',
        price: 150,
        author: '',
        year: 2024,
        genre: 'Боевик',
        time: 100500,
        pages: 0,
        country: 'Китай',
        slogan: 'Чана намбер ту'
    })
    cart.removeFromCart(101);
    let items = cart.items
    expect(items.length).toBe(1)
})