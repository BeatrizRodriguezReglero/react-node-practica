import { useState } from "react";
import User from "../user/User"
import { StyledAddButton, StyledHeader, StyledMainContainer } from "./mainContainer.styles"
import Nav from "../nav/Nav";
import NewUserForm from "../newUserForm/NewUserForm";
import EditUserForm from "../editUserForm/EditUserForm";

const MainContainer=()=>{
    const [users, setUsers] = useState([]);
	const [newUserMenu, setNewUserMenu] = useState(false);
	const [editUserMenu, setEditUserMenu] = useState(false);
	const [editUser, setEditUser] = useState();
	const [newUser, setNewUser] = useState({ name: '', email: '' });
    return(<>
        <StyledMainContainer>
        <Nav newUserMenu={newUserMenu} setNewUserMenu={setNewUserMenu} />
			{newUserMenu && (
				<NewUserForm
					setUsers={setUsers}
					newUser={newUser}
					setNewUser={setNewUser}
					setNewUserMenu={setNewUserMenu}
				/>
			)}
			{editUserMenu && (
				<EditUserForm
					setUsers={setUsers}
					newUser={newUser}
					setNewUser={setNewUser}
					setEditUserMenu={setEditUserMenu}
					editUser={editUser}
				/>
			)}
			<User
				users={users}
				setUsers={setUsers}
				editUserMenu={editUserMenu}
				setEditUserMenu={setEditUserMenu}
				setEditUser={setEditUser}
			/>
           
            
            
        </StyledMainContainer>
    </>)
}
export default MainContainer