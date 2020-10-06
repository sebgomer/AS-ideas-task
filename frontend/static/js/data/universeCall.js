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
                return `
                <tr>
                    <td>${universe.name}</td>
                    <td>${universe.maxSize}</td>
                </tr>`
            })
            .join("");
            console.log(html); 
            document.querySelector("#universeTable > tbody").insertAdjacentHTML("beforeend", html);
    })
    .catch(err => {
        console.log(err); 
    })
}

export { fetchUniverse } ; 