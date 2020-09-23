const dummyAdInfos = [
  { 
    id: 1,
    src: 'https://png.pngtree.com/thumb_back/fh260/background/20190222/ourmid/pngtree-crayfish-food-food-condiment-black-horizontal-banner-goodsseasoningblackhorizontal-bannerdelicious-image_50376.jpg'
  },
];

const dummyCategoryList = [
  {
    id: 1,
    name: '포장/방문',
    src: 'https://byline.network/wp-content/uploads/2020/01/baemin-300x300.png',
  },
  {
    id: 2,
    name: '1인분',
    src: 'https://byline.network/wp-content/uploads/2020/01/baemin-300x300.png',
  },
  {
    id: 3,
    name: '한식',
    src: 'https://byline.network/wp-content/uploads/2020/01/baemin-300x300.png',
  },
  {
    id: 4,
    name: '분식',
    src: 'https://byline.network/wp-content/uploads/2020/01/baemin-300x300.png',
  },
  {
    id: 5,
    name: '카페/디저트',
    src: 'https://byline.network/wp-content/uploads/2020/01/baemin-300x300.png',
  },
  {
    id: 6,
    name: '돈까스/회/일식',
    src: 'https://byline.network/wp-content/uploads/2020/01/baemin-300x300.png',
  },
  {
    id: 7,
    name: '치킨',
    src: 'https://byline.network/wp-content/uploads/2020/01/baemin-300x300.png',
  },
  {
    id: 8,
    name: '피자',
    src: 'https://byline.network/wp-content/uploads/2020/01/baemin-300x300.png',
  },
  {
    id: 9,
    name: '아시안/양식',
    src: 'https://byline.network/wp-content/uploads/2020/01/baemin-300x300.png',
  },
  {
    id: 10,
    name: '중국집',
    src: 'https://byline.network/wp-content/uploads/2020/01/baemin-300x300.png',
  },
  {
    id: 11,
    name: '족발/보쌈',
    src: 'https://byline.network/wp-content/uploads/2020/01/baemin-300x300.png',
  },
  {
    id: 12,
    name: '야식',
    src: 'https://byline.network/wp-content/uploads/2020/01/baemin-300x300.png',
  },
  {
    id: 13,
    name: '찜/탕',
    src: 'https://byline.network/wp-content/uploads/2020/01/baemin-300x300.png',
  },
  {
    id: 14,
    name: '도시락',
    src: 'https://byline.network/wp-content/uploads/2020/01/baemin-300x300.png',
  },
  {
    id: 15,
    name: '패스트푸드',
    src: 'https://byline.network/wp-content/uploads/2020/01/baemin-300x300.png',
  },
  {
    id: 16,
    name: '프랜차이즈',
    src: 'https://byline.network/wp-content/uploads/2020/01/baemin-300x300.png',
  },
]


const api = {
  getAdInfos: async () => {
    return dummyAdInfos;
  },
  getCategoryList: async () => {
    return dummyCategoryList;
  }
}

export default api;