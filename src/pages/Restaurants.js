import React from "react";
import { connect } from "react-redux";
import { requestRestaurants } from "../redux/actions/restaurants";

class Restaurants extends React.Component {
  componentDidMount() {
    this.props.requestRestaurants();
  }

  render() {
    const { restaurants } = this.props;
    return (
      <section>
        <h1>Restaurants</h1>
        {restaurants && (
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {restaurants.map(restaurant => (
                <tr key={restaurant.id}>
                  <td>{restaurant.id}</td>
                  <td>{restaurant.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  restaurants: state.restaurants.restaurants
});

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
