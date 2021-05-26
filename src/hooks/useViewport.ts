import { useState, useEffect } from 'react';
import { ViewPortTypes } from 'ts/enums';

const getViewport = (): ViewPortTypes => {
  const viewPortWidth = document.getElementsByTagName('html')[0].offsetWidth;

  if (viewPortWidth < 768) {
    return ViewPortTypes.phone;
  }

  if (viewPortWidth < 992) {
    return ViewPortTypes.tablet;
  }

  if (viewPortWidth < 1200) {
    return ViewPortTypes.desktop;
  }

  return ViewPortTypes.largeDesktop;
};

export default function useViewport(): ViewPortTypes[] {
  const [viewport, setViewport] = useState(getViewport());
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const oldResize: ReturnType<(a: UIEvent) => any> | null = window.onresize;
  const onResize = (evt?: UIEvent) => {
    evt && oldResize?.(evt);
    return setViewport(getViewport());
  };
  window.onresize = onResize;

  useEffect(() => {
    onResize();
  }, []);

  return [viewport];
}
