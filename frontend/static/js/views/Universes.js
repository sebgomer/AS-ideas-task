import AbstractView from "./AbstractView.js";  

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Home")
    }

    // grab server-side data
    async getHtml() {
        return `
        <h1>Mr. Universe, grant me your knowledge</h1>
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