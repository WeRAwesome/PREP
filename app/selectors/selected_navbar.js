// the selected main Navbar

import _ from 'lodash';
import { createSelector } from 'reselect';

// Create select functions for local Navbar
const parentCategorySelector  = state => state.parent_category
const selectedCategorySelector = state => state.child_category

const getChildCategories = (categories, selectedIds) => {
  const selected
}
