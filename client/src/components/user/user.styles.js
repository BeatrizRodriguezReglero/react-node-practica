import styled from 'styled-components';

const StyledUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  gap: 15px;

  p {
    font-size: 15px;
    padding: 0 15px;
  }
`;

const StyledUser = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  border-radius: 8px;
  padding-right: 10px;
`;

const StyledUserNameContainer = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
`;

const StyledUserName = styled.p`
  font-size: 12px;
  font-weight: 800;
  margin: 0;
`;

const StyledUserEmail = styled.p`
  font-size: 10px;
  color: gray;
  margin: 0;
`;

const StyledActionContainer = styled.div`
  display: flex;
  justify-content: right;
  gap: 0.3rem;
`;
const StyledIconEdit = styled.img`
  cursor: pointer;
  width: 25px;
`;
const StyledIcon = styled.img`
  cursor: pointer;
  width: 20px;
`;

export {
  StyledUserContainer,
  StyledUser,
  StyledUserNameContainer,
  StyledUserName,
  StyledUserEmail,
  StyledActionContainer,
  StyledIcon,
  StyledIconEdit
};
