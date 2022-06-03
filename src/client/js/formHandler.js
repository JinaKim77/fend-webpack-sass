function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    // Use the Client package created by webpack
    // You need to reference 'checkForName' function THROUGH THE CLIENT LIBRARY 
    Client.checkForName(formText)

    // This port number should be different from webpack dev port
    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

export { handleSubmit }
