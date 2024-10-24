fetch ('https:pokeapi.co/api/v2/pokemon/pikachu')
.then (response => response.json())
.then (data => {
    data.moves.fopr.Each(move =>{
        console.log('Movimentto:', move.move.name);
    });
});