import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../pages/Home/Home.vue')
const Login = () => import('../pages/Login/Login.vue')
const Register = () => import('../pages/Register/Register.vue')
const PostArticle = () => import('../pages/PostArticle/PostArticle.vue')
const ArticleDetail = () => import('../pages/ArticleDetail/ArticleDetail.vue')
const PersonalCenter = () => import('../pages/PersonalCenter/PersonalCenter.vue')
const PersonalInfo = () => import('../pages/PersonalInfo/PersonalInfo.vue')
const UserInfo = () => import('../components/UserInfo/UserInfo.vue')
const PassEdit = () => import('../components/PassEdit/PassEdit.vue')
const MyCommentList = () => import('../pages/MyCommentList/MyCommentList.vue')
const SearchArticle = () => import('../pages/SearchArticle/SearchArticle.vue')
const EditArticle = () => import('../pages/EditArticle/EditArticle.vue')
const PostSuccess = () => import('../pages/PostSuccess/PostSuccess.vue')


Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path:'/',
      component:Home
    },
    {
      path:'/login',
      component:Login,
      meta:{
        noShowHeader:true
      }
    },
    {
      path:'/register',
      component:Register,
      meta:{
        noShowHeader:true
      }
    },
    {
      path: '/postarticle',
      component: PostArticle,
    },
    {
      path: '/articledetail/:id',
      component: ArticleDetail,
    },
    {
      path:'/personalcenter/:id',
      component:PersonalCenter
    },
    {
      path:'/mycommentlist',
      component:MyCommentList
    },
    {
      path:'/searcharticle',
      component:SearchArticle
    },
    {
      path:'/editarticle/:articleid',
      component:EditArticle
    },
    {
      path:'/postsuccess',
      component:PostSuccess
    },
    {
      path:'/personalinfo',
      component:PersonalInfo,
      children:[
        {
          path:'',
         redirect:'userinfo'
        },
        {
          path:'userinfo',
          component:UserInfo
        },
        {
          path:'passedit',
          component:PassEdit
        }
      ]
    }
  ]
})
