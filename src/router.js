import Vue from 'vue'
import Router from 'vue-router'
import Cards from './components/Cards.vue'
import About from './components/pages/About.vue'
import Blog from './components/pages/Blog.vue'
import ContactUs from './components/pages/ContactUs.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Cards',
            component: Cards
        }, 
        {
            path: '/about',
            name: 'About',
            component: About
        }, 
        {
            path : '/blog',
            name: 'Blog',
            component: Blog
        }, 
        {
            path : '/contactus',
            name: 'ContactUs',
            component: ContactUs
        }
    ]
})