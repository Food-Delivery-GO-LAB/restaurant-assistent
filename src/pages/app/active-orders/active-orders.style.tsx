import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/variables';
import { IOrderStatus } from '../../../types/orders.types';
import { changeStatusColor } from '../../../utils/check-order-status';
import Button from '../../../components/buttons/button';

export const Wrapper = styled.div`
  padding: 1em 3em;

  h2 {
    margin-bottom: 16px;
  }
`;

export const StyledStatus = styled.span<IOrderStatus>`
  padding: 7px 10px;
  width: 100%;
  background-color: ${(props) => changeStatusColor(props)};
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

export const StyledButton = styled(Button)`
  svg {
    margin-right: 5px;
  }
`;
