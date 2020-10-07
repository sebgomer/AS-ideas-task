const url = 'https://happy-stars.herokuapp.com/api/universe'; 

const fetchUniverse = () => {
    fetch(url)
    .then(response => {
        if(!response.ok) {
            throw Error('ERROR'); 
        }
        
        return response.json();  
    })
    .then(data => {
        const html = data.universes
            .map(universe => {
                // Map table values for Universes.js
                return `
                <tr>
                    <td>${universe.id}</td>
                    <td></td>
                    <td>${universe.name}</td>
                    <td></td>
                    <td>${universe.maxSize}</td>
                </tr>`
            })
            .join("");
            // Add cleaned html to <table> element in Universes.js
            document.querySelector("#universeTable").insertAdjacentHTML("beforeend", html);
    })
    .catch(err => {
        console.log(err); 
    })
}

export { fetchUniverse } ; 