import React from "react";
import { Item } from "./Item";

export const List = (props) => {
  const { data = [], index = -1, play } = props;
  return (
    <div className="list b-black">
      <ul>
        {data.map((item, i) => (
          <li
            key={i}
            onClick={(event) => {
              play({ currentIndex: i });
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
