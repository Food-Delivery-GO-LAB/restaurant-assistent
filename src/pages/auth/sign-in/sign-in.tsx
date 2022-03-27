import React, { useState } from 'react';
import * as yup from 'yup';
import {
  Card,
  TextField,
  CardHeader,
  CardContent,
  CardActions,
  InputAdornment,
  Stack,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { colors as globalColors } from '../../../styles/variables';
import Button from '../../../components/buttons';
import { useLogin } from '../../../services/mutations/use-login';

interface ILoginProps {
  userRole: string;
}
export const FormStyle = {
  '& label.Mui-focused': {
    color: `${globalColors.primary_hover}`,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: `${globalColors.grey_light}`,
      borderRadius: '5px',
    },
    '&:hover fieldset': {
      borderColor: `${globalColors.dark}`,
    },
    '&.Mui-focused fieldset': {
      borderColor: `${globalColors.primary_hover}`,
    },
  },
};

interface LoginForm {
  email: string;
  password: string;
}

const ValidationSchema: yup.SchemaOf<LoginForm> = yup.object().shape({
  email: yup
    .string()
    .required('Email i s required')
    .email('Email must be a valid email address'),
  password: yup
    .string()
    .required('Password is required')
    .matches(
      /^.*(?=.{8,})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Password must contain at least 8 characters, one uppercase, one number and one special case character'
    ),
});

const SignIn = (props: ILoginProps) => {
  const [displayPass, setDisplayPass] = useState(false);
  const loginMutation = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<LoginForm>({
    resolver: yupResolver(ValidationSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    loginMutation.mutate(data);
  };

  const handlePassVisible: React.MouseEventHandler<HTMLButtonElement> = () => {
    setDisplayPass((prev) => !prev);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card sx={{ p: 3, mb: 4, borderRadius: 1 }}>
        <CardHeader title={`${props.userRole} login`} />
        <CardContent>
          <TextField
            {...register('email')}
            fullWidth
            id="username"
            type="email"
            label="Email"
            placeholder="Email"
            margin="normal"
            sx={FormStyle}
            error={!!errors.email?.message}
            helperText={errors.email?.message}
          />
          <TextField
            {...register('password')}
            fullWidth
            type={displayPass ? 'text' : 'password'}
            label="Password"
            placeholder="Password"
            margin="normal"
            sx={FormStyle}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handlePassVisible}
                    onMouseDown={(e) => {
                      e.preventDefault();
                    }}
                  >
                    {displayPass ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={!!errors.password?.message}
            helperText={errors.password?.message}
          />
        </CardContent>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ my: 0, mx: 2 }}
        >
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  '&.Mui-checked': {
                    color: `${globalColors.primary_hover}`,
                  },
                }}
              />
            }
            label="Remember me"
          />
          <p>Forgot password?</p>
        </Stack>
        <CardActions sx={{ justifyContent: 'center', px: 2 }}>
          <Button
            buttonType="primary"
            disabled={!isValid || !isDirty}
            type="submit"
            loading={loginMutation.isLoading}
          >
            Login
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};
export default SignIn;
