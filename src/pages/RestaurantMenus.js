import React from "react";
import { connect } from "react-redux";
import { fetchRestaurantMenus } from "../redux/actions/restaurants";

class RestaurantMenus extends React.Component {
  componentDidMount() {
    this.props.fetchMenus(this.props.match.params.id);
  }

  render() {
    const {
      menus,
      history: { params: id }
    } = this.props;
    return (
      <section>
        <div>
          <h1>Menus</h1>
          {/* <Link to="/restaurants/add">
            <button className="btn btn-primary">Add restaurant</button>
          </Link> */}
        </div>
        {menus && (
          <table style={{ marginTop: "20px" }} className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {menus.map(menu => (
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
  menus: state.restaurants.menus
});

const mapDispatchToProps = dispatch => {
  return {
    fetchMenus: id => dispatch(fetchRestaurantMenus(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantMenus);
