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
  const [lastTypedSearch, setLastTypedSearch] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [data, setData] = useState<CardProps>();
  const [greeting, setGreeting] = useState(true);
  let debounceTime: any;

  const greetings = [
    'Pika?',
    'PikaPika?',
    'Looking for...',
    'Type your search here...',
    'Pokémon name or No.',
    'I choose...',
  ];

  const blacklist = ['giratina', '487', 'deoxys', '386'];

  const debounceTyping = (typedWord: string) => {
    clearTimeout(debounceTime);
    debounceTime = setTimeout(() => {
      setTypedSearch(typedWord);
    }, 1000);
  };

  useEffect(() => {
    const getData = async () => {
      setSuggestions([]);
      if (typedSearch !== '') {
        setData({
          number: -666,
          name: '',
          types: [],
          sprite: '',
          flavorData: [],
        });
        setGreeting(false);
        if (typedSearch.toLowerCase().includes('nidoran')) {
          setSuggestions(['Nidoran-m (#32)', 'Nidoran-f (#29)']);
        }
        try {
          isFetching(true);
          if (blacklist.includes(typedSearch.toLowerCase())) {
            let pokeSearch = typedSearch.toLowerCase();
            let pokeSpeciesSearch = typedSearch.toLowerCase();
            if (
              typedSearch.toLowerCase() === 'giratina' ||
              typedSearch === '487'
            ) {
              pokeSearch = 'giratina-altered';
              pokeSpeciesSearch = 'giratina';
            }
            if (
              typedSearch.toLowerCase() === 'deoxys' ||
              typedSearch === '386'
            ) {
              pokeSearch = 'deoxys-normal';
              pokeSpeciesSearch = 'deoxys';
            }
            await api
              .get<IPokemon>(`/pokemon/${pokeSearch}`)
              .then(async res => {
                if (res.data.name !== '') {
                  await api
                    .get<IPokemonSpecies>(
                      `/pokemon-species/${pokeSpeciesSearch}`,
                    )
                    .then(result => {
                      setData({
                        number: res.data.id,
                        name: res.data.name.split(/\W/)[0],
                        types: res.data.types.map(type => type.type.name),
                        sprite: res.data.sprites.front_default,
                        flavorData: result.data.flavor_text_entries,
                      });
                      isFetching(false);
                    });
                }
              });
          } else {
            await api
              .get<IPokemon>(`/pokemon/${typedSearch.toLowerCase()}`)
              .then(async res => {
                if (res.data.name !== '') {
                  await api
                    .get<IPokemonSpecies>(`/pokemon-species/${res.data.name}`)
                    .then(result => {
                      setData({
                        number: res.data.id,
                        name: res.data.name.toLowerCase().includes('nidoran')
                          ? res.data.name
                              .toLowerCase()
                              .replace('-f', '♀')
                              .replace('-m', '♂')
                          : res.data.name,
                        types: res.data.types.map(type => type.type.name),
                        sprite: res.data.sprites.front_default,
                        flavorData: result.data.flavor_text_entries,
                      });
                      isFetching(false);
                    });
                }
              });
          }
        } catch (e) {
          console.error(e);
          isFetching(false);
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
      {suggestions && (
        <p>
          did you mean&nbsp;
          {suggestions.map(item => (
            <button type="button" onClick={() => setTypedSearch(`${item}`)}>
              {item}
            </button>
          ))}
        </p>
      )}
      {data && onChange(data, typedSearch) && isFetching(false)}
    </Container>
  );
};

export default SearchBar;
