<template>
    <tbody
              v-for="product in products"
              :key="product.id"
              class="text-gray-600 text-sm font-light"
            >
              <tr class="border-b border-gray-200 hover:bg-gray-100">
                <!-- Brand -->
                <td class="py-3 px-6 text-left whitespace-nowrap">
                  <div class="flex items-center">
                    <span class="font-medium">{{ product.brand }}</span>
                  </div>
                </td>

                <!-- Model -->
                <td class="py-3 px-6 text-left">
                  <div class="flex items-center">
                    <span>{{ product.model }}</span>
                  </div>
                </td>

                <!-- Price -->
                <td class="py-3 px-6 text-left">
                  <div class="flex items-center">
                    <span>{{ product.price }}</span>
                  </div>
                </td>

                <!-- Action -->
                <td class="py-3 px-6 text-center">
                  <div class="flex item-center justify-center">
                    <!-- see button -->
                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <button v-show="!editMode" @click="openView(product.id)">
                        <img src="../assets/action/see.svg" />
                      </button>
                    </div>
                    <!-- edit button -->
                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <button @click="showForEdit(product)">
                        <img src="../assets/action/edit.svg" />
                      </button>
                    </div>
                    <!-- delete button -->
                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <button v-show="!editMode" @click="deleteProduct(product.id)">
                        <img src="../assets/action/delete.svg" />
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
</template>

