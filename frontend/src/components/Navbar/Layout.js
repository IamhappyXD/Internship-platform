import Navbar from "./Navbar";
import classes from "./Layout.module.css";
import LoginForm from "../LoginForm";
import { useState } from "react";

function Layout(props) {
  const [isShowLogin, setIsShowLogin] = useState(true);

  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
    console.log(isShowLogin);
  };

  return (
    <div>
      <Navbar handleLoginClick={handleLoginClick} />
      <LoginForm isShowLogin={isShowLogin} />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
