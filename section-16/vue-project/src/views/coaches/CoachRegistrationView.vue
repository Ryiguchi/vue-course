<script setup lang="ts">
import CoachForm from '@/components/coaches/CoachForm.vue';

import { useRouter } from 'vue-router';
import { useCoachesStore } from '@/stores/coaches.store';

const router = useRouter();
const { addCoach } = useCoachesStore();

function saveData(data: ICoachFormData) {
  addCoach(data);
  router.replace('/coaches');
}
</script>

<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <CoachForm @save-data="saveData" />
    </base-card>
  </section>
</template>

<!-- <script lang="ts">
import CoachForm from '@/components/coaches/CoachForm.vue';
import { defineComponent } from 'vue';
import { mapActions } from 'pinia';
import { useCoachesStore } from '@/stores/coaches.store';

export default defineComponent({
  components: {
    CoachForm,
  },

  methods: {
    ...mapActions(useCoachesStore, ['addCoach']),
    saveData(data: ICoachFormData) {
      this.addCoach(data);
      this.$router.replace('/coaches');
    },
  },
});

</script> -->

<style scoped></style>
