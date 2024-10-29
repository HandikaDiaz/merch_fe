export interface ProductEntity {
    id: number
    productName: string
    productDesc: string
    price: number
    Qty: number
    image: ProfileProductEntity
}

export interface ProfileProductEntity {
    id: number;
    url: string;
}