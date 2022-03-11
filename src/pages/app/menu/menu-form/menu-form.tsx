import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLocation, useParams } from 'react-router-dom';
import {
  Container,
  FormContainer,
  LogoArea,
  LogoContainer,
  StyledArea,
  UploadArea,
  Wrapper,
} from './menu-form.style';
import Select from '../../../../components/select';
import Label from '../../../../components/typography/label';
import TextArea from '../../../../components/inputs/text-area';
import Title from '../../../../components/typography/title';
import Input from '../../../../components/inputs/input';
import FileInput from '../../../../components/inputs/file-input';
import PlusIcon from '../../../../components/icons/plus.icon';
import Button from '../../../../components/buttons';
import { useUpload } from '../../../../services/mutations/use-upload';
import { Dish, UpdatedDish } from '../../../../types/dish.types';
import { useUpdateDish } from '../../../../services/mutations/use-dishes';

const ValidationSchema: yup.SchemaOf<UpdatedDish> = yup.object({
  name: yup.string().required('Dish name is required'),
  cost: yup
    .number()
    .typeError('Cost must be a number')
    .required('Cost is required'),
  description: yup.string().required('Description is required'),
  status: yup.boolean().required('Status is required'),
  image: yup.string().required('Image is required'),
  type: yup.string().required('Type is required'),
  cookingTime: yup
    .number()
    .typeError('Cooking time must be a number')
    .required('Cooking time is required'),
  weight: yup
    .number()
    .typeError('Weight must be a number')
    .required('Weight is required'),
});

const MenuForm = () => {
  const { id } = useParams<{ id: string }>();

  const location = useLocation();
  const dishData = location.state as Dish;

  const [imageUrl, setImageUrl] = React.useState(dishData.image);
  const [status, setStatus] = React.useState('');
  const [file, setFile] = React.useState<File | Blob>();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdatedDish>({
    resolver: yupResolver(ValidationSchema),
  });

  const uploadImage = useUpload();
  const updateDish = useUpdateDish(id);

  const handleImageUpload = (event: any) => {
    const logoFile = event.target.files[0];
    setFile(logoFile);
    setImageUrl(URL.createObjectURL(logoFile));
  };

  const onSubmit: SubmitHandler<UpdatedDish> = (data) => {
    updateDish.mutate(
      {
        ...data,
      },
      {
        onSuccess(res) {
          if (file) {
            uploadImage.mutate({ file, id: res.id });
          }
          reset();
          setImageUrl('');
        },
      }
    );
  };

  const options = [
    { name: 'Available', value: 'available' },
    { name: 'Unavailable', value: 'unavailable' },
  ];

  const handleStatusChange = (event: any) => {
    setStatus(event.target.value as string);
  };

  return (
    <Wrapper>
      <Title position="left" size="lg" fontWeight="400">
        Editing dish
      </Title>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormContainer>
            <Input
              {...register('name')}
              error={errors.name?.message}
              label="Dish Name"
              defaultValue={dishData.name}
            />
            <Input
              {...register('cost')}
              error={errors.cost?.message}
              type="number"
              min={0}
              label="Cost"
              defaultValue={dishData.cost ?? 0}
            />
            <Select
              /* {...register('status')} */
              errormsg={errors.status?.message}
              options={options}
              onChange={handleStatusChange}
              label="Status"
              required
              defaultValue={dishData.status ? 'available' : 'unavailable'}
            />
            <Input
              {...register('type')}
              error={errors.type?.message}
              label="Type"
              defaultValue={dishData.type}
            />
            <Input
              {...register('cookingTime')}
              error={errors.cookingTime?.message}
              type="number"
              min={0}
              label="Cooking Time"
              defaultValue={0}
            />
            <Input
              {...register('weight')}
              error={errors.weight?.message}
              type="number"
              min={0}
              label="Weight"
              defaultValue={dishData.weight ?? 0}
            />
            <StyledArea>
              <Label>Description</Label>
              <TextArea
                {...register('description')}
                required
                minLength={6}
                maxLength={100}
                rows={3}
                defaultValue={dishData.description}
              />
            </StyledArea>
            <LogoContainer>
              <Label htmlFor="image" onChange={handleImageUpload}>
                Image
                <UploadArea>
                  <PlusIcon size={60} />
                </UploadArea>
                <FileInput {...register('image')} id="image" label="Image" />
              </Label>
              <LogoArea src={imageUrl} />
            </LogoContainer>
          </FormContainer>
          <Button loading={updateDish.isLoading} type="submit" color="primary">
            Submit
          </Button>
        </form>
      </Container>
    </Wrapper>
  );
};

export default MenuForm;
