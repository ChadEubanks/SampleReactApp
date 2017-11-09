// ==========================================================================
// Authors:   Chad Eubanks
// ==========================================================================

const defaultConfig = {
    // credentials: 'include',
    // mode: 'cors',
    headers: {
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Credentials': false,
        // 'Access-Control-Allow-Origin': '*'
    }
};

class Request {

    static fetchWrapper(url, config) {
        return fetch(url, config)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                } else {
                    return response.json();
                }
            })
            .then(result => result)
            .catch(error => error);
    }

    static read(url, config = Object.assign({}, { method: 'GET' }, defaultConfig)) {
        return Request.fetchWrapper(url, config);
    }

    static create(url, body, config = Object.assign({}, { method: 'POST' }, defaultConfig)) {
        return Request.fetchWrapper(url, Object.assign({}, { body }, config));
    }

    static update(url, body, config = Object.assign({}, { method: 'PUT' }, defaultConfig)) {
        return Request.fetchWrapper(url, Object.assign({}, { body }, config));
    }

    static delete(url, config = Object.assign({}, { method: 'DELETE' }, defaultConfig)) {
        return Request.fetchWrapper(url, config);
    }

}

export default Request;
