import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import whitesox from "./whitesox.json";
import Wrapper from "./components/Wrapper/Wrapper";
import Title from "./components/Title/Title";
import Card from "./components/Card/Card"
import NavBar from "./components/NavBar/NavBar";

class App extends Component {

  state = {
    whitesox
  };

  // click = () => {
  //   // Logic for the game.
  //   this.setState({ players });
  // }

  // shuffle = () => {

  // }

  render() {
    return (
      <Wrapper>
        <NavBar />
        <Title>
        <h2>Pick-to-Clicky Game</h2>
        <h6>Click a Player Card to score, but don't click on anybody twice!</h6>
        </Title>
        {this.state.whitesox.map(player => (
          <Card
          id={player.id}
          key={player.key}
          name={player.name}
          image={player.image}
          position={player.position}
          number={player.number}
          clicked={player.clicked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
