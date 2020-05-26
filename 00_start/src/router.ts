import Router, { RouteConfig } from 'vue-router';
import { OrganizationPageContainer, MemberPageContainer } from './components';

const routes: RouteConfig[] = [
  { path: '/', redirect: '/Organization' },
  { path: '/Organization', component: OrganizationPageContainer },
  { path: '/member/:id', component: MemberPageContainer, props: true },
];

export const router = new Router({
  routes,
});
