<template>
    <base-card>
        <template #header>Add Resource</template>
            <form @submit.prevent="submitResource">
                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" class="form-control form-control-sm" id="title"  placeholder="Enter title" ref="titleInput">
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea  id="description" class="form-control form-control-sm" placeholder="Enter Description" rows="3"  ref="descriptionInput"></textarea>
                </div>
                <div class="form-group">
                    <label for="url">URL</label>
                    <input type="text" class="form-control form-control-sm" id="url"  placeholder="Enter url"  ref="urlInput">
                </div>
                <button type="submit" class="btn btn-vue2 px-4"> Save </button>
            </form>
    </base-card>
    <teleport to="body">
      <error-modal v-if="errorShow" @close-modal="hideErrorModal" headerColor="bg-danger">
        <template #header>Invalid Input</template>
        <template #default>
            <p class=" my-4">Please check agin all input field and fill-up all required field.</p>
        </template>
      </error-modal>
    </teleport>
</template>
<script>

import ErrorModal from '@/components/ErrorModal.vue';
export default{
    inject:['addResource'],
    data(){
        return{
            errorShow:false,
          
        }
    },
    components:{
        ErrorModal,
    },
  methods:{
    submitResource(){
        //  this.errorShow=true;
         const title = this.$refs.titleInput.value;
         const des = this.$refs.descriptionInput.value;
         const url = this.$refs.urlInput.value;

         if(title.trim()=== '' || des.trim() === '' || url.trim()=== ''){
           
            this.errorShow=true;
         }else{

             this.addResource(title,des,url);
         }
         
    },
    hideErrorModal(){
        this.errorShow=false
    }
  }
}
</script>

