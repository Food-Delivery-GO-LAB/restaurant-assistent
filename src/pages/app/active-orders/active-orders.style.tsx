import styled from 'styled-components';
import { colors } from '../../../styles/variables';
import { Status } from '../../../types/orders.types';
import { changeStatusColor } from '../../../utils/check-order-status';

export const Wrapper = styled.div`
  padding: 2em 3em;

  h2:first-of-type {
    margin-bottom: 24px;
  }
`;

export const StyledStatus = styled.span<{ status: Status }>`
  padding: 7px 10px;
  width: 100%;
  background-color: ${(props) => changeStatusColor(props.status)};
  border-radius: 4px;
  text-align: center;
  color: ${colors.white};
`;

export const ButtonContainer = styled.div`
  display: flex;
  button:first-of-type {
    margin-right: 10px;
  }
  button:last-of-type {
    border: 1px solid ${colors.dark};
  }
`;

export const ModalWrapper = styled.div`
  width: 400px;
  min-height: 200px;
  padding: 1em 2.5em;
  display: flex;
  flex-direction: column;
`;

export const DishWrapper = styled.div`
  margin-top: 1.5em;
`;

export const DishContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
