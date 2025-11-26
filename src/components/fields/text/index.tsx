import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';
import { Controller, type Control, type FieldValues, type Path } from 'react-hook-form';

interface ITextInputProps<TField extends FieldValues> {
  name: Path<TField>;
  control: Control<TField>;
  label: string;
  placeholder: string;
  type?: 'text' | 'password';
}

export const TextInput = <TField extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  type = 'text',
}: ITextInputProps<TField>) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Box>
          <TextField
            {...field}
            type={isPassword && showPassword ? 'text' : type}
            placeholder={placeholder}
            label={label}
            fullWidth
            required
            error={!!fieldState.error}
            helperText={fieldState.error?.message ?? ' '}
            slotProps={
              isPassword
                ? {
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword((prev): boolean => !prev)}
                            onMouseDown={(e): void => e.preventDefault()}
                            onMouseUp={(e): void => e.preventDefault()}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  }
                : undefined
            }
          />
        </Box>
      )}
    />
  );
};
