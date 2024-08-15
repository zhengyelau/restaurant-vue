<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Header from './Header.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';
const name = ref("")
const address = ref("")
const contact = ref("")
const restaurantID = ref(null);

onMounted(async() => {
    restaurantID.value = window.location.href.split("/").pop();
    if (restaurantID.value) {
        await axios.get(`http://localhost:3000/restaurant?id=${restaurantID.value}`).then((res) => {
            if (res.status === 200) {
                if (res.data.length > 0) {
                    name.value = res.data[0].name
                    address.value = res.data[0].address
                    contact.value = res.data[0].contact
                }
            }
        })
    }
})

const onSubmit = async() => {
    let data = {
        "name": name.value,
        "address": address.value,
        "contact": contact.value
    }

    await axios.put(`http://localhost:3000/restaurant/${restaurantID.value}`, data).then((res) => {
        if(res.status === 200) {
            alert("Update successfully");
            name.value = res.data?.name
            address.value = res.data?.address
            contact.value = res.data?.contact
        } else alert("Failed, please try again")
    })
}


</script>

<template>
    <Header />
    <h1>Hello user, welcome to update restaurant page</h1>
    <form class="add" @submit.prevent="onSubmit">
        <input v-model="name" name="name" placeholder="Restaurant name" />
        <input v-model="address" name="address" placeholder="Restaurant address" />
        <input v-model="contact" name="contact" placeholder="Restaurant contact number" />
        <button>Update restaurant restaurant</button>
    </form>
</template>