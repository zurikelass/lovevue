import { ref, onMounted } from 'vue';
import axios from 'axios';

export default 
  setup() 
    const range = [5, 10, 15, 50];
    const limit = ref(5);
    const languages = ['en', 'ge', 'it'];
    const lang = ref('ge');
    const apiUrl = 'http://items.magischer.de/api/products';
    const products = ref([]);
    const res = ref(null);

    
