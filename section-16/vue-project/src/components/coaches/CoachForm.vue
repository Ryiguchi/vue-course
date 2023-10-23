<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits<{
  'save-data': [data: ICoachFormData];
}>();

const firstName = ref({
  val: '',
  isValid: true,
});
const lastName = ref({
  val: '',
  isValid: true,
});
const description = ref({
  val: '',
  isValid: true,
});
const hourlyRate = ref({
  val: 0,
  isValid: true,
});
const areas = ref({
  val: [] as string[],
  isValid: true,
});
const formIsValid = ref(true);

function validateForm() {
  formIsValid.value = true;

  if (firstName.value.val === '') {
    firstName.value.isValid = false;
    formIsValid.value = false;
  }
  if (lastName.value.val === '') {
    lastName.value.isValid = false;
    formIsValid.value = false;
  }
  if (description.value.val === '') {
    description.value.isValid = false;
    formIsValid.value = false;
  }
  if (hourlyRate.value.val <= 0) {
    hourlyRate.value.isValid = false;
    formIsValid.value = false;
  }
  if (areas.value.val.length === 0) {
    areas.value.isValid = false;
    formIsValid.value = false;
  }
}
function clearValidity(input: string) {
  if (input === 'firstName') {
    firstName.value.isValid = true;
  }
  if (input === 'lastName') {
    lastName.value.isValid = true;
  }
  if (input === 'description') {
    description.value.isValid = true;
  }
  if (input === 'rate') {
    hourlyRate.value.isValid = true;
  }
  if (input === 'areas') {
    areas.value.isValid = true;
  }
}

function submitForm() {
  validateForm();

  if (!formIsValid.value) return;

  const formData = {
    first: firstName.value.val,
    last: lastName.value.val,
    desc: description.value.val,
    rate: hourlyRate.value.val,
    areas: areas.value.val,
  };

  emit('save-data', formData);
}
</script>

<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !firstName.isValid }">
      <label for="firstname">Firstname</label>
      <input
        type="text"
        id="firstname"
        v-model.trim="firstName.val"
        @blur="clearValidity('firstName')"
      />
      <p v-if="!firstName.isValid">First name can not be empty.</p>
    </div>
    <div class="form-control" :class="{ invalid: !lastName.isValid }">
      <label for="lastname">Lastname</label>
      <input
        type="text"
        id="lastname"
        v-model.trim="lastName.val"
        @blur="clearValidity('lastName')"
      />
      <p v-if="!lastName.isValid">Last name can not be empty.</p>
    </div>
    <div class="form-control" :class="{ invalid: !description.isValid }">
      <label for="description">Description</label>
      <textarea
        type="text"
        id="description"
        rows="5"
        v-model.trim="description.val"
        @blur="clearValidity('description')"
      ></textarea>
      <p v-if="!description.isValid">Description can not be empty.</p>
    </div>
    <div class="form-control" :class="{ invalid: !hourlyRate.isValid }">
      <label for="rate">Hourly Rate</label>
      <input
        type="number"
        id="rate"
        v-model.number="hourlyRate.val"
        @blur="clearValidity('rate')"
      />
      <p v-if="!hourlyRate.isValid">Hourly rate must be more than 0.</p>
    </div>
    <div class="form-control" :class="{ invalid: !areas.isValid }">
      <h3>Areas of Expertise</h3>
      <div>
        <input
          type="checkbox"
          id="frontend"
          value="frontend"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="frontend">Frontend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="backend"
          value="backend"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="backend">Backend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="career"
          value="career"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="career">Career Advisory</label>
      </div>
      <p v-if="!areas.isValid">At least 1 expertise must be selected.</p>
    </div>
    <p v-if="!formIsValid">Please fix the above errors and submit again.</p>
    <base-button>Register</base-button>
  </form>
</template>

<!-- <script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  emits: ['save-data'],
  data() {
    return {
      firstName: {
        val: '',
        isValid: true,
      },
      lastName: {
        val: '',
        isValid: true,
      },
      description: {
        val: '',
        isValid: true,
      },
      hourlyRate: {
        val: 0,
        isValid: true,
      },
      areas: {
        val: [] as string[],
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    clearValidity(input: string) {
      if (input === 'firstName') {
        this.firstName.isValid = true;
      }
      if (input === 'lastName') {
        this.lastName.isValid = true;
      }
      if (input === 'description') {
        this.description.isValid = true;
      }
      if (input === 'rate') {
        this.hourlyRate.isValid = true;
      }
      if (input === 'areas') {
        this.areas.isValid = true;
      }
    },
    validateForm() {
      this.formIsValid = true;

      if (this.firstName.val === '') {
        this.firstName.isValid = false;
        this.formIsValid = false;
      }
      if (this.lastName.val === '') {
        this.lastName.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.val === '') {
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (this.hourlyRate.val <= 0) {
        this.hourlyRate.isValid = false;
        this.formIsValid = false;
      }
      if (this.areas.val.length === 0) {
        this.areas.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const formData = {
        first: this.firstName.val,
        last: this.lastName.val,
        desc: this.description.val,
        rate: this.hourlyRate.val,
        areas: this.areas.val,
      };
      this.$emit('save-data', formData);
    },
  },
});
</script> -->

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
