<!-- <script setup>
import { reactive, ref } from 'vue';

const mainGoal = ref('Finish the Course');
const showGoal = ref(true);

const goalState = ref({
  mainGoal: 'Finish the Course',
  showGoal: true,
});

const goalState = reactive({
  mainGoal: 'Finish the Course',
  showGoal: true,
});

function toggleGoal() {
  goalState.showGoal = !goalState.showGoal;
}
</script> -->

<template>
  <h2>{{ goals.mainGoal }}</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="goals.showGoal">OUTPUT COURSE GOAL</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoal">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
import { reactive, ref } from 'vue';

export default {
  setup() {
    // const mainGoal = ref('finish the Course');
    // const showGoal = ref(true);

    // const goals = ref({
    //   mainGoal: 'Finish the Course',
    //   showGoal: true,
    // });

    const goals = reactive({
      mainGoal: 'finish the Course',
      showGoal: true,
    });

    function toggleGoal() {
      goals.showGoal = !goals.showGoal;
    }

    return {
      goals,
      toggleGoal,
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
