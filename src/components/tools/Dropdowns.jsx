import {Dropdown, DropdownButton} from 'react-bootstrap'

const ProfileDropdown = () => {

	return (
		<DropdownButton id="profile-dropdown" title="">
		  <Dropdown.Item href="#/action-1">Profil</Dropdown.Item>
		  <Dropdown.Item href="#/action-3">Archives</Dropdown.Item>
		  <Dropdown.Divider />
		  <Dropdown.Item href="#/action-3">Deconnexion</Dropdown.Item>
		</DropdownButton>
	)
}

const PostDropdown = ({ setDeleteModalShow }) => {

	return (
		<DropdownButton id="post-dropdown" title="">
		  <Dropdown.Item href="#/action-1" onClick={ () => setDeleteModalShow(true) }>Supprimer</Dropdown.Item>
		  <Dropdown.Item href="#/action-2">Archiver</Dropdown.Item>
		</DropdownButton>
	)
}

export { ProfileDropdown, PostDropdown }