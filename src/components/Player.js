import React from "react";
import { Item } from "./Item";

export const Player = (props) => {
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
