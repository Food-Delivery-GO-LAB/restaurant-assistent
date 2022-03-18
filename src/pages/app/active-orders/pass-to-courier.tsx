import * as React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import { Checkbox } from '@mui/material';
import { useModal } from '../../../hooks/use-modal';
import Button from '../../../components/buttons';
import Modal from '../../../components/modal/modal';
import Delivery from '../delivery/delivery';

const StyledBox = styled(Box)`
  display: flex;
  gap: 10px;
`;

const StyledCheckbox = styled(Checkbox)`
  padding: 4px;
`;

const PassToCourier: React.FC<{ id: string; orderId: number }> = ({
  id,
  orderId,
}) => {
  const [checked, setChecked] = React.useState(true);
  const deliverModal = useModal();
  return (
    <StyledBox>
      <StyledCheckbox
        checked={checked}
        onChange={() => setChecked((prev) => !prev)}
      />
      {!checked && (
        <Button buttonType="primary" onClick={() => deliverModal.open()}>
          Pass to Courier
        </Button>
      )}
      <Modal open={deliverModal.isOpen} onClose={deliverModal.close}>
        <Delivery id={id} orderId={orderId} />
      </Modal>
    </StyledBox>
  );
};

export default PassToCourier;
