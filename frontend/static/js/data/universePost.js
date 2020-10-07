const url = 'https://happy-stars.herokuapp.com/api/universe'; 

    const universeForm = document.getElementById('universeForm'); 

    universeForm.addEventListener('submit', e => {
        e.preventDefault(); 
    
        const formData = new FormData(this);
    
        fetch('https://happy-stars.herokuapp.com/api/universe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: formData
        })
        .then(response => {
            return response.text();  
        })
        .then(text => {
            console.log(text); 
        })
        .catch(err => {
            console.log(err); 
        })
    })

export { universePost } ; 