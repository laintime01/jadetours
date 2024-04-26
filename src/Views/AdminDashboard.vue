<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            subtitle="sandra_a88@gmailcom"
            title="Sandra Adams"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-airplane" title="Info Search" value="myfiles"></v-list-item>
          <v-list-item prepend-icon="mdi-history" title="Search History" value="shared"></v-list-item>
          <v-list-item prepend-icon="mdi-cog" title="Setting" value="starred"></v-list-item>
          <!-- when click lotout to / -->
          <v-list-item prepend-icon="mdi-logout" title="Logout" value="logout" @click="onClickLogout"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 250px"></v-main>
    </v-layout>
  </v-card>
</template>

<script>
export default{
  data(){
    return{
      drawer: null,
    }
},
methods:{
      onClickLogout(){
        this.$router.push('/')
      }
  }
}
</script>

<style scoped>
</style>
