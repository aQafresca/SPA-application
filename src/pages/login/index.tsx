import { Typography, Button, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';

import { FormTextInput } from '@/components/fields/form-input';
import Loader from '@/components/loader';
import { ButtonLabel, TittleText, Placeholder } from '@/constants';
import { useAppDispatch } from '@/core/hooks/useRedux';
import { IAuthRequest, IAuthResponse } from '@/interface/auth';
import { useLoginUserMutation } from '@/services/authApi';
import { setAuthData } from '@/store/auth';

export const LoginPage = () => {
  const [login, { isLoading, error }] = useLoginUserMutation();
  const dispatch = useAppDispatch();

  const { control, handleSubmit } = useForm<IAuthRequest>({
    defaultValues: {
      username: 'emilys',
      password: 'emilyspass',
    },
  });

  const onSubmit = async (data: IAuthRequest) => {
    const authData: IAuthResponse = await login(data).unwrap();

    dispatch(setAuthData(authData));
  };

  return (
    <Stack
      component={'form'}
      justifyContent={'center'}
      gap={'20px'}
      width={'100%'}
      maxWidth={'600px'}
      margin={'0 auto'}
      onSubmit={(e) => {
        void handleSubmit(onSubmit)(e);
      }}
      noValidate
    >
      {isLoading && <Loader />}
      <Typography variant={'h4'}>{TittleText.LOGIN}</Typography>
      <FormTextInput name={'username'} control={control} label={'Username'} placeholder={Placeholder.USERNAME} />
      <FormTextInput
        name={'password'}
        control={control}
        label={'Password'}
        type={'password'}
        placeholder={Placeholder.PASSWORD}
      />
      <Button type={'submit'} variant={'contained'} size={'large'} sx={{ width: '250px', alignSelf: 'center' }}>
        {ButtonLabel.SUBMIT}
      </Button>

      {error && (
        <Typography color={'error'} align={'center'}>
          {'Login failed. Please check credentials.'}
        </Typography>
      )}
    </Stack>
  );
};

export default LoginPage;
