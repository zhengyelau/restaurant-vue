<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import router from '../router';
import { onMounted, ref, watch } from 'vue';
import Header from './Header.vue';
import SignUp from './SignUp.vue';
import axios from 'axios';
import { RouterLink } from 'vue-router';

const userName = ref("default");
const restaurant = ref([])

const getRestaurant = () => {
    axios.get('http://localhost:3000/restaurant/').then((res) => {
        if (res.status === 200) {
            restaurant.value = res.data
        }
    })
}

onMounted(() => {
    console.log("come to onMounted again")
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

    getRestaurant();
})

const deleteRestaurant = async(itemID) => {
    await axios.delete(`http://localhost:3000/restaurant/${itemID}`).then((res) => {
        if (res.status === 200) {
            alert("successfully deleted")
            console.log("res.data: " + JSON.stringify(res.data))
            getRestaurant();
        }
    })
}
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
            <td>Actions</td>
        </tr>
        <tr v-for="item in restaurant" :key=item.id>
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.contact }}</td>
            <td>{{ item.address }}</td>
            <td>
                <router-link :to="'/update/' + item.id">Update</router-link>
                <button @click="deleteRestaurant(item.id)">Delete</button>
            </td>
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