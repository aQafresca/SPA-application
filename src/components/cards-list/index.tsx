import { Box, Container, Pagination } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { CharacterCard } from '@/components/cards-list/card';
import { EmptyList } from '@/components/empty-list';
import Loader from '@/components/loader';
import { EMPTY_LIST } from '@/constants';
import { ICharacter } from '@/interface/characters';
import { RouterManager } from '@/route/manager';
import { useGetCharactersQuery } from '@/services/charactersApi';

interface IProps {
  filterName: string;
  currentPage: number;
  onPageChange: (_value: number) => void;
}

export const CardList = ({ filterName, currentPage, onPageChange }: IProps) => {
  const { data, isLoading, isError, isFetching } = useGetCharactersQuery({ page: currentPage, name: filterName });
  const navigate = useNavigate();

  const totalPages: number | undefined = data?.info.pages;
  const hasError = isError && !isLoading;
  const hasNoResults = !isLoading && !isFetching && data?.results?.length === 0;
  const showEmptyList = hasNoResults || hasError;

  const handleCharacterClick = (id: number) => {
    const url = RouterManager.makeURL('detail', { id });

    void navigate(url);
  };

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    onPageChange(value);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
      <Container
        component={'section'}
        sx={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', justifyContent: 'space-around', minHeight: '500px' }}
      >
        {isFetching && <Loader />}
        {showEmptyList && <EmptyList text={EMPTY_LIST.CHAR_TEXT} />}
        {!isLoading &&
          !showEmptyList &&
          data?.results?.map((item: ICharacter) => (
            <CharacterCard key={item.id} {...item} onDetailClick={handleCharacterClick} />
          ))}
      </Container>

      {!isLoading && !showEmptyList && (
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
        />
      )}
    </Box>
  );
};
