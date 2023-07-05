import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../../hooks/useAuthentication";

export const RegisterPage = () => {
  const { signup } = useAuthentication();
  const navigate = useNavigate();

  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    try {
      await signup(userCredentials);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      {error && <p>ERROR: {error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="youremail@company.com"
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="******"
          onChange={handleChange}
        />

        <button>Register</button>
      </form>
    </>
  );
};
