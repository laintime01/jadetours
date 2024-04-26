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

      <v-container>
        <v-text-field
          v-model="first"
          :rules = "[v => !!v || 'First name is required']"
          color="primary"
          label="First name"
          variant="underlined"
        ></v-text-field>

        <v-text-field
          v-model="last"
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

        <v-checkbox
          v-model="terms"
          color="secondary"
          label="I agree to site terms and conditions"
        ></v-checkbox>
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
    <!-- 消息 -->
    <v-snackbar
      v-model="snackbar.show"
      :color="snackbar.color"
      :timeout="snackbar.timeout"
      top
    >
      {{ snackbar.message }}
    </v-snackbar>
  </div>
  </v-app>
</template>
<script>
  export default {
    data(){
      return{
        // 初始化 snackbar 数据
        snackbar: {
          show: false,
          timeout: 2000,
          message: ''
        },
        // 初始化表单数据
        first: null,
        last: null,
        email: null,
        password: null,
        terms: false,
      }
    },
    methods:{
      onClickLogin(){
        this.$router.push('/'); // 跳转到主页
      },

      onClickRegister() {
        if (!this.first || !this.last || !this.email || !this.password || !this.terms) {
          this.snackbar.message = 'Please fill in all required fields';
          this.snackbar.color = 'error'; // 显示红色警告
          this.snackbar.show = true;
        } else {
          // 假设注册逻辑已成功
          this.snackbar.message = 'Registration successful!';
          this.snackbar.color = 'success'; // 显示绿色成功消息
          this.snackbar.show = true;
          // 可以在这里进行路由跳转或其他逻辑
        }
      },

  }
  }
</script>
