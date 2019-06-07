import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CountryList from '@/components/CountryList'
import OlympicList from '@/components/OlympicList'
import Form from '@/components/Form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/list',
      name: 'CountryList',
      component: CountryList
    },
    {
      path: '/olympics',
      name: 'OlympicList',
      component: OlympicList
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    }
  ]
})
