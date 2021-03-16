<template>
  <b-row class="pt-5">
    <b-col md="6" offset-md="3">
      <b-jumbotron header="Login">
        <ValidationObserver ref="login_observer" v-slot="{ passes }" slim>
          <b-form @submit.prevent="passes(formSubmit)" novalidate class="mt-5">
            <ValidationProvider
              name="email"
              rules="email|required"
              v-slot="{ errors }"
              slim
            >
              <b-form-group label="Email address:" label-for="account-email">
                <b-form-input
                  id="account-email"
                  v-model="formData.email"
                  type="email"
                  :state="errors.length == 0"
                  placeholder="Enter email"
                />
                <b-form-invalid-feedback id="input-live-feedback">
                  {{ errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
            <ValidationProvider
              name="password"
              rules="required|min:4"
              v-slot="{ errors }"
              slim
            >
              <b-form-group label="Password" label-for="account-password">
                <b-form-input
                  id="account-password"
                  v-model="formData.password"
                  type="password"
                  placeholder="Enter password"
                  :state="errors.length == 0"
                />
                <b-form-invalid-feedback id="input-live-feedback">
                  {{ errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
            <div class="text-center">
              <b-button size="lg" class="my-2 my-sm-0" type="submit">
                Login
              </b-button>
              <span class="text">or</span>
              <nuxt-link to="/register">register</nuxt-link>
            </div>
          </b-form>
        </ValidationObserver>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";

export default {
  middleware: "no-auth",

  head: {
    title: "Nuxt-laravel :: Login",
  },

  data: () => ({
    isLoading: false,
    isSubmitted: false,
    formData: {
      email: "jjanaks12@gmail.com",
      password: "password",
    },
  }),

  components: { ValidationProvider, ValidationObserver },

  methods: {
    formSubmit() {
      this.isLoading = true;

      this.$store
        .dispatch("auth/login", this.formData)
        .then(() => {
          this.$router.replace('/dashboard');
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>