export interface RouterLink {
  path: string
  name: string
  title: string
  visible: boolean
}

export const routerLinks: RouterLink[] = [
  { path: '/', name: 'home', title: 'Home', visible:true },
  { path: '/about', name: 'about', title: 'About',visible:true },
  { path: '/counter', name: 'counter', title: 'Counter',visible:true },
  { path: '/pokemons', name: 'pokemons', title: 'Pokemons',visible:true },
]
