import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import MenuForm from './menu-form';
import { Dish } from '../../../types/dish.types';
import { useUpdateDish } from '../../../services/mutations/use-dishes';

const EditDish = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const dishData = location.state as Dish;
  const updateDish = useUpdateDish(id);

  return (
    <MenuForm
      title="Editing dish"
      dishData={dishData}
      updateDish={updateDish}
    />
  );
};

export default EditDish;
