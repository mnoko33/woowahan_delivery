const dummyAdInfos = [
  { 
    id: 1,
    src: 'https://png.pngtree.com/thumb_back/fh260/background/20190222/ourmid/pngtree-crayfish-food-food-condiment-black-horizontal-banner-goodsseasoningblackhorizontal-bannerdelicious-image_50376.jpg'
  },
  { 
    id: 2,
    src: 'https://previews.123rf.com/images/vicushka/vicushka1602/vicushka160200117/52237375-asian-food-background-with-various-of-cooking-ingredients-on-rustic-background-top-view-banner-asian.jpg'
  },
  { 
    id: 3,
    src: 'https://as1.ftcdn.net/jpg/01/80/41/98/500_F_180419859_SbEGEyoMlol8sZGpea1lqQRRYFZ1ExNX.jpg'
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

const dummyRestaurantList = [
  {
    id: 1,
    img: 'https://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2019/09/27/20190927000594_0.jpg',
    name: '샤브샤브 그린플레이트 하남레이트점',
    userRating: 4.2,
    description: '(1인분) 소고기 샤브샤브, (2인분) 소고기 샤브샤브, (3인분) 소고기 샤브샤브, (4인분) 소고기 샤브샤브',
    // description: '(1인분) 소고기 샤브샤브, (2인분) 소고기 샤브샤브',
    deliveryTime: [54, 64],
    deliveryTip: [4000],
    minimumOrder: 9000,
  },
  {
    id: 2,
    img: 'https://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2019/09/27/20190927000594_0.jpg',
    name: '샤브샤브 그린플레이트 하남점',
    userRating: 4.2,
    description: '(1인분) 소고기 샤브샤브, (2인분) 소고기 샤브샤브',
    deliveryTime: [54, 64],
    deliveryTip: [4000, 5000],
    minimumOrder: 9000,
  },
  {
    id: 3,
    img: 'https://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2019/09/27/20190927000594_0.jpg',
    name: '샤브샤브 그린플레이트 하남점',
    userRating: 4.2,
    description: '(1인분) 소고기 샤브샤브, (2인분) 소고기 샤브샤브',
    deliveryTime: [54, 64],
    deliveryTip: [0, 5000],
    minimumOrder: 9000,
  },
  {
    id: 4,
    img: 'https://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2019/09/27/20190927000594_0.jpg',
    name: '샤브샤브 그린플레이트 하남점',
    userRating: 4.2,
    description: '(1인분) 소고기 샤브샤브, (2인분) 소고기 샤브샤브',
    deliveryTime: [54, 64],
    deliveryTip: [4000, 5000],
    minimumOrder: 9000,
  },
  {
    id: 5,
    img: 'https://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2019/09/27/20190927000594_0.jpg',
    name: '샤브샤브 그린플레이트 하남점',
    userRating: 4.2,
    description: '(1인분) 소고기 샤브샤브, (2인분) 소고기 샤브샤브',
    deliveryTime: [54, 64],
    deliveryTip: [4000, 5000],
    minimumOrder: 9000,
  },
  {
    id: 6,
    img: 'https://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2019/09/27/20190927000594_0.jpg',
    name: '샤브샤브 그린플레이트 하남점',
    userRating: 4.2,
    description: '(1인분) 소고기 샤브샤브, (2인분) 소고기 샤브샤브',
    deliveryTime: [54, 64],
    deliveryTip: [4000, 5000],
    minimumOrder: 9000,
  },
  {
    id: 7,
    img: 'https://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2019/09/27/20190927000594_0.jpg',
    name: '샤브샤브 그린플레이트 하남점',
    userRating: 4.2,
    description: '(1인분) 소고기 샤브샤브, (2인분) 소고기 샤브샤브',
    deliveryTime: [54, 64],
    deliveryTip: [4000, 5000],
    minimumOrder: 9000,
  },
  {
    id: 8,
    img: 'https://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2019/09/27/20190927000594_0.jpg',
    name: '샤브샤브 그린플레이트 하남점',
    userRating: 4.2,
    description: '(1인분) 소고기 샤브샤브, (2인분) 소고기 샤브샤브',
    deliveryTime: [54, 64],
    deliveryTip: [4000, 5000],
    minimumOrder: 9000,
  },
  {
    id: 9,
    img: 'https://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2019/09/27/20190927000594_0.jpg',
    name: '샤브샤브 그린플레이트 하남점',
    userRating: 4.2,
    description: '(1인분) 소고기 샤브샤브, (2인분) 소고기 샤브샤브',
    deliveryTime: [54, 64],
    deliveryTip: [4000, 5000],
    minimumOrder: 9000,
  },
  {
    id: 10,
    img: 'https://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2019/09/27/20190927000594_0.jpg',
    name: '샤브샤브 그린플레이트 하남점',
    userRating: 4.2,
    description: '(1인분) 소고기 샤브샤브, (2인분) 소고기 샤브샤브',
    deliveryTime: [54, 64],
    deliveryTip: [4000, 5000],
    minimumOrder: 9000,
  },
  {
    id: 11,
    img: 'https://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2019/09/27/20190927000594_0.jpg',
    name: '샤브샤브 그린플레이트 하남점',
    userRating: 4.2,
    description: '(1인분) 소고기 샤브샤브, (2인분) 소고기 샤브샤브',
    deliveryTime: [54, 64],
    deliveryTip: [4000, 5000],
    minimumOrder: 9000,
  },
  {
    id: 12,
    img: 'https://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2019/09/27/20190927000594_0.jpg',
    name: '샤브샤브 그린플레이트 하남점',
    userRating: 4.2,
    description: '(1인분) 소고기 샤브샤브, (2인분) 소고기 샤브샤브',
    deliveryTime: [54, 64],
    deliveryTip: [4000, 5000],
    minimumOrder: 9000,
  },
  {
    id: 13,
    img: 'https://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2019/09/27/20190927000594_0.jpg',
    name: '샤브샤브 그린플레이트 하남점',
    userRating: 4.2,
    description: '(1인분) 소고기 샤브샤브, (2인분) 소고기 샤브샤브',
    deliveryTime: [54, 64],
    deliveryTip: [4000, 5000],
    minimumOrder: 9000,
  },
  {
    id: 14,
    img: 'https://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2019/09/27/20190927000594_0.jpg',
    name: '샤브샤브 그린플레이트 하남점',
    userRating: 4.2,
    description: '(1인분) 소고기 샤브샤브, (2인분) 소고기 샤브샤브',
    deliveryTime: [54, 64],
    deliveryTip: [4000, 5000],
    minimumOrder: 9000,
  },
  {
    id: 15,
    img: 'https://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2019/09/27/20190927000594_0.jpg',
    name: '샤브샤브 그린플레이트 하남점',
    userRating: 4.2,
    description: '(1인분) 소고기 샤브샤브, (2인분) 소고기 샤브샤브',
    deliveryTime: [54, 64],
    deliveryTip: [4000, 5000],
    minimumOrder: 9000,
  },
  {
    id: 16,
    img: 'https://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2019/09/27/20190927000594_0.jpg',
    name: '샤브샤브 그린플레이트 하남점',
    userRating: 4.2,
    description: '(1인분) 소고기 샤브샤브, (2인분) 소고기 샤브샤브',
    deliveryTime: [54, 64],
    deliveryTip: [4000, 5000],
    minimumOrder: 9000,
  },
  {
    id: 17,
    img: 'https://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2019/09/27/20190927000594_0.jpg',
    name: '샤브샤브 그린플레이트 하남점',
    userRating: 4.2,
    description: '(1인분) 소고기 샤브샤브, (2인분) 소고기 샤브샤브',
    deliveryTime: [54, 64],
    deliveryTip: [4000, 5000],
    minimumOrder: 9000,
  },
  {
    id: 18,
    img: 'https://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2019/09/27/20190927000594_0.jpg',
    name: '샤브샤브 그린플레이트 하남점',
    userRating: 4.2,
    description: '(1인분) 소고기 샤브샤브, (2인분) 소고기 샤브샤브',
    deliveryTime: [54, 64],
    deliveryTip: [4000, 5000],
    minimumOrder: 9000,
  },
  {
    id: 19,
    img: 'https://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2019/09/27/20190927000594_0.jpg',
    name: '샤브샤브 그린플레이트 하남점',
    userRating: 4.2,
    description: '(1인분) 소고기 샤브샤브, (2인분) 소고기 샤브샤브',
    deliveryTime: [54, 64],
    deliveryTip: [4000, 5000],
    minimumOrder: 9000,
  },
  {
    id: 20,
    img: 'https://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2019/09/27/20190927000594_0.jpg',
    name: '샤브샤브 그린플레이트 하남점',
    userRating: 4.2,
    description: '(1인분) 소고기 샤브샤브, (2인분) 소고기 샤브샤브',
    deliveryTime: [54, 64],
    deliveryTip: [4000, 5000],
    minimumOrder: 9000,
  },
  {
    id: 21,
    img: 'https://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2019/09/27/20190927000594_0.jpg',
    name: '샤브샤브 그린플레이트 하남점',
    userRating: 4.2,
    description: '(1인분) 소고기 샤브샤브, (2인분) 소고기 샤브샤브',
    deliveryTime: [54, 64],
    deliveryTip: [4000, 5000],
    minimumOrder: 9000,
  },
]

const dummyRestaurantInfo = {
  id: 1,
  name: '처갓집양념치킨 미사강변점',
  address: '경기도 하남시 망월동 849-3 1층 (망월동)',
  userRating: 4.4,
  description: '',
  deliveryTime: [54, 64],
  deliveryTip: [2000, 4000],
  cookingTime: [15, 20],
  minimumOrder: 9000,
  phoneNumber: '010-1234-5678',
  isPicked: true,
  pickCnt: 148,
  recentlyReviewCnt: 331,
  recentlyOwnerCommentCnt: 185,
  paymentType: ['바로결제', '만나서결제'],
  orderType: ['배달', '포장', '방문'],
  coupon: [1500, 2000, 3000],
}

const dummyMenuList = [
  {
    category: '한마리 치킨',
    description: '치킨+무+콜라245ml+쿠폰',
    items: [
      {
        id: 1,
        name: '후라이드치킨',
        description: '치킨+무+콜라245ml+쿠폰',
        price: [
          { '뼈': 19000 },
          { '순살': 20000 }
        ]
      },
      {
        id: 2,
        name: '허니올리고당양념치킨',
        description: '치킨+무+콜라245ml+쿠폰',
        price: [
          { '뼈': 18000 },
          { '순살': 19000 }
        ]
      },
      {
        id: 3,
        name: '반반치킨',
        description: '처갓집양념치킨 최고 인기 메뉴! 양념과 후라이드를 한번에!',
        price: [
          { '2가지 선택': 16000 },
        ]
      },
      {
        id: 4,
        name: '슈프림양념치킨',
        description: '치킨+무+콜라245ml+쿠폰 / 처갓집 베스트셀러!!!',
        price: [
          { '뼈': 19000 },
          { '순살': 20000 }
        ]
      },
    ],
  },
  {
    category: '신메뉴',
    description: '처갓집 신메뉴',
    items: [
      {
        id: 5,
        name: '트러플슈프림양념치킨',
        description: '치킨+무+콜라245ml+쿠폰',
        price: [
          { '뼈': 19000 },
          { '순살': 20000 }
        ]
      },
      {
        id: 6,
        name: '100%청양산 고추치킨',
        description: '',
        price: 19000,
      }
    ],
  },
  {
    category: '사이드메뉴',
    description: '',
    items: [
      {
        id: 7,
        name: '떡 사리 추가',
        description: '순살치킨에 추가하면 최고의 조합!',
        price: 2000,
      },
      {
        id: 8,
        name: '슈프림떡',
        description: '',
        price: 2000,
      },
      {
        id: 9,
        name: '치즈볼 6개',
        description: '',
        price: 5000,
      },
      {
        id: 10,
        name: '피자볼 6개',
        description: '',
        price: 5000,
      },
      {
        id: 11,
        name: '고구마볼 6개',
        description: '',
        price: 5000,
      },
      {
        id: 12,
        name: '크림치즈볼 6개',
        description: '',
        price: 5000,
      },
    ],
  },
];

const dummyMenuInfo = {
  id: 1,
  name: '허니올리고당양념치킨',
  price: '19000',
  img: 'https://miro.medium.com/max/2560/1*2kHAAe4MpPTXMpeIeULegg.jpeg'
}

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
    return dummyMenuList;
  },
  getMenuInfo: async (restaurantId, menuId) => {
    return dummyMenuInfo;
  }
}

export default api;