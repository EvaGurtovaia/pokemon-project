import React, { Component } from "react";
import "./Pokecard.css";

const pokeAPI = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
class Pokecard extends Component {
    render() {
        let imgSrc = `${pokeAPI}${padToThree(this.props.id)}.png`;
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{this.props.name}</h1>
                <div className="Pokecard-image">
                    <img
                        className="Pokecard-photo"
                        src={imgSrc}
                        alt={this.props.name}
                    />
                </div>

                <div className="Pokecard-data">Type: {this.props.type}</div>
                <div className="Pokecard-data">
                    Experience: {this.props.experience}
                </div>
            </div>
        );
    }
}

export default Pokecard;
