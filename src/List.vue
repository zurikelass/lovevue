<script>
export default{
    props:{
        data:{ type:Array, required:true}
    },
    methods:{
      eventHandler: function(e){
        e.preventDefault()
        console.log(e.target.innerHTML, e.target.getAttribute('href'))
      }
    },
}
</script>
<template>
    <ul>
        <li  v-for="item in data" :key="item.id"> 
            <a :href="item.description" @click.pervant="eventHandler">{{ item.title }} </a></li>
            
    </ul>
</template>

<style scoped> 
 ul {
     list-style-type: none;
 }
 ul li {
    float: left;
    margin: 30px;
 }
</style>