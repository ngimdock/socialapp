import { connect } from 'react-redux'
import {Dropdown, DropdownButton} from 'react-bootstrap'
import { deletePost } from '../../redux/post/postAction'

const ProfileDropdown = () => {

	return (
		<DropdownButton id="dropdown-basic-button" title="">
		  <Dropdown.Item href="#/action-1">Profil</Dropdown.Item>
		  <Dropdown.Item href="#/action-2">Amis</Dropdown.Item>
		  <Dropdown.Item href="#/action-3">Archives</Dropdown.Item>
		  <Dropdown.Divider />
		  <Dropdown.Item href="#/action-3">Deconnexion</Dropdown.Item>
		</DropdownButton>
	)
}

let PostDropdown = ({ id, deleteOnePost }) => {

	return (
		<DropdownButton id="dropdown-basic-button" title="">
		  <Dropdown.Item href="#/action-1" onClick={ () => deleteOnePost(id) }>Supprimer</Dropdown.Item>
		  <Dropdown.Item href="#/action-2">Archiver</Dropdown.Item>
		</DropdownButton>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		deleteOnePost: (id) => dispatch(deletePost(id))
	}
}

PostDropdown = connect(null, mapDispatchToProps)(PostDropdown)

export { ProfileDropdown, PostDropdown }