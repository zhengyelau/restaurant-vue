<script>
export default {
  name: 'SignUp'
}
</script>

<template>
  <img class="logo" src="https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg" />
  <h1>Sign up</h1>
  <div class="register">
    <input type="text" placeholder="Enter Name" />
    <input type="text" placeholder="Enter Email" />
    <input type="text" placeholder="Enter Password" />
    <button>Sign up</button>
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