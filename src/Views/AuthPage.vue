<template>
  <v-app>
    <div class="d-flex justify-center align-center" style="height: 100vh;">
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
        <div class="text-subtitle-1 text-medium-emphasis">Account</div>

        <v-text-field
          v-model="email"
          class="mt-12"
          density="compact"
          :rules="[v => !!v || 'Email is required']"
          placeholder="Email address"
          clearable
          prepend-inner-icon="mdi-email-outline"
          variant="underlined"
        ></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Password
          <!-- <a
            class="text-caption text-decoration-none text-blue"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Forgot login password?</a> -->
        </div>

        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          v-model="password"
          :rules="[v => !!v || 'Password is required']"
          placeholder="Enter your password"
          prepend-inner-icon="mdi-lock-outline"
          variant="underlined"
          @click:append-inner="visible = !visible"
        ></v-text-field>

        <v-btn
          class="mb-8 mt-12"
          color="blue"
          size="large"
          variant="tonal"
          block
          @click="onClickLogin"
        >
          Log In
        </v-btn>

        <v-card-text class="text-center">
          <router-link
            class="text-blue text-decoration-none mt-12"
            to="/signup"
          >
            Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
          </router-link>
        </v-card-text>
      </v-card>
    </div>
    <!-- 消息 -->
    <v-snackbar
        v-model="snackbar.show"
        :color="snackbar.color"
        :timeout="snackbar.timeout"
        top
      >
        {{ snackbar.message }}
      </v-snackbar>
  </v-app>
</template>
<script>
  export default {
    data(){
      return{
      visible: false,
      email: '',
      password: '',
      snackbar: {
        show: false,
        color: '',
        timeout: 3000,
        message: 'Hi'
      }
    }
  },
  methods: {
    onClickLogin(){
      this.snackbar.show = true;
      this.snackbar.message = 'Redirecting to login page...';
      this.snackbar.color = 'success'; // 显示绿色信息
      this.$nextTick(() => {
        setTimeout(() => {
          this.$router.push('/dashboard');
        }, 1000);
      });
    }
  }
}


</script>


<style scoped>
  .custom-input-width {
  width: 50%;
}

.custom-button-width {
  width: 50%;
}
</style>
