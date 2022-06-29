<template>

  <TheHeader/>

  <base-layout>



  <div class="row">
    <div class="col-lg-4">
      <base-card>
      <template #header>
      <f-icon icon="fa-solid fa-chalkboard-user" style="color: #35495E" /> Learning Vue Js
      </template>
          <div class="text-center">
            <img alt="Vue logo" src="./assets/logo.png" />
          </div>
          <template #footer>
            <p>Here is card footer.</p>
          </template>
      </base-card>
    </div>
    <div class="col-lg-6">
      <base-card>
        <template #header> What i learn & what i do in this  module. </template>
        <template #default>
          <ul>
            <li>1. Slot,  Name Slot, Template Slot, v-Slot / #slot name, scoped slot, $slot.default condition, </li>
            <li>2. template(:is) , keepalive,</li>
            <li>3. Provide, inject</li>
            <li>4. ref="", $refs</li>
            <li>5. Teleport(to)</li>
          </ul>
        </template>
      </base-card>
    </div>
  </div>
  
  .

  <div class="row">
    <div class="col-12">
      <base-card>
        <template #default>
          <the-resources ></the-resources>
        </template>
      </base-card>
    </div>
  </div>
   

  
  

  </base-layout>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheResources from './components/TheResources.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheResources
    
  },
  data() {
    return{
      
      
    }
  },

  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>
