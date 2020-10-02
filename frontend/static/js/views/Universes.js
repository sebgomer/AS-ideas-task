import AbstractView from "./AbstractView.js"; 

const getUniverses = async () => {
    const url = 'https://happy-stars.herokuapp.com/api/universe';
    fetch(url, {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    })
    .then(res => {
        return res.json()
    })
    .then(console.log(res.json()))
}

getUniverses(); 

const renderUniverses = universes => {

} 

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Home")
    }

    // grab server-side data
    async getHtml() {
        return `
        <h1>Mr. Universe, grant me your knowledge</h1>
            <p>
                Fugiat voluptate et nisi Lorem cillum anim sit do eiusmod occaecat irure do. Reprehenderit anim fugiat sint exercitation consequat. Sit anim laborum sit amet Lorem adipisicing ullamco duis. Anim in do magna ea pariatur et.
            </p>
            <p>
                <a href="/home" data-link>Get back to home</a>.
            </p>
        `;
    }
}