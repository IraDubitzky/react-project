import axios from "axios";
import { Card } from "../interfaces/card/Card";

const API: string = import.meta.env.VITE_CARDS_API;

//get all cards
export function getAllCards() {
    return axios.get(API);
    console.log(API);

}
//get card by id
export function getCardById(id: string) {
    return axios.get(`${API}/${id}`);
}

//post new card
export function postNewCard(normalizedCard: Card) {
    return axios.post(API, normalizedCard, {
        headers: {
            "x-auth-token": localStorage.getItem("token")
        }
    })
}

//get my cards
export function getMyCards() {
    return axios.get(`${API}/my-cards`, {
        headers: {
            "x-auth-token": localStorage.getItem("token")
        }
    });
}

//delete card
export function deleteCard(id: string) {
    return axios.delete(`${API}/${id}`, {
        headers: {
            "x-auth-token": localStorage.getItem("token")
        }
    });
}

//edit card
export function updateCard(id: string, updatedCard: any) {
    return axios.put(`${API}/${id}`, updatedCard, {
        headers: {
            "x-auth-token": localStorage.getItem("token")
        }
    });
}
