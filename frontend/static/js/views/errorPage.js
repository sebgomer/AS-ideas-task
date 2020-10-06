import AbstractView from "./AbstractView.js"; 

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Home");
    }

    // grab server-side data
    async getHtml() {
        return `
        <h1>Oh no!</h1>
        <h2>You have ventured too far out of space.<h2>
            <p>
                <a href="/" data-link>Click here to get back to the space observatory.</a>
            </p>
        `;
    }
}