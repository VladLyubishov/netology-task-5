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
        this._items.forEach((cart, index) => {
            if (cart.id == id){
                delete this._items[index];
            }  
        })
    }
}