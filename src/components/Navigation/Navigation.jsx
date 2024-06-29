import { Link } from "react-router-dom";
import style from "./Navigation.module.css"
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
    <div>
      <ul className={style.NavigationCont}>
        <Link to="/">Home</Link>
        {isLoggedIn && <Link to="/contacts">Contacts</Link>}
      </ul>
    </div>
  );
}
