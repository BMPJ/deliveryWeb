import axios from "axios";

//가게등록 post 일때는 data, get일땐 param
export const storesRegisterDB = (store) => {
    return new Promise((resolve, reject) => {
        try {
            console.log(store)
            const response = axios({
                method: "post",
                url: "/store/register",
                data: store,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
}