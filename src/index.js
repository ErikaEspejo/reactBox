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

  shuffle = () => {
    const { data } = this.state;
    this.setState({
      index: Math.floor(Math.random() * data.length)
    });
  };

  next = () => {
    const { data } = this.state;
    /*
      se usa la forma de setState que hace uso de prevState cuando se requiere 
      actualizar el state basandose en un state anterior
    */
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
        <Item title={data[index].song} subtitle={data[index].artist} />
        <br />
        <button onClick={this.shuffle}>Shuffle</button>
        <button onClick={this.next}>Next</button>
      </>
    );
  }
}

ReactDOM.render(<App />, root);
