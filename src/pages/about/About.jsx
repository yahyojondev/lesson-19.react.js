import React, { useState } from "react";
import { useCreateUserMutation } from "../../context/userApi";
// import rasm from "../../assets/loginbg.webp";

const About = () => {
  let [
    userCreate,
    { isLoading: createUserLoading, isError: createUserError, data },
  ] = useCreateUserMutation();

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [phones, setPhones] = useState("");
  const [role, setrole] = useState("");
  const [UserName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateUser = (e) => {
    e.preventDefault();
    let user = {
      FirstName,
      LastName,
      phones: [phones],
      role,
      UserName,
      password,
      isActive: true,
    };
    userCreate(user);
    console.log(createUserError);
  };

  return (
    <div className="register">
      <div className="container">
        <div className="register__wrapper">
          <form onSubmit={handleCreateUser} className=" userForm__werapper">
            <h2 className="register__title">Register</h2>
            <div className="first__last__name">
              <div className="input__wrapper">
                <input
                  required
                  value={FirstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder=" first name"
                  type="text"
                />
              </div>
              <div className="input__wrapper">
                <input
                  required
                  value={LastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="last name"
                  type="text"
                />
              </div>
            </div>
            <div className="input__wrapper">
              <input
                required
                value={phones}
                onChange={(e) => setPhones(e.target.value)}
                placeholder="+9989"
                phone
                type="number"
              />
            </div>
            <div className="input__wrapper">
              <input
                required
                value={role}
                onChange={(e) => setrole(e.target.value)}
                placeholder="role"
                type="text"
              />
            </div>
            <div className="user__password">
              <div className="input__wrapper">
                <input
                  required
                  value={UserName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="username"
                  type="text"
                />
              </div>
              <div className="input__wrapper">
                <input
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  type="password"
                />
              </div>
            </div>
            <button className="create__btn">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default About;
