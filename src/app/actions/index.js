export const CATEGORY_SELECTED = 'CATEGORY_SELECTED';
export const APPROPRIATE_SELECTED = 'APPROPRIATE_SELECTED';

export function selectCategory(category) {
  console.log('A category has been selected: ', category.parent_category);

  return {
    type: CATEGORY_SELECTED,
    payload: category
  };
}

export function selectAppropriate(appropriateitem) {
  console.log('appropriate item here');

  return {
    type: APPROPRIATE_SELECTED,
    payload: appropriateitem
  };
}
