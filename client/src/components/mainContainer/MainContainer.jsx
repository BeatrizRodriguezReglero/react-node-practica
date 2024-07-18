import User from "../user/User"
import { StyledAddButton, StyledHeader, StyledMainContainer } from "./mainContainer.styles"

const MainContainer=()=>{
    return(<>
        <StyledMainContainer>
            <StyledHeader>
                <p>Nombre</p>
                <p>Apellidos</p>
                <p>Email</p>
                <p>Telefono</p>  
            </StyledHeader>
            <div>
               <User/> 
            </div>
            <div>
                <StyledAddButton>Añadir usuario</StyledAddButton>
            </div>
            
            
        </StyledMainContainer>
    </>)
}
export default MainContainer