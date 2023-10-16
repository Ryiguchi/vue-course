<template>
  <div>
    <TheHeader />
    <button @click="setSelectedComponents('ActiveGoals')">Active Goals</button>
    <button @click="setSelectedComponents('ManageGoals')">Manage Goals</button>
    <!-- <ActiveGoals v-if="selectedComponnet === 'active-goals'" />
    <ManageGoals v-else /> -->
    <keep-alive>
      <component :is="selectedComponnet"></component>
    </keep-alive>

    <!-- <BadgeList />
    <UserInfo
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    />
    <CourseGoals #default="slotProps">
      <h2>{{ slotProps.item }}</h2>
      <p>{{ slotProps.anotherProp }}</p>
    </CourseGoals> -->
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import UserInfo from './components/UserInfo.vue';
import BadgeList from './components/BadgeList.vue';
import CourseGoals from './components/CourseGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

export default {
  components: {
    TheHeader,
    UserInfo,
    BadgeList,
    CourseGoals,
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      selectedComponnet: 'ActiveGoals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponents(cmp) {
      this.selectedComponnet = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
