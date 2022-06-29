<template>
     <div class="col-12">
      <base-card>
        <button @click="setActiveComponent('all-resource')" class="btn " :class="selectedComponent ==='all-resource' ? 'btn-success' :'text-success'">All Resources</button>
        
        <button @click="setActiveComponent('add-resource')" class="btn" :class="selectedComponent ==='add-resource' ? 'btn-success' :'text-success'">Add Resources</button>
      </base-card>
    </div>

    <div class="col-12">
      <keep-alive>
        <component :is="selectedComponent" ></component>
      </keep-alive>
    </div>

    
</template>

<script>
import AddResource from '@/components/AddResource.vue';
import AllResource from '@/components/AllResource.vue';
export default {
    data() {
        return{
          selectedComponent:'all-resource',
          storedResource:[
            {
              id:1,
              title:'vue official guide',
              description:'Want to learn more about vue? if you learn  more ypu should go to official documentation.',
              link:'https://vuejs.org',
            },
            {
              id:1,
              title:'react official guide',
              description:'Want to learn more react? if you learn  more ypu should go to official documentation.',
              link:'https://www.react.org',
            }
          ]
        }
    },
    components:{
        AddResource,
        AllResource,
    },
    provide(){
        return{
          resources:this.storedResource,
          addResource:this.addResource,
          removeResource:this.removeResource,
        }
    },
    methods:{
    setActiveComponent(com){
      this.selectedComponent = com;
    },
    addResource(title,desc,url){
      const storeValue ={
        id:new Date().toISOString,
        title:title,
        description:desc,
        link:url,
      };
      this.storedResource.unshift(storeValue);
       this.selectedComponent='all-resource';
    },
    removeResource(Rid){
      // this.storedResource = this.storedResource.filter(res =>{
      //   return res.id !== id;
      // })
      //  this.storedResource.filter(res =>{
      //   return res.id !== id;
      // })

      const resIndex = this.storedResource.findIndex(res => res.id === Rid)
      this.storedResource.splice(resIndex,1);
      console.log(Rid, resIndex)
    }
  }
}
</script>