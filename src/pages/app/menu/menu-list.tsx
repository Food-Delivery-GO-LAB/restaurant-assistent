import React from 'react';
import Title from '../../../components/typography/title';
import Spinner from '../../../components/loaders/spinner';
import { useDishes } from '../../../services/queries/use-dish';
import {
  DescriptionContainer,
  LeftSide,
  MenuContainer,
  MenuTitle,
  MenuWrapper,
  RightSide,
  StatusText,
  StyledList,
  Wrapper,
} from './menu-list.style';
import Text from '../../../components/typography/text';
import Button from '../../../components/buttons';
import EditIcon from '../../../components/icons/edit.icon';

const MenuList = () => {
  const dishes = useDishes('02fb44e3-5f18-45eb-80a1-d8b4e8a22f1b');

  return (
    <Wrapper>
      <Spinner loading={dishes.isLoading}>
        <MenuTitle position="left" size="md">
          Restaurant Menu
        </MenuTitle>
        <MenuWrapper>
          <MenuContainer>
            {dishes.data &&
              dishes.data.map((dish) => (
                <StyledList key={dish.id}>
                  <img alt={dish.name} src={dish.image} />
                  <DescriptionContainer>
                    <LeftSide>
                      <div>
                        <Title size="sm">{dish.name}</Title>
                        <Text size="md">🍽️ {dish.type}</Text>
                        <Text size="md">
                          💬{' '}
                          {dish.description ??
                            'Here should be very informative description'}
                        </Text>
                        <Text size="md">
                          ⚖️ {dish.weight ?? 'Weight not specified'}
                        </Text>
                        <StatusText size="md" status={dish.status}>
                          {dish.status ? '✔️ Available' : '❌ Unavailable'}
                        </StatusText>
                      </div>
                    </LeftSide>
                    <RightSide>
                      <Text size="md">
                        <b>{dish.cost} BYN</b>
                      </Text>
                      <Button buttonType="primary" startIcon={<EditIcon />}>
                        Edit
                      </Button>
                    </RightSide>
                  </DescriptionContainer>
                </StyledList>
              ))}
          </MenuContainer>
        </MenuWrapper>
      </Spinner>
    </Wrapper>
  );
};

export default MenuList;
