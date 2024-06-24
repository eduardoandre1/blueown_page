async function emailSender(name:string,email:string,message:string){
    const inputData = {name,email,message}
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' ,// Set content type to JSON
            'mode':'no-cors'
        },
        body: JSON.stringify(inputData) // Convert JSON data to a string and set it as the request body
        };
    
        // Make the fetch request with the provided options
        fetch('https://blueowl-em-jsvanilla-1.onrender.com/confirmation', options)
        .then(response => {
            // Check if the request was successful
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            // Parse the response as JSON
            alert('foi enviado')
        })
        .then(data => {
            // Handle the JSON data
            console.log(data);
        })
        .catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('Fetch error:', error);
        });
}

export default emailSender