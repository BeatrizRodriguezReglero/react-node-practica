import { URLS } from '../../constants/urls';
import { postData } from '../../utils/api';
import {
	StyledForm,
	StyledFormInput,
	StyledFormSubmit
} from './newUserForm.styles';

const NewUserForm = ({ setUsers, newUser, setNewUser, setNewUserMenu }) => {
	return (
		<StyledForm
			onSubmit={e => handleSubmit(e, setUsers, newUser, setNewUserMenu)}
		>
			<StyledFormInput
				onChange={e => setNewUser({ ...newUser, name: e.target.value })}
				type='text'
				placeholder='Name'
			/>
			<StyledFormInput
				onChange={e => setNewUser({ ...newUser, email: e.target.value })}
				type='text'
				placeholder='Username'
			/>
			
			<StyledFormSubmit type='submit' value='CREATE USER' />
		</StyledForm>
	);
};

const handleSubmit = async (event, setUsers, newUser, setNewUserMenu) => {
	event.preventDefault();
	try {
		const data = await postData(URLS.USER_API, newUser);
		if (Array.isArray(data)) {
			setUsers(data); // Si postData devuelve un array
		} else {
			setUsers(prevUsers => [...prevUsers, data]); // Si devuelve un solo objeto
		}
	} catch (err) {
		console.error(err);
	}
	setNewUserMenu(false);
};

export default NewUserForm;