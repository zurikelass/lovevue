<script>
export default{
   props: {
    text:{
        type:String,
        required:true
   }
}
}

</script>
<template>
 <li>{{ text }}</li>
</template>