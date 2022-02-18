import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import Input from '../../../components/inputs/input';
import TextArea from '../../../components/inputs/text-area';
import Label from '../../../components/typography/label';
import Title from '../../../components/typography/title';
import {
  Container,
  FormContainer,
  LogoArea,
  LogoContainer,
  StyledArea,
  UploadArea,
  Wrapper,
} from './adding-restaurant.styles';
import { Button } from '../../../components/buttons';
import FileInput from '../../../components/inputs/file-input';
import PlusIcon from '../../../components/icons/plus.icon';
import {
  StyledInputWrapper,
  StyledLabel,
  StyledSelect,
} from '../../../components/select/select';
import { IRestaurant, RestaurantSchema } from '../../../types/restaurant.types';
import { useAddRestaurant } from '../../../services/mutations/use-add-restaurant';
import { useUpload } from '../../../services/mutations/use-upload';

const ValidationSchema: yup.SchemaOf<RestaurantSchema> = yup.object({
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
  timeFrom: yup.string().required('Time is required'),
  timeTo: yup.string().required('Time is required'),
  location: yup.string().required('Location is required'),
  number: yup.number().required('Contact number is required'),
  adminName: yup.string().required('Full name is required'),
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
});

const AddingRestaurant = () => {
  const [logoUrl, setLogoUrl] = React.useState('');
  const [category, setCategory] = React.useState<string[]>([]);
  const [file, setFile] = React.useState<File | Blob>();

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IRestaurant>({
    resolver: yupResolver(ValidationSchema),
  });

  const addRestaurant = useAddRestaurant();
  const uploadLogo = useUpload();

  const handleLogoUpload = (event: any) => {
    const logoFile = event.target.files[0];
    setFile(logoFile);
    setLogoUrl(URL.createObjectURL(logoFile));
  };

  const handleSelect = (event: any) => {
    const {
      target: { value },
    } = event;
    setCategory(typeof value === 'string' ? value.split(',') : value);
  };

  const onSubmit: SubmitHandler<IRestaurant> = (data) => {
    addRestaurant.mutate(
      {
        ...data,
      },
      {
        onSuccess(res) {
          if (file) {
            uploadLogo.mutate({ file, id: res.id });
          }
          reset();
        },
      }
    );
  };

  const options = [
    'Asian',
    'Burgers',
    'Breakfast',
    'Pizza',
    'Lunch',
    'Fast-food',
    'Dessert',
    'Coffee',
    'Steaks',
  ].sort();

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
            <StyledInputWrapper>
              <StyledLabel id="demo-multiple-checkbox-label">
                Category
              </StyledLabel>
              <FormControl required fullWidth>
                <StyledSelect
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={category}
                  onChange={handleSelect}
                  input={<OutlinedInput />}
                  renderValue={(selected: any) => selected.join(', ')}
                  MenuProps={MenuProps}
                >
                  {options.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={category.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </StyledSelect>
              </FormControl>
            </StyledInputWrapper>
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
            <Input
              {...register('email')}
              error={errors.email?.message}
              type="email"
              label="Email"
            />
            <StyledArea>
              <Label>Description</Label>
              <TextArea
                {...register('description')}
                required
                minLength={6}
                maxLength={100}
                rows={3}
              />
            </StyledArea>
            <LogoContainer>
              <Label htmlFor="logo" onChange={handleLogoUpload}>
                Logo
                <UploadArea>
                  <PlusIcon size={60} />
                </UploadArea>
                <FileInput {...register('logo')} id="logo" label="Logo" />
              </Label>
              <LogoArea src={logoUrl} />
            </LogoContainer>
          </FormContainer>
          <Title position="left" size="sm" fontWeight="500">
            Admin Details
          </Title>
          <FormContainer>
            <Input
              {...register('adminName')}
              error={errors.adminName?.message}
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
          <Button
            loading={addRestaurant.isLoading}
            type="submit"
            color="primary"
          >
            Submit
          </Button>
        </form>
      </Container>
    </Wrapper>
  );
};

export default AddingRestaurant;
