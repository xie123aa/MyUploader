import Vue from 'vue'
import Router from 'vue-router'
import BigFileUpload from '../components/BigFileUpload'
import StopUpload from '../components/StopUpload'
import QuickUpload from '../components/QuickUpload'
import SingleFileUpload from '../components/SingleFileUpload'
import MultiFileUpload from  '../components/MultiFileUpload'
import PictureUpload from '../components/PictureUpload'
import FileDownload from '../components/FileDownload'
import Login from '../components/Login'
import Home from '../components/Home'


Vue.use(Router)

export default new Router({
  routes: [
    // {path:'/singleFileUpload',component:SingleFileUpload,name:'singleFileUpload'},
    // {path:'/bigFileUpload',component:BigFileUpload,name:'bigFileUpload'},
    // {path:'/stopUpload',component:StopUpload,name:'stopUpload'},
    // {path:'/quickUpload',component:QuickUpload,name:'quickUpload'},
    // {path:'/multiFileUpload',component:MultiFileUpload,name:'multiFileUpload'},
    // {path:'/pictureUpload',component:PictureUpload,name:'pictureUpload'},
    // {path:'/FileDownload',component:FileDownload,name:'FileDownload'},
    // {path:'/',component:SingleFileUpload,name:'singleFileUpload'}
    {path:'/home',component:Home,name:'Home',
      children: [
        {
          path: '/singleFileUpload',
          name: 'singleFileUpload',
          component: SingleFileUpload
        },
        {
          path: '/bigFileUpload',
          name: 'bigFileUpload',
          component: BigFileUpload
        },
        {
          path: '/quickUpload',
          name: 'quickUpload',
          component: QuickUpload
        },
        {
          path: '/multiFileUpload',
          name: 'multiFileUpload',
          component: MultiFileUpload
        },
        {
          path: '/pictureUpload',
          name: 'pictureUpload',
          component: PictureUpload
        },
        {
          path: '/fileDownload',
          name: 'FileDownload',
          component: FileDownload
        },
        {
          path: '/stopUpload',
          name: 'stopUpload',
          component: StopUpload
        }

      ]},
    {path:'/',component:Login,name:'Login'}
  ]
})
