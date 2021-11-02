import { IMAGE_PATH, BASE_PATH } from "./config";

export function postImage(data) {
    let date = new Date();
    let fileName = date.getDate().toString() + (date.getMonth() + 1).toString() + date.getFullYear().toString() + date.getHours().toString() + date.getMinutes().toString() + date.getSeconds().toString() + date.getMilliseconds().toString();
    const url = `${IMAGE_PATH}name=${fileName}.jpg`;
    const params = {
        method: "POST",
        body: data
    }

    return fetch(url, params)
    .then(response => {
        return response.json();
    })
    .then(result => {
        return result;
    })
    .catch(error => {
        return {
            status: 500,
            message: "Error al cargar la imagen."
        }
    });
}

export function getFaceId(data) {
    console.log("data de getFaceId: ", data);
    const url = `${BASE_PATH}/analisis/faceid`;
    const params = {
        method: "POST",
        body: {
            img: data
        }
    }

    return fetch(url, params)
    .then(response => {
        return response.json();
    })
    .then(result => {
        return result;
    })
    .catch(error => {
        return {
            status: 500,
            message: "Error al obtener los ID de imágenes."
        }
    });
}

export function getAnalysis(data) {
    console.log("data: ", data);
    const url = `${BASE_PATH}/analisis/verify`;
    const params = {
        method: "POST",
        body: JSON.stringify(data),
        /*headers: {
            "Content-Type": "application/json"
        }*/
    }

    return fetch(url, params)
    .then(response => {
        return response.json();
    })
    .then(result => {
        return result;
    })
    .catch(error => {
        return {
            status: 500,
            message: "Error al obtener el análisis."
        }
    });
}

export function sendEmail(data) {
    const url = `${BASE_PATH}/msg`;
    const params = {
        method: "POST",
        body: JSON.stringify(data)
    }

    return fetch(url, params)
    .then(response => {
        return response.json();
    })
    .then(result => {
        if (result.error) {
            return 200;
        } else {
            return {
                status: 500,
                message: "Error al cargar la imagen."
            }
        }
    })
    .catch(error => {
        return {
            status: 500,
            message: "Error al cargar la imagen."
        }
    });
}

export function test() {
    const url = `${BASE_PATH}`;
    const params = {
        method: "GET"
    }

    return fetch(url, params)
    .then(response => {
        return response.text();
    })
    .then(result => {
        return result;
    })
    .catch(error => {
        return {
            message: error
        }
    });
}