import { Link } from "react-router-dom";
import style from "./AuthNav.module.css";
export default function AuthNav() {
  return (
    <div>
      <ul className={style.NavigationCont}>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </ul>
    </div>
  );
}
