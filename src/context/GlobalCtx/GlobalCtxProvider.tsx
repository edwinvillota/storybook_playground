import * as React from 'react';
import { useViewport } from 'hooks';
import { GlobalCtx } from 'context/GlobalCtx';

const GlobalCtxProvider: React.FC = ({ children }) => {
  const [viewportType] = useViewport();

  return <GlobalCtx.Provider value={{ viewportType }}>{children}</GlobalCtx.Provider>;
};

export default GlobalCtxProvider;
