import React from 'react';
import { StyledButton } from './active-orders.style';
import { ButtonProps } from '../../../components/buttons/button.types';
import { useUpdateOrderStatus } from '../../../services/mutations/use-orders';

interface Props extends ButtonProps {
  id: string;
  icon: JSX.Element;
  text: string;
  status: 1 | 2 | 3 | 4 | 5;
  buttonType: 'primary' | 'text';
}

const ActiveOrderButton: React.FC<Props> = ({
  buttonType,
  text,
  status,
  id,
  icon,
}) => {
  const updateOrderStatus = useUpdateOrderStatus();

  return (
    <StyledButton
      buttonType={buttonType}
      loading={updateOrderStatus.isLoading}
      onClick={() => updateOrderStatus.mutate({ id, status })}
    >
      {icon}
      {text}
    </StyledButton>
  );
};

export default ActiveOrderButton;
