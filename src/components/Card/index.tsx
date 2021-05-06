import InteractiveIcon from 'components/InteractiveIcon';
import getIcon from 'helpers/typeIcons';
import React, { useEffect, useState } from 'react';
import Dropdown from './Dropdown';
import {
  Container,
  SpriteContainer,
  PokeData,
  SaveIcon,
  RemoveIcon,
} from './styles';

interface FlavorEntry {
  // eslint-disable-next-line camelcase
  flavor_text: string;
  language: {
    name: string;
    url: string;
  };
  version: {
    name: string;
    url: string;
  };
}
export interface CardProps {
  name: string;
  number: number;
  types: string[];
  sprite: string;
  flavorData: FlavorEntry[];
  saved?: boolean;
  onToggleSave?: (Object: CardProps) => void;
}

const Card: React.FC<CardProps> = ({
  name,
  number,
  types,
  sprite,
  flavorData,
  saved,
  onToggleSave,
}: CardProps) => {
  const [flavorVersion, setFlavorVersion] = useState({
    lang: 'en',
    ver: flavorData.find(entry => entry.language.name === 'en')?.version
      .name as string,
  });
  useEffect(
    () =>
      setFlavorVersion({
        lang: 'en',
        ver: flavorData.find(entry => entry.language.name === 'en')?.version
          .name as string,
      }),
    [flavorData],
  );

  const handleFlavorVersion = (key: string) => {
    const [newLang, newVer] = key.split('—');
    setFlavorVersion({ lang: newLang, ver: newVer });
  };

  const declutter = (str: string) => {
    return str.replace(String.fromCharCode(12), ' ');
  };

  return (
    <Container>
      <SpriteContainer>
        <img src={sprite} alt={`${name}'s sprite`} className="sprite" />
        <p className="number">{`#${number}`}</p>
        <p className="mobileDescription">
          {declutter(
            `${
              flavorData.find(
                entry =>
                  entry.language.name === flavorVersion.lang &&
                  entry.version.name === flavorVersion.ver,
              )?.flavor_text
            }`,
          )}
        </p>
      </SpriteContainer>
      <PokeData>
        <h1>
          {name}
          {types.map(type => (
            <InteractiveIcon typeName={type} src={getIcon(type)} />
          ))}
        </h1>
        <p>
          {declutter(
            `${
              flavorData.find(
                entry =>
                  entry.language.name === flavorVersion.lang &&
                  entry.version.name === flavorVersion.ver,
              )?.flavor_text
            }`,
          )}
        </p>
      </PokeData>
      <Dropdown
        data={flavorData}
        onChange={handleFlavorVersion}
        defaultFlavor={flavorVersion}
      />
      {onToggleSave && !saved && (
        <SaveIcon
          onClick={() =>
            onToggleSave({
              name,
              number,
              types,
              sprite,
              flavorData,
            })
          }
        />
      )}
      {onToggleSave && saved && (
        <RemoveIcon
          onClick={() =>
            onToggleSave({
              name,
              number,
              types,
              sprite,
              flavorData,
            })
          }
        />
      )}
    </Container>
  );
};

Card.defaultProps = {
  saved: true,
};

export default Card;
