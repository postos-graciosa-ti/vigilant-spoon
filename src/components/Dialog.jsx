import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const Dialog = (props) => {
  const {
    dialogOpen,
    handleCloseDialog,
    title,
    children,
    type = "add/edit",
    handleSubmitDialog,
  } = props

  return (
    <>
      <Modal
        show={dialogOpen}
        onHide={handleCloseDialog}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {children}
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="light"
            onClick={handleCloseDialog}
          >
            Fechar
          </Button>

          <Button
            variant={type == "add/edit" && "success" || "danger"}
            onClick={handleSubmitDialog}
          >
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Dialog
