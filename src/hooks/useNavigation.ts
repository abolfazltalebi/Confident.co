import { useNavigate, useLocation } from 'react-router-dom';

export const useNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goTo = (path: string) => {
    navigate(path);
  };

  const goBack = () => {
    navigate(-1);
  };

  const goHome = () => {
    navigate('/');
  };

  const isCurrentPath = (path: string) => {
    return location.pathname === path;
  };

  return {
    goTo,
    goBack,
    goHome,
    isCurrentPath,
    currentPath: location.pathname,
  };
};
