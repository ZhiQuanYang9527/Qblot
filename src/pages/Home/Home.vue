<template>
    <div class="home">
      <img class="banner" src="../../assets/img/banner.jpg" alt="">
      <!-- 组件化开发 -->
      <div class="container">
        <el-row class="center_content" :gutter="15">
          <el-col :span="1">
            &nbsp;
          </el-col>
          <!-- 左边菜单栏 -->
          <el-col :span="2">
            <div class="grid-content bg-purple">
              <LeftMenu></LeftMenu>
            </div>
          </el-col>
          <!-- 中间内容 -->
          <el-col :span="15" class="article-content">
            <div class="grid-content bg-purple">
              <!--<ArticleTab :nowPage="1" @getHomeArticleList="getHomeArticleList"></ArticleTab>-->
              <ArticleTab :nowPage="1"></ArticleTab>
            </div>
          </el-col>
          <!-- 右边板块 -->
          <el-col :span="5">
            <!-- 头板块 -->
            <div class="grid-content bg-purple">
              <TopPlate></TopPlate>
            </div>
            <!-- 积分牛人板块 -->
            <div class="grid-content bg-purple mg-top-15">
              <TopIntegralUser></TopIntegralUser>
            </div>
            <div class="grid-content bg-purple mg-top-15">
              <AboutUs></AboutUs>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content bg-purple">
              &nbsp;
            </div>
          </el-col>
        </el-row>
      </div>

    </div>
</template>

<script>
//  import '../../assets/css/reset.css'
  import LeftMenu from '../../components/LeftMenu/LeftMenu.vue'
  import ArticleTab from '../../components/ArticleTab/ArticleTab.vue'
  import TopIntegralUser from '../../components/TopIntegralUser/TopIntegralUser.vue'
  import AboutUs from '../../components/AboutUs/AboutUs.vue'
  import TopPlate from '../../components/TopPlate/TopPlate.vue'
  import {reqArticleList} from '../../api/index'
  export default {
    data(){
      return {

      }
    },
    components:{
      LeftMenu,
      ArticleTab,
      TopIntegralUser,
      AboutUs,
      TopPlate
    },
    methods:{
//      async getHomeArticleList(plateid,type,userid,pageNum){
//        const result = await reqArticleList(plateid,type,userid,pageNum)
//        if(type===1){
//          this.$store.dispatch('getHomeNewArticleList',result.articleLists)
//        }else{
//          this.$store.dispatch('getHomeHotArticleList',result.articleLists)
//        }
//      }
    }
  }
</script>

<style>
.banner{
  width: 100%;
  height: 120px;
  margin-top: 5px;
}
.home{
  background: #F5F6F7;
}
.container{
  padding: 7.5px;
}
.center_content{
  margin-top: 8px;
}
  .mg-top-15{
    margin-top: 15px;
  }
</style>

