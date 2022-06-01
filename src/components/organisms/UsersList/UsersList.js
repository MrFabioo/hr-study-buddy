import React from 'react';
// import PropTypes from 'prop-types';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styled';
// import { UserShape } from 'types';
import { Title } from 'components/atoms/Title/Title';

const UsersList = ({ users, deleteUser }) => {
  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem
            deleteUser={deleteUser}
            key={userData.name}
            userData={userData}
          />
        ))}
      </StyledList>
    </>
  );
};
// Wywala APKE
// UsersList.propTypes = {
//   users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
//   deleteUser: PropTypes.func,
// };

export default UsersList;
