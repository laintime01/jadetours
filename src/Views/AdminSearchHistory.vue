<template>
  <v-card flat>
    <v-card-title class="d-flex align-center pe-2">
      <v-icon icon="mdi-video-input-component"></v-icon> &nbsp;
      Search History
      <v-spacer></v-spacer>

      <v-text-field
        v-model="search"
        density="compact"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="solo-filled"
        flat
        hide-details
        single-line
      ></v-text-field>
      <v-btn>
        <v-icon>mdi-filter</v-icon>
      </v-btn>
    </v-card-title>

    <v-divider class="mt-4"></v-divider>
    <v-data-table v-model:search="search" :items="items" class="mt-3">
      <template v-slot:header.stock>
        <div class="text-end">Stock</div>
      </template>

      <template v-slot:item.image="{ item }">
        <v-card class="my-2" elevation="2" rounded>
        </v-card>
      </template>

      <template v-slot:item.rating="{ item }">
        <v-rating
          :model-value="item.rating"
          color="orange-darken-2"
          density="compact"
          size="small"
          readonly
        ></v-rating>
      </template>

      <template v-slot:item.stock="{ item }">
        <div class="text-end">
          <v-chip
            :color="item.stock ? 'green' : 'red'"
            :text="item.stock ? 'In stock' : 'Out of stock'"
            class="text-uppercase"
            size="small"
            label
          ></v-chip>
        </div>
      </template>
    </v-data-table>
  </v-card>
</template>
<script>
  export default {
    data () {
      return {
        search: '',
        items: [
          {
            name: 'Beijing Hotel ',
            price: 699.99,
            rating: 5,
            time: '2023-10-01',
            stock: true,
          },
          {
            name: 'Shanghai Hotel',
            price: 799.99,
            rating: 4,
            time: '2023-10-02',
            stock: false,
          },
          {
            name: 'Paris-Toronto Flight',
            price: 1249.50,
            rating: 3,
            time: '2023-10-03',
            stock: true,
          },
          {
            name: 'New York-Tokyo Flight',
            price: 1499.99,
            rating: 4,
            time: '2023-10-04',
            stock: true,
          },
          {
            name: 'Mexico City Package',
            price: 3299.99,
            rating: 4,
            time: '2023-10-05',
            stock: false,
          },
          // ten more items
          {
            name: 'New york Hotel',
            price: 399.99,
            rating: 5,
            time: '2023-11-01',
            stock: true,
          },
          {
            name: 'Los Angeles Hotel',
            price: 799.99,
            rating: 4,
            time: '2023-11-02',
            stock: false,
          },
          {
            name: 'Paris-London Flight',
            price: 249.50,
            rating: 3,
            time: '2023-11-03',
            stock: true,
          },
          {
            name: 'New York-Tokyo Flight',
            price: 1499.99,
            rating: 4,
            time: '2023-11-04',
            stock: true,
          },
          {
            name: 'Mexico City Package',
            price: 3299.99,
            rating: 4,
            time: '2023-11-05',
            stock: false,
          }
        ],
      }
    },
  }
</script>
