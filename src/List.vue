<script>
export default{
    props:{
        data:{ type:Array, required:true}
    },
    data() {return {description: ''} }, //შევქმენით ფუნქცია ცვლადებისთვის
    methods:{
      eventHandler: function(e){
        e.preventDefault()
        console.log(e.target.innerHTML, e.target.getAttribute('href'))
        this.description=e.target.getAttribute('href') //რომელი დესქრიფშენიც არის მას მიემართოს მხლოდ
      }
    },
}
</script>
<template>
    <ul>

        <li  v-for="item in data" :key="item.id"> 
            <a :href="item.description" @click.pervant="eventHandler">{{ item.title }} </a></li>
            
    </ul>
    <!-- დესქრიფშენი გამოდის დინამიურად -->
    <div>{{ description }}</div>    
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