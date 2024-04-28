import React from "react";
import { useGetUserQuery } from "../../context/userApi";
import { useDeleteUserMutation } from "../../context/userApi";
import userimg from "../../assets/images/userimg.png";
const Home = () => {
  let { data, isLoading, isError } = useGetUserQuery();

  let [
    deleteCategory,
    { data: deleteData, isLoading: delteisloading, isError: delteIserror },
  ] = useDeleteUserMutation();

  console.log(data?.data);

  const handleDeleteCreate = (id) => {
    deleteCategory(id);
  };

  const homeCradItem = data?.data.map((el) => (
    <div key={el.id} className="cart">
      <img src={userimg} className="cart__logo" alt="" />
      <div className="cart__content">
        <h2>{el.FirstName}</h2>
        <p>{el.LastName}</p>
        <p>{el.phones}</p>
        <p>{el.UserName}</p>
        <p>{el.role}</p>
        {/* <p>{el.password}</p> */}
        <button onClick={() => handleDeleteCreate(el.id)}>Delete</button>
      </div>
    </div>
  ));

  return (
    <div className="home">
      <div className="container">
        <div className="home__wrapper">{homeCradItem}</div>
      </div>
    </div>
  );
};

export default Home;
