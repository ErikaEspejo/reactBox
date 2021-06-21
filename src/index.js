import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const root = document.getElementById("app");

const Player = (props) => {
  const { data = [], index = -1 } = props;
  return (
    <div>
      {index < 0 || data.length === 0 ? (
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
            onClick={(event) => {
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
  constructor(args) {
    super(args);
    this.song = React.createRef();
    this.artist = React.createRef();
  }

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
    index: -1,
    showForm: false,
    error: ""
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

  remove = () => {
    const { index } = this.state;
    if (index > -1) {
      this.setState((prevState) => {
        const filtered = prevState.data.filter((el, i) => {
          return i !== index;
        });
        return { data: filtered, index: -1 };
      });
    }
  };

  toogleForm = () => {
    this.setState((prevState) => {
      return {
        showForm: !prevState.showForm
      };
    });
  };

  add = (event) => {
    event.preventDefault();
    const song = this.song.current.value;
    const artist = this.artist.current.value;

    if (!song && !artist) {
      this.setState({
        error: "Song and artist field required"
      });
      return;
    }

    this.setState(
      (prevState) => {
        return {
          data: [
            ...prevState.data,
            {
              song,
              artist
            }
          ],
          error: ""
        };
      },
      () => {
        this.toogleForm();
      }
    );
  };

  render() {
    const { data, index, showForm, error } = this.state;
    return (
      <>
        <Player data={data} index={index} />
        <Controls prev={this.prev} shuffle={this.shuffle} next={this.next} />
        <List data={data} index={index} play={this.play} />
        {showForm ? (
          <form onSubmit={this.add}>
            <input type="text" name="song" ref={this.song} />
            <input type="text" name="artist" ref={this.artist} />
            <button type="submit">Save</button>
            <button onClick={this.toogleForm}>Cancel</button>
          </form>
        ) : (
          <>
            <button onClick={this.toogleForm}>Add</button>
            <button onClick={this.remove}>Remove</button>
          </>
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </>
    );
  }
}

ReactDOM.render(<App />, root);
