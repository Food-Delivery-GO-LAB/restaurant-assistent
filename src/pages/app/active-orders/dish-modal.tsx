import React from 'react';
import Title from '../../../components/typography/title';
import {
  DishContainer,
  DishWrapper,
  ModalWrapper,
} from './active-orders.style';
import { useSingleOrder } from '../../../services/queries/use-orders';
import Text from '../../../components/typography/text';
import Spinner from '../../../components/loaders/spinner';

const DishModal: React.FC<{ id: string }> = ({ id }) => {
  const dishes = useSingleOrder(id);

  return (
    <ModalWrapper>
      <Spinner loading={dishes.isLoading} height="10vh">
        <Title size="md">Dishes</Title>
        <DishWrapper>
          <DishContainer>
            <Text color="primary">Dish</Text>
            <Text color="primary">Amount</Text>
          </DishContainer>
          {dishes.data &&
            dishes.data.dishes.map((dish) => (
              <DishContainer key={dish.name}>
                <div>{dish.name}</div>
                <div>{dish.amount}</div>
              </DishContainer>
            ))}
        </DishWrapper>
      </Spinner>
    </ModalWrapper>
  );
};

export default DishModal;
