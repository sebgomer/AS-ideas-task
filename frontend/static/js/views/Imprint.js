import AbstractView from "./AbstractView.js"; 

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Imprint")
    }

    // grab server-side data
    async getHtml() {
        return `
        <h1>Welcome to the boring stuff</h1>
        `;
    }
}