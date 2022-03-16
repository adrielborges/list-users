import { ReactElement } from 'react';

import * as Styles from './styles';

interface Props {
  user: {
    avatar_url: string;
    login: string;
  };
  onClick: () => void;
}

const CardUser = ({ user, onClick }: Props): ReactElement => {
  return (
    <Styles.Container onClick={onClick}>
      <Styles.Avatar width={200} height={200} src={user.avatar_url} />
      <Styles.Name> {user.login} </Styles.Name>
    </Styles.Container>
  );
};

export default CardUser;
