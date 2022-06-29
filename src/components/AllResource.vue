<template>
   <base-card>
     <template #header>
      <h3>All resource</h3>
     </template>

   </base-card>
   
   <base-card v-for="data in resources" :key="data.id">
     <template #header>
      <div class="d-flex justify-content-between ">
         <h3>{{data.title}}</h3>
         <f-icon icon="fa-solid fa-trash-can" class="btn btn-danger p-2" @click="deleteResource(data.id)"/>
      </div>
     </template>
     <template #default>
      <p class="mb-3" > {{data.description}}</p>
      <a :href="data.link" target="_blank" class="text-success">View resource</a>
     </template>
   </base-card>
</template>
<script>
export default {
 
   inject:['resources','removeResource'],
   methods:{
      deleteResource(id){
         this.removeResource(id)
      }
   }
}
</script>