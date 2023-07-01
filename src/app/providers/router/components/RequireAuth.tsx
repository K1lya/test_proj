import { useSelector } from 'react-redux';
import { selectUserAuthData } from 'entities/User';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';

export const RequireAuth = ({ children }: {children: JSX.Element}) => {
  const auth = useSelector(selectUserAuthData);
  const location = useLocation();

  if (!auth) {
    return (
      <Navigate
        to={RoutePaths.main}
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
};
