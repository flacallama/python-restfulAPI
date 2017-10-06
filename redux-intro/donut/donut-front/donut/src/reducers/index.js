import { combineReducers } from 'redux';
import getDonuts from './getDonuts';
import getStores from './getStores';
import getShopsDonuts from './getShopsDonuts';
import selectDonut from './selectDonut';
import selectStore from './selectStore';

const rootReducer = combineReducers({
  getDonuts,
  getStores,
  getShopsDonuts,
  selectDonut,
  selectStore
})

export default rootReducer;
