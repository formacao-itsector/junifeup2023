import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import produce from 'immer';
import { CoreStore, CoreStoreActions, CoreStoreState } from './core.types';
import { Anything, Paths } from '@types';

const initialState: CoreStoreState = {
  current_path: Paths.root,
};

const actions = (set: Anything): CoreStoreActions => {
  const set_current_path = (p: Paths) => {
    set(
      produce((state: CoreStoreState) => {
        state.current_path = p;
      }),
      false,
      'set_current_path'
    );
  };

  return {
    set_current_path,
  };
};

export const useCoreStore = create<CoreStore>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        ...actions(set),
      }),
      {
        name: 'CORE.STORE',
      }
    ),
    {
      name: 'CORE.STORE',
    }
  )
);
