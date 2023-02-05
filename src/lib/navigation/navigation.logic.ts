import { useNavigate } from 'react-router-dom';
import { Paths } from '@types';

interface NavigateToProps {
  prefix?: string;
  path: Paths;
  replace?: boolean;
}

export const useNav = () => {
  const navigate = useNavigate();

  const navigateTo = ({ prefix, path, replace }: NavigateToProps) => {
    const prefixText = `/${prefix}`;
    navigate(`${prefix ? prefixText : ''}/${path}`, { replace });
  };

  return {
    navigateTo,
  };
};
