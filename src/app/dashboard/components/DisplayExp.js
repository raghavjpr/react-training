import PropTypes from "prop-types";
import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteExperience } from "../../profile/action/profileAction";

export const DisplayExp = ({
  deleteExperience,
  profile: {
    profile: { experience },
  },
}) => {
  const experiences = experience.map((exp) => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td className="hide-sm">{exp.title}</td>
      <td>
        <Moment format="YYYY-MM-DD">{exp.from}</Moment>
        {"  "}
        {exp.to ? <Moment format="YYYY-MM-DD">{exp.to}</Moment> : "Now"}
      </td>
      <td>
        <button
          onClick={() => deleteExperience(exp._id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <div>
      <h2 className="my-2">Experience Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </div>
  );
};

DisplayExp.propTypes = {
  // profile: PropTypes.object.isRequired, ==> this access profile from store
  //we prefer getting experience details from dashboard instead of store for better performance
  experience: PropTypes.array.isRequired,
  // this access dashboard
  deleteExperience: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  experience: state.profile.profile.experience,
});

const mapDispatchToProps = { deleteExperience };

export default connect(mapStateToProps, mapDispatchToProps)(DisplayExp);
