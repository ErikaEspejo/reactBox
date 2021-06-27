import React, { useState } from "react";

export const Form = ({ add, remove }) => {
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState("");

  const toogleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
    setError("");
  };

  const handleSave = (event) => {
    event.preventDefault();
    const { song, artist } = event.target.elements;

    if (!song.value || !artist.value) {
      setError("Song and artist field required");
      return;
    }
    add({ song: song.value, artist: artist.value });
    toogleForm();
  };

  return (
    <>
      {showForm ? (
        <form onSubmit={handleSave} className="control">
          <input type="text" name="song" />
          <input type="text" name="artist" />
          <button type="submit">Save</button>
          <button onClick={toogleForm}>Cancel</button>
        </form>
      ) : (
        <div className="control">
          <button onClick={toogleForm}>Add</button>
          <button onClick={remove}>Remove</button>
        </div>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
};
