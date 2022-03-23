import React from 'react';
import { ButtonProps } from '../../../components/buttons/button.types';
import { useUpdateOrderStatus } from '../../../services/mutations/use-orders';
import Button from '../../../components/buttons';
import { ModalWrapper } from '../menu/menu-list.style';
import Title from '../../../components/typography/title';
import Modal from '../../../components/modal/modal';
import { useModal } from '../../../hooks/use-modal';
import { OrderStatusNum } from '../../../types/orders.types';

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
  const orderModal = useModal();

  const handleClick = () => {
    if (status === OrderStatusNum.CANCELED) {
      orderModal.open();
    } else {
      updateOrderStatus.mutate({ id, status, deliveryType: 1 });
    }
  };

  return (
    <>
      <Button
        buttonType={buttonType}
        loading={updateOrderStatus.isLoading}
        onClick={handleClick}
        startIcon={icon}
      >
        {text}
      </Button>
      <Modal open={orderModal.isOpen} onClose={orderModal.close}>
        <ModalWrapper>
          <Title size="sm" fontWeight="500">
            Are you sure you want to reject the order?
          </Title>
          <div>
            <Button buttonType="secondary" onClick={() => orderModal.close()}>
              Cancel
            </Button>
            <Button
              buttonType="primary"
              onClick={() =>
                updateOrderStatus.mutate({ id, status, deliveryType: 1 })
              }
            >
              Yes
            </Button>
          </div>
        </ModalWrapper>
      </Modal>
    </>
  );
};

export default ActiveOrderButton;
