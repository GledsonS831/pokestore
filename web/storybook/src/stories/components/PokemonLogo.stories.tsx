import React from 'react';

import PokemonLogo from '../../../../src/components/Header/PokemonLogo';

import { storiesOf } from '@storybook/react';

storiesOf("Logo", module).add('LogoHeader', () => <PokemonLogo />);