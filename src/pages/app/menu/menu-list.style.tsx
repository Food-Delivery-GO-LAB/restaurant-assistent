import styled from 'styled-components';
import Title from '../../../components/typography/title';
import Text from '../../../components/typography/text';
import { colors } from '../../../styles/variables';

export const Wrapper = styled.div`
  padding: 2em 3em;
`;
export const MenuTitle = styled(Title)`
  text-align: left;
  margin-bottom: 5px;
`;

export const MenuWrapper = styled.div`
  width: 100%;
  padding: 0 1rem 1rem;
  height: calc(100vh - (3rem + 4em + 50px));
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
`;

export const MenuContainer = styled.ul`
  list-style: none;
`;

export const StyledList = styled.li`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 4px;
  margin: 1.5rem 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 1px 12px 2px rgba(0, 0, 0, 0.2);
  gap: 1rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 16rem;
    object-fit: contain;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    img {
      width: 30%;
      height: 12rem;
    }
  }
`;

export const DescriptionContainer = styled.div`
  @media (min-width: 768px) {
    width: 70%;
    display: flex;
    justify-content: space-between;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  text-align: left;
  padding: 1.5rem 2rem;

  p {
    margin: 5px 0;
  }
  h2 {
    text-align: left;
  }
  @media (min-width: 768px) {
    padding: 1.5rem 0;
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem 2rem;

  button {
    width: 100%;
  }

  p {
    margin-bottom: 10px;
  }

  @media (min-width: 768px) {
    align-items: flex-end;
    p {
      margin-top: 35px;
    }
    button {
      width: unset;
    }
  }
`;

export const StatusText = styled(Text)<{ status: boolean }>`
  && {
    color: ${(props) => (props.status ? colors.green : colors.grey)};
  }
`;
