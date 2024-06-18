import axios from "axios";

//가게등록 , post 일때는 data, get일땐 param
export const storesRegisterDB = (formData) => {
    return new Promise((resolve, reject) => {
        try {
            const response = axios({
                method: "post",
                url: "/store/register",
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                data: formData,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
}
//params에 {} 있으면 쿼리문자열로 변환 ex)/store/info?userid=123
//없으면 그대로 추가 ex)/store/info?123
export const storesInfoDB = (userid) => {
    return new Promise((resolve, reject) => {
        try {
            const response = axios({
                method: "get",
                url: "/store/info",
                params: {
                    userid
                }
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
};

export const storesDetailDB = (data) => {
    return new Promise((resolve, reject) => {
        try {
            const response = axios({
                method: "get",
                url: "/store/detail",
                params: data,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
};


export const storesUpdateDB = (store, datas) => {
    return new Promise((resolve, reject) => {
        try {
            const response = axios({
                method: "post",
                url: "/store/update",
                data: store, datas
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
}

export const storeDeleteDB = (storeid) => {
    return new Promise((resolve, reject) => {
        try {
            const response = axios({
                method: "post",
                url: "/store/delete",
                data: {storeid}
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

}
