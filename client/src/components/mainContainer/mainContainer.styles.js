import styled from 'styled-components';

const StyledMainContainer = styled.div`
  width: 450px;
  padding: 20px;
  margin: 20px 10px;
  background-color: #c3dce0;
  border-radius: 15px;
  box-shadow: 7px 6px 39px -15px rgba(117, 117, 117, 1);
`;

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;

  p {
    color: #265c80;
    font-size: 20px;
    font-weight: bold;
    padding: 0 10px;
  }
`;
const StyledAddButton = styled.button`
  background-color: #16b529;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 2px 2px 5px #6e9499;
  margin: 10px 0;
`;

export { StyledMainContainer, StyledHeader, StyledAddButton };
