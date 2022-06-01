import styled from 'styled-components';

export const StyledButton = styled.button`
  margin-left: 20px;
  width: 25px;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 50px;
  border: none;
  color: white;
  display: flex;
  justyfy-content: center;
  align-items: center;
  svg {
    width: 100%;
    height: 100%;
  }
`;
