export const fetchData = async (url) => {
    const res = await fetch(`${process.env.BACKEND_SERVER_ENDPOINT}/${url}`);
    return await res.json();
};

export const sendData = async (url, data = {}) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_FRONT_BACKEND_SERVER_ENDPOINT}/${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return await res.json();
};