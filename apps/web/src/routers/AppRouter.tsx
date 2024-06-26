import { ReactElement } from 'react';
import { useRoutes } from 'react-router-dom';

import { URL_PATHS } from '@/constants.ts';
import useScreenSize from '@/hooks/useScreenSize.ts';
import AlertPage from '@/pages/alert';
import SignInPage from '@/pages/auth/signin';
import SignUpPage from '@/pages/auth/signup';
import ErrorPage from '@/pages/error.tsx';

import HomeRedirect from './HomeRedirect';
import DashboardPrivateRouter from './private/DashboardPrivateRouter.tsx';
import MeetupPrivateRouter from './private/MeetupPrivateRouter.tsx';
import PrivateRoute from './private/PrivateRoute.tsx';
import ProfilePrivateRouter from './private/ProfilePrivateRouter.tsx';

const AppRouter = (): ReactElement | null => {
  useScreenSize();

  return useRoutes([
    { path: '/', element: <HomeRedirect /> },
    { path: URL_PATHS.AUTH.SIGN_IN, element: <SignInPage /> },
    { path: URL_PATHS.AUTH.SIGN_UP, element: <SignUpPage /> },
    {
      path: '/dashboard/*',
      element: <PrivateRoute />,
      children: [{ path: '*', element: <DashboardPrivateRouter /> }],
    },
    {
      path: '/meetup/*',
      element: <PrivateRoute />,
      children: [{ path: '*', element: <MeetupPrivateRouter /> }],
    },
    {
      path: '/profile/*',
      element: <PrivateRoute />,
      children: [{ path: '*', element: <ProfilePrivateRouter /> }],
    },
    { path: '/alert', element: <AlertPage /> },
    { path: '*', element: <ErrorPage /> },
  ]);
};

export default AppRouter;
