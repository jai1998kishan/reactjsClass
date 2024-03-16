import styles from "./AddTodo.module.css";
function AddTodo() {
  return (
    <div className="container text-center">
      {/* row1 */}
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            className={styles.inputClass}
          />
        </div>

        <div className="col-4">
          <input type="date" className={styles.inputClass} />
        </div>

        <div className="col-2">
          <button type="button" className="btn btn-success kg-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
