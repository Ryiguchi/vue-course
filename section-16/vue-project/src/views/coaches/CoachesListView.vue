<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { storeToRefs } from 'pinia';

import { useCoachesStore } from '../../stores/coaches.store';
import { useUserStore } from '@/stores/user.store';

import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '@/components/coaches/CoachFilter.vue';

// store
const coachesStore = useCoachesStore();
const userStore = useUserStore();

const { coaches, hasCoaches, isLoading, error } = storeToRefs(coachesStore);
const { isCoach, isAuthenticated } = storeToRefs(userStore);
const { loadCoaches } = coachesStore;

// refs
const activeFilters = ref({
  frontend: true,
  backend: true,
  career: true,
});
const errorMessage = ref<string | null>(null);

// computed
const filteredCoaches = computed(() => {
  const allCoaches = coaches.value;

  return allCoaches.filter(coach => {
    if (activeFilters.value.frontend && coach.areas.includes('frontend')) {
      return true;
    }
    if (activeFilters.value.backend && coach.areas.includes('backend')) {
      return true;
    }
    if (activeFilters.value.career && coach.areas.includes('career')) {
      return true;
    }
    return false;
  });
});

// watch
watch(error, value => {
  errorMessage.value = error.value
    ? error.value.message || 'There was a problem fetching!'
    : null;
});

// lifecycles
onMounted(() => {
  loadCoaches();
});

// functions
function setFilters(updatedFilters: IFilterOptions) {
  activeFilters.value = updatedFilters;
}

function handleError() {
  errorMessage.value = null;
}

function reloadCoaches(forceReload: boolean = false) {
  loadCoaches(forceReload);
}
</script>

<template>
  <div>
    <base-dialog
      :show="!!errorMessage"
      title="An error occured!"
      @close="handleError"
    >
      <p>{{ errorMessage }}</p>
    </base-dialog>
    <section>
      <CoachFilter @change-filter="setFilters" />
    </section>
    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline" @click="reloadCoaches(true)"
            >Refresh</base-button
          >
          <base-button link to="/auth?redirect=register" v-if="!isAuthenticated"
            >Login to register as a coach</base-button
          >
          <base-button
            v-if="isAuthenticated && !isCoach && !isLoading"
            link
            to="/register"
            >Register as a Coach</base-button
          >
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasCoaches && !isLoading">
          <CoachItem
            v-for="coach in filteredCoaches"
            :id="coach.id"
            :firstName="coach.firstName"
            :lastName="coach.lastName"
            :rate="coach.hourlyRate"
            :areas="coach.areas"
            :key="coach.id"
          />
        </ul>
        <h3 v-else>No coaches found</h3>
      </base-card>
    </section>
  </div>
</template>

<!-- <script lang="ts">
import { defineComponent } from 'vue';
import { mapState, mapActions } from 'pinia';

import { useCoachesStore } from '../../stores/coaches.store';

import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '@/components/coaches/CoachFilter.vue';
import { useUserStore } from '@/stores/user.store';

export default defineComponent({
  components: {
    CoachItem,
    CoachFilter,
  },

  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      } as IFilterOptions,
      errorMessage: null as string | null,
    };
  },

  computed: {
    ...mapState(useCoachesStore, [
      'coaches',
      'hasCoaches',
      'isLoading',
      'error',
    ]),
    ...mapState(useUserStore, ['isCoach', 'isAuthenticated']),

    filteredCoaches() {
      const coaches = this.coaches;

      return coaches.filter(coach => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true;
        }
        return false;
      });
    },
  },

  watch: {
    error(val) {
      this.errorMessage = this.error
        ? this.error.message || 'There was a problem fetching!'
        : null;
    },
  },

  created() {
    this.loadCoaches();
  },

  methods: {
    ...mapActions(useCoachesStore, ['loadCoaches']),

    setFilters(updatedFilters: IFilterOptions) {
      this.activeFilters = updatedFilters;
    },

    handleError() {
      this.errorMessage = null;
    },

    reloadCoaches(forceReload: boolean = false) {
      this.loadCoaches(forceReload);
    },
  },
});
</script> -->

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
