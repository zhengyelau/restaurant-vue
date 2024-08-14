<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import router from '../router';
import { onMounted, ref } from 'vue';
import Header from './Header.vue';
import SignUp from './SignUp.vue';
import axios from 'axios';

const userName = ref("default");
const restaurant = ref([])

onMounted(() => {
    let user = localStorage.getItem("userInfo")
    if (!user) 
        router.push({ path: '/sign-up', component: SignUp })
    else {
        
        if (JSON.parse(user)?.data.name) {
            userName.value = JSON.parse(user)?.data.name
        }
        else {
            userName.value = JSON.parse(user)?.data[0]?.name
        }
    }


    axios.get('http://localhost:3000/restaurant/').then((res) => {
        if (res.status === 200 && res.data.length > 0) {
            restaurant.value = res.data
        }
    })
})
</script>

<template>
    <Header />
    <h1>Hello {{ userName }}, welcome to home page</h1>
    <table border="1">
        <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Contact</td>
            <td>Address</td>
        </tr>
        <tr v-for="item in restaurant" :key=item.id>
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.contact }}</td>
            <td>{{ item.address }}</td>
        </tr>
    </table>
</template>

<style>
td {
    width: 160px;
    height: 40px;
}

table {
    margin: auto;
}
</style>