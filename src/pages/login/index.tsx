import { TextInput } from '@components/fields/text';
import { ButtonLabel, TittleText, Placeholder } from '@constants/index';
import { Typography, Button, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';

export const LoginPage = () => {
  const { control } = useForm({
    mode: 'onSubmit',
  });

  return (
    <Stack
      component={'form'}
      justifyContent={'center'}
      gap={'20px'}
      height={'100vh'}
      maxWidth={'600px'}
      margin={'0 auto'}
      noValidate
    >
      <Typography variant={'h4'}>{TittleText.LOGIN}</Typography>
      <TextInput name={'Email'} control={control} label={'Email'} placeholder={Placeholder.EMAIL} />
      <TextInput
        name={'Password'}
        control={control}
        label={'Password'}
        type={'password'}
        placeholder={Placeholder.PASSWORD}
      />
      <Button type={'submit'} variant={'contained'} size={'large'} sx={{ width: '250px', alignSelf: 'center' }}>
        {ButtonLabel.SUBMIT}
      </Button>
    </Stack>
  );
};

export default LoginPage;
