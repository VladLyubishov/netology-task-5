export default interface Buyable {
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly author?: string;
    readonly year?: number;
    readonly genre?: string;
    readonly time?: number;
    readonly pages?: number;
    readonly country?: string;
    readonly slogan?: string;
}