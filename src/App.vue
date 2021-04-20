<template>
  <!-- head menu -->
  <head-web></head-web>
  
  <!-- add edit button -->
  <add-button
    :addEditState="addEditState"
    @add-edit-tap="addEditTap"
  ></add-button>

  <!-- view -->
  <section v-show="viewState" class="flex items-center justify-center py-5">
    <div class="max-w-xl w-full lg:flex">
      <div
        class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between"
      >
        <div class="mb-2">
          <div class="text-black font-bold text-xl mb-2">
            {{ products[viewId].brand }} : {{ products[viewId].model }}
          </div>

          <p class="font-bold">Price : {{ products[viewId].price }}</p>

          <span class="font-bold">Description :</span>
          <span class="text-grey-darker text-base">{{
            products[viewId].description
          }}</span>
        </div>

        <div class="flex items-end justify-end px-7">
          <button
            class="mx-2 bg-green-400 font-semibold text-gray-200 w-20 rounded-md"
          >
            <p class="py-2">Buy</p>
          </button>
          <button
            @click="closeView"
            class="mx-2 bg-red-400 font-semibold text-gray-200 w-20 rounded-md"
          >
            <p class="py-2">Close</p>
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- add/edit from -->
  <section v-show="addEditState" class="flex items-center justify-center">
    <div class="bg-white w-96 shadow-xl rounded p-5">
      <div v-if="editMode" class="flex">
        <span class="text-3xl font-medium w-full">Edit Product</span>
        <span @click="addEditTap" class="text-3xl font-medium cursor-pointer"
          >X</span
        >
      </div>
      <div v-else class="flex">
        <span class="text-3xl font-medium w-full">Added Product</span>
        <span @click="addEditTap" class="text-3xl font-medium cursor-pointer"
          >X</span
        >
      </div>

      <form @submit.prevent="submitForm" class="space-y-5 mt-5">
        <input
          type="text"
          class="w-full h-12 border border-gray-800 rounded px-3"
          id="Brand"
          placeholder="Brand"
          v-model.trim="brand"
        />
        <input
          type="text"
          class="w-full h-12 border border-gray-800 rounded px-3"
          id="Model"
          placeholder="Model"
          v-model.trim="model"
        />
        <input
          type="text"
          class="w-full h-12 border border-gray-800 rounded px-3"
          id="Price"
          placeholder="Price"
          v-model.trim="price"
        />
        <input
          type="text"
          class="w-full h-12 border border-gray-800 rounded px-3"
          id="Description"
          placeholder="Description"
          v-model.trim="description"
        />
        <button
          class="text-center w-full bg-blue-900 rounded-md text-white py-3 font-medium"
        >
          Submit
        </button>
      </form>
    </div>
  </section>

  <!-- <router-view :product="" /> -->
  <section>
    <div class="flex items-center justify-center font-sans">
      <div class="w-full lg:w-4/6">
        <div class="shadow-md rounded my-6">
          <table class="w-full">
            <thead>
              <tr class="bg-gray-200 text-gray-600 uppercase text-sm">
                <th class="py-3 px-6 text-left">Brand</th>
                <th class="py-3 px-6 text-left">Model</th>
                <th class="py-3 px-6 text-left">Price</th>
                <th class="py-3 px-6 text-center">Action</th>
              </tr>
            </thead>

            <tbody
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
                    <div
                      class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                    >
                      <button v-show="!editMode" @click="openView(product.id)">
                        <img src="./assets/action/see.svg" />
                      </button>
                    </div>

                    <div
                      class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                    >
                      <button @click="showForEdit(product)">
                        <img src="./assets/action/edit.svg" />
                      </button>
                    </div>

                    <div
                      class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                    >
                      <button
                        v-show="!editMode"
                        @click="deleteProduct(product.id)"
                      >
                        <img src="./assets/action/delete.svg" />
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

</template>

<style>
</style>

<script>
import AddButton from "./components/AddButton.vue";
export default {
  name: "App",
  components: {
    AddButton,
  },
  data() {
    return {
      brand: "",
      model: "",
      price: "",
      description: "",
      urlPd: "http://localhost:5000/products",
      products: [],
      viewState: false,
      addEditState: false,
      editMode: false,
      viewId: 0,
      editId: "",
    };
  },
  methods: {
    closeView() {
      this.viewState = false;
    },
    showForEdit(product) {
      this.editId = product.id;
      this.editMode = true;
      this.brand = product.brand;
      this.model = product.model;
      this.price = product.price;
      this.description = product.description;
      this.addEditState = true;
    },
    addEditTap() {
      this.editId = "";
      this.brand = "";
      this.model = "";
      this.price = "";
      this.description = "";
      this.editMode = false;
      this.addEditState = !this.addEditState;
    },
    openView(productId) {
      this.viewId = productId;
      this.viewState = true;
    },

    submitForm() {
      if (this.brand !== "" && this.model !== "" && this.description !== "") {
        if (this.editMode) {
          this.editProduct({
            id: this.editId,
            brand: this.brand,
            model: this.model,
            price: this.price,
            description: this.description,
          });
        } else {
          this.addNewProduct({
            brand: this.brand,
            model: this.model,
            price: this.price,
            description: this.description,
          });
        }
      }
      this.brand = "";
      this.model = "";
      this.price = "";
      this.description = "";
    },

    // Database Method
    async getProducts() {
      try {
        const res = await fetch(this.urlPd);
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    async addNewProduct(newProduct) {
      try {
        const res = await fetch(this.urlPd, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            brand: newProduct.brand,
            model: newProduct.model,
            price: newProduct.price,
            description: newProduct.description,
          }),
        });
        const data = await res.json();
        this.products = [...this.products, data];
      } catch (error) {
        console.console.log(`Could not save! ${error}`);
      }
    },
    async editProduct(editingProduct) {
      try {
        const res = await fetch(`${this.urlPd}/${editingProduct.id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            brand: editingProduct.brand,
            model: editingProduct.model,
            price: editingProduct.price,
            description: editingProduct.description,
          }),
        });
        const data = await res.json();
        this.products = this.products.map((product) =>
          product.id === editingProduct.id
            ? {
                ...product,
                brand: data.brand,
                model: data.model,
                price: data.price,
                description: data.description,
              }
            : product
        );
        this.editMode = false;
        this.editId = "";
        this.brand = "";
        this.model = "";
        this.price = "";
        this.description = "";
      } catch (error) {
        console.log(`Could not edit! ${error}`);
      }
    },

    deleteProduct(prodId) {
      try {
        fetch(`${this.urlPd}/${prodId}`, {
          method: "DELETE",
        });
        this.products = this.products.filter(
          (product) => product.id !== prodId
        );
      } catch (error) {
        console.log(`Could not delete ${error}`);
      }
    },
  },
  async created() {
    this.products = await this.getProducts();
  },
};
</script>
