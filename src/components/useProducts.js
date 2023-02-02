import axios from "axios";
import { ref, onMounted } from "vue";

const useProducts = function () {
  const range = [5, 10, 15, 50];
  const limit = ref(5);
  const languages = ["en", "ge", "it"];
  const lang = ref("ge");
  const apiUrl = "http://items.magischer.de/api/products";
  const products = ref([]);
  const meta = ref();

  function getProducts(url = apiUrl) {
    axios
      .get(url, {
        params: {
          limit: limit.value,
          lang: lang.value,
        },
      })
      .then((response) => {
        products.value = response.data.data;
        meta.value = response.data;
      });
  }

  function nextPage() {
    getProducts(meta.value?.next_page_url);
  }

  function prevPage() {
    getProducts(meta.value?.prev_page_url);
  }

  function firstPage() {
    getProducts(meta.value?.first_page_url);
  }

  function lastPage() {
    getProducts(meta.value?.last_page_url);
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
};

export const string = "somestring";
export default useProducts;
