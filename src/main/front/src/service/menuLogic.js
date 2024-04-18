import axios from "axios";

export const menuRegisterDB = (menu) => {
    return new Promise((resolve, reject) => {
        try {
            const response = axios({
                method: "post",
                url: "/store/menu/register",
                data: menu
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
}

export const menuInfoDB = (storeid) => {
    return new Promise((resolve, reject) => {
        try {
            const response = axios({
                method: "get",
                url: "/store/menu/info",
                params: {
                    storeid
                }
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
};
export const menuUpdateDB = (newMenu) => {
    return new Promise((resolve, reject) => {
        try {
            const response = axios({
                method: "post",
                url: "/store/menu/update",
                data: newMenu
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
}

export const imgUpdateDB = (formData) => {
    return new Promise((resolve, reject) => {
        try {
            const response = axios({
                method: "post",
                url: "/store/menu/imgUpdate",
                data: formData
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
}

export const menuDeleteDB = (menuid) => {
    return new Promise((resolve, reject) => {
        try {
            const response = axios({
                method: "post",
                url: "/store/menu/delete",
                data: {
                    menuid
                }
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
}
