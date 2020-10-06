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
                return `
                <tr>
                    <td>${star.name}</td>
                    <td>${star.color}</td>
                </tr>`
            })
            .join("");
            document.querySelector('#starTable').insertAdjacentHTML("afterbegin", html);
    })
    .catch(err => {
        console.log(err); 
    })
}

export { fetchStar } ; 