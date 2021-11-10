import React, { Component } from "react";
import "./Pokedex.css";
import Pokecard from "./Pokecard";

class Pokedex extends Component {
    render() {
        let title;
        if (this.props.isWinner) {
            title = <h1 className="Pokedox-winner"> You are the winner</h1>;
        } else {
            title = <h1 className="Pokedox-looser"> Sorry, you lost</h1>;
        }
        return (
            <div className="Pokedex">
                <p>{title}</p>
                <h4>Total experience: {this.props.experience}</h4>
                <div className="Pokedex-cards">
                    {this.props.pokemon.map((p) => (
                        <Pokecard
                            id={p.id}
                            name={p.name}
                            type={p.type}
                            experience={p.base_experience}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Pokedex;
