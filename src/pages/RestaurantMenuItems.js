import React from "react";
import { connect } from "react-redux";

class RestaurantMenuItems extends React.Component {
  render() {
    const {
      menus,
      history: { params: id }
    } = this.props;
    return (
      <section>
        <div>
          <h1>Restaurants</h1>
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

export default connect(mapStateToProps)(RestaurantMenuItems);
