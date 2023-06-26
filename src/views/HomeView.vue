<template>
  <div class="home">
    <h1>택시 예약 HomeTaxi.vue</h1>
    <form @submit.prevent="reserveTaxi1">
      <p v-for="s in serverData" :key="s.username">현재 사용자 이름 : {{s.username}}</p>
      <label for="name">이름:</label>
     <!-- <input type="text" id="inputName" v-model="inputName" > -->
      <label for="destination">목적지:</label>
      <!-- <input type="text" id="inputDestination" v-model="inputDestination" /> -->
   <!--   <p v-for="i in item" :key="i.name">상품명 : {{i.name}}</p> -->
    <!--  <p v-for="i in item" :key="i.name">상품명getName : {{getName}}</p> -->

      <button  @click="reserveTaxi" type="submit">예약</button>
    </form>

   <HelloWorld msg="자식 컴포넌트 보이는 것!!." :title="item" :people="userInfo" :sdata="serverData"/>
   <GoogleMap1/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import GoogleMap1 from "@/components/GoogleMap1.vue";

//import axios from "axios";
//import {computed} from "vue";
//eslint-disable-next-line no-unused-vars
//import store from "@/store/store3";
//import store from "../store/store";
//import store from './store/store'
//import { mapState } from 'vuex';

export default {
  name: 'HomeView',
  components: {
    GoogleMap1,
    HelloWorld
  },
  data(){
    return {
      userInfo: [ {
        userId: 3,
        username: 'park',
        accessToken: ''
      },{
        userId: 4,
        username: "Joe",
        accessToken: ''
      }
      ],
      item: [
        { name: 'Halla package', price: 25},
        { name: 'Yatch', price: 100 }
      ],
      inputInfo:{
        inputName:'',
        inputDestination:''
      },
      // mount()가 되면서, mount()에 있던 fetchData() 매소드 호출해서, 서버에서 받아온 데이터를(this.serverData = data;) 여기에 넣어주는 것.
      serverData:[]
    }
  },

  created() {
    console.log(`this.item.name>> ${this.item[0].name}`)
  },

  computed:{
    getName(){
      return this.item.name
    }
  },

  mounted() {
    this.fetchData();
  },

  methods:{
    reserveTaxi(){
      alert('click!!')
      // const data={
      //   username: 'aaa',
      //   destination:'bbb'
      // };
      // alert(`input inputName>> ${this.data.username}`);
      console.log(`res>>>`)
      // axios.get('http://localhost:8081/', { withCredentials: true }).then(res=>{
      //   alert('axios!!');
      //   console.log('res>>>', res);
      // }).catch(err=>{
      //   console.log(`error>>${err}`)
      // })
      // fetch("http://localhost:8081/").then(res=>res.json()).then(res=>{
      //   console.log('res>>>', res);
      // });


    },

    fetchData() {
      fetch("http://localhost:8081/")
          .then(response => response.json())
          .then(data => {
            this.serverData = data;
            console.log(data);
          })
          .catch(err => {
            console.log(`err >> ${err}`);
          });
    }

  }


};
</script>
