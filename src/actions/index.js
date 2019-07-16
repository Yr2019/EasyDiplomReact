const loadedItems = (newItem, type) => {
  return {
    type: type,
    payload: newItem
  }
}

const itemLoading = () => {
  return {
    type: 'LOADING'
  }
}

const errorAppeared = () => {
  return {
    type: 'ERROR'
  }
}

const filterItems = (country) => {
  return {
    type: 'FILTER_ITEMS',
    payload: country
  }
}

const searchItems = (title) => {
  return {
    type: 'SEARCH_ITEMS',
    payload: title
  }
}

const selectedItem = (id) => {
  return {
    type: 'SELECTED_ITEM',
    payload: id
  }
}

export {
  loadedItems,
  itemLoading,
  errorAppeared,
  filterItems,
  searchItems,
  selectedItem
}