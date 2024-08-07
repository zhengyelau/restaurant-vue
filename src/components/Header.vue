<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import router from '../router';
import Login from './Login.vue';
import { RouterLink } from 'vue-router';
const logout = () => {
    localStorage.removeItem("userInfo");
    router.push({ path: '/login', component: Login })
}
</script>

<template>
    
    <div class="nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/add">Add Restaurant</RouterLink>
        <RouterLink to="/update">Update Restaurant</RouterLink>
        <a @click="logout">Logout</a>
    </div>
</template>

<style>
.nav {
    background-color: #333;
    overflow: hidden;
}
.nav a{
    float: left;
    color: #f2f2f2f2;
    padding: 14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
}

.nav a:hover{
    background: #ddd;
    color: #333;
    cursor: pointer;
}
</style>