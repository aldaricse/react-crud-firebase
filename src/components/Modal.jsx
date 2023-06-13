const Modal = ({ open = false, message, onDelete, onClose }) => {
  return (
    <>
      {
        open &&
        <>
          <div className="modal fade show" style={{ display: 'block' }}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Confirm Action</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => onClose()}>
                    <span aria-hidden="true"></span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>{message}</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => onDelete()}>
                    Yes
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={() => onClose()}
                  >Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </>
      }
    </>
  )
}

export default Modal