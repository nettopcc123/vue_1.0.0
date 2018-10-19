<template>
<div id="lotts">
       <h2 class="itit">开奖信息 <span></span></h2>
        <ul class="nlist">
            <li v-for="(value, key) in lottslist">
                <router-link :to="{ name: 'lottsmore', params: { lottsId: key }}">
                <span class="nimg"><img :src="require('./../components/img/'+ value.img)"></span>
                <span class="newsCtn">
                    <h2>{{ value.info }}</h2>
                </span>
                </router-link>
            </li>
        </ul>
 </div> 
 </template>

<script>
import axios from 'axios'
export default {
  name: 'lotts',
  data () {
    return {
      lottslist:[],
    }
  },
  mounted: function () {
    this.$nextTick(function () {
         this.newVue();
    })
  },
  methods: {
        newVue:function(){
            axios.get('/static/lotts.json')  //http://misc.opencai.net/consts/lotts.json   /static/news.json
            .then(res => {
                console.log(res.data)
                this.lottslist = res.data
            })
            .catch(error => {
                console.log(error);
            });
        }
  }
}
</script>
