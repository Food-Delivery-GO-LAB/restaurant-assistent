import React from 'react';
import { ButtonProps } from '../../../components/buttons/button.types';
import { useUpdateOrderStatus } from '../../../services/mutations/use-orders';
import Button from '../../../components/buttons';

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
    <Button
      buttonType={buttonType}
      loading={updateOrderStatus.isLoading}
      onClick={() => updateOrderStatus.mutate({ id, status })}
      startIcon={icon}
    >
      {text}
    </Button>
  );
};

export default ActiveOrderButton;
