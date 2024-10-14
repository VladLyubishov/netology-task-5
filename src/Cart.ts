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
        let sum = this._items.reduce((initial, item) => initial + item.price, 0);
        return sum;
    }

    priceWithDiscount(discount: number): number{
        let sum = this._items.reduce((initial, item) => initial + item.price, 0);
        return sum - (sum * (discount / 100));
    }

    removeFromCart(id: number): void{ 
        const index = this._items.findIndex(item => item.id === id);
        if (index !== -1) {
            this._items.splice(index, 1);
        }
    }
}