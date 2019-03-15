import React from "react";
import RestaurantForm from "../components/RestaurantForm";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addRestaurant } from "../redux/actions/restaurants";

class RestaurantAdd extends React.Component {
  addRestaurant = restaurant => {
    console.log(restaurant);
    this.props.addRestaurant(restaurant).then(() => {
      this.props.history.push("/restaurants");
    });
  };

  render() {
    return (
      <section>
        <h2>Add new restaurant</h2>
        <RestaurantForm onSubmit={this.addRestaurant} />
      </section>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  addRestaurant: restaurant => dispatch(addRestaurant(restaurant))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(RestaurantAdd)
);
