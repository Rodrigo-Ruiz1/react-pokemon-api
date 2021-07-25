import React, {Component} from 'react';
import PokemonCardList from './PokemonCardList';

class PokemonSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: '',
            allPokemon: []
        }
    }

    _fetchPokemon = async (pokemon) => {
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        ).then(response => response.json());
        this.setState({
            allPokemon: [...this.state.allPokemon, response]
        })
        console.log('Response from API: ', response);
        console.log('Test: ', response.types[0].type.name);
    }

    _handleChange(field, val) {
        this.setState ({
            [field]: val
        })
    }

    _handleSubmit = (event) => {
        event.preventDefault();
        this._fetchPokemon(this.state.pokemon);
    }

    render() {
        return(
            <>
            <h1>Search for a Pokémon by name!</h1>
            <form onSubmit={this._handleSubmit}>
                <input type="text" value={this.state.pokemon} onChange={(event) => {
                    this._handleChange('pokemon', event.target.value)
                }}></input>
                <button type="submit">Search</button>
            </form>
            <div id="allPokemonDiv">
            <PokemonCardList allPokemon={this.state.allPokemon} />
            </div>
            </>
        )
    }
}

export default PokemonSearch;