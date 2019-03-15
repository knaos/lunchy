import React from "react";
import { connect } from "react-redux";
import { requestRestaurants } from "../redux/actions/restaurants";

class Restaurants extends React.Component {
  componentDidMount() {
    this.props.requestRestaurants();
  }

  render() {
    return "Restaurants";
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => {
  return {
    requestRestaurants: () => dispatch(requestRestaurants())
  };
};

const RestaurantsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Restaurants);

export default RestaurantsPage;
