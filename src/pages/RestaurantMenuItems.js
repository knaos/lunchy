import React from "react";
import { connect } from "react-redux";
import { fetchRestaurantMenuItems } from "../redux/actions/restaurants";

class RestaurantMenuItems extends React.Component {
  componentDidMount() {
    this.props.fetchMenuItems(this.props.match.params.id);
  }
  render() {
    const {
      menuItems,
      history: { params: id }
    } = this.props;

    return (
      <section>
        <div>
          <h1>Menu items</h1>
          {/* <Link to="/restaurants/add">
            <button className="btn btn-primary">Add restaurant</button>
          </Link> */}
        </div>
        {menuItems && (
          <table style={{ marginTop: "20px" }} className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {menuItems.map(menu => (
                <tr key={menu.id}>
                  <td>{menu.id}</td>
                  <td>
                    <span>{menu.name}</span>
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
  menuItems: state.restaurants.menuItems
});

const mapDisptachToProps = dispatch => {
  return {
    fetchMenuItems: id => dispatch(fetchRestaurantMenuItems(id))
  };
};

export default connect(
  mapStateToProps,
  mapDisptachToProps
)(RestaurantMenuItems);
