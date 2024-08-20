import React from "react";

const SubmitButton = ({ handleSubmit, isCreate }) => {
  return (
    <button onClick={() => handleSubmit(isCreate)}>
      {isCreate ? "Add User" : "Update"}
    </button>
  );
};

export default SubmitButton;
