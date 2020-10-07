import AbstractView from "./AbstractView.js"; 

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Home");
    }

    // Grab server-side data
    async getHtml() {
        return `

        <div class="errorWrapper">
            <h1>Oh no!</h1>
                <h2>You have ventured too far out of space.</h2>
                <img src="/static/img/astronaut.gif"></img>
                    <a href="/" data-link>Click here to get back home</a>
        </div>
        `;
    }
}

