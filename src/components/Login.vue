<!-- eslint-disable vue/multi-word-component-names -->
<script setup>

</script>


<template>
    <img class="logo"
        src="https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg" />
    <h1>Login</h1>
    <div class="login">
        <input type="text" v-model="email" placeholder="Enter Email" />
        <input type="text" v-model="password" placeholder="Enter Password" />
        <button>Login</button>
        <p>
            <RouterLink to="/sign-up">Sign up</RouterLink>
        </p>
    </div>
</template>

<style>

</style>