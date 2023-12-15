import axios from "axios";

export const storesListDB = (stores) => {
    return new Promise((resolve, reject) => {
        try {
            const response = axios({
                method: "get",
                url: process.env.REACT_APP_SPRING_IP + "main/storesList",
                params: stores,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
}