import PropTypes from "prop-types";
import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteEducation } from "../../profile/action/profileAction";

export const DisplayEdu = ({
  deleteEducation,
  profile: {
    profile: { education },
  },
}) => {
  const educations = education.map((ed) => (
    <tr key={ed._id}>
      <td>{ed.school}</td>
      <td className="hide-sm">{ed.degree}</td>
      <td>
        <Moment format="YYYY-MM-DD">{ed.from}</Moment>
        {"  "}
        {ed.to ? <Moment format="YYYY-MM-DD">{ed.to}</Moment> : "Now"}
      </td>
      <td>
        <button
          onClick={() => deleteEducation(ed._id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <div>
      <h2 className="my-2">Education Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>School</th>
            <th className="hide-sm">Degree</th>
            <th className="hide-sm">Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </div>
  );
};

DisplayEdu.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  education: state.profile.profile.education,
});

const mapDispatchToProps = { deleteEducation };

export default connect(mapStateToProps, mapDispatchToProps)(DisplayEdu);
