import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import style from "./UserMenu.module.css";
import { logOut } from "../../redux/auth/operations";
export default function UserMenu() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };
  const { name } = useSelector(selectUser);
  return (
    <div className={style.userInfo}>
      <h3>
        Hello <i>{name}</i>
      </h3>
      <div>
        <button onClick={handleLogout}>logout</button>
      </div>
    </div>
  );
}
