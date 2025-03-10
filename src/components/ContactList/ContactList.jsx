import { useSelector } from "react-redux";
import Contact from "./Contact/Contact";
import styles from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
export default function ContactList() {
  const items = useSelector(selectFilteredContacts);
  return (
    <ul className={styles.contactList}>
      {items.map(({ id, name, number }) => (
        <Contact key={id} name={name} number={number} id={id} />
      ))}
    </ul>
  );
}
