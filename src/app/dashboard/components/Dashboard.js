import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentProfile } from "../../profile/action/profileAction";
import { DashboardOptions } from "./DashboardOptions";
import { DisplayEdu } from "./DisplayEdu";
import { DisplayExp } from "./DisplayExp";

export const Dashboard = ({
  auth,
  getCurrentProfile,
  profile: { profile },
}) => {
  console.log("This is auth from Dashboard" + JSON.stringify(auth));
  return (
    <section className="container">
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Welcome {auth.user && auth.user.name}
      </p>
      {profile !== null ? (
        <>
          <DashboardOptions></DashboardOptions>
          <DisplayExp></DisplayExp>
          <DisplayEdu></DisplayEdu>

          <div className="my-2">
            <button className="btn btn-danger">
              <i className="fas fa-user-minus"></i>
              Delete My Account
            </button>
          </div>
        </>
      ) : (
        <>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to="/profiles/create-profile" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </>
      )}
    </section>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

const mapDispatchToProps = { getCurrentProfile };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
