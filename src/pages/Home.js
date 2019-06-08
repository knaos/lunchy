import React from "react";
import logo from "../logo.svg";
import { connect } from "react-redux";

const Home = ({ username }) => (
  <div className="App">
    <h1>Wellcome {username}</h1>
  </div>
);
let mapStateToProps = state => ({
  username: state.user.username
});
export default connect(mapStateToProps)(Home);
