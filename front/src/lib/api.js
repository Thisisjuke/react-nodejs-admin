export const fetchData = async (url) => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/${url}`);
    return await res.json();
};

export const sendData = async (url, data = {}) => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return await res.json();
};
