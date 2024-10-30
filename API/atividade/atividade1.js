document.getElementById('fetchDog').addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('dogImage').innerHTML = `<img src="${data.message}"  alt="Cachorro fofo" width="300">`;
        });
        });