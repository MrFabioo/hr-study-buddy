import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import {
  Wrapper,
  StyledList,
} from 'components/organisms/UsersList/UsersList.styled';

const UsersList = () => {
  return (
    <Wrapper>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default UsersList;
