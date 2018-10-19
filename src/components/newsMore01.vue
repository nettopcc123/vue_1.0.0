<template>
<div id="newsMore">
       <h2 class="itit">彩市头条 <a href="#">更多>></a></h2>
       <div v-for="(value, key) in newList">
           <div v-if="key == $route.params.userId">
                <h3>{{ value.mcon }} {{ key }}</h3>
           </div>
       </div>
 </div> 
 </template>
<script>
import axios from 'axios'
export default {
  name: 'newsMore',
  data () {
    return {
      newList:[],
    }
  },
  mounted: function () {
    this.$nextTick(function(){
        this.newVue()
        console.log('bbb');
        console.log(this.$route.params.userId)
    })
  },
  methods: {
        newVue:function(){
            axios.get('/static/news.json')
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