<script>
export default {
   data(){
    return {
        itemName:null
    }
   },
   methods: {
    submitForm(){
        this.$emit('onSubmitCustom', this.itemName)
        this.itemName = null
    },
   },
}
</script>

<template>
   <form @submit.prevent="submitForm()">
   <input 
    style="padding: 3px;
    height: 30px;
    width: 302px;
    border-radius: 5px;" 
    v-model="itemName"/>
   <button style="    text-align: center;
    margin-left: 85px;
    padding: 0px;
    background-color: darkgoldenrod;
    border-radius: 5px;"
   type="submit">Add New ToDo Item</button>
</form>
</template>