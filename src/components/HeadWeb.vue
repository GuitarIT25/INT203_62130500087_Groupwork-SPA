<template>
    <nav class="flex text-gray-100 bg-indigo-800">
        <div class="py-3 w-full font-semibold text-center text-xl uppercase">Car Shop</div>
        <div class="flex w-full">
          <span class="p-2 px-auto">
            <input
              v-model="input"
              placeholder="Please enter a search"
              class="p-2 bg-white rounded w-full border-blue-300"
            />
          </span>
          <span class="p-2 px-auto">
            <button class="bg-red-600 font-semibold w-20 rounded-md">
              <p class="py-2">Search</p>
            </button>
          </span>
        </div>
      </nav>
</template>
  