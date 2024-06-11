<template>
  <div>
    <button @click="incrementPage">Next Page</button>
    <div class="grid">
      <div class="card" v-for="user in users" :key="user.login.uuid">
        <img :src="user.picture.medium" alt="User Image">
        <p>{{ user.name.first }} {{ user.name.last }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      apiPage: 1,
    };
  },
  methods: {
    fetchUsers() {
      fetch(`https://randomuser.me/api?page=${this.apiPage}`)
        .then(response => response.json())
        .then(data => {
          this.users = data.results;
        });
    },
    incrementPage() {
      this.apiPage += 1;
      this.fetchUsers();
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>

<style scoped>
.grid {
  display: flex;
  flex-wrap: wrap;
}
.card {
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
}
</style>
