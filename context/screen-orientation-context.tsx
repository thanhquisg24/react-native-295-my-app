import {
  Orientation,
  OrientationChangeEvent,
  addOrientationChangeListener,
  getOrientationAsync,
  removeOrientationChangeListener,
} from 'expo-screen-orientation';
import React, { createContext, useCallback, useEffect, useState } from 'react';

const DEFAULT_ORIENTATION: ScreenOrientationType = 'PORTRAIT';
export type ScreenOrientationType = 'PORTRAIT' | 'LANDSCAPE';

function getConfig(type: ScreenOrientationType): IScreenRenderConfig {
  if (type === 'PORTRAIT') {
    return {
      flatList: {
        numColumns: 2,
        gap: 5,
      },
    };
  } else {
    return {
      flatList: {
        numColumns: 3,
        gap: 5,
      },
    };
  }
}

export interface IScreenRenderConfig {
  flatList: { numColumns: number; gap: number };
}

// Define the type for your context value
export interface IScreenOrientationContextValue {
  orientation: ScreenOrientationType;
  config: IScreenRenderConfig;
}

const defaultContextVal = {
  orientation: DEFAULT_ORIENTATION,
  config: getConfig(DEFAULT_ORIENTATION),
};

// Create the context
export const ScreenOrientationContext = createContext<IScreenOrientationContextValue>(defaultContextVal);

// Create a provider component
export const ScreenOrientationProvider = (props: { children: any }) => {
  const { children } = props;
  const [state, setState] = useState<IScreenOrientationContextValue>(defaultContextVal);

  const setRenderConfig = useCallback((orientation: Orientation) => {
    let newOrientationType: ScreenOrientationType = 'PORTRAIT';
    if (orientation === Orientation.PORTRAIT_UP) {
      newOrientationType = 'PORTRAIT';
    } else if (orientation === Orientation.LANDSCAPE_LEFT || orientation === Orientation.LANDSCAPE_RIGHT) {
      newOrientationType = 'LANDSCAPE';
    }
    const newConfig = getConfig(newOrientationType);
    setState({ orientation: newOrientationType, config: newConfig });
  }, []);

  useEffect(() => {
    getOrientationAsync().then((r) => {
      setRenderConfig(r);
    });

    const evFunc = (evt: OrientationChangeEvent) => {
      if (evt) {
        setRenderConfig(evt.orientationInfo.orientation);
      }
    };
    const ev = addOrientationChangeListener(evFunc);
    return () => {
      if (ev) {
        removeOrientationChangeListener(ev);
      }
    };
  }, [setRenderConfig]);

  return <ScreenOrientationContext.Provider value={{ ...state }}>{children}</ScreenOrientationContext.Provider>;
};
