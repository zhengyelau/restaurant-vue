<script setup>
import { ref } from 'vue'
import axios from 'axios'
import router from '../router';
import Home from './Home.vue';
const name = ref('')
const email = ref('')
const password = ref('')

const signUp = async() => {
  const userData = {
    name: name.value,
    email: email.value,
    password: password.value
  }

  let result = await axios.post(`http://localhost:3000/user`, userData)

  if (result.status === 201) {
    localStorage.setItem('userInfo', JSON.stringify(result))
    router.push({ path: '/', component: Home })
  }

  // // console.log('result: ' + JSON.stringify(result))
  // console.warn(result)
}


</script>

<template>
  <img class="logo" src="https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg" />
  <h1>Sign up</h1>
  <div class="register">
    <input type="text" v-model="name" placeholder="Enter Name" />
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="text" v-model="password" placeholder="Enter Password" />
    <button @click="signUp">Sign up</button>
  </div>
</template>

<style>
  .logo {
    width: 150px;
  }

  .register input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
  }

  .register button{
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: #fff;
    cursor: pointer;
  }
</style>