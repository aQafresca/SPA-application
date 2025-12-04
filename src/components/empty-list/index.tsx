import { Typography } from '@mui/material';

interface IEmptyListProps {
  text: string;
}

export const EmptyList = ({ text }: IEmptyListProps) => {
  return <Typography>{text}</Typography>;
};
