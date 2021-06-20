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
        song: "Rock and Roll All Nite",
        artist: "KISS"
      },
      {
        song: "I Want It All",
        artist: "Queen"
      },
      {
        song: "When Love And Hate Collide",
        artist: "Def Leppard"
      }
    ],
    index: -1
  };

  shuffle = () => {
    const { data } = this.state;
    this.setState({
      index: Math.floor(Math.random() * data.length)
    });
  };

  prev = () => {
    const { data } = this.state;
    this.setState((prevState) => {
      return {
        index: prevState.index <= 0 ? data.length - 1 : prevState.index - 1
      };
    });
  };

  next = () => {
    const { data } = this.state;
    this.setState((prevState) => {
      return {
        index: prevState.index < data.length - 1 ? prevState.index + 1 : 0
      };
    });
  };

  render() {
    const { data, index } = this.state;
    return (
      <>
        {index < 0 ? (
          <Item title="Untitled" subtitle="Unknown" />
        ) : (
          <Item title={data[index].song} subtitle={data[index].artist} />
        )}
        <br />
        <button onClick={this.prev}>Previous</button>
        <button onClick={this.next}>Next</button>
        <button onClick={this.shuffle}>Shuffle</button>
      </>
    );
  }
}

ReactDOM.render(<App />, root);
