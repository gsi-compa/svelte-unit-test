<script>
  import { onMount } from "svelte";
  import UserItem from "./UserItem.svelte";
  let initialUsers = [];

  const deleteUser = (index) => {
    initialUsers.splice(index, 1);
    initialUsers = [...initialUsers];
  };

  $: totalUsers = initialUsers.length;

  onMount(async () => {
    const firstNames = [
      "José",
      "Gabriel",
      "Yuniel",
      "Solangel",
      "Ana",
      "Yassel",
      "Jessica",
      "Pedro",
      "Juan",
      "Alberto",
    ];
    const lastNames = [
      "Companioni",
      "Benitez",
      "García",
      "Hernández",
      "Pirlo",
      "Suarez",
      "Figo",
      "González",
      "Ramos",
      "Bonucci",
    ];
    const temp = [];
    for (let index = 0; index < 10; index++) {
      temp.push({
        firstName: firstNames[index],
        lastName: lastNames[index],
        isActive: firstNames[index].length < 5,
      });
    }
    initialUsers = [...temp];
  });
</script>

<h1>There are {totalUsers} users</h1>
<ul>
  {#each initialUsers as user, index (user.firstName)}
    <UserItem
      {user}
      {index}
      isOnlyItem={initialUsers.length === 1}
      on:delete={({ detail }) => deleteUser(detail.index)}
    />
  {/each}
</ul>
