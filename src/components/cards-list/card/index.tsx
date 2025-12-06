import { Card, CardContent, CardMedia, Typography, Box, Stack } from '@mui/material';

import { CHAR } from '@/constants';
import { ICharacter } from '@/interface/characters';

export const CharacterCard = (props: ICharacter) => {
  return (
    <Card
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
          <Box display="flex" gap={1}>
            <Typography variant="body2" color="text.secondary">
              {CHAR.GENDER}
            </Typography>
            <Typography variant="body2">{props.gender}</Typography>
          </Box>

          <Box display="flex" gap={1}>
            <Typography variant="body2" color="text.secondary">
              {CHAR.STATUS}
            </Typography>
            <Typography variant="body2">{props.status}</Typography>
          </Box>

          <Box display="flex" gap={1}>
            <Typography variant="body2" color="text.secondary">
              {CHAR.SPECIES}
            </Typography>
            <Typography variant="body2">{props.species}</Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};
