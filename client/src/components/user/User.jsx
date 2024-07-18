import { StyledUserContainer } from "./user.styles"

const User=()=>{
    return(
        <>
            <StyledUserContainer>
                <p>Carlos</p>
                <p>Acebron</p>
                <p>carlos@hotmail.com</p>
                <p>686475293</p>
                <div>
                    <button>Edit</button>
                </div>
                <div>
                    <button>Delete</button>
                </div>
            </StyledUserContainer>
        </>
    )
}
export default User