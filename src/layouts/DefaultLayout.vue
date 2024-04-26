<!-- Used for pages need drawer navigation -->
<template>
  <v-app>
    <DrawerNavigation />
    <v-main >
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>
