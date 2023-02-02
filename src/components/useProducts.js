import axios  from "axios"
import {ref, onMounted} from 'vue'

export default function useProducts(){
    const range = [5, 10, 15, 50];
    const limit = ref(5);
    const languages = ['en', 'ge', 'it'];
    const lang = ref('ge');
    const apiUrl = 'http://items.magischer.de/api/products';
    const products = ref([]);
    const meta = ref();

   

    function getProducts(baseUrl=url){
        axios.get(baseUrl,{
            params: {
                limit: limit.value,
                lang:lang.value,
            }
        }).then((response)=>{
            products.value=response.data.data
            meta.value = response.data
        })
    }
    function nextPage() {
        getProducts(res.value?.next_page_url);
      }
  
      function prevPage() {
        getProducts(res.value?.prev_page_url);
      }
  
      function firstPage() {
        getProducts(res.value?.first_page_url);
      }
  
      function lastPage() {
        getProducts(res.value?.last_page_url);
      }
  
      function limitChange(e) {
        limit.value = Number(e.target.value);
        getProducts();
      }
  
      function langChange(e) {
        lang.value = e.target.value;
        getProducts();
      }
  
      onMounted(() => {
        getProducts();
      });
      
      return {
        range,
        limit,
        languages,
        lang,
        products,
        meta,
        getProducts,
        nextPage,
        prevPage,
        firstPage,
        lastPage,
        limitChange,
        langChange,
      };
}
