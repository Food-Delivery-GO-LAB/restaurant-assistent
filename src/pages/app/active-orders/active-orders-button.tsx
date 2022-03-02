import React from 'react';
import { StyledButton } from './active-orders.style';
import { ButtonProps } from '../../../components/buttons/button.types';
import { useUpdateOrderStatus } from '../../../services/mutations/use-orders';
import { OrderStatusNum } from '../../../types/orders.types';
import CancelIcon from '../../../components/icons/cancel.icon';
import CheckIcon from '../../../components/icons/check.icon';

interface Props extends ButtonProps {
  id: string;
  text: string;
  status: 1 | 2 | 3 | 4 | 5;
  buttonType: 'primary' | 'text';
}

const ActiveOrderButton: React.FC<Props> = ({
  buttonType,
  text,
  status,
  id,
}) => {
  const updateOrderStatus = useUpdateOrderStatus();

  return (
    <StyledButton
      buttonType={buttonType}
      loading={updateOrderStatus.isLoading}
      onClick={() => updateOrderStatus.mutate({ id, status })}
    >
      {status === OrderStatusNum.IN_PROGRESS ? <CheckIcon /> : <CancelIcon />}
      {text}
    </StyledButton>
  );
};

export default ActiveOrderButton;
