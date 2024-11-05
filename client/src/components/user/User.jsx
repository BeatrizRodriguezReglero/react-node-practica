
import { useEffect } from 'react';
import { URLS } from '../../constants/urls';
import { deleteData, getData } from '../../utils/api';
import {
	StyledActionContainer,
	StyledIcon,
	StyledIconEdit,
	StyledUser,
    StyledUserContainer,
	StyledUserName,
	StyledUserNameContainer,
	StyledUserEmail
} from './user.styles';

const User=({
	users,
	setUsers,
	editUserMenu,
	setEditUserMenu,
	setEditUser
})=>{
    useEffect(() => {
		getUsers(setUsers);
	}, []);
    return(
        <>
        <StyledUserContainer>
			{users.map((user) => (
				<StyledUser key={user.userId}>
					<StyledUserNameContainer>
						<StyledUserName>{user.name}</StyledUserName>
						<StyledUserEmail>@{user.email}</StyledUserEmail>
					</StyledUserNameContainer>
					<StyledActionContainer>
						<StyledIconEdit
							onClick={() =>
								handleEdit(editUserMenu, setEditUserMenu, setEditUser, user)
							}
							src='/images/edit-icon.svg'
							alt=''
						/>
						 
        <StyledIcon
		onClick={() => {
		  console.log("user en onClick:", user); // Verifica que el objeto user tiene el userId
		  console.log("userId que se va a pasar:", user.userId); // Verifica si userId está disponible
		  if (user.userId) {
			deleteUsers(setUsers, user.userId);
		  } else {
			console.error("No se ha pasado un userId válido:", user);
		  }
		}}
		src='/images/delete-icon.svg'
		alt=''
	  />
						
					</StyledActionContainer>
				</StyledUser>
			))}
		</StyledUserContainer>
           </>)
}
const getUsers = async setUsers => {
	try {
		const usersData = await getData(URLS.USER_API);
		console.log("Usuarios recibidos:", usersData);
		if (Array.isArray(usersData)) {
			setUsers(usersData);
		} else {
			console.error("La respuesta no es un array:", usersData);
			setUsers([]); // Establecer a un array vacío
		}
	} catch (err) {
		console.error("Error al obtener usuarios:", err);
		setUsers([]); // Establecer a un array vacío en caso de error
	}
};

const deleteUsers = async (setUsers, userId) => {
	console.log("Intentando eliminar el usuario con ID:", userId); // Verificar que el ID es válido
	try {
	  if (!userId) {
		console.error("No se ha recibido un userId válido para eliminar");
		return;
	  }
	  
	  // Aquí hacemos la llamada para eliminar el usuario
	  const users = await deleteData(`${URLS.USER_API}/${userId}`);
	  console.log("Usuarios después de la eliminación:", users); // Verificar que la respuesta es correcta
	  setUsers(users); // Actualiza el estado de los usuarios después de la eliminación
	} catch (err) {
	  console.error("Error al eliminar el usuario:", err);
	}
  };

const handleEdit = (editUserMenu, setEditUserMenu, setEditUser, user) => {
	setEditUserMenu(!editUserMenu);
	setEditUser(user);
};
    
export default User