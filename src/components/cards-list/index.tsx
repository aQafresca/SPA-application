import { Box, Container, Pagination } from '@mui/material';
import React, { useCallback } from 'react';

import { CharacterCard } from '@/components/cards-list/card';
import { EmptyList } from '@/components/empty-list';
import Loader from '@/components/loader';
import { EMPTY_LIST } from '@/constants';
import { ICharacter } from '@/interface/characters';
import { useGetCharactersQuery } from '@/services/charactersApi';

interface IProps {
  filterName: string;
  currentPage: number;
  onPageChange: (_value: number) => void;
}

export const CardList = ({ filterName, currentPage, onPageChange }: IProps) => {
  const { data, isLoading, isError, isFetching } = useGetCharactersQuery({ page: currentPage, name: filterName });

  const totalPages: number | undefined = data?.info.pages;
  const isListEmpty: boolean = (!isLoading && data?.results.length === 0) || (isError && !isLoading);

  const handlePageChange = useCallback(
    (_event: React.ChangeEvent<unknown>, value: number) => {
      onPageChange(value);
    },
    [onPageChange],
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
      <Container
        component={'section'}
        sx={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', justifyContent: 'space-around' }}
      >
        {isFetching && <Loader />}
        {isListEmpty && <EmptyList text={EMPTY_LIST.CHAR_TEXT} />}
        {!isLoading &&
          !isListEmpty &&
          data?.results?.map((item: ICharacter) => <CharacterCard key={item.id} {...item} />)}
      </Container>

      {!isLoading && !isListEmpty && (
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
