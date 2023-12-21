import axios from "axios";

//판매자 db조회
export const manageDB = (user) => {
    return new Promise((resolve, reject) => {
        try {
            const response = axios({
                method: "get",
                url: "/main",
                params: user,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
}