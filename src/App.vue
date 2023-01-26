<script>

export default {
  data() {
    return {
      width: 20,
      height: 30,
      simagle: null,
      show: false
    }
  },
  Form1(){
    this.width

  },
  computed: {
    calculateSpace(){
      return this.width * this.height
    },
    calculateMoculoba(){
      return this.calculateSpace * this.simagle
    },
  }
}

</script>

<template>
  <div>
    <form>

      <label>სიგრძე</label><br />
      <input v-model="width" /><br />

      <label>სიგანე</label><br />
      <input v-model="height" /><br />
      
      <label>სიმაღლე</label><br />
      <input v-model="simagle" /><br />
    </form>
    <br />
    <button @click.prevent="show = !show">
      <span v-if="!show">Show</span>
      <span v-if="show">Hide</span>
    </button>
    <p v-if="show">ფართობი: {{ calculateSpace }}</p>
    <p v-if="show">მოცულობა: {{ calculateMoculoba }}</p>
  </div>
   
  <div class="Form1" height="0px" lengh="0px"></div>
    
  
</template>
 
