import AbstractView from "./AbstractView.js";  

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Home")
    }

    // Grab server-side data
    async getHtml() {
        return `
        <h1>Our currently logged universes</h1>
        <table>
            <thead>
                <tr>
                    <th>ID<th>
                    <th>Name<th>
                    <th>MaxSize<th>
                </tr>
            </thead>
            <tbody id="universeTable">
            </tbody>
        </table>
        <form class="form" id="universeForm"> 
            <label for="id">Universe ID</label>
            <input type="text" name="id" id="id"></input>
            <label for="maxSize">Universe Max Size</label>
            <input type="text" name="maxSize" id="maxSize"></input>
            <label for="name">Universe Name</label>
            <input type="text" name="name" id="name"></input>
            <button type="submit">Submit</button>
        </form>
        `;
    }
}

