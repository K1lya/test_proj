import { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { useSelector } from 'react-redux';
import { selectUserAuthData } from 'entities/User';

function AppRouter() {
  const isAuth = useSelector(selectUserAuthData);

  const routes = useMemo(() => Object.values(routeConfig)
    .filter((route) => !(!isAuth && route.authOnly)), [isAuth]);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={(
              <div className="page-wrapper">
                {element}
              </div>
              )}
          />
        ))}
      </Routes>
    </Suspense>
  );
}

export default memo(AppRouter);
