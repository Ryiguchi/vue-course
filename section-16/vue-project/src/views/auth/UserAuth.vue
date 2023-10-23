<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';

import { useUserStore } from '@/stores/user.store';

const userStore = useUserStore();
const route = useRoute();
const router = useRouter();

// refs
const email = ref('');
const password = ref('');
const formIsValid = ref(true);
const errorMessage = ref<string | null>(null);
const mode = ref<'login' | 'signup'>('login');

const { error, isLoading, isSuccess } = storeToRefs(userStore);
const { signup, login } = userStore;

// computed
const submitButtonCaption = computed(() => {
  return mode.value === 'login' ? 'Login' : 'Signup';
});

const switchModeButtonCaption = computed(() => {
  return `${mode.value === 'login' ? 'Signup' : 'Login'} instead`;
});

// watchers
watch(error, () => {
  errorMessage.value = error.value
    ? error.value.message || 'There was a problem fetching!'
    : null;
});

watch(isSuccess, value => {
  if (value) {
    const redirectUrl = `/${route.query.redirect || 'coaches'}`;
    router.replace(redirectUrl);
  }
});

// functions
function handleError() {
  errorMessage.value = null;
}

function submitForm() {
  formIsValid.value = true;

  if (
    email.value === '' ||
    !email.value.includes('@') ||
    password.value.length < 6
  ) {
    formIsValid.value = false;
    return;
  }

  const userData = { email: email.value, password: password.value };

  if (mode.value === 'signup') {
    signup(userData);
  } else {
    login(userData);
  }
}

function switchAuthMode() {
  if (mode.value === 'login') {
    mode.value = 'signup';
  } else {
    mode.value = 'login';
  }
}
</script>

<template>
  <div>
    <base-dialog
      :show="!!errorMessage"
      title="An error occured"
      @close="handleError"
    >
      <p>{{ errorMessage }}</p>
    </base-dialog>
    <base-dialog :show="isLoading" title="Authenticating" fixed>
      <base-spinner></base-spinner>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">Email</label>
          <input type="email" id="email" v-model.trim="email" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" id="password" v-model.trim="password" />
        </div>
        <p v-if="!formIsValid">
          Please enter a valid email and password. Password must be at least 6
          characters long.
        </p>
        <base-button>{{ submitButtonCaption }}</base-button>
        <base-button type="button" mode="flat" @click="switchAuthMode">{{
          switchModeButtonCaption
        }}</base-button>
      </form>
    </base-card>
  </div>
</template>

<!-- <script lang="ts">
import { mapActions, mapState } from 'pinia';
import { useUserStore } from '@/stores/user.store';

export default {
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      errorMessage: null as string | null,
      mode: 'login' as 'login' | 'signup',
    };
  },

  computed: {
    ...mapState(useUserStore, ['error', 'isLoading', 'isSuccess']),

    submitButtonCaption() {
      return this.mode === 'login' ? 'Login' : 'Signup';
    },

    switchModeButtonCaption() {
      return `${this.mode === 'login' ? 'Signup' : 'Login'} instead`;
    },
  },

  watch: {
    error() {
      this.errorMessage = this.error
        ? this.error.message || 'There was a problem fetching!'
        : null;
    },
    isSuccess(value) {
      if (value) {
        const redirectUrl = `/${this.$route.query.redirect || 'coaches'}`;
        this.$router.replace(redirectUrl);
      }
    },
  },

  methods: {
    ...mapActions(useUserStore, ['signup', 'login']),

    handleError() {
      this.errorMessage = null;
    },

    submitForm() {
      this.formIsValid = true;

      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }

      const userData = { email: this.email, password: this.password };

      if (this.mode === 'signup') {
        this.signup(userData);
      } else {
        this.login(userData);
      }
    },

    switchAuthMode() {
      if (this.mode === 'login') {
        this.mode = 'signup';
      } else {
        this.mode = 'login';
      }
    },
  },
};
</script> -->

<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>
