import AbstractView from "./AbstractView.js"; 

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Stars")
    }

    // grab server-side data
    async getHtml() {
        return `
        <h1>Stars galore</h1>
            <p>Hey, these are some fancy stars!<p>
        `;
    }
}