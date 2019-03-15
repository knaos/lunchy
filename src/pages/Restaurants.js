import React from "react";
import { connect } from "react-redux";
import { requestRestaurants } from "../redux/actions/restaurants";
import { Link } from "react-router-dom";

class Restaurants extends React.Component {
  componentDidMount() {
    this.props.requestRestaurants();
  }

  render() {
    const { restaurants } = this.props;
    return (
      <section>
        <div>
          <h1>Restaurants</h1>
          <Link to="/restaurants/add">
            <button className="btn btn-primary">Add restaurant</button>
          </Link>
        </div>
        {restaurants && (
          <table style={{ marginTop: "20px" }} className="table">
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
                  <td>
                    <Link to={`/restaurants/${restaurant.id}/menus`}>
                      {restaurant.name}
                    </Link>
                  </td>
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
