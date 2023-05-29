import "./Delete.css";

function Delete(props) {
  return (
    <button onClick={() => props.delete(props.num)} className="delete-button">
      Delete
    </button>
  );
}

export default Delete;
