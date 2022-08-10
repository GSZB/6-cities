import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import SignInScreen from '../../pages/sign-in-page/sign-in-page';
import FavoritesScreen from '../../pages/favorites-page/favorites-page';
import RoomScreen from '../../pages/room-page/room-page';
import NotFoundScreen from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { Offer } from '../../types/offer-types';


type AppProps = {
  offersCount: number;
  offers: Offer[];
}

function App({offersCount, offers}: AppProps): JSX.Element {
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage offersCount={offersCount} offers={offers} />}/>
        <Route path={AppRoute.SignInScreen} element={<SignInScreen/>}/>
        <Route path={AppRoute.FavoritesScreen} element={<PrivateRoute authorizationStatus={AuthorizationStatus.Auth}><FavoritesScreen offer={offers[0]}/></PrivateRoute>}/>
        <Route path={AppRoute.RoomScreen} element={<RoomScreen/>}/>
        <Route path='*' element={<NotFoundScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
