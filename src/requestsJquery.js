import $ from 'jquery';
window.$ = $;

export const getUsers = () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return window.$.get(url)
        .then(console.log)
        .catch(console.error);
};

export const postUser = (data) => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return window.$.post(url, data)
        .then(console.log)
        .catch(console.error);
};

// postUser({ name: "Ilia", id: 11 }) --> {name: "Ilia", id: 11}
