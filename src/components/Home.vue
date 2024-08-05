<script setup>
import router from '../router';
import { onMounted } from 'vue';
import SignUp from './SignUp.vue';

onMounted(() => {
    let user = localStorage.getItem("userInfo")
    if (!user) 
        router.push({ path: '/sign-up', component: SignUp })
})
</script>

<template>
    <h1>Hello user, welcome to home page</h1>
</template>