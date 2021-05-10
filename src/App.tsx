import React, { useEffect, useState } from 'react';
import Card, { CardProps } from 'components/Card';
import Header from 'components/Header'; /*
import CardDefaultProps from 'mock/card'; */
import jwt from 'jwt-simple';
import SearchBar from 'components/SearchBar';
import spinner from 'static/images/loader.png';
import { ThemeProvider } from 'styled-components';
import darkTheme from 'styles/themes/dark';
import defaultTheme from 'styles/themes/default';
import darkmodeIcon from 'static/images/darkmodeIcon.png';
import defaultmodeIcon from 'static/images/defaultmodeIcon.png';
import GlobalStyles from './styles/global';
import { LoaderContainer, ThemeContainer } from './Styles';

interface Theme {
  title: string;
  colors: {
    bg: string;
    text: string;
    lightContrast: string;
    details: string;
    vibrant: string;
  };
}

const App: React.FC = () => {
  const [data, setData] = useState<CardProps>();
  const [typedSearch, setTypedSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const handleData = (pokemonData: CardProps, word: string) => {
    setData(pokemonData);
    setTypedSearch(word);
  };
  useEffect(() => {
    // do nothing
  }, [typedSearch]);

  useEffect(() => {
    const handleCache = () => {
      if (document.getElementById('root')?.innerHTML != null) {
        localStorage.setItem(
          `@lastKnown_${window.location.href}`,
          jwt.encode(document.getElementById('root')?.innerHTML, '123456'),
        );
      }
    };
    window.addEventListener('load', handleCache);
    return () => window.removeEventListener('load', handleCache);
  }, []);

  const [saved, setSaved] = useState<CardProps[]>([]);

  const saveCard = (newCard: CardProps) => {
    setSaved(prevState => [...prevState, newCard]);
  };

  const removeCard = (target: CardProps) => {
    setSaved(prevState => prevState.filter(card => card.name !== target.name));
  };
  useEffect(() => console.log('saved cards: ', saved), [saved]);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          placeContent: 'center',
          placeItems: 'center',
        }}
      >
        <div style={{ display: 'flex', maxWidth: '90vw' }}>
          <SearchBar
            onChange={(pokemonData: CardProps, word: string) => {
              return handleData(pokemonData, word);
            }}
            isFetching={(isFetching: boolean) => setLoading(isFetching)}
          />
          <ThemeContainer
            onClick={() => {
              if (theme.title === 'default') setTheme(darkTheme);
              else setTheme(defaultTheme);
            }}
          >
            {theme.title === 'dark' ? (
              <>
                <img
                  className="default"
                  src={defaultmodeIcon}
                  alt="default theme selector"
                />
                {/* <p>Go Default Theme?</p> */}
              </>
            ) : (
              <>
                <img
                  className="dark"
                  src={darkmodeIcon}
                  alt="dark theme selector"
                />
                {/* <p style={{ marginTop: '10px' }}>Go Dark Theme?</p> */}
              </>
            )}
          </ThemeContainer>
        </div>

        {typedSearch !== '' &&
          !loading &&
          data &&
          !saved.find(card => data.name === card.name) &&
          !(data?.number === -666) && (
            <Card
              {...data}
              saved={false}
              onToggleSave={saveCard}
              key={`${data.name}-f`}
            />
            // eslint-disable-next-line indent
          )}

        {typedSearch !== '' && loading && (
          <LoaderContainer>
            <img className="spinner" src={spinner} alt="loading..." />
          </LoaderContainer>
        )}
        {typedSearch !== '' && !loading && data?.number === -666 && (
          <p className="noResult">No PokéDex matches</p>
        )}
        {/* {data && !saved.find(card => data.name === card.name) && (
          <Card
            {...data}
            saved={false}
            onToggleSave={saveCard}
            key={`${data.name}-f`}
          />
        )} */}
        {saved.map(savedData => (
          <Card
            {...savedData}
            saved
            onToggleSave={removeCard}
            key={`${savedData.name}-t`}
          />
        ))}
      </div>
    </ThemeProvider>
  );
};

export default App;
