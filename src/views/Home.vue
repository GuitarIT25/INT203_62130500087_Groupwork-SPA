<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <section>
    <div class="flex items-center justify-center font-sans">
      <div class="w-full lg:w-4/6">
        <div class="shadow-md rounded my-6">
          <table class="w-full">
            <!-- header of table -->
            <thead>
              <tr class="bg-gray-200 text-gray-600 uppercase text-sm">
                <th class="py-3 px-6 text-left">Brand</th>
                <th class="py-3 px-6 text-left">Model</th>
                <th class="py-3 px-6 text-left">Price</th>
                <th class="py-3 px-6 text-center">Action</th>
              </tr>
            </thead>

            <!-- product list -->
            
            <!-- <tbody
              v-for="product in products"
              :key="product.id"
              class="text-gray-600 text-sm font-light"
            >
              <tr class="border-b border-gray-200 hover:bg-gray-100">
                
                <td class="py-3 px-6 text-left whitespace-nowrap">
                  <div class="flex items-center">
                    <span class="font-medium">{{ product.brand }}</span>
                  </div>
                </td>

           
                <td class="py-3 px-6 text-left">
                  <div class="flex items-center">
                    <span>{{ product.model }}</span>
                  </div>
                </td>

                <td class="py-3 px-6 text-left">
                  <div class="flex items-center">
                    <span>{{ product.price }}</span>
                  </div>
                </td>

                
                <td class="py-3 px-6 text-center">
                  <div class="flex item-center justify-center">
                  
                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <button v-show="!editMode" @click="openView(product.id)">
                        <img src="./assets/action/see.svg" />
                      </button>
                    </div>
                    
                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <button @click="showForEdit(product)">
                        <img src="./assets/action/edit.svg" />
                      </button>
                    </div>
                    
                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <button v-show="!editMode" @click="deleteProduct(product.id)">
                        <img src="./assets/action/delete.svg" />
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody> -->
            
          </table>
        </div>
      </div>
    </div>
  </section>

</template>

<!-- <script>
import ProductList from '@/components/ProductList.vue'

export default {
  name: 'Home',
  components: {
    ProductList
  }
}
</script> -->
