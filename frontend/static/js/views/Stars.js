import AbstractView from "./AbstractView.js"; 

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Stars")
    }

    // grab server-side data
    async getHtml() {
        return `
        <h1>Have a look at our current stars!</h1>
        <table class="table">
            <tr>
                <th>Name<th>
                <th>Color<th>
            </tr>
            <tbody id="starTable">
            </tbody>
        </table>
        `;
    }
}