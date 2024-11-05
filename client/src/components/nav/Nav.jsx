import {
	StyledNav,
	StyledButton,
	StyledTitle
} from './nav.styles';

const Nav = ({ newUserMenu, setNewUserMenu }) => {
	return (
		<StyledNav>
			<div>
				<StyledTitle>Usuarios registrados</StyledTitle>
			</div>
			<StyledButton onClick={() => setNewUserMenu(!newUserMenu)}>
				+ NEW USER
			</StyledButton>
		</StyledNav>
	);
};

export default Nav;