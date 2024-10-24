fetch ('https://pokeapi.co/api/v2/pokemon/bulbasaur')
 .then(response => response.json())
 .then(data => {
    console.log('Número de movimentos:', data.moves.length);
 });