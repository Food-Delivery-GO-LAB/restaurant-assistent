import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../../../components/inputs/input';
import TextArea from '../../../components/inputs/text-area';
import Label from '../../../components/typography/label';
import Title from '../../../components/typography/title';
import {
  Container,
  FormContainer,
  LogoContainer,
  StyledArea,
  Wrapper,
} from './adding-restaurant.styles';
import { Button } from '../../../components/buttons';
import FileInput from '../../../components/inputs/file-input';
import PlusIcon from '../../../components/icons/plus.icon';

interface IRestaurant {
  title: string;
  category: string;
  timeFrom: string;
  timeTo: string;
  location: string;
  number: number;
  admin: string;
  logo: string;
  email: string;
}

const ValidationSchema: yup.SchemaOf<IRestaurant> = yup
  .object({
    title: yup.string().required('Title is required'),
    category: yup.string().required('Category is required'),
    timeFrom: yup.string().required('Time is required'),
    timeTo: yup.string().required('Time is required'),
    location: yup.string().required('Location is required'),
    number: yup.number().required('Contact number is required'),
    admin: yup.string().required('Admin is required'),
    logo: yup.string().required('Logo is required'),
    email: yup.string().required('Email is required'),
  })
  .required();

const AddingRestaurant = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRestaurant>({
    resolver: yupResolver(ValidationSchema),
  });

  const onSubmit: SubmitHandler<IRestaurant> = (data) => console.log(data);

  return (
    <Wrapper>
      <Title position="left" size="lg" fontWeight="400">
        Adding Restaurant
      </Title>
      <Container>
        <Title position="left" size="sm" fontWeight="500">
          Restaurant Details
        </Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormContainer>
            <Input
              {...register('title')}
              error={errors.title?.message}
              label="Title"
            />
            <Input
              {...register('category')}
              error={errors.category?.message}
              label="Category"
            />
            <Input
              {...register('timeFrom')}
              error={errors.timeFrom?.message}
              type="time"
              label="Working hours(from)"
              placeholder="from"
            />
            <Input
              {...register('timeTo')}
              error={errors.timeTo?.message}
              type="time"
              label="Working hours(to)"
              placeholder="to"
            />
            <Input
              {...register('location')}
              error={errors.location?.message}
              label="Location"
            />
            <Input
              {...register('number')}
              error={errors.number?.message}
              type="tel"
              label="Contact Number"
            />
            <Input
              {...register('admin')}
              error={errors.admin?.message}
              label="Admin"
            />
            <LogoContainer>
              <Label htmlFor="logo">
                Logo
                <div>
                  <PlusIcon size={60} />
                </div>
                <FileInput {...register('logo')} id="logo" label="Logo" />
              </Label>
            </LogoContainer>
            <Input
              {...register('email')}
              error={errors.email?.message}
              type="email"
              label="Email"
            />
          </FormContainer>
          <StyledArea>
            <Label>Info</Label>
            <TextArea cols={40} rows={5} />
          </StyledArea>
          <Button type="submit" color="primary">
            Submit
          </Button>
        </form>
      </Container>
    </Wrapper>
  );
};

export default AddingRestaurant;
