<template>
      <v-navigation-drawer
        app
        expand-on-hover
        rail
        disable-resize-watcher
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
          <v-list-item prepend-icon="mdi-airplane" title="Info Search" value="myfiles" link to="/search"></v-list-item>
          <v-list-item prepend-icon="mdi-history" title="Search History" value="shared" link to="/history"></v-list-item>
          <v-list-item prepend-icon="mdi-cog" title="Setting" value="starred" link to="/settings"></v-list-item>
          <v-list-item prepend-icon="mdi-logout" title="Logout" value="logout" link to="/auth/login"></v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>

<script>
export default{
  data(){
    return{
      drawer: null,
    }
},
methods:{

  }
}
</script>

<style scoped>
</style>
