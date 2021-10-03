import {Dropdown, DropdownButton} from 'react-bootstrap'
import { connect } from 'react-redux'
import { showAvailableModal } from '../../redux/modal/modalAction'

let ProfileDropdown = ({ showAvailableModal }) => {

	return (
		<DropdownButton id="profile-dropdown" title="">
		  <Dropdown.Item href="#/action-1" onClick={ () => showAvailableModal() }>Profil</Dropdown.Item>
		  <Dropdown.Item href="#/action-3" onClick={ () => showAvailableModal() }>Archives</Dropdown.Item>
		  <Dropdown.Divider />
		  <Dropdown.Item href="#/action-3" onClick={ () => showAvailableModal() }>Deconnexion</Dropdown.Item>
		</DropdownButton>
	)
}

let PostDropdown = ({ setDeleteModalShow, showAvailableModal }) => {


	return (
		<DropdownButton id="post-dropdown" title="">
		  <Dropdown.Item href="#/action-1" onClick={ () => setDeleteModalShow(true) }>Supprimer</Dropdown.Item>
		  <Dropdown.Item href="#/action-2" onClick={ () => showAvailableModal() }>Archiver</Dropdown.Item>
		</DropdownButton>
	)
}

const mapDispatchToProps = (dispatch) => {
    return {
        showAvailableModal: () => dispatch(showAvailableModal())
    }
}


ProfileDropdown = connect(null, mapDispatchToProps)(ProfileDropdown)
PostDropdown = connect(null, mapDispatchToProps)(PostDropdown)

export { ProfileDropdown, PostDropdown }