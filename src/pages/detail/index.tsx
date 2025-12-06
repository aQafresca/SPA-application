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
  const navigate = useNavigate();

  const { data: character, isLoading, isError } = useGetCharacterByIdQuery(+id!);

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
      <BaseButton
        aria-label="close"
        onClick={handleClose}
        size="large"
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          fontSize: 18,
        }}
      >
        {ButtonLabel.CLOSE_X}
      </BaseButton>

      <Typography variant="h4" component="h1" gutterBottom align="center">
        {character.name}
      </Typography>

      <Divider sx={{ mb: 3 }} />

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
        <Box sx={{ flexShrink: 0, width: { xs: '100%', sm: 300 } }}>
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
          <Stack spacing={2}>
            {description.map((item) => (
              <Box key={item.label} display="flex" gap={1}>
                <Typography variant="body1" color="text.secondary" fontWeight="bold" sx={{ minWidth: '150px' }}>
                  {item.label}
                </Typography>
                <Typography variant="body1">{item.value}</Typography>
              </Box>
            ))}
          </Stack>
        </CardContent>
      </Stack>
    </Box>
  );
};

export default DetailPage;
