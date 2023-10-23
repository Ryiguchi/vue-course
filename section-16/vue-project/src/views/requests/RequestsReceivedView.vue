<script setup lang="ts">
import RequestItem from '@/components/requests/RequestItem.vue';

import { useRequestsStore } from '@/stores/requests.store';
import { storeToRefs } from 'pinia';
import { onMounted, ref, watch } from 'vue';

const requestStore = useRequestsStore();

const { requests, hasRequests, isLoading, error } = storeToRefs(requestStore);
const { loadRequests } = requestStore;
const errorMessage = ref<null | string>(null);

watch(error, () => {
  errorMessage.value = error.value
    ? error.value.message || 'There was a problem getting your messages!'
    : null;
});

onMounted(() => {
  loadRequests();
});

function handleError() {
  errorMessage.value = null;
}
</script>

<template>
  <section>
    <base-dialog
      :show="!!errorMessage"
      title="An error occured!"
      @close="handleError"
    >
    </base-dialog>
    <base-card>
      <header>
        <h2>Requests Received</h2>
      </header>
      <base-spinner v-if="isLoading"></base-spinner>
      <ul v-else-if="hasRequests && !errorMessage">
        <RequestItem
          v-for="request in requests"
          :email="request.email"
          :message="request.message"
          :key="request.id"
        ></RequestItem>
      </ul>
      <h3 v-else-if="!error && !hasRequests">
        You haven't received any requests yet!
      </h3>
    </base-card>
  </section>
</template>

<!-- <script lang="ts">
import { mapState, mapActions } from 'pinia';
import { defineComponent } from 'vue';
import { useRequestsStore } from '@/stores/requests.store';

import RequestItem from '@/components/requests/RequestItem.vue';

export default defineComponent({
  components: {
    RequestItem,
  },

  data() {
    return {
      errorMessage: null as string | null,
    };
  },

  computed: {
    ...mapState(useRequestsStore, [
      'requests',
      'hasRequests',
      'isLoading',
      'error',
    ]),
  },

  watch: {
    error() {
      this.errorMessage = this.error
        ? this.error.message || 'There was a problem getting your messages!'
        : null;
    },
  },

  created() {
    this.loadRequests();
  },

  methods: {
    ...mapActions(useRequestsStore, ['loadRequests']),
    handleError() {
      this.errorMessage = null;
    },
  },
});
</script> -->

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
