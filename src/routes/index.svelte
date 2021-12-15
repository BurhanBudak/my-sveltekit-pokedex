<script context="module">
    export async function load({page}) {
    //   const id = page.params.id;
    //   const url = `https://pokeapi.co/api/v2/pokemon/${id}` 
    //   const res = await fetch(url);
    //   const pokeman = await res.json();
    //   return {props: {pokeman}}
	const url = `https://pokeapi.co/api/v2/pokemon?limit=${251}`;
    const res = await fetch(url);
    const data = await res.json();
    const loadedPokemon = data.results.map((data, index) => {
        return {
            name: data.name,
            id: index + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1
                }.png`
        }
    })
    // pokemon.set(loadedPokemon);
	return {props: {pokemon:loadedPokemon}}
    }
</script>


<script>
	// import {pokemon} from "../stores/pokestore";
	import PokemanCard from "../components/pokemanCard.svelte";
	export let pokemon
	// console.log($pokemon)

	let searchTerm = ""
	let filteredPokemon = [];

	$: {
		// console.log(searchTerm)
		if (searchTerm) {
			filteredPokemon = pokemon.filter(pokeman => pokeman.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
		}else{
			filteredPokemon = [...pokemon]
		}
	}
	//Writable isnt used so dollar sign can be removed from pokeman
</script>
<style>
	
</style>
<svelte:head>
	<title>
		Svelte Kit Pokedex
	</title>
</svelte:head>
<h1 class="text-4xl text-center my-8 uppercase">Svelte Kit Pokedex</h1>

<input 	class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
		type="text" 
		placeholder="Search Pokemon"
		bind:value={searchTerm}>

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">	
	{#each filteredPokemon as pokeman}
	<PokemanCard pokeman={pokeman} />
	{/each}
</div>
