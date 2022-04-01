import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const user = useSelector((state) => state.authReducer.user);
  if (!user) {
    return <h1>Spinner.....</h1>;
  }
  return (
     <div className="dashbord-container">
    <h1 className="large text-primary">Dashboard </h1>
    <p className="lead text-muted size">
 <i className="fas fa-user" />
 {"Welcome " + user.name }
</p>
</div>
  );
};

export default Dashboard;