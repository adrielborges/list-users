import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
`;

export const Avatar = styled.img`
  width: 300px;
  height: 300px;

  border-radius: 16px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0px 36px;
`;

export const Name = styled.h2`
  margin-bottom: 32px;
`;

export const Title = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  color: var(--text-title);
`;

export const Text = styled.span`
  margin-bottom: 16px;
`;
