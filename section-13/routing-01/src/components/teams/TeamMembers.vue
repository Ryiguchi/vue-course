<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <RouterLink to="/teams/t2">Go to team 2</RouterLink>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['teams', 'users'],
  props: {
    teamId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      teamName: '',
      members: [],
    };
  },
  watch: {
    teamId(newId) {
      this.loadTeam(newId);
    },
  },
  created() {
    this.loadTeam(this.teamId);
  },
  beforeRouteEnter(to, from, next) {
    console.log('entering route');
    next();
  },
  // only available with router and nested routes
  // called when component is about to be reused because the route changed
  beforeRouteUpdate(to, from, next) {
    console.log('changing route');
    //Can also load new data this way but the it bounds the component to the router.  Could be more flexible to not do it this way.
    // this.loadTeam(to.params.teamId)
    next();
  },
  methods: {
    loadTeam(route) {
      const selectedTeam = this.teams.find(team => team.id === this.teamId);

      this.members = selectedTeam.members.map(memberId =>
        this.users.find(user => user.id === memberId)
      );

      this.teamName = selectedTeam.name;
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
