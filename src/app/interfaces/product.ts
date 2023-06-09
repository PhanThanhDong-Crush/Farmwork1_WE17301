export interface IProduct
{
    _id?: number,
    name: string,
    image?: string,
    price?: number,
    quantity?: number,
    description?: string,
    dateAdded?: string,
    categoryId?: string|number,
    cateName?:string
}