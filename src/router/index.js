import { createRouter, createWebHashHistory } from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import MessageCom from '../components/MessageCom.vue'
import FriendsCom from '../components/FriendsCom.vue'
import DiscoverCom from '../components/DiscoverCom.vue'
import CardView from '../views/CardView.vue'
import DialogView from '../views/DialogView.vue'
import SideView from '../views/SideView.vue'

const routes = [
  { path: '/', redirect: '/welcome' },
  { path: '/welcome', name: 'welcome', component: WelcomeView },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/home', name: 'home', component: HomeView, 
    children: [
      { path: 'message', component: MessageCom, meta: {keepAlive: true} },
      { path: 'friends', component: FriendsCom, meta: {keepAlive: true} },
      { path: 'discover', component: DiscoverCom }
    ]
  },
  { path: '/card', name: 'card', component: CardView },
  { path: '/dialog/:name', name: 'dialog', component: DialogView },
  { path: '/side', name: 'side', component: SideView }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
