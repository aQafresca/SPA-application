import { Stack } from '@mui/material';
import React, { useCallback, useState } from 'react';

import { CardList } from '@/components/cards-list';
import { SearchBar } from '@/components/search-bar';
import { Placeholder } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/core/hooks/useRedux';
import { setFilterName, setPage } from '@/store/characters';

const HomePage = () => {
  const [charactersName, setCharactersName] = useState<string>('');
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.characters.currentPage);
  const searchTerm = useAppSelector((state) => state.characters.filterName);

  const handleNameChange = useCallback((value: string) => {
    setCharactersName(value);
  }, []);

  const handleSearch = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      dispatch(setFilterName(charactersName));
    },
    [charactersName, dispatch],
  );

  const handlePageChange = useCallback(
    (value: number) => {
      dispatch(setPage(value));
    },
    [dispatch],
  );

  return (
    <Stack component={'section'} alignItems="center" alignSelf={'flex-start'} gap={4}>
      <SearchBar
        label={'Character'}
        value={charactersName}
        onChange={handleNameChange}
        onSearch={handleSearch}
        placeholder={Placeholder.CHARNAME}
      />
      <CardList currentPage={currentPage} onPageChange={handlePageChange} filterName={searchTerm} />
    </Stack>
  );
};

export default HomePage;
