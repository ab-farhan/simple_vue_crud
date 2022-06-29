<template>
<div id="exampleModalLive" class="modal fade show" tabindex="-1" role="dialog" aria-labelledby="exampleModalLiveLabel" style="padding-right: 17px; display: block;">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header" :class="headerColor">
        <h5 class="modal-title" id="exampleModalLiveLabel">
            <slot name="header">Here is header</slot>
        </h5>
        <button type="button" class="close text-white"  >
          <span @click="$emit('close-modal')"><f-icon icon="fa-solid fa-xmark"/></span>
        </button>
      </div>
      <div class="modal-body">
        <p>
            <slot> Here is Body</slot>
        </p>
      </div>
      <div class="modal-footer">
        <button  class="btn btn-vue2 px-4" @click="$emit('close-modal')">Close</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>

export default {
    emits:['close-modal'],
    props:{
        headerColor:{
            type:String,
            required: false,
            default:'bg-success'
        }
    }
}
</script>
<style scoped>
#exampleModalLive{
    background: #35495e9f;
}
.modal-content{
    border: none;
}
</style>