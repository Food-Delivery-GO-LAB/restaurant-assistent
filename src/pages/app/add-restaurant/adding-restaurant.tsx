import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SelectChangeEvent } from '@mui/material/Select';
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
import Select from '../../../components/select/select';
import { IRestaurant } from '../../../types/restaurant.types';

const ValidationSchema: yup.SchemaOf<IRestaurant> = yup
  .object({
    title: yup.string().required('Title is required'),
    category: yup.string().required('Category is required'),
    timeFrom: yup.string().required('Time is required'),
    timeTo: yup.string().required('Time is required'),
    location: yup.string().required('Location is required'),
    number: yup.number().required('Contact number is required'),
    admin: yup.string().required('Full name is required'),
    adminEmail: yup.string().required('Email is required'),
    adminNumber: yup.number().required('Contact number is required'),
    adminPassword: yup
      .string()
      .required('Password is required')
      .matches(
        /^.*(?=.{8,})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        'Password must contain at least 8 characters, one uppercase, one number'
      ),
    logo: yup.string().required('Logo is required'),
    email: yup.string().required('Email is required').email('Email is invalid'),
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

  const [value, setValue] = React.useState('');
  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setValue(event.target.value as string);
    console.log(event.target.value);
  };
  const options = [
    { value: 'asian', name: 'Asian' },
    { value: 'burgers', name: 'Burgers' },
    { value: 'pizza', name: 'Pizza' },
    { value: 'lunch', name: 'Lunch' },
  ];

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
            <Select
              {...register('category')}
              errorMsg={errors.category?.message}
              label="Category"
              onChange={handleChange}
              value={value}
              options={options}
            />
            <Input
              {...register('location')}
              error={errors.location?.message}
              label="Location"
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
              {...register('number')}
              error={errors.number?.message}
              type="tel"
              label="Contact Number"
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
            <StyledArea>
              <Label>Description</Label>
              <TextArea rows={3} />
            </StyledArea>
          </FormContainer>
          <Title position="left" size="sm" fontWeight="500">
            Admin Details
          </Title>
          <FormContainer>
            <Input
              {...register('admin')}
              error={errors.admin?.message}
              label="Full Name"
            />
            <Input
              {...register('adminEmail')}
              type="email"
              error={errors.adminEmail?.message}
              label="Email"
            />
            <Input
              {...register('adminNumber')}
              type="tel"
              error={errors.adminNumber?.message}
              label="Contact Number"
            />
            <Input
              {...register('adminPassword')}
              type="password"
              error={errors.adminPassword?.message}
              label="Password"
            />
          </FormContainer>
          <Button type="submit" color="primary">
            Submit
          </Button>
        </form>
      </Container>
    </Wrapper>
  );
};

export default AddingRestaurant;
