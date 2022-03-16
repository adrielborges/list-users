import { ReactElement, useEffect, useState } from 'react';
import CardUser from '../../components/card-user';
import CardUserProfile from '../../components/card-user-profile';
import Modal from '../../components/modal';
import { UserService } from '../../services/github/user';
import { User } from '../../services/github/user/index/types';
import { UserProfile } from '../../services/github/user/show/types';
import { deBounce } from '../../utils';

import * as Styles from './styles';

const Home = (): ReactElement => {
  const [user, setUser] = useState(''); // change
  const [usersList, setUsersList] = useState<User[]>([]);
  const [userResponse, setUserResponse] = useState<User[]>([]);
  const [userSelected, setUserSelected] = useState<UserProfile>(
    {} as UserProfile,
  );
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleGetUsers = async (): Promise<void> => {
    try {
      const { data } = await UserService.index();

      setUserResponse(data);
      setUsersList(data);
    } catch (error) {
      console.log(error); //TODO Add Toast
    }
  };

  const filterUser = (filterUser: string) => {
    const filteredUsers = userResponse.filter(user =>
      user.login.toLowerCase().includes(filterUser),
    );
    setUsersList(filteredUsers);
  };

  const handleSelectedUser = async (user: User) => {
    try {
      const { data } = await UserService.show(user.login);

      setUserSelected(data);
      setIsModalVisible(true);
    } catch (error) {
      console.log(error); //TODO Add Toast
    }
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.Title>Please, select or search a user Profile</Styles.Title>

        <Styles.InputContainer>
          <Styles.SearchIcon size={20} />
          <Styles.Input
            placeholder="Type a user"
            value={user}
            onChange={e => {
              setUser(e.target.value);
              deBounce(() => filterUser(e.target.value), 1000);
            }}
          />
        </Styles.InputContainer>
      </Styles.Header>

      <Styles.ContentContainer>
        {usersList.map(user => (
          <CardUser
            key={user.id}
            user={user}
            onClick={() => handleSelectedUser(user)}
          />
        ))}
      </Styles.ContentContainer>

      {isModalVisible && (
        <Modal closeModal={() => setIsModalVisible(false)}>
          <CardUserProfile user={userSelected} />
        </Modal>
      )}
    </Styles.Container>
  );
};

export default Home;
