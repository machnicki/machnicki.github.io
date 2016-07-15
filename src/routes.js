import CarsContainer from './containers/cars.js'

const routes = [
  { path: '/', action: () => <CarsContainer /> },
  { path: '/cars', action: () => <CarsContainer /> },
  { path: '/cars/:id', action: () => <CarsContainer /> }
];
