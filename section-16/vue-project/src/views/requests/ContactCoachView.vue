<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useRequestsStore } from '@/stores/requests.store';

const route = useRoute();
const router = useRouter();

const { addRequest } = useRequestsStore();

const email = ref('');
const emailIsValid = ref(true);
const message = ref('');
const messageIsValid = ref(true);
const formIsValid = ref(true);

function validateForm() {
  if (email.value === '' || !email.value.includes('@')) {
    emailIsValid.value = false;
    formIsValid.value = false;
  }
  if (message.value === '') {
    messageIsValid.value = false;
    formIsValid.value = false;
  }
}

function submitForm() {
  formIsValid.value = true;

  validateForm();

  if (!formIsValid.value) return;

  const requestEmail = email.value;
  const requestMessage = message.value;
  const requestCoachId = route.params.id as string;

  const requestData = {
    email: requestEmail,
    message: requestMessage,
    coachId: requestCoachId,
  };

  addRequest(requestData);
  router.replace('/coaches');
}
</script>

<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="email">Your email</label>
      <input type="email" id="email" v-model.trim="email" />
      <p v-if="!emailIsValid" class="errors">Please enter a valid email</p>
    </div>
    <div class="form-control">
      <label for="message">Message</label>
      <textarea id="message" rows="5" v-model.trim="message"></textarea>
      <p v-if="!messageIsValid" class="errors">Please enter a message</p>
    </div>
    <div class="actions">
      <base-button>Send Message</base-button>
    </div>
    <p v-if="!formIsValid" class="errors">You have entered invalid input!</p>
  </form>
</template>

<!-- <script lang="ts">
import { defineComponent } from 'vue';

import { mapActions } from 'pinia';
import { useRequestsStore } from '@/stores/requests.store';

export default defineComponent({
  data() {
    return {
      email: '',
      emailIsValid: true,
      message: '',
      messageIsValid: true,
      formIsValid: true,
    };
  },
  methods: {
    ...mapActions(useRequestsStore, ['addRequest']),
    validateForm() {
      if (this.email === '' || !this.email.includes('@')) {
        this.emailIsValid = false;
        this.formIsValid = false;
      }
      if (this.message === '') {
        this.messageIsValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.formIsValid = true;

      this.validateForm();

      if (!this.formIsValid) return;

      const email = this.email;
      const message = this.message;
      const coachId = this.$route.params.id as string;

      this.addRequest({ email, message, coachId });
      this.$router.replace('/coaches');
    },
  },
});
</script> -->

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
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

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
