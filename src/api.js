import {
  dummyAdInfos,
  dummyCategoryList,
  dummyRestaurantList,
  dummyRestaurantInfo,
  dummyMenuList,
  dummyMenuInfo,
} from './dummyData';

const api = {
  getAdInfos: async () => {
    return dummyAdInfos;
  },
  getCategoryList: async () => {
    return dummyCategoryList;
  },
  getRestaurantList: async (categoryId, page) => {
    return dummyRestaurantList
      .map(info => {
        return { ...info, id: info.id + 21 * (page - 1) }
      })
  },
  getRestaurantInfo: async (restaurantId) => {
    return dummyRestaurantInfo;
  },
  updateRestaurantInfo: async ({ id, data }) => {
    const { isPicked } = data;
    const x = { ...dummyRestaurantInfo, ...data }
    if (!isPicked) {
      x['pickCnt'] = x['pickCnt'] - 1;
    }
    return x;
  },
  getMenuList: async (restaurantId) => {
    return dummyMenuList.map(menu => {
      return {
        ...menu,
        items: menu.items.map(item => ({ ...item, img: 'https://miro.medium.com/max/2560/1*2kHAAe4MpPTXMpeIeULegg.jpeg' }))
      }
    })
  },
  getMenuInfo: async (restaurantId, menuId) => {
    return dummyMenuInfo;
  }
}

export default api;