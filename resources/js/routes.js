import VueRouter from 'vue-router';

import HomeComponent from './components/HomeComponent';
import Page1Component from './components/Page1Component';
import Page2Component from './components/Page2Component';
import Page3Component from './components/Page3Component';

const routes = [
    {
        path: "/",
        component: HomeComponent,
        name: "home"
    },
    {
        path: "/page1",
        component: Page1Component,
        name: "p1"
    },
    {
        path: "/page2",
        component: Page2Component,
        name: "p2"
    },
    {
        path: "/page3",
        component: Page3Component,
        name: "p3"
    }
];

const router = new VueRouter({
    routes,
    mode: "history",
    linkExactActiveClass: 'active',
});

export default router;
