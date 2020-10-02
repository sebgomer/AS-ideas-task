import AbstractView from "./AbstractView.js"; 

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Home");
    }

    // grab server-side data
    async getHtml() {
        return `
        <h1>Home</h1>
            <p>
                Hello World!
            </p>
        `;
    }
}