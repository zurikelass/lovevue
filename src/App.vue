<script>
import List from './List.vue'
  export default{
    components:{
      List
    },
    data(){
      return{
        pageTitle:"My first vue",
        data: [
         {
          id:1,
          title: "Menu",
          url:"https://devcamp.com/trails/44/campsites/281/guides/working-links-vue-js",
          description:"This is Main Menu"
         },
         {
          id:2,
          title: "Contact",
          url:"https://devcamp.com/trails/44/campsites/281/guides/working-links-vue-js",
          description:"This is contact",
         } ,
        {
          id:3,
          title: "About Us",
          url:"https://devcamp.com/trails/44/campsites/281/guides/working-links-vue-js",
          description: "This is About us",
        },
        ]
      }
    
    } 
    
  }
</script>
<template>
  <h1>{{pageTitle}}</h1>
  <List :data="data"/>
</template>
