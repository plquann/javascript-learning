export class BaseService {
    constructor() {

    }

    get(url) {
        return axios({
            url: url,
            method: 'GET',
        })
    }
    post(url, data) {
        return axios({
            url: url,
            method: 'POST',
            data: data,
        })
    }
    delete(url) {
        return axios({
            url: url,
            method: 'DELETE',
        })
    }
    put(url, data) {
        return axios({
            url: url,
            method: 'PUT',
            data: data,
        })
    }
}