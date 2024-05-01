<template>
  <v-container class="d-flex justify-center align-center" style="height: 100vh;">
    <v-col cols="12" xs="12" sm="8" md="6" lg="5" xl="4" class="mx-auto">

    <v-card
      class="mx-auto pa-12 pb-8"
      color="white"
      elevation="8"
      width="100%"
      rounded="lg"
    >
      <v-card-title class="text-center">
        <div class="text-h4 font-weight-black">Jade Tours</div>
        <div class="text-subtitle-1">Online Booking System</div>
      </v-card-title>

      <v-container>
        <v-text-field
          v-model="firstname"
          :rules = "[v => !!v || 'First name is required']"
          color="primary"
          label="First name"
          variant="underlined"
        ></v-text-field>

        <v-text-field
          v-model="lastname"
          :rules = "[v => !!v || 'Last name is required']"
          color="primary"
          label="Last name"
          variant="underlined"
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules = "[v => !!v || 'Email is required']"
          color="primary"
          label="Email"
          variant="underlined"
        ></v-text-field>

        <v-text-field
          v-model="password"
          :rules = "[v => !!v || 'Password is required']"
          color="primary"
          label="Password"
          placeholder="Enter your password"
          variant="underlined"
        ></v-text-field>
      </v-container>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer>
          <v-btn text color="primary" @click="onClickLogin">
            <v-icon icon="mdi-chevron-left" end></v-icon>
            Log in
          </v-btn>
        </v-spacer>

        <v-btn color="success" @click="onClickRegister">
          Complete Registration
          <v-icon icon="mdi-chevron-right" end></v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
    <!-- Message -->
    <v-snackbar
      v-model="snackbar.show"
      :color="snackbar.color"
      :timeout="snackbar.timeout"
      top
    >
      {{ snackbar.message }}
    </v-snackbar>

  </v-container>
</template>
<script>
import { signupApi } from '@/api/auth';
  export default {
    data(){
      return{
        // init snackbar data
        snackbar: {
          show: false,
          timeout: 4000,
          message: '',
          color: '',
        },
        // init form data
        firstname: null,
        lastname: null,
        email: null,
        password: null,
      }
    },
    methods:{
      onClickLogin(){
        this.$router.push('/auth/login');
      },
      async onClickRegister() {
        if (!this.firstname || !this.lastname || !this.email || !this.password) {
          this.snackbar.message = 'Please fill in all required fields';
          this.snackbar.color = 'error';
          this.snackbar.show = true;
          return;
        }

        const credentials = {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: this.password,
        };

        try {
          const response = await signupApi(credentials);
          if (response.status === 201) {
            this.snackbar.show = true;
            this.snackbar.message = 'Registration successful! Redirecting to login page...';
            this.snackbar.color = 'success';
            this.$nextTick(() => {
              setTimeout(() => {
                this.$router.push('/auth/login');
              }, 800);
            });
          } else {
            this.snackbar.show = true;
            this.snackbar.message = 'Registration failed!Please try again.';
            this.snackbar.color = 'error';
          }
        } catch (error) {
          this.snackbar.show = true;
          this.snackbar.message = 'Registration process encountered an error';
          this.snackbar.color = 'error';
        }
      }
      }
  }
</script>
