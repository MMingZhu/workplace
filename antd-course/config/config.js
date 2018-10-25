export default {
    singular: true,
    routes: [
        {
            path: '/',
            component: '../layout/BasicLayout',
            routes: [
                {
                    path: '/',
                    component: 'HelloWorld'
                },
                {
                    path: 'helloworld',
                    component: 'HelloWorld'
                },
                {
                    path: 'dashboard',
                    routes: [
                        {path: 'analysis', component: 'dashboard/Analysis'},
                        {path: 'monitor', component: 'dashboard/Monitor'},
                        {path: 'workplace', component: 'dashboard/Workplace'}
                    ]
                },
            ]
        },
    ],
    plugins: [
        ['umi-plugin-react', {
            antd: true
        }]
    ],
};