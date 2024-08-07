<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import router from '../router';
import { onMounted, ref } from 'vue';
import Header from './Header.vue';
import SignUp from './SignUp.vue';


const userName = ref("default");

onMounted(() => {
    let user = localStorage.getItem("userInfo")
    if (!user) 
        router.push({ path: '/sign-up', component: SignUp })
    else {
        
        if (JSON.parse(user)?.data.name) {
            console.log('new user')
            userName.value = JSON.parse(user)?.data.name
        }
        else {
            console.log('old user')
            userName.value = JSON.parse(user)?.data[0]?.name
        }
    }
})
</script>

<template>
    <Header />
    <h1>Hello {{ userName }}, welcome to home page</h1>
</template>