<!-- flex display -->
<template>
  <v-app>
    <v-row no-gutters>
      <v-col cols="2">
        <DrawerNavigation />
      </v-col>
      <v-col>
        <v-main >
          <v-container>
            <RouterView />
          </v-container>
      </v-main>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>
