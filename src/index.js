import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const root = document.getElementById("app");

const Player = (props) => {
  const { data = [], index = -1 } = props;
  return (
    <div>
      {index < 0 ? (
        <Item title="Untitled" subtitle="Unknown" />
      ) : (
        <Item title={data[index].song} subtitle={data[index].artist} />
      )}
    </div>
  );
};

const Controls = (props) => {
  const { prev, next, shuffle } = props;
  return (
    <div>
      <button onClick={prev}>Previous</button>
      <button onClick={next}>Next</button>
      <button onClick={shuffle}>Shuffle</button>
    </div>
  );
};

const List = (props) => {
  const { data = [], index = -1, play } = props;
  return (
    <div>
      <ul>
        {data.map((item, i) => (
          <li
            key={i}
            onDoubleClick={(event) => {
              play(event, i);
            }}
            className={index === i ? "selected" : ""}
          >
            <Item title={item.song} subtitle={item.artist} />
          </li>
        ))}
      </ul>
    </div>
  );
};

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

  play = (event, currentIndex) => {
    this.setState({
      index: currentIndex
    });
  };

  render() {
    const { data, index } = this.state;
    return (
      <>
        <Player data={data} index={index} />
        <Controls prev={this.prev} shuffle={this.shuffle} next={this.next} />
        <List data={data} index={index} play={this.play} />
      </>
    );
  }
}

ReactDOM.render(<App />, root);
