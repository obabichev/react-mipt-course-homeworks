const post = async (path, body) => {
    const response = await fetch(path, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    const payload = await response.json();

    if (response.ok) {
        return payload
    } else {
        return Promise.reject(payload)
    }
};

export default {
    post
}