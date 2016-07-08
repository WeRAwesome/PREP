export const CATEGORY_SELECTED = 'CATEGORY_SELECTED';

export function selectCategory(category) {
  console.log('A navItem has been selected: ', navItem.parent_category);

  return {
    type: CATEGORY_SELECTED,
    payload: category
  };
}
