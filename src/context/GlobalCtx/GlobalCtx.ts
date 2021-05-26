import * as React from 'react';
import { ViewPortTypes } from 'ts/enums';

interface IGlobalCtx {
  viewportType: ViewPortTypes;
}

const GlobalCtx = React.createContext({} as IGlobalCtx);

export default GlobalCtx;
