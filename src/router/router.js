import Vue from 'vue';
import Router from 'vue-router';
import TelaDetalhamento from '../views/TelaDetalhamento';
import TelaInicial from '../views/TelaInicial';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'TelaInicial',
            component: TelaInicial
        },
        {
            path: '/teladetalhamento',
            name: 'Teladetalhamento',
            component: TelaDetalhamento
        },
    ]
})