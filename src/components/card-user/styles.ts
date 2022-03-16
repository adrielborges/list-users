import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 8px;
  padding-bottom: 16px;

  border: 1px outset #ccc;
  border-radius: 12px;

  background-color: #ccc;

  cursor: pointer;
`;

export const Avatar = styled.img`
  border-radius: 12px 12px 0 0;
  margin-bottom: 16px;
`;

export const Name = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;
