import { IScreenOrientationContextValue, ScreenOrientationContext } from './screen-orientation-context';

import { useContext } from 'react';

export const useScreenOrientation = (): IScreenOrientationContextValue => {
  const context = useContext(ScreenOrientationContext);
  return { ...context };
};
