import React from "react";

export class FormContainer extends React.Component {
  state = {
    showForm: false,
    error: ""
  };

  toogleForm = () => {
    this.setState((prevState) => {
      return {
        showForm: !prevState.showForm,
        error: ""
      };
    });
  };

  handleSave = (event) => {
    event.preventDefault();
    const { song, artist } = event.target.elements;

    if (!song.value || !artist.value) {
      this.setState({
        error: "Song and artist field required"
      });
      return;
    }

    this.props.add({ song, artist });
  };

  render() {
    const { showForm, error } = this.state;
    return (
      <>
        {showForm ? (
          <form onSubmit={this.handleSave}>
            <input type="text" name="song" />
            <input type="text" name="artist" />
            <button type="submit">Save</button>
            <button onClick={this.toogleForm}>Cancel</button>
          </form>
        ) : (
          <>
            <button onClick={this.toogleForm}>Add</button>
            <button onClick={this.props.remove}>Remove</button>
          </>
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </>
    );
  }
}
