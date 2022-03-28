import React from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../../../components/typography/title';
import Spinner from '../../../components/loaders/spinner';
import { useDishes } from '../../../services/queries/use-dish';
import {
  ButtonsContainer,
  DeleteButton,
  DescriptionContainer,
  HiddenText,
  LeftSide,
  MenuContainer,
  MenuTitle,
  MenuWrapper,
  ModalWrapper,
  RightSide,
  StatusText,
  StyledList,
  TitleHeader,
  Wrapper,
} from './menu-list.style';
import Text from '../../../components/typography/text';
import Button from '../../../components/buttons';
import EditIcon from '../../../components/icons/edit.icon';
import { Dish } from '../../../types/dish.types';
import AddIcon from '../../../components/icons/add.icon';
import DeleteIcon from '../../../components/icons/delete.icon';
import { useDeleteDish } from '../../../services/mutations/use-dishes';
import { useModal } from '../../../hooks/use-modal';
import Modal from '../../../components/modal';

const MenuList = () => {
  const [dishId, setDishId] = React.useState('');
  const modal = useModal();
  const navigate = useNavigate();
  const dishes = useDishes();
  const deleteDish = useDeleteDish();

  const handleClick = (dish: Dish) => {
    navigate(`/menu/edit-dish/${dish.id}`, { state: dish });
  };

  const handleAddDish = () => {
    navigate(`/menu/add-dish`);
  };

  const handleDelete = () => {
    deleteDish.mutate(dishId);
    modal.close();
  };

  return (
    <Wrapper>
      <Spinner loading={dishes.isLoading}>
        <TitleHeader>
          <MenuTitle position="left" size="lg" fontWeight="400">
            Restaurant Menu
          </MenuTitle>
          <Button
            buttonType="primary"
            startIcon={<AddIcon />}
            onClick={handleAddDish}
          >
            Add dish
          </Button>
        </TitleHeader>
        <MenuWrapper>
          <MenuContainer>
            {dishes.data &&
              dishes.data.map((dish) => (
                <StyledList key={dish.id}>
                  <img alt={dish.name} src={dish.image} />
                  <DescriptionContainer>
                    <LeftSide>
                      <div>
                        <Title size="sm" fontWeight="500">
                          {dish.name}
                        </Title>
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
                          {dish.status === 'available'
                            ? '✔️ Available'
                            : '❌ Unavailable'}
                        </StatusText>
                      </div>
                    </LeftSide>
                    <RightSide>
                      <Text size="md">
                        <b>{dish.cost} BYN</b>
                      </Text>
                      <ButtonsContainer>
                        <Button
                          buttonType="primary"
                          startIcon={<EditIcon />}
                          onClick={() => handleClick(dish)}
                        >
                          Edit
                        </Button>
                        <DeleteButton
                          buttonType="secondary"
                          onClick={() => {
                            modal.open();
                            setDishId(dish.id);
                          }}
                        >
                          <DeleteIcon />
                          <HiddenText>Delete</HiddenText>
                        </DeleteButton>
                      </ButtonsContainer>
                    </RightSide>
                  </DescriptionContainer>
                </StyledList>
              ))}
            <Modal open={modal.isOpen} onClose={modal.close}>
              <ModalWrapper>
                <Title size="sm" fontWeight="500">
                  Are you sure you want to delete the dish?
                </Title>
                <div>
                  <Button buttonType="secondary" onClick={() => modal.close()}>
                    Cancel
                  </Button>
                  <Button buttonType="primary" onClick={handleDelete}>
                    Yes
                  </Button>
                </div>
              </ModalWrapper>
            </Modal>
          </MenuContainer>
        </MenuWrapper>
      </Spinner>
    </Wrapper>
  );
};

export default MenuList;
