import * as React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import { Checkbox } from '@mui/material';
import { useModal } from '../../../hooks/use-modal';
import Button from '../../../components/buttons';
import Modal from '../../../components/modal';
import Delivery from '../delivery/delivery';

const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const StyledCheckbox = styled(Checkbox)`
  padding: 4px;
`;

interface Props {
  id: string;
  orderId: number;
  onChecked: (value: boolean) => void;
}

const PassToCourier: React.FC<Props> = ({ id, orderId, onChecked }) => {
  const [checked, setChecked] = React.useState(true);
  const deliverModal = useModal();

  const handleChange = () => {
    onChecked(checked);
    setChecked((prev) => !prev);
  };

  return (
    <StyledBox>
      <StyledCheckbox checked={checked} onChange={handleChange} />
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
