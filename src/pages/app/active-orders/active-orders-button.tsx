import React from 'react';
import { useSnackbar } from 'notistack';
import { useQueryClient } from 'react-query';
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
  const { enqueueSnackbar } = useSnackbar();

  const handleMessage = () => {
    switch (status) {
      case OrderStatusNum.IN_PROGRESS:
        return 'Order accepted. Order status changed to "In progress"';
      case OrderStatusNum.READY_FOR_DELIVERY:
        return 'Order is ready to be delivered';
      default:
        return '';
    }
  };

  const handleStatusChange = () => {
    if (status === OrderStatusNum.CANCELED) {
      orderModal.open();
    } else {
      updateOrderStatus.mutate(
        { id, status, deliveryType: 1 },
        {
          onSuccess() {
            enqueueSnackbar(handleMessage(), { variant: 'success' });
          },
        }
      );
    }
  };

  const handleReject = () => {
    updateOrderStatus.mutate(
      { id, status, deliveryType: 1 },
      {
        onSuccess() {
          enqueueSnackbar('Order canceled', { variant: 'success' });
        },
      }
    );
  };

  return (
    <>
      <Button
        buttonType={buttonType}
        loading={updateOrderStatus.isLoading}
        onClick={handleStatusChange}
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
            <Button buttonType="primary" onClick={handleReject}>
              Yes
            </Button>
          </div>
        </ModalWrapper>
      </Modal>
    </>
  );
};

export default ActiveOrderButton;
