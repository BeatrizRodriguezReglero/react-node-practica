import { useEffect } from 'react';
import { URLS } from '../../constants/urls';
import { patchData } from '../../utils/api';
import {
  StyledForm,
  StyledFormInput,
  StyledFormSubmit
} from './editUserForm.styles';

const EditUserForm = ({
  setUsers,
  newUser,
  setNewUser,
  setEditUserMenu,
  editUser
}) => {

  // Si editUser cambia, inicializa newUser con los datos de editUser
  useEffect(() => {
    setNewUser({
      name: editUser.name,
      email: editUser.email
    });
  }, [editUser, setNewUser]);

  // Manejo del cambio en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Función de submit para actualizar el usuario
  const handleSubmit = async (event) => {
	event.preventDefault();
	try {
	  // Realizar la solicitud PATCH para actualizar el usuario
	  const updatedUsers = await patchData(`${URLS.USER_API}/${editUser.userId}`, newUser);
  
	  // Verificar si la respuesta contiene la lista completa de usuarios
	  if (Array.isArray(updatedUsers)) {
		// Buscar el usuario actualizado en el array y actualizar el estado
		const updatedUser = updatedUsers.find(user => user.userId === editUser.userId);
  
		if (updatedUser) {
		  // Actualizamos el estado de users con el usuario modificado
		  setUsers(prevUsers => 
			prevUsers.map(user => 
			  user.userId === updatedUser.userId ? updatedUser : user // Reemplazamos el usuario actualizado
			)
		  );
		} else {
		  console.error("No se encontró el usuario actualizado en la respuesta.");
		}
	  } else {
		console.error('Respuesta inesperada del servidor:', updatedUsers);
	  }
  
	  // Cerrar el formulario de edición
	  setEditUserMenu(false);
	} catch (err) {
	  console.error("Error al actualizar el usuario:", err);
	}
  };

  return (
    <StyledForm onSubmit={handleSubmit }>
      {/* Campo para el nombre del usuario */}
      <StyledFormInput
        name="name"
        value={newUser.name || ''}
        onChange={handleChange}
        type="text"
        placeholder="Name"
      />
      
      {/* Campo para el correo electrónico del usuario */}
      <StyledFormInput
        name="email"
        value={newUser.email || ''}
        onChange={handleChange}
        type="email"
        placeholder="Email"
      />

      {/* Botón para enviar el formulario */}
      <StyledFormSubmit type="submit" value="Edit User" />
    </StyledForm>
  );
};

export default EditUserForm;