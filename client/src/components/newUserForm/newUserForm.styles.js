import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  width: 400px;
  height: 400px;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  filter: drop-shadow(0 0 6rem #d8d8d8);
  padding: 20px;
  border-radius: 8px;
`;

const StyledFormInput = styled.input`
  height: 40px;
  padding-left: 16px;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;

  &::placeholder {
    color: #cbcbcb;
  }
`;

const StyledFormSubmit = styled.input`
  height: 40px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 1px;
  color: white;
  background-color: #559ff5;
`;

export { StyledForm, StyledFormInput, StyledFormSubmit };
