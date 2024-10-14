import Buyable from "./Buyable";

export default class Cart{
    private _items: Buyable[] = [];

    add(item: Buyable): void{
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]
    }

    getPrice(): number{
        return this._items.reduce((initial, item) => initial + item.price, 0);
    }

    priceWithDiscount(discount: number): number{
        const sum = this._items.reduce((initial, item) => initial + item.price, 0);
        return sum - (sum * (discount / 100));
    }

    removeFromCart(id: number): void{ 
        this._items = this._items.filter(item => item.id !== id);
    }
}