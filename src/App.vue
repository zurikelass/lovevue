<script>
import './assets/base.css'
import TodoList from './TodoList.vue'
import TodoItemForm from './components/TodoItemForm.vue'
export default {
    components: {
        TodoList,
        TodoItemForm,
    },
    data() {
        return {
            todos: [
                { id: 1, name: "to do item", done: false },
                { id: 2, name: "to do item 2", done: false },
                { id: 3, name: "to do item 3", done: true },
            ]
        }
    },
   methods: {
    putNewItemTodoList(data){
      this.todos.push({
        id: this.nextId,
        name: data,
        done: false
      })
    },
    changeStatus(record){
      let v=this.find(item=>item.id===record.id)
      v.done=!v.done
    },
    deleteItemFromTodoList(record){
      let v=this.todos.find(item => item.id === record.id)
      this.todos.splice(this.todos.indexOf(v),1)
    }
   },
   computed: {
    nextId(){
      return this.todos.length + 1
    },
    activeTodos(){
      return this.todos.filter(value=> value.done === false)

    },
    doneTodos(){
      return this.todos.filter(value=> value.done === true)
    },

   }
}
</script>
     
<template>
     <h1 style="text-align: center;" class="hh">Our First Form <br/> With Vue.js</h1> <br/>
  <div style="height: 100%; border-radius: 10px; width: 8cm; background-color: bisque; margin-right: 0px;" class="container">
    <TodoItemForm id="TDF" @onSubmitCustom="putNewItemTodoList($event)"/>
    <h2 id="H2">All Todo Items</h2>
    <TodoList id="TDL" :data="todos"/>
    <h2>Active Todos</h2>
    <TodoList :changeDoneStatus="true" :data="activeTodos" @onChangeDoneStatus="ChangeStatus($event)"/>
    <h2>ToDo With Done Status</h2>
    <TodoList :canDelete="true" :data="doneTodos" @onDelete="deleteItemFromTodoList($event)" />
  </div>
</template>
