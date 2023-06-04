import { request } from '/request.js';
console.log(window.location.origin)
request.get("http://localhost:3000").then(e => {
        console.log(e)
    })
    .catch(err => console.log(err))