<script>

export default {
    props:{
        itemData:{ type: Object, required:true},
        renderCheckbox:{type:Boolean, required: true},
        renderDeleteBtn:{type:Boolean, required: true}
    },
    methods:{
        onChange(){
            this.$emit('onChange', this.item.Data)
        },
        onDelete(){
            this.$emit('onDelete', this.itemData)
        }
    }
}
</script>
<template>
    <li>
        <input 
        v-if="renderCheckbox" 
        type="checkbox" 
        :checked="itemData.done"
        @change="onChange">
        <label>{{ itemData.id }} - {{ itemData.name }}</label>
        <button 
        style="display: flex;
        border-radius: 5px;
        background-color: palevioletred;"
        v-if="renderDeleteBtn" 
        @click="onDelete">Delete</button>
    </li>
</template>