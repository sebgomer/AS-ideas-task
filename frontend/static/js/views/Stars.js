import AbstractView from "./AbstractView.js"; 

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Stars")
    }

    // Grab server-side data
    async getHtml() {
        return `

        <div class="contentWrapper" >
            <h1>Our currently logged stars</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID<th>
                        <th>Name<th>
                        <th>Color<th>
                    </tr>
                </thead>
                <tbody id="starTable">
                </tbody>
            </table>
        </div>
        `;
    }
}