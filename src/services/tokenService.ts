import { jwtDecode, JwtPayload } from "jwt-decode";

export interface CustomJwtPayload extends JwtPayload {
    _id?: string;
}

export function decodeToken(token: string): CustomJwtPayload {
    const decodedToken = jwtDecode<CustomJwtPayload>(token);
    return decodedToken;
}