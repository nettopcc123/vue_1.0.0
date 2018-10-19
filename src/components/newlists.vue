<template>
<div id="newlists">
       <h2 class="itit">彩市头条 <span><router-link to="/newlists">更多>></router-link></span></h2>
        <ul class="nlist">
            <li v-for="(value, key) in newList">
                <router-link :to="{ name: 'newsMore', params: { userId: key }}">
                <span class="nimg"><img src="./../components/img/bann02.jpg"></span>
                <span class="newsCtn">
                    <h2 class="ntit">大乐透18121期开2注千万头奖</h2>
                    <p>10月15日，体彩大乐透 进行了第18121期开奖，全国爆出</p>
                    <i class="mark2">07:49</i>
                </span>
                </router-link>
            </li>
        </ul>
 </div> 
 </template>

<script>
import axios from 'axios'
export default {
  name: 'newlists',
  data () {
    return {
      newList:[],
    }
  },
  mounted: function () {
    this.$nextTick(function () {
         this.newVue();
    })
  },
  methods: {
        newVue:function(){
            axios.get('/static/news.json')  //http://misc.opencai.net/consts/lotts.json   /static/news.json
            .then(res => {
                this.newList = res.data.data
            })
            .catch(error => {
                console.log(error);
            });
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
</style>

