import { ReactElement } from 'react';
import { UserProfile } from '../../services/github/user/show/types';
import { formatDate } from '../../utils';

import * as Styled from './styles';

interface Props {
  user: UserProfile;
}

const CardUserProfile = ({ user }: Props): ReactElement => {
  return (
    <Styled.Container>
      <Styled.Avatar src={user.avatar_url} />

      <Styled.InfoContainer>
        <Styled.Name>{user.name}</Styled.Name>
        <Styled.Title> Public repositories: </Styled.Title>
        <Styled.Text> {user.public_repos} </Styled.Text>
        <Styled.Title> followers: </Styled.Title>
        <Styled.Text>{user.followers}</Styled.Text>
        <Styled.Title> Since: </Styled.Title>
        <Styled.Text>{formatDate(user.created_at)}</Styled.Text>
      </Styled.InfoContainer>
    </Styled.Container>
  );
};

export default CardUserProfile;
