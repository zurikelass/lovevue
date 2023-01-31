<script>
import axios from 'axios'

export default{
    data(){
        return {
            range: [5,10,15,20,],
            limit: 10,
            languages: ['en', 'ge', 'ru','it',],
            lang: 'ge',
            apiUrl: 'http://items.magischer.de/api/products',
            products:[],
            res: null,
        }
    },

    methods:{
        getDataFromApiUrl(url=this.apiUrl){
            axios.getUri(url, {
                params:{
                    limit:this.limit,
                    lang:this.lang,

                },

            }) .then((response) =>{
                this.res=response.data,
                this.products=response.data.data
            })
        },
     nextPage(){
        this.getDataFromApiUrl(this.res?.next_page_url)
     },
     prevPage(){
      this.getDataFromApiUrl(this.res?.prev_page_url)
     },
     firstPage(){
      this.getDataFromApiUrl(this.res?.first_page_url)
     },
     lastPage(){
      this.getDataFromApiUrl(this.res?.last_page_url)
     },

     limitChange(e){
        this.lang=e.target.value,
        this.getDataFromApiUrl
     },
     langChange(e){
        this.lang=e.target.value,
        this.getDataFromApiUrl
     },

    },

}


</script>
<template>
    <table>
        <thead>
            <tr>
                <th>Product Id</th>
                <th>Product Name</th>
                <th>Cover Image</th>
            </tr>
        </thead>
        <tbody>
           <tr v-for="item in res?.data" :key="item.index">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td><img style="width: 80px; height: auto;" :src="item.img.cover" /></td>
           </tr>
        </tbody>
    </table>
</template>