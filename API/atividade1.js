fetch ('https://pokeapi.co/api/v2/pokemon/pikachu')
     .then(reponse => Response.json())
     .then(data => {
         console.log('peso:', data.weight);
     });