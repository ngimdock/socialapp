import { connect } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'
import { deletePost } from '../../redux/post/postAction'

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

const mapDispatchToProps = (dispatch) => {
	return {
		deleteOnePost: (id) => dispatch(deletePost(id))
	}
}

ConfirmDeletePostModal = connect(null, mapDispatchToProps)(ConfirmDeletePostModal)


export {
	ConfirmDeletePostModal
}