 <!-- <script>
import axios from 'axios'

export default {
  data() {
    return {
      range: [5, 10, 15, 50],
      limit: 5,
      languages:['en', 'ge','it',],
      lang: 'ge',
      apiUrl: 'http://items.magischer.de/api/products',
      products: [],
      res: null,
    }
  },
  methods: {
    getDataFromApiUrl(url = this.apiUrl) {
      axios.get(url, {
        params: {
          limit: this.limit,
          lang: this.lang,
        },
      }).then((response) => {
        this.res = response.data
        this.products = response.data.data
      })

    },
    nextPage() {
      this.getDataFromApiUrl(this.res?.next_page_url)
    },
    prevPage() {
      this.getDataFromApiUrl(this.res?.prev_page_url)
    },
    firstPage() {
      this.getDataFromApiUrl(this.res?.first_page_url)
    },
    lastPage() {
      this.getDataFromApiUrl(this.res?.last_page_url)
    },
    limitChange(e) {
      this.limit = e.target.value
      this.getDataFromApiUrl()
    },
    langChange(e) {
      this.lang = e.target.value
      this.getDataFromApiUrl()
    },
    
  },
  mounted() {
    this.getDataFromApiUrl()
  }
}
</script>

<template>
  <select id="slct1" @change="limitChange">
    <option v-for="amount in range" :key="amount.index" :value="amount">Per page: {{ amount }}</option>
  </select>
  <select id="slct2" style="height: 39px;
width: 108px;" @change="langChange">
<option v-for="language in languages" :key="language.index" :value="language">Language: {{ language }}</option>
</select>
  <table class="table-auto" style="margin: 5px;">
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
        <td>{{ item.name }} </td>
        <td>
          <img style="width: 80px; height: auto;" :src="item.img.cover" />
        </td>
      </tr>
    </tbody>
  </table>
  <div id="pg">
    <a href="#" :disabled="!res?.first_page_url" @click.prevent="firstPage">First page</a>
    <button :disabled="!res?.prev_page_url" @click.prevent="prevPage">Previous</button>
    <button :disabled="!res?.next_page_url" @click.prevent="nextPage">Next</button>
    <a href="#" :disabled="!res?.last_page_url" @click.prevent="lastPage">Last Page</a>
  </div>
</template> -->




<script setup>
import myProduct from './components/useProducts'

const { limitChange, getProducts, langChange, limit, products, lang, languages, meta, range } = myProduct()

</script>

<template>
  <select id="slct1" @change="limitChange">
    <option v-for="amount in range" :key="amount.index" :value="amount">Per page: {{ amount }}</option>
  </select>
  <select id="slct2" style="height: 39px; width: 108px;" @change="langChange">
<option v-for="language in languages" :key="language.index" :value="language">Language: {{ language }}</option>
</select>
  <table class="table-auto" style="margin: 5px;">
    <thead>
      <tr>
        <th>Product Id</th>
        <th>Product Name</th>
        <th>Cover Image</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in meta?.data" :key="item.index">
        <td>{{ item.id }}</td>
        <td>{{ item.name }} </td>
        <td>
          <img style="width: 80px; height: auto;" :src="item.img.cover" />
        </td>
      </tr>
    </tbody>
  </table>
  <div id="pg">
    <a href="#" :disabled="!meta?.first_page_url" @click.prevent="firstPage">First page</a>
    <button :disabled="!meta?.prev_page_url" @click.prevent="prevPage">Previous</button>
    <button :disabled="!meta?.next_page_url" @click.prevent="nextPage">Next</button>
    <a href="#" :disabled="!meta?.last_page_url" @click.prevent="lastPage">Last Page</a>
  </div>
</template>


