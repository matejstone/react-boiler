// A sample of selectors - functions that help with store accessibility
//
// Gets the 'sample' store contents
// export const getSampleState = store => store.sample;
//
// Gets a specific 'sample' out of the store by ID
// export const getSampleValueById = (store, id) => {
// 	return getSampleState(store)
// 		? { ...getSampleState(store).byIds[id], id }
// 		: {};
// };
//

export const getProducts = store => store.products;

export const getProductsByCategory = (store, categoryFilter) => {
	return getProducts(store).filter(product => product.category === categoryFilter);
};
