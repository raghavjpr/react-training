import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export const DashboardOptions = (props) => {
  return (
    <div className="dash-buttons">
      <Link to="create-profile.html" className="btn btn-light">
        <i className="fas fa-user-circle text-primary"></i> Edit Profile
      </Link>
      <Link to="add-experience.html" className="btn btn-light">
        <i className="fab fa-black-tie text-primary"></i> Add Experience
      </Link>
      <Link to="add-education.html" className="btn btn-light">
        <i className="fas fa-graduation-cap text-primary"></i> Add Education
      </Link>
    </div>
  );
};

DashboardOptions.propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardOptions);
