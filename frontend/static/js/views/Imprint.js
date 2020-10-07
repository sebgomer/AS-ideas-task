import AbstractView from "./AbstractView.js"; 

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Imprint")
    }

    // Grab server-side data
    async getHtml() {
        return `
        <h1>More Information</h1>
        <p>This is where the details of our space mission are presented.<p>
        `;
    }
}