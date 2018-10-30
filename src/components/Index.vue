
<template>
  <div class="hello">
       <!-- <button @click="isloadshow">+</button>
        <button @click="isloadhid">-</button> -->
    <vue-star animate="yourAnimateCssClass" color="rgb(152, 138, 222)">
      <!-- <img slot="icon" src="./yourImgPlace/yourImg.png" /> -->
    </vue-star>
    <vue-banner></vue-banner>
    <vue-marquee></vue-marquee>
    <vue-newlists></vue-newlists>
  </div>
</template>
<script>
import axios from 'axios';
import banner from './../components/banner';
import newlists from './../components/newlists';
import marquee from './../components/marquee';



export default {
  name: 'Index',
  data () {
    return {
      newList:[],
      count:0
    }
  },
  computed:{
    num(){
      return this.$store.state.count;
    }
  },
  components: {
    'vue-banner':banner,
    'vue-newlists':newlists,
    'vue-marquee':marquee
  },
  methods:{
          isloadshow() {
            this.$store.commit('isload');
          },
          isloadhid() {
            this.$store.commit('isloadhid');
          }
  }
}


</script>