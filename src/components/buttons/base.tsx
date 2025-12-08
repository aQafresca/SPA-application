import { Button, ButtonProps } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

interface IAppButtonProps extends Omit<ButtonProps, 'to'> {
  to?: string;
  children: string;
}

export const BaseButton = ({ to, children, ...rest }: IAppButtonProps) => {
  return (
    <Button component={to ? RouterLink : 'button'} to={to} {...rest}>
      {children}
    </Button>
  );
};
