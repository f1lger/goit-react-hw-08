import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import style from "./DeleteContactModal.module.css"
export default function DeleteModal({ id, onReject }) {
  const dispatch = useDispatch();
  const hanldeDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() =>
        toast.success(`You have successfully deleted the user`)
      )
      .catch(() => {
        toast.error("Something was wrong");
      });
  };
  return (
    <div className={style.deleteModalCont}>
      <p>Are you sure you want to delete this user?</p>
      <div className={style.btnCont}>
        <button type="submit" onClick={hanldeDelete}>
          Yes
        </button>
        <button type="submit" onClick={onReject}>
          No
        </button>
      </div>
      <Toaster />
    </div>
  );
}
