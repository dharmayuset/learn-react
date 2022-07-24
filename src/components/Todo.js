
import {useState} from 'react';
import Modal from "./Modal";
import Backdrop from "./Backdrop";
function Todo(props) {
const[ modalIsOpen, setModalIsOpen] = useState(false);
  function handleDelete() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="action">
        <button className="btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
      {modalIsOpen&&<Modal onCancel={closeModal} onConfirm={closeModal}/>}
      {modalIsOpen&&<Backdrop onCancel={closeModal}/>}
      
    </div>
  );
}

export default Todo;
