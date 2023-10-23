<script setup lang="ts">
import { computed, onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useCoachesStore } from '@/stores/coaches.store';
import { storeToRefs } from 'pinia';

const route = useRoute();
const coachesStore = useCoachesStore();

const { id } = defineProps<{ id: string }>();

// refs
const { coaches } = storeToRefs(coachesStore);
const selectedCoach = ref<ICoachDataNoId>();

// computed
const fullName = computed(
  () => `${selectedCoach.value?.firstName} ${selectedCoach.value?.lastName}`
);
const contactLink = computed(() => `${route.path}/contact`);
const rate = computed(() => selectedCoach.value?.hourlyRate);
const description = computed(() => selectedCoach.value?.description);
const areas = computed(() => selectedCoach.value?.areas);

// lifecycles
onBeforeMount(() => {
  selectedCoach.value = coaches.value.find(coach => coach.id === id);
});
</script>

<template>
  <div>
    <section>
      <base-card>
        <h2>{{ fullName }}</h2>
        <h3>${{ rate }}/hour</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>Interested? Reach out now!</h2>
          <base-button link :to="contactLink">Contact</base-button>
        </header>
        <RouterView />
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge
          v-for="area in areas"
          :type="area"
          :title="area"
          :key="area"
        ></base-badge>
        <p>{{ description }}</p>
      </base-card>
    </section>
  </div>
</template>

<!-- <script lang="ts">
import { defineComponent } from 'vue';
import { useCoachesStore } from '../../stores/coaches.store';
import { mapState } from 'pinia';

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selectedCoach: undefined,
    } as { selectedCoach: undefined | ICoachData };
  },
  computed: {
    ...mapState(useCoachesStore, ['coaches']),
    fullName() {
      return `${this.selectedCoach?.firstName} ${this.selectedCoach?.lastName}`;
    },
    contactLink() {
      return `${this.$route.path}/contact`;
    },
    rate() {
      return this.selectedCoach?.hourlyRate;
    },
    description() {
      return this.selectedCoach?.description;
    },
    areas() {
      return this.selectedCoach?.areas;
    },
  },
  created() {
    this.selectedCoach = this.coaches.find(coach => coach.id === this.id);
  },
});
</script> -->

<style scoped></style>
