const url = 'https://happy-stars.herokuapp.com/api/star'; 

const fetchStar = () => {
    fetch(url)
    .then(response => {
        if(!response.ok) {
            throw Error('ERROR'); 
        }
        
        return response.json();  
    })
    .then(data => {
        const html = data.stars
            .map(star => {
                // Map table values for Stars.js
                return `
                <tr>
                    <td>${star.id}</td>
                    <td></td>
                    <td>${star.name}</td>
                    <td></td>
                    <td>${star.color}</td>
                </tr>`
            })
            .join("");
            // Add cleaned html to <table> element in Stars.js
            document.querySelector('#starTable').insertAdjacentHTML("afterbegin", html);
    })
    .catch(err => {
        console.log(err); 
    })
}

export { fetchStar } ; 