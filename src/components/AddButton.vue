<template>
      <section v-show="!addEditState" class="flex items-center justify-center py-5">
    <div class="lg:w-4/6">
      <span class="p-2 px-auto">
        <button @click="addEditTap" class="bg-green-400 font-semibold w-40 rounded-md">
          <p class="py-2">Add Product</p>
        </button>
      </span>
    </div>
  </section>
</template>
<script>

export default ({
   props:['addEditState'],
   methods:{
    addEditTap(){
        this.$emit('add-edit-tap')
    }
   }
})
</script>
