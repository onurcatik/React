import React, { Component } from "react";

class PokemonList extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      next: null,
      darkMode: false
    };
  }

  componentDidMount() {
    this.fetchPokemon();
  }

  fetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=200")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          pokemons: data.results,
          next: data.next
        });
      });
  };

  toggleDarkMode = () => {
    this.setState((prevState) => ({ darkMode: !prevState.darkMode }));
  };

  getPokemonImageURL = (url) => {
    const id = url.split("/")[url.split("/").length - 2];
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  };

  render() {
    const modeClass = this.state.darkMode ? "dark-mode" : "";
    return (
      <div className={`pokemon-container ${modeClass}`}>
        <div className="top-bar">
          <h1 className="pokemon-finder-text">Pokemon Finder</h1>

          <div onClick={this.toggleDarkMode} className="toggle-icon">
            {this.state.darkMode ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 3V1M12 23V21M4.21997 4.22L2.80997 2.81M21.19 21.2L19.78 19.79M1 12H3M23 12H21M4.21997 19.78L2.80997 21.19M21.19 2.81L19.78 4.22M12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        </div>
        <div className="pokemon-list">
          {this.state.pokemons.map((pokemon, index) => (
            <div key={index} className="pokemon-item">
              <img
                src={this.getPokemonImageURL(pokemon.url)}
                alt={pokemon.name}
                className="pokemon-image"
              />
              <p className="pokemon-name">{pokemon.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PokemonList;
