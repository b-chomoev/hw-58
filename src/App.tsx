import { useState } from 'react';
import Modal from './components/Modal/Modal.tsx';
import AlertSuccess from './components/Alert/AlertSuccess.tsx';
import AlertWarning from './components/Alert/AlertWarning.tsx';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showWarningAlert, setShowWarningAlert] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const close = () => {
    return setShowModal(false);
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <button type="button" className="btn btn-primary btn-lg me-5" onClick={() => setShowModal(true)}>This is modal
          button
        </button>
        <button type='button' className='btn btn-warning  btn-lg me-5' onClick={() => setShowWarningAlert(true)}>This is
          warning type alert button
        </button>
        <button type='button' className='btn btn-success btn-lg' onClick={() => setShowSuccessAlert(true)}>This is
          success type alert button
        </button>
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <div className="modal-header">
          <h1 className="modal-title fs-5">Some kind of title</h1>
          <button type="button" className="btn-close" onClick={close}></button>
        </div>
        <div className="modal-body">
          This is modal content
        </div>
        <div className='modal-footer'>
          <button type='button' className='btn btn-danger' onClick={close}>Cancel</button>
        </div>
      </Modal>
      <AlertWarning show={showWarningAlert} type="warning">
        <div className='d-flex'>
          <p>This is a warning alert!</p>
          <button type="button" className="btn-close ms-auto" data-bs-dismiss="alert" aria-label="Close"
                  onClick={() => setShowWarningAlert(false)}></button>
        </div>
      </AlertWarning>
      <AlertSuccess show={showSuccessAlert} type="success">
        <div className='modal-body'>This is a success alert!</div>
      </AlertSuccess>
    </>
  );
};

export default App;