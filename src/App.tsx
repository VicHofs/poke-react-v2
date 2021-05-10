import React, { useEffect, useState } from 'react';
import Card, { CardProps } from 'components/Card';
import Header from 'components/Header'; /*
import CardDefaultProps from 'mock/card'; */
import SearchBar from 'components/SearchBar';
import spinner from 'static/images/loader.png';
import { ThemeProvider } from 'styled-components';
import darkTheme from 'styles/themes/dark';
import defaultTheme from 'styles/themes/default';
import darkmodeIcon from 'static/images/darkmodeIcon.png';
import defaultmodeIcon from 'static/images/defaultmodeIcon.png';
import Footer from 'components/Footer';
import { getCookies, setCookie } from 'helpers/cookies';
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
  const [theme, setTheme] = useState<Theme>(
    getCookies().theme === 'dark' ? darkTheme : defaultTheme,
  );

  const handleData = (pokemonData: CardProps, word: string) => {
    setData(pokemonData);
    setTypedSearch(word);
  };
  useEffect(() => {
    // do nothing
  }, [typedSearch]);

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
          alignContent: 'center',
          placeItems: 'center',
          minHeight: 'calc(100vh - 120px)',
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
              if (theme.title === 'default') {
                setTheme(darkTheme);
                setCookie('theme', 'dark');
              } else {
                setTheme(defaultTheme);
                setCookie('theme', 'light');
              }
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
      <Footer />
    </ThemeProvider>
  );
};

export default App;
