<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from "vue";
import Home from "./Home.vue";
import router from "../router";
import axios from "axios";

const email = ref('')
const password = ref('');

const login = async() => {
    // console.log("email: " + email.value + "\npassword: " + password.value)
    const res = await axios.get(`http://localhost:3000/user?email=${email.value}&password=${password.value}`);
    if (res.status === 200 && res.data.length > 0) {
        localStorage.setItem('userInfo', JSON.stringify(res))
        router.push({ path: '/', component: Home })
    } else {
        alert('Invalid user')
    }
}
</script>


<template>
    <img class="logo"
        src="https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg" />
    <h1>Login</h1>
    <div class="login">
        <input type="text" v-model="email" placeholder="Enter Email" />
        <input type="text" v-model="password" placeholder="Enter Password" />
        <button @click="login">Login</button>
        <p>
            <RouterLink to="/sign-up">Sign up</RouterLink>
        </p>
    </div>
</template>

<style></style>