import { Stack, TextField } from '@mui/material';
import React from 'react';

import { BaseButton } from '@/components/buttons/base';
import { ButtonLabel } from '@/constants';

export interface ISearchBarProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChange: (_value: string) => void;
  onSearch: (_event: React.FormEvent) => void;
}

export const SearchBar = ({ label, value, placeholder, onChange, onSearch }: ISearchBarProps) => {
  return (
    <Stack
      component="form"
      direction={'row'}
      alignItems={'center'}
      gap={2}
      width={'100%'}
      maxWidth={500}
      onSubmit={onSearch}
    >
      <TextField
        label={label}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        fullWidth
        variant="outlined"
      />
      <BaseButton type={'submit'} variant={'contained'} size={'large'}>
        {ButtonLabel.SEARCH}
      </BaseButton>
    </Stack>
  );
};
