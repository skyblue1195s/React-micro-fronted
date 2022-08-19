import React, { Suspense } from 'react';
const RemoteApp = React.lazy(() => import('app2/App'));
const AboutRemote = React.lazy(() => import('app2/About'));
const ProductRemote = React.lazy(() => import('app2/Product'));

const App = () => {
  return (
    <div>
      <div
        style={{
          margin: '10px',
          padding: '10px',
          textAlign: 'center',
          backgroundColor: 'greenyellow',
        }}
      >
        <h1>App1</h1>
      </div>
      <Suspense fallback={'loading...'}>
        <RemoteApp />
        <AboutRemote />
        <ProductRemote />
      </Suspense>
    </div>
  );
};

export default App;
