import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 32px;
`;

export const Header = styled.header`
  margin-bottom: 16px;
`;

export const Title = styled.h1`
  margin-bottom: 16px;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 12px 8px;
  margin-bottom: 10px;
`;

export const SearchIcon = styled(FiSearch)`
  background: transparent;
  color: var(--text-body);
  margin-right: 8px;
`;

export const Input = styled.input`
  width: 100%;
  border: 0;
  background: transparent;
  color: var(--text-body);

  ::placeholder {
    color: var(--text-title);
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: var(--text-title);
  }
`;

export const ContentContainer = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: center;
`;
