import React from "react";

export const UserForm = () => {
  return (
    <div>
      <div>Welcome</div>
      <form action="">
        <div>
          <label htmlFor="">Name</label>
          <input type="text" name="" />
        </div>
        <div>
          <label htmlFor="">Last Name</label>
          <input type="text" name="" />
        </div>
        <div>
          <label htmlFor="">email</label>
          <input type="email" name="" />
        </div>
        <div>
          <label htmlFor="">Phone Number</label>
          <input type="text" name="" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
