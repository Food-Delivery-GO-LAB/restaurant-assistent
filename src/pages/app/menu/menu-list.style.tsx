import styled from 'styled-components';
import Title from '../../../components/typography/title';
import Text from '../../../components/typography/text';
import { colors } from '../../../styles/variables';
import { DishStatus } from '../../../types/dish.types';
import Button from '../../../components/buttons';

export const Wrapper = styled.div`
  padding: 2em 3em;
`;

export const TitleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;

  button {
    width: max-content !important;
  }

  @media (min-width: 768px) {
    width: 100%;
    padding-right: 20%;
  }
`;

export const MenuTitle = styled(Title)`
  text-align: left;
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
    width: 100%;
    padding-right: 20%;
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
  gap: 1rem;
  overflow: hidden;
  &:hover {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1), 0 1px 12px 2px rgba(0, 0, 0, 0.2);
  }
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
    width: 50%;
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

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const StatusText = styled(Text)<{ status: DishStatus }>`
  && {
    color: ${(props) =>
      props.status === 'available' ? colors.green : colors.grey};
  }
`;

export const DeleteButton = styled(Button)`
  && {
    padding: 10px !important;
    width: max-content;
    min-width: unset;
    @media (max-width: 768px) {
      width: 50%;
      svg {
        margin-right: 8px;
      }
    }
  }
`;

export const HiddenText = styled.span`
  display: none;
  @media (max-width: 768px) {
    display: initial;
  }
`;

export const ModalWrapper = styled.div`
  width: 400px;
  min-height: 170px;
  padding: 1em 2.9em;
  display: flex;
  flex-direction: column;

  h2 {
    margin-top: 1.7em;
  }

  div {
    margin-top: 2em;
    display: flex;
    gap: 10px;
  }
  button {
    width: 100%;
  }
`;
