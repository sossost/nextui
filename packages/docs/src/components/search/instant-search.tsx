import * as React from 'react';
import {
  InstantSearch as BaseInstantSearch,
  Configure,
} from 'react-instantsearch-dom';
import getAlgoliaClient from '@lib/get-algolia';
import Autocomplete from './autocomplete';

const searchClient = getAlgoliaClient();
const INDEX_NAME = process.env.NEXT_PUBLIC_ALGOLIA_INDEX;

const InstantSearch: React.FC<unknown> = () => {
  return (
    <BaseInstantSearch
      indexName={INDEX_NAME || 'prod_docs'}
      searchClient={searchClient}
    >
      <Configure hitsPerPage={8} />
      <Autocomplete />
    </BaseInstantSearch>
  );
};

export default InstantSearch;