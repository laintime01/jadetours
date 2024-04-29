<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <h3>Settings</h3>
          </v-card-title>
          <v-card-text>
            <v-form class="mt-6">
              <v-row>
                <v-col cols="6">
                  <v-text-field label="First Name" outlined></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field label="Last Name" outlined></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <v-text-field label="Email" outlined></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field label="Phone" outlined></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <v-text-field label="Password" outlined></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field label="Confirm Password" outlined></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" class="d-flex justify-center">
                  <v-btn color="primary" dark>Save</v-btn>
                </v-col>
              </v-row>
            </v-form>
            </v-card-text>
            <v-divider></v-divider>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default{
  name: 'AdminSettings',
}
</script>
