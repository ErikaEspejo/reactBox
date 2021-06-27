import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import { Controls } from "./components/Controls";
import { List } from "./components/List";
import { Panel } from "./components/Panel";
import { Player } from "./components/Player";
import { Form } from "./containers/Form";

const root = document.getElementById("app");

const ReactBox = ({ defaultIndex = -1 }) => {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(defaultIndex);

  useEffect(() => {
    setData([
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
    ]);
  }, []);

  const shuffle = () => {
    setIndex(Math.floor(Math.random() * data.length));
  };

  const prev = () => {
    setIndex((prevIndex) => {
      return prevIndex <= 0 ? data.length - 1 : prevIndex - 1;
    });
  };

  const next = () => {
    setIndex((prevIndex) => {
      return prevIndex < data.length - 1 ? prevIndex + 1 : 0;
    });
  };

  const play = ({ currentIndex }) => {
    setIndex(currentIndex);
  };

  const remove = () => {
    if (index > -1) {
      setData((prevData) => {
        const filtered = prevData.filter((el, i) => {
          return i !== index;
        });
        return filtered;
      });
      setIndex(-1);
    }
  };

  const add = ({ song, artist }) => {
    setData([
      ...data,
      {
        song,
        artist
      }
    ]);
  };

  return (
    <>
      <Panel title="ReactBox" wrapperClass="player">
        <Player data={data} index={index} />
        <Controls prev={prev} shuffle={shuffle} next={next} />
      </Panel>
      <Panel title="List" wrapperClass="list">
        <List data={data} index={index} play={play} />
        <Form add={add} remove={remove} />
      </Panel>
    </>
  );
};

ReactDOM.render(<ReactBox />, root);
