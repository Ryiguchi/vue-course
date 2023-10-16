<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="fetchResults"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="error">{{ error }}</p>
      <p v-else-if="!isLoading && results.length === 0">
        No stored experiences found. Start adding experiences first.
      </p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },
  // props: ['results'],
  components: {
    SurveyResult,
  },
  mounted() {
    this.fetchResults();
  },
  methods: {
    async fetchResults() {
      this.isLoading = true;
      this.error = null;

      try {
        const response = await fetch(
          'https://vue-course-2635b-default-rtdb.europe-west1.firebasedatabase.app/surveys.json'
        );
        const data = await response.json();

        const results = [];
        for (const id in data) {
          results.push({
            id: id,
            name: data[id].name,
            rating: data[id].rating,
          });
        }

        this.results = results;
      } catch (error) {
        this.isLoading = false;
        this.error = 'Failed to fetch data!';
        return;
      }
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
