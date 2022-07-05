import '@docsearch/css';

import { DocSearch as AlogliaDocSearch } from '@docsearch/react';
import * as React from 'react';

export const DocSearch = () => {
  return (
    <div className="ml-16">
      <AlogliaDocSearch
        appId="81S2C2Y0RN"
        indexName="zaidmkz"
        apiKey="83a6080764aee1f68453e7c5f6d61956"
      />
    </div>
  );
};
