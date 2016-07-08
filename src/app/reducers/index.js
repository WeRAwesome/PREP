import { combineReducers } from 'redux';
import CategoriesReducer from './reducer_categories';
import ActiveCategory from './reducer_active_category';

const rootReducer = combineReducers({
  categories: CategoriesReducer,
  activeCategory: ActiveCategory
});

export default rootReducer;
