import AbstractView from "./AbstractView.js";  

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Home")
    }

    // grab server-side data
    async getHtml() {
        return `
        <h1>Our currently logged universes</h1>
        <table id="universeTable">
            <thead>
                <tr>
                    <th>Name<th>
                    <th>MaxSize<th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
        `;
    }
}