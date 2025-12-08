import { Box, CardContent, CardMedia, Divider, Stack, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

import { BaseButton } from '@/components/buttons/base';
import { EmptyList } from '@/components/empty-list';
import Loader from '@/components/loader';
import { ButtonLabel } from '@/constants';
import { useGetCharacterByIdQuery } from '@/services/charactersApi';
import { buildCharacterDescription } from '@/shared/lib/buildDescription';

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const charId = id ? Number(id) : undefined;
  const navigate = useNavigate();

  const { data: character, isLoading, isError } = useGetCharacterByIdQuery(charId, { skip: !charId });

  const handleClose = () => {
    void navigate(-1);
  };

  if (isLoading) {
    return (
      <Box sx={{ p: 5, display: 'flex', justifyContent: 'center' }}>
        <Loader />
      </Box>
    );
  }

  if (isError || !character) {
    return <EmptyList text={'Character not found'} />;
  }

  const description = buildCharacterDescription(character, { showFull: true });

  return (
    <Box
      sx={{
        maxWidth: 800,
        margin: '20px auto',
        padding: 3,
        borderRadius: 2,
        boxShadow: 4,
        position: 'relative',
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom align="center">
        {character.name}
      </Typography>

      <Divider sx={{ mb: 3 }} />

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} alignItems={{ sm: 'center' }}>
        <Box sx={{ flexShrink: 0, width: { xs: '100%', sm: 220 } }}>
          <CardMedia
            component="img"
            image={character.image}
            alt={character.name}
            loading="eager"
            sx={{
              width: '100%',
              borderRadius: 1,
              boxShadow: 1,
            }}
          />
        </Box>

        <CardContent sx={{ flexGrow: 1 }}>
          <Stack spacing={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {description.map((item) => (
                <Box key={item.label} display="flex" gap={1}>
                  <Typography variant="body1" color="text.secondary" fontWeight="bold" sx={{ minWidth: '100px' }}>
                    {item.label}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {item.value}
                  </Typography>
                </Box>
              ))}
            </Box>
            <BaseButton onClick={handleClose} variant={'contained'}>
              {ButtonLabel.CLOSE}
            </BaseButton>
          </Stack>
        </CardContent>
      </Stack>
    </Box>
  );
};

export default DetailPage;
