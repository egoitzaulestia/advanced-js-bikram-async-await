//DESARROLLA AQUI TUS SOLUCIONES

async function getImageAndName (pokemon){

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    return {name, img}
    
}

const getRandomPokemon = async (pokemon) => {

    // const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const responseIterator = await axios.get(`https://pokeapi.co/api/v2/pokemon`)

    let pokemonList = []
   
    const pokemonIterator = responseIterator.data.results;
    // pokemonIterator.forEach(element => {
        
    // });

    // const randomPokemon = response;
    console.log(pokemonIterator);

    // return randomPokemon
}

getRandomPokemon()