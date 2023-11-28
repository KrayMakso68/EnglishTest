
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'training', component: () => import('pages/TestPage.vue') },
      { path: 'test', component: () => import('pages/TestPage.vue'), props: { isTest: true } },
      { path: 'result', component: () => import('pages/ResultPage.vue') },
      { path: 'about', component: () => import('pages/AboutPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
