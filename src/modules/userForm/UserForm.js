import React, { useState } from "react";

export const UserForm = () => {
  const [data, setData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    const dataForm = { ...data };
    dataForm[name] = value;
    setData(dataForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(data));
    console.log("all data:", e, data);
  };

  const { name, lastName, phone, email } = data;

  return (
    <div className="container">
      <div className="card">
        <div>Welcome</div>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div>
            <label htmlFor="" className="label-form">
              Name
            </label>
            <input
              required="true"
              type="text"
              value={name}
              name="name"
              className="form-control"
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div>
            <label htmlFor="" className="label-form">
              Last Name
            </label>
            <input
              type="text"
              value={lastName}
              name="lastName"
              className="form-control"
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div>
            <label htmlFor="" className="label-form">
              email
            </label>
            <input
              type="email"
              required="true"
              value={email}
              name="email"
              className="form-control"
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div>
            <label htmlFor="" className="label-form">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={phone}
              className="form-control"
              onChange={(event) => handleChange(event)}
            />
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
