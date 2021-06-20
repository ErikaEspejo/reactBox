import React from "react";
import ReactDOM from "react-dom";

const root = document.getElementById("app");

const Item = ({ title, subtitle }) => {
  return (
    <span>
      {title} - {subtitle}
    </span>
  );
};

class App extends React.Component {
  state = {
    data: [
      {
        song: "Smells Like Teen Spirit",
        artist: "Nirvana"
      },
      {
        song: "Blind",
        artist: "KoRn"
      },
      {
        song: "I Want It All",
        artist: "Queen"
      }
    ],
    index: 0
  };

  handleEvent = (event) => {
    const { data } = this.state;
    this.setState({
      index: Math.floor(Math.random() * data.length)
    });
  };

  render() {
    const { data, index } = this.state;
    return (
      <>
        <Item title={data[index].song} subtitle={data[index].artist} />
        <br />
        <button onClick={this.handleEvent}>Shuffle</button>
      </>
    );
  }
}

ReactDOM.render(<App />, root);
