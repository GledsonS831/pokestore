import React from 'react';

import Search from '../../../../src/components/Header/Search';

import { storiesOf } from '@storybook/react';

storiesOf('Search', module).add('Container', () => <Search typeInput="search" placeholderInput="Digite o pokemon que você procura..." />);