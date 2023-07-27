import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import SearchByName from '../views/SearchByName.vue';
import SearchByIngredients from '../views/SearchByIngredients.vue';
import SearchByLetter from '../views/SearchByLetter.vue';
import DefaultLayout from '../components/DefaultLayout.vue';

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/by-name/:name?',
                name: 'byName',
                component: SearchByName
            },
            {
                path: '/by-ingredients/:ingredients?',
                name: 'byIngredient',
                component: SearchByIngredients
            },
            {
                path: '/by-letterletter/:letter?',
                name: 'byLetter',
                component: SearchByLetter
            }
        ]
    },
   
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;