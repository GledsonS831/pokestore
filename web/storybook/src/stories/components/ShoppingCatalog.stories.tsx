import React from 'react';

import { storiesOf } from '@storybook/react';

import ShoppingList from '../../../../src/components/ShoppingCatalog/ShoppingList';

storiesOf('ShoppingCatalog', module).add('Conteiner', () => <ShoppingList />);