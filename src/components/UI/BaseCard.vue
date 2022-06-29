<template>
    <div class="card">
        <div class="card-header" v-if="$slots.header">

           <h3> <slot name="header"></slot></h3>
        </div>
        <div class="card-body" name="default" v-if="$slots.default">
            <slot></slot>
        </div>
        <div class="card-footer" v-if="$slots.footer">

            <slot name="footer"></slot>
        </div>
    </div>
</template>
<style>
    .card{
       
        border-radius: 10px;
        border: 0px;
        box-shadow: 2px 2px 7px rgb(172, 169, 169);
        margin: 15px 0;
        overflow: hidden;
    }
    .card-header{
        border-radius: 10px;
        background: #41B883;
        color: #fff;
    }
    .card-footer{
         background: #1cc47863
    }
</style>