import React from "react";

export default class RestaurantForm extends React.Component {
  state = {
    id: "",
    name: ""
  };

  static defaultProps = {
    restaurant: {
      id: "",
      name: ""
    },
    loading: false,
    onSubmit: () => {}
  };

  // static propTypes;

  componentWillMount() {
    if (this.props.restaurant) {
      this.setState({ ...this.props.restaurant });
    }
  }

  nameChange = event => {
    event.preventDefault();
    this.setState({
      name: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({
      id: this.state.id,
      name: this.state.name
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="restaurant-name">Name</label>
          <input
            type="text"
            className="form-control"
            id="restaurant-name"
            onChange={this.nameChange}
            value={this.state.name}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={this.props.loading}
        >
          Submit
        </button>
      </form>
    );
  }
}
