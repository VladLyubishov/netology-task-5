import {expect, test} from '@jest/globals';
import Cart from '../Cart.ts';

test("", () => {
    Cart.add({
        id: 100,
        name: 'Фильм',
        price: '150',
        year: '2023',
        country: 'Китай',
        slogan: 'Чана намбер ван',
        genre: 'Боевик',
        time: 100500
    })
})