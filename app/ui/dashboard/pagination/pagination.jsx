import styles from "./pagination.module.css";

const Pagination = () => 
{
  return (
    <div className={styles.container}>
        <button className={styles.button}>Previous</button>
        <button className={styles.next}>Next</button>
    </div>
  );
};

export default Pagination;