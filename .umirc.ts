import { defineConfig } from 'umi';

export default defineConfig({
  title: 'Visible',
  hash:true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        {
          name: 'vis-network',
          path: '/vis-network',
          component: './Network'
        },
        {
          name: 'antV',
          path: '/antV',
          routes:[
            {
              name: 'g6',
              path: '/antV/g6',
              component:'./AntV/G6'
            }
          ]
        },
        {
          name: 'animation',
          path: '/animation',
          routes:[
            {
              name: 'rollhorse',
              path: '/animation/rollhorse',
              component:'./Animation/Rollhorse'
            }
          ]
        },
        {
          name: 'bigtable',
          path:'/bigtable',
          component: './BigTable'
        },
        {
            name: 'd3',
            path: '/d3',
            component: './D3'
        },
        {
          path: '/',
          redirect:'/vis-network'
        },
        {
          component: '404'
        }
      ]
    }
  ],
});
