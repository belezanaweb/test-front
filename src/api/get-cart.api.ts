import axios from "axios";
import { ICartModel } from "../types/cart.types";

export async function getCart(): Promise<ICartModel> {
    return new Promise<ICartModel>((resolve, reject) => {
        axios.get<ICartModel>('https://run.mocky.io/v3/d6e9a93f-9741-4494-b81e-637a8e9b8ddd')
            .then((response) => {
                resolve(response.data);
            })
            .catch((err) => {
                reject(err);
            });
    })
}