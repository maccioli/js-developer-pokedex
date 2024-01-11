
function fetchPokemonDetails(url) {
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.statusText}`);
            }
            return response.json();
        })
        .catch((error) => {
            console.error('Erro ao obter detalhes do Pokémon:', error);
            throw error;
        });
}

function addMouseoverEventsToPokemonListItems() {
    const liListItems = document.querySelectorAll('.liList');

    liListItems.forEach((listItem) => {
        listItem.addEventListener('click', async () => {
            const pokemonUrl = listItem.getAttribute('data-pokemon-url');
            console.log('url nao funciona ' + pokemonUrl);

            try {
                const details = await fetchPokemonDetails(pokemonUrl);
                console.log(`Características ${details.name}:\nAltura: ${details.height}\nPeso: ${details.weight}`);
            } catch (error) {
                console.error('Erro ao obter detalhes do Pokémon:', error);
            }
        });
    });
}

window.addMouseoverEventsToPokemonListItems = addMouseoverEventsToPokemonListItems;