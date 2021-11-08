import React, { Component } from "react";
import "./Pokecard.css";

const pokeAPI =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

class Pokecard extends Component {
    render() {
        let imgSrc = `${pokeAPI}${this.props.id}.png`;
        return (
            <div className="Pokecard">
                <h1>{this.props.name}</h1>
                <img src={imgSrc} alt={this.props.name} />
                <div>Type: {this.props.type}</div>
                <div>Experience: {this.props.experience}</div>
            </div>
        );
    }
}

export default Pokecard;
