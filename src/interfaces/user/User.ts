import { UserName } from "./UserName";
import { UserImage } from "./UserImage";
import { UserAddress } from "./UserAddress";

export interface User {
    _id?: string
    name: UserName,
    phone: string,
    email: string,
    password: string,
    image: UserImage,
    address: UserAddress,
    isBusiness: boolean
}