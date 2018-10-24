<template>
<div id="newlists">
       <h2 class="itit">彩市头条 <span><router-link to="/newlists">更多>></router-link></span></h2>
        <ul class="nlist">
            <li v-for="(value, key) in newList">
                <router-link :to="{ name: 'newsMore', params: { userId: key , page: num}}">
                <span class="nimg"><img v-bind:src="value.image" ></span>
                <span class="newsCtn">
                    <h2 class="ntit">{{ value.text | filter }}</h2>
                    <p>{{ value.content }}</p>
                    <i class="mark2">{{ value.username }}</i>
                </span>
                </router-link>
            </li>
        </ul>
    <div class="infinite-scroll" v-show="loading">
      <svg class="loader-circular" viewBox="25 25 50 50">
        <circle class="loader-path" cx="50" cy="50" r="10" fill="none" stroke="rgb(53, 157, 218)" stroke-width="1"></circle>
      </svg>
      <span class="infinite-scroll-text">{{tips}}</span>
    </div>
 </div> 
 </template>

<script>
import Vue from 'Vue';
import axios from 'axios';


export default {
  name: 'newlists',
  data () {
    return {
      newList:[],
      REQUIRE: true,
      loading: false,
      num:0,
      tips:'努力加载中...'
    }
  },
  filters:{
    filter:function(value){
        if (!value) return '';
        if (value.length > 8) {
          return value.slice(0,8) + '...'
        }
        return value
    }
  },
  created: function(){
    this.newVue(this.num);
  },
  mounted: function () {
    this.$nextTick(function () {//在下次 DOM 更新循环结束之后执行延迟回调
          document.getElementById('vrw').addEventListener('scroll',this.scrollBottom);
    })
  },
  methods: {
        newVue:function(num){
            axios.get('https://www.apiopen.top/satinGodApi?type=1&page=' + num)  ///static/news.json?num  static/news.json  http://misc.opencai.net/consts/lotts.json   /static/news.json
            .then(res => {
              console.log(res.data.data);
              res.data.data.forEach(v => {
                this.newList.push(v)
              });
              if( num >= 4){
                this.tips = '加载完成';
                return;
              }
            })
            .catch(error => {
                console.log(error);
                this.REQUIRE = false;
            });
        },
        scrollBottom:function(){
           // console.log(document.documentElement.clientHeight+'-----------'+window.innerHeight); // 可视区域高度
           // console.log(document.body.scrollTop); // 滚动高度
           // console.log(document.body.offsetHeight); // 文档高度
           // 判断是否滚动到底部
          if( ((document.getElementById('vrw').scrollTop + (window.screen.height)) >  document.getElementById('newlists').offsetHeight) && this.REQUIRE == true && this.num <= 4 ){
              console.log('99999 ---- ' + document.getElementById('newlists').offsetHeight);
              console.log(this.loading + ' --- ' + this.tips);
              this.REQUIRE = false;
              this.loading = true;
              this.tips = '正在加载中';
              console.log(this.loading + ' --- ' + this.tips);
              this.newVue(this.num);
              this.$nextTick(() => {
                this.REQUIRE = true;
                this.loading = false;
                this.num ++;
              })
          }else{
            this.loading = true;
          }
        }
  }
}
</script>

<style>
.nlist{
  display:block;
  text-align: center;
  text-align: center
}
.nlist li{
  display:block;
  margin-bottom:0.05rem;
  text-align: left;
  font-size: 0.16rem;
  color:#5b5b5b
}
.nlist li a{
  font-size: 0.16rem;
  color:#5b5b5b
}
.ntit{
  font-size: 0.14rem;
  color:#303030
}
.infinite-scroll{
  width: 0.5rem;
  height: 0.2rem;
  margin:0 auto;
}
.nimg img{
  width: 1rem;
  height:1rem;
}
</style>

