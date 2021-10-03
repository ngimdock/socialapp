import { connect } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'
import { deletePost } from '../../redux/post/postAction'
import { hideAvailableModal } from '../../redux/modal/modalAction'

let NotAvailableModal = ({ modalState, hideAvailableModal }) => {
	return (
		<Modal
        show={modalState.show}
        onHide={()=> hideAvailableModal()}
        keyboard={false}
        centered
        animation={false}
      >
	        <Modal.Header closeButton>
	          <Modal.Title>Desolé🤧</Modal.Title>
	        </Modal.Header>
	        <Modal.Body>
	          Cette fonctionalité n'a pas encore été implementé
	        </Modal.Body>
	        <Modal.Footer>
	          <Button variant="primary" onClick={ () => hideAvailableModal() }>ok</Button>
	        </Modal.Footer>
      </Modal>
    )
}

let ConfirmDeletePostModal = (props) => {
	const { id, name, deleteOnePost, show, setShow, onHide } = props

	//handler
	const handleDelete = (id) => {
		deleteOnePost(id)
		setShow(false)
	}

	return (
		<Modal
	      show={show}
	      onHide={onHide}
	      size="sm"
	      aria-labelledby="contained-modal-title-vcenter"
	      centered
	      animation={false}

	    >

		      <Modal.Body>
		        Supprimer le post de <span className="name">{ name }</span> ?
		      </Modal.Body>
		      <Modal.Footer>
		        <Button onClick={() => handleDelete(id)} variant="danger">Supprimer</Button>
		        <Button onClick={props.onHide}>anuller</Button>
		      </Modal.Footer>
	    </Modal>
	)
}

const mapStateToProps = (state) => {
	return {
		modalState: state.modal
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		deleteOnePost: (id) => dispatch(deletePost(id)),
		hideAvailableModal: () => dispatch(hideAvailableModal())
	}
}

NotAvailableModal = connect(mapStateToProps, mapDispatchToProps)(NotAvailableModal)
ConfirmDeletePostModal = connect(null, mapDispatchToProps)(ConfirmDeletePostModal)


export {
	ConfirmDeletePostModal,
	NotAvailableModal
}