import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import Hello from '../components/Hello'
import heading from '../components/Heading'
import news from '../components/news/News'
import lastest from '../components/news/Lastest'
import about from '../components/news/About'
import culture from '../components/news/Culture'
import contn from '../components/news/Contn'
import experience from '../components/news/Experience'
import server from '../components/news/Server'
import pro from '../components/pro/Pro'
import allcar from '../components/pro/Allcar'
import business from '../components/pro/Business'
import mpv from '../components/pro/Mpv'
import saloon from '../components/pro/Saloon'
import suv from '../components/pro/Suv'
import xn from '../components/pro/Xn'
import src from '../components/serve/Src'
import baoxiu from '../components/serve/Baoxiu'
import cserver from '../components/serve/Cserver'
import guide from '../components/serve/Guide'
import keep from '../components/serve/Keep'
import rcall from '../components/serve/Rcall'
import emp from '../components/Emp'
import msg from '../components/Msg'
import signin from '../components/Signin'
import signup from '../components/Signup'
import home from '../components/Home'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/news',
      name: 'News',
      component: news,
      children: [
      {
      	path: 'lastest',
      	component: lastest
      },
      {
      	path: 'about',
      	component: about
      },      
      {
      	path: 'culture',
      	component: culture
      },      
      {
      	path: 'contn',
      	component: contn
      },      
      {
      	path: 'experience',
      	component: experience
      },      
      {
      	path: 'server',
      	component: server
      }
      ]
    },
    {
      path: '/pro',
      name: 'Pro',
      component: pro,
      children: [
      {
      	path: 'allcar',
      	component: allcar
      },      
      {
      	path: 'business',
      	component: business
      },      
      {
      	path: 'mpv',
      	component: mpv
      },     
      {
      	path: 'saloon',
      	component: saloon
      },      
      {
      	path: 'suv',
      	component: suv
      },      
      {
      	path: 'xn',
      	component: xn
      },
      ]
    },
    {
      path: '/src',
      name: 'src',
      component: src,
      children: [
      {
      	path: 'baoxiu',
      	component: baoxiu      	
      },{
      	path: 'cserver',
      	component: cserver      	
      },{
      	path: 'guide',
      	component: guide      	
      },{
      	path: 'keep',
      	component: keep      	
      },{
      	path: 'rcall',
      	component: rcall 	
      }
      ]
    },    {
      path: '/emp',
      name: 'Emp',
      component: emp
    },    {
      path: '/msg',
      name: 'Msg',
      component: msg
    },    {
      path: '/signin',
      name: 'Signin',
      component: signin
    },    {
      path: '/signup',
      name: 'Signup',
      component: signup
    },{
      path: '/',
      name: 'home',
      component: home
    },
  ]
})
