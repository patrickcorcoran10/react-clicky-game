import React, { Component } from 'react';
import './App.css';
import whitesox from "./whitesox.json";
import Wrapper from "./components/Wrapper/Wrapper";
import Title from "./components/Title/Title";
import Card from "./components/Card/Card"
import NavBar from "./components/NavBar/NavBar";

class App extends Component {

  state = {
    score: 0,
    topscore: 0,
    whitesox: whitesox,
    message: "Pick and Click and Image to Begin",
    unclicked: whitesox
  };


  shuffle = array => {
    for (let i =array.length - 1; i > 0; i--) {
      let a = Math.floor(Math.random() * (i + 1));
      [array[i], array[a]] = [array[a], array[i]];
    }
  };

  click = picked => {
    const findPlayer = this.state.unclicked.find(item => item.id === picked)
    if (findPlayer === undefined) {
      this.setState({
        message: "You guessed incorrectly, start OVA!",
        topscore: (this.state.score > this.state.topscore) ? this.state.score : this.state.topscore,
        score: 0,
        whitesox: whitesox,
        unclicked: whitesox
      });
    }
    else {
      const newUnclicked = this.state.unclicked.filter(item => item.id !== picked);

      this.setState({
        message: "Nice Pick",
        score: this.state.score + 1,
        whitesox: whitesox,
        unclicked: newUnclicked
      })
    }
    this.shuffle(whitesox);
  };



  render() {
    return (
      <Wrapper>
        <NavBar 
        message={this.state.message}
        score={this.state.score}
        topscore={this.state.topscore}
        />
        <Title />
        {this.state.whitesox.map(player => (
          <Card
          click={this.click}
          key={player.id}
          id={player.id}
          name={player.name}
          image={player.image}
          position={player.position}
          number={player.number}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
