import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import { FormContainer } from "./form";

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
      <button onClick={prev}>
        <i className="fas fa-play"></i>
      </button>
      <button onClick={next}>
        <i className="fa fa-forward"></i>
      </button>
      <button onClick={shuffle}>Shuffle</button>
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

class App extends React.Component {
  constructor(props) {
    super(props);
    /* El constructor se puede usar para:
     - Acceder a los props
     - Declarar variables 
     - Calcular el estado de acuerdo a las props

     NO HACER LLAMADOS AJAX NI SETSTATE
     */
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
            song: song.value,
            artist: artist.value
          }
        ],
        error: ""
      };
    });
  };

  render() {
    //No se hace SetState ni llamados AJAX
    const { data, index } = this.state;
    return (
      <>
        <div className="main-ui player">
          <header>
            <div className="line" />
            <h1>ReactBox</h1>
          </header>
          <div className="inner">
            <Player data={data} index={index} />
            <Controls
              prev={this.prev}
              shuffle={this.shuffle}
              next={this.next}
            />
          </div>
        </div>
        <div className="main-ui list">
          <header>
            <div className="line" />
            <h1>ReactBox</h1>
          </header>
          <div className="inner">
            <List data={data} index={index} play={this.play} />
            <FormContainer add={this.add} remove={this.remove} />
          </div>
        </div>
      </>
    );
  }
}

ReactDOM.render(<App index={0} />, root);
