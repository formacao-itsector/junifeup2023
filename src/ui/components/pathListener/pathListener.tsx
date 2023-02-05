import React, { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useCoreStore } from '@store';
import { Paths } from '@types';

export const PathListener: FC = () => {
  const location = useLocation();
  const set_current_path = useCoreStore((state) => state.set_current_path);

  useEffect(() => {
    const splitLocation = location.pathname.split('/');
    const current = splitLocation[splitLocation.length - 1] as Paths;
    set_current_path(current);
  }, [location.pathname]);

  return <></>;
};
