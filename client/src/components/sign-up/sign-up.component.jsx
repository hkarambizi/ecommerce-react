import React, { useState } from "react";
import "./sign-up.styles.scss";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signUpStart } from "../../redux/user/user.actions.js";

const SignUp = ({ signUpStart }) => {
  const [userData, setUserData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { displayName, email, password, confirmPassword } = userData;
  const handleSubmit = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords Do Not Match");
      return;
    }
    signUpStart(email, password, displayName);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: (email, password, displayName) =>
    dispatch(signUpStart({ email, password, displayName }))
});
export default connect(
  null,
  mapDispatchToProps
)(SignUp);
