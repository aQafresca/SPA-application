import { Card, CardContent, CardMedia, Typography, Box, Stack } from '@mui/material';

import { ICharacter } from '@/interface/characters';
import { buildCharacterDescription } from '@/shared/lib/buildDescription';

interface ICharacterCardProps extends ICharacter {
  onDetailClick: (_id: number) => void;
}

export const CharacterCard = (props: ICharacterCardProps) => {
  const handleDetailClick = () => {
    props.onDetailClick?.(props.id);
  };

  const description = buildCharacterDescription(props);

  return (
    <Card
      onClick={handleDetailClick}
      sx={{
        width: '300px',
        height: '450px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '9px 11px 21px -4px rgba(219,216,216,0.3);',
        },
      }}
    >
      <CardMedia
        component="img"
        width={'300px'}
        height={'280px'}
        loading="lazy"
        image={props.image}
        alt={props.name}
        sx={{ aspectRatio: '300 / 280' }}
      />

      <CardContent>
        <Typography variant="h6" component="h3" gutterBottom>
          {props.name}
        </Typography>

        <Stack spacing={1}>
          {description.map((item) => (
            <Box key={item.label} display="flex" gap={1}>
              <Typography variant="body2" color="text.secondary">
                {item.label}
              </Typography>
              <Typography variant="body2">{item.value}</Typography>
            </Box>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};
