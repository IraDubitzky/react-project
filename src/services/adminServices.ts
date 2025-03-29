import axios from "axios";
import { User } from "../interfaces/user/User";

//crud
const API: string = import.meta.env.VITE_USERS_API;

//get all users
export function getAllUsers() {
    return axios.get(API);
}

//Get specific user by ID
export function getUserById(id: string) {
    return axios.get(`${API}/${id}`, {
        headers: {
            "x-auth-token": localStorage.getItem("token")
        }
    })
}

// Add new user
export function registerUser(normalizedUser: User) {
    return axios.post(API, normalizedUser);
}

// Update user by ID
export function updateUser(id: string, updatedCustomer: User) {
    return axios.put(`${API}/${id}`, updatedCustomer, {
        headers: {
            "x-auth-token": localStorage.getItem("token")
        }
    })
}

//delete user by id
export function deleteUser(id: string) {
    return axios.delete(`${API}/${id}`, {
        headers: {
            "x-auth-token": localStorage.getItem("token")
        }
    });
}




