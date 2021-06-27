import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import { Form } from "./form";

const root = document.getElementById("app");

const Player = (props) => {
  const { data = [], index = -1 } = props;
  return (
    <div className="current-play b-black g-color">
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
    <div className="control">
      <button onClick={prev}>
        <i className="fas fa-backward"></i>
      </button>
      <button>
        <i className="fas fa-play"></i>
      </button>
      <button onClick={next}>
        <i className="fa fa-forward"></i>
      </button>
      <button onClick={shuffle}>
        <i className="fas fa-random"></i>
      </button>
    </div>
  );
};

const List = (props) => {
  const { data = [], index = -1, play } = props;
  return (
    <div className="list b-black">
      <ul>
        {data.map((item, i) => (
          <li
            key={i}
            onClick={(event) => {
              play(event, i);
            }}
            className={index === i ? "playing" : ""}
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

const Panel = ({ children, title, wrapperClass }) => {
  return (
    <div className={`main-ui ${wrapperClass}`}>
      <header>
        <div className="line" />
        <h1>{title}</h1>
      </header>
      <div className="inner">{children}</div>
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    const index = props.index >= 0 ? props.index : -1;
    this.state = {
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
      index
    };
  }

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

  add = ({ song, artist }) => {
    this.setState((prevState) => {
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
    });
  };

  render() {
    const { data, index } = this.state;
    return (
      <>
        <Panel title="ReactBox" wrapperClass="player">
          <Player data={data} index={index} />
          <Controls prev={this.prev} shuffle={this.shuffle} next={this.next} />
        </Panel>
        <Panel title="List" wrapperClass="list">
          <List data={data} index={index} play={this.play} />
          <Form add={this.add} remove={this.remove} />
        </Panel>
      </>
    );
  }
}

ReactDOM.render(<App index={0} />, root);
