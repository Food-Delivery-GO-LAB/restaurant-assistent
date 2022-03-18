import React from 'react';
import MenuForm from './menu-form';
import { useAddDish } from '../../../services/mutations/use-dishes';

const AddDish = () => {
  const addDish = useAddDish();

  return <MenuForm title="Add Dish" addDish={addDish} />;
};

export default AddDish;
