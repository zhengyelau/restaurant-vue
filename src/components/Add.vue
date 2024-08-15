<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import Header from './Header.vue';
const name = ref("")
const address = ref("")
const contact = ref("")

const onSubmit = async() => {
     let data = {
          "name": name.value,
          "contact": contact.value,
          "address": address.value
     }
     await axios.post(`http://localhost:3000/restaurant/`, data).then((res) => {
          if (res.status === 201) {
               alert("Successfully added")
               name.value = ''
               address.value = ''
               contact.value = ''
          }
     })
}

</script>

<template>
     <Header />
     <h1>Hello user, welcome to add restaurant page</h1>
     <form class="add" @submit.prevent="onSubmit">
          <input v-model="name" name="name" placeholder="Restaurant name" />
          <input v-model="address" name="address" placeholder="Restaurant address"/>
          <input v-model="contact" name="contact" placeholder="Restaurant contact number" />
          <button>Add new restaurant</button>
     </form>
</template>