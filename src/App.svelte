<script>
  import UsersList from "./lib/UsersList.svelte";
  const initialUsers = [
    {
      firstName: "José Gabriel",
      lastName: "Companioni",
      isActive: true,
    },
    {
      firstName: "Jessica",
      lastName: "Romari Huerta",
      isActive: false,
    },
  ];

  $: totalUsers = initialUsers.length;
</script>

<h1>There are {totalUsers} users</h1>
<UsersList {initialUsers} />

<style>
</style>
