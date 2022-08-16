export interface IRoute {
  menuId?: number
  title?: string
  icon?: string
  page?: string
  color?: string
  subMenu?: IRoute[]
}

export const routeList: IRoute[] = [
  {
    menuId: 1,
    title: 'Fashion',
    icon: 'dry_cleaning',
    color: 'emerald.300',
    subMenu: [
      {
        menuId: 11,
        title: "Men's Fashion",
        subMenu: [
          {
            menuId: 111,
            title: 'T-Shirts',
            page: '/products?gender=men&category=t-shirts',
          },
          {
            menuId: 112,
            title: 'Pants',
            page: '/products?gender=men&category=pants',
          },
          {
            menuId: 113,
            title: 'Sneakers',
            page: '/products?gender=men&category=sneakers',
          },
        ],
      },
      {
        menuId: 12,
        title: "Women's Fashion",
        subMenu: [
          {
            menuId: 121,
            title: 'T-Shirts',
            page: '/products?gender=women&category=t-shirts',
          },
          {
            menuId: 122,
            title: 'Pants',
            page: '/products?gender=women&category=pants',
          },
          {
            menuId: 123,
            title: 'Sneakers',
            page: '/products?gender=women&category=sneakers',
          },
        ],
      },
    ],
  },
  {
    menuId: 2,
    title: 'Toys & Games',
    icon: 'sports_esports',
    color: 'teal.300',
    subMenu: [
      {
        menuId: 21,
        title: 'Toys',
        subMenu: [
          {
            menuId: 211,
            title: 'Toys',
            page: '/products?gender=kids&category=toys',
          },
        ],
      },
    ],
  },
  {
    menuId: 3,
    title: 'Work in Progress',
    icon: 'computer',
    color: 'cyan.300',
  },
  {
    menuId: 4,
    title: 'Work in Progress',
    icon: 'restaurant',
    color: 'rose.300',
  },
  {
    menuId: 5,
    title: 'Work in Progress',
    icon: 'pets',
    color: 'primary.300',
  },
  {
    menuId: 6,
    title: 'Work in Progress',
    icon: 'sports_basketball',
    color: 'fuschsia.300',
  },
  {
    menuId: 7,
    title: 'Work in Progress',
    icon: 'new_releases',
    color: 'white',
  },
  {
    menuId: 8,
    title: 'Work in Progress',
    icon: 'new_releases',
    color: 'white',
  },
  {
    menuId: 9,
    title: 'Work in Progress',
    icon: 'new_releases',
    color: 'white',
  },
  {
    menuId: 10,
    title: 'Work in Progress',
    icon: 'new_releases',
    color: 'white',
  },
  {
    menuId: 11,
    title: 'Work in Progress',
    icon: 'new_releases',
    color: 'white',
  },
]
