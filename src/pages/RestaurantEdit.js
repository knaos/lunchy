import React from "react";
import RestaurantForm from "../components/RestaurantForm";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class RestaurantEdit extends React.Component {
  render() {
    return (
      <section>
        <h2>Edit restaurant</h2>
        <RestaurantForm />
      </section>
    );
  }
}

export default withRouter(connect()(RestaurantEdit));
