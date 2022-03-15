import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { UseMutationResult } from 'react-query';
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
import { Dish, NewDish, UpdatedDish } from '../../../../types/dish.types';
import { useDishTypes } from '../../../../services/queries/use-dish';

const ValidationSchema: yup.SchemaOf<UpdatedDish> = yup.object({
  name: yup.string().required('Dish name is required'),
  cost: yup
    .number()
    .typeError('Cost must be a number')
    .required('Cost is required'),
  description: yup.string().required('Description is required'),
  status: yup.string().required('Status is required'),
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

interface Props {
  title: string;
  dishData?: Dish;
  addDish?: UseMutationResult<any, unknown, NewDish, unknown>;
  updateDish?: UseMutationResult<any, unknown, UpdatedDish, unknown>;
}

const MenuForm: React.FC<Props> = ({
  title,
  dishData,
  addDish,
  updateDish,
}) => {
  const [imageUrl, setImageUrl] = React.useState(dishData && dishData.image);
  const [file, setFile] = React.useState<File | Blob>();

  const {
    control,
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdatedDish>({
    resolver: yupResolver(ValidationSchema),
    defaultValues: {
      status: dishData?.status,
      type: dishData?.type,
    },
  });

  const uploadImage = useUpload();
  const dishTypes = useDishTypes();

  const handleImageUpload = (event: any) => {
    const logoFile = event.target.files[0];
    setFile(logoFile);
    setImageUrl(URL.createObjectURL(logoFile));
  };

  const onSubmit: SubmitHandler<UpdatedDish | NewDish> = (data) => {
    if (updateDish) {
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
    }
    if (addDish) {
      addDish.mutate(
        {
          ...data,
          restaurantId: '02fb44e3-5f18-45eb-80a1-d8b4e8a22f1b',
        },
        {
          onSuccess(res) {
            if (file) {
              uploadImage.mutate({ file, id: res.data });
            }
            reset();
            setImageUrl('');
          },
        }
      );
    }
  };

  const options = [
    { name: 'Available', value: 'available' },
    { name: 'Unavailable', value: 'unavailable' },
  ];

  const typeOptions: { name: string; value: string }[] = [];

  if (dishTypes.data) {
    dishTypes.data.map((type) =>
      typeOptions.push({ name: type.name, value: type.id })
    );
  }

  return (
    <Wrapper>
      <Title position="left" size="lg" fontWeight="400">
        {title}
      </Title>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormContainer>
            <Input
              {...register('name')}
              error={errors.name?.message}
              label="Dish Name"
              defaultValue={dishData?.name}
            />
            <Input
              {...register('cost')}
              error={errors.cost?.message}
              type="number"
              min={0}
              step="any"
              label="Cost"
              defaultValue={dishData?.cost}
            />
            <Controller
              name="status"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select {...field} options={options} label="Status" />
              )}
            />
            <Controller
              name="type"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select {...field} options={typeOptions} label="Type" />
              )}
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
              step="0.01"
              label="Weight"
              defaultValue={dishData?.weight ?? 0}
            />
            <StyledArea>
              <Label>Description</Label>
              <TextArea
                {...register('description')}
                required
                minLength={6}
                maxLength={100}
                rows={3}
                defaultValue={dishData?.description}
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
              <LogoArea src={imageUrl ?? ''} />
            </LogoContainer>
          </FormContainer>
          <Button
            loading={addDish?.isLoading || updateDish?.isLoading}
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

export default MenuForm;
