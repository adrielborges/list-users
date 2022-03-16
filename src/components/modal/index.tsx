import { ReactElement } from 'react';

import * as Styles from './styles';

interface Props {
  closeModal(): void;
  children: ReactElement;
}

const Modal = ({ children, closeModal }: Props): ReactElement => {
  return (
    <Styles.Container onClick={closeModal}>
      <Styles.Content>{children}</Styles.Content>
    </Styles.Container>
  );
};

export default Modal;
