import { combineReducers } from 'redux';
import CategoriesReducer from './reducer_categories';
//import ActiveCategory from './reducer_active_category';
import SelfHelpTechReducer from './reducer_self-helpTech';
import { CATEGORY_SELECTED, APPROPRIATE_SELECTED } from '../actions/index';

function ActiveCategory(state = null, action) {
  switch(action.type) {
    case CATEGORY_SELECTED:
      return action.payload;
    }
      return state;
}

function ActiveAppropriateTech(state = null, action) {
  switch(action.type) {
    case APPROPRIATE_SELECTED:
      return action.payload;
  }
    return state;
}

const rootReducer = combineReducers(
  {
    categories: CategoriesReducer,
    activeCategory: ActiveCategory,

    appropriateitems: SelfHelpTechReducer,
    activeAppropriateTech: ActiveAppropriateTech
  }
);

export default rootReducer;
