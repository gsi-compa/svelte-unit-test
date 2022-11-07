<script>
  import UserItem from "./UserItem.svelte";
  export let initialUsers = [
    {
      firstName: "José Gabriel",
      lastName: "Companioni",
      isActive: true,
    },
  ];
</script>

<ul>
  {#each initialUsers as user, index}
    <UserItem {user} />
  {/each}
</ul>
