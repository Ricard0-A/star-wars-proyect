
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseURL: "https://www.swapi.tech/api",
			people: [],
			planets: [],
			vehicles: [],
			currentItem: undefined,
			list:[],
			favorite: undefined,
		},

		actions: {
			getItems: async (resource) => {
				const store = getStore();
				const response = await fetch(
					
					`${store.baseURL}/${resource}?page=1&limit=12`
				);
				const body = await response.json();
				setStore({
					[resource]: body.results.map((item)=>{
						return {
							...item, resource
						}
					}),
				});
			},
			getDetails: async (resource, uid) => {
				const store = getStore();
				const response = await fetch(
					`${store.baseURL}/${resource}/${uid}`
				)
				const body = await response.json();
				if (!response.ok) return;
				setStore({
					currentItem: body.result,
				});
			},
			removeCurrentItem: () => setStore({ currentItem: undefined }),
			getFavorites: async (resource, uid) => {
				const store = getStore();
				const actions = getActions();  // Para acceder a las demas actions!
			
				const isFavorite = store.list.some(item => String(item.uid) === String(uid) && item.resource === resource);
			
				if (isFavorite) {
					actions.deleteFavorite(uid, resource);
				} else {
					const response = await fetch(`${store.baseURL}/${resource}/${uid}`);
					const body = await response.json();
					if (!response.ok) return;
			
					setStore({
						favorite: { resource, ...body.result },
						list: [...store.list, { resource, ...body.result }]
					});
				}
			},
			deleteFavorite: (uid, resource) => {
				const store = getStore();
				setStore({
					list: store.list.filter(item => !(String(item.uid) === String(uid) && item.resource === resource))
				});
			},
			
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				
			},
			changeColor: (index, color) => {
				
				const store = getStore();
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;