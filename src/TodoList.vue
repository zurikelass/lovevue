<script>
import ListItemComponent from './components/ListItemComponent.vue'
export default {
    props:{
        data: { type: Array, required:true},
        changeStatus:{ type: Boolean, required:false, default:false},
        canDelete:{
    type: Boolean,
    required: false,
    default: false
  }
},
    components:{
        ListItemComponent
    },
    methods: {
        changeDoneStatus(item){
       this.$emit('onChangeDoneStatus',item)
        },
        deleteRecord(item){
            this.$emit('onDelete', item)
        },
        mounted(){
          //console
        },
    }
    }
</script>

 <template>
    
    <ul>
        <ListItemComponent 
        v-for="item in data" 
        :key="item.index" 
        :itemData="item" 
        :renderCheckbox="changeStatus"
        :renderDeleteBtn="canDelete"
        @onChange="changeDoneStatus($event)"
        @onDelete="deleteRecord($event)"
        />
  </ul>
    </template>

