import { Image } from "./Image";
import { Address } from "./Address";

export interface Card {
    _id?: string,
    title: string,
    subtitle: string,
    description: string,
    phone: string,
    email: string,
    web: string,
    image: Image,
    address: Address,
    bizNumber?: number,
    likes?: string[],
    user_id?: string
}