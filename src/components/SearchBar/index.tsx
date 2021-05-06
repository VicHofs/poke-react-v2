import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import api from 'services/api';
import { CardProps } from 'components/Card';

import { IPokemon, IPokemonSpecies } from './types';
import { Container } from './styles';

interface Props {
  onChange: (d: CardProps, w: string) => void;
  isFetching: (i: boolean) => void;
}

const SearchBar: React.FC<Props> = ({ onChange, isFetching }: Props) => {
  const [typedSearch, setTypedSearch] = useState('');
  const [data, setData] = useState<CardProps>();
  const [greeting, setGreeting] = useState(true);
  let debounceTime: any;

  const greetings = [
    'Pika?',
    'PikaPika?',
    'Looking for...',
    'Type your search here...',
    'I choose...',
  ];

  const debounceTyping = (typedWord: string) => {
    clearTimeout(debounceTime);
    isFetching(true);
    debounceTime = setTimeout(() => {
      setTypedSearch(typedWord);
      isFetching(false);
    }, 1000);
  };

  useEffect(() => {
    const getData = async () => {
      if (typedSearch !== '') {
        setData({
          number: -666,
          name: '',
          types: [],
          sprite: '',
          flavorData: [],
        });
        setGreeting(false);
        try {
          await api
            .get<IPokemon>(`/pokemon/${typedSearch.toLowerCase()}`)
            .then(async res => {
              if (res.data.name !== '') {
                await api
                  .get<IPokemonSpecies>(`/pokemon-species/${res.data.name}`)
                  .then(result => {
                    setData({
                      number: res.data.id,
                      name: res.data.name,
                      types: res.data.types.map(type => type.type.name),
                      sprite: res.data.sprites.front_default,
                      flavorData: result.data.flavor_text_entries,
                    });
                  });
              }
            });
          isFetching(false);
        } catch (e) {
          console.error(e);
        }
      }
    };
    getData();
  }, [typedSearch]);
  return (
    <Container>
      <div style={{ height: '100%', width: '100%', display: 'flex' }}>
        <input
          id="searchBox"
          className="searchBox"
          type="text"
          placeholder={
            greeting
              ? greetings[Math.floor(Math.random() * greetings.length)]
              : ''
          }
          onChange={e => debounceTyping(e.target.value)}
        />
        <AiOutlineSearch className="searchIcon" />
      </div>
      {data && onChange(data, typedSearch) && isFetching(false)}
    </Container>
  );
};

export default SearchBar;
