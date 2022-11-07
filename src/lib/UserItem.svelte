<script>
  import { createEventDispatcher } from "svelte";
  export let isOnlyItem;
  export let user = null;
  export let index;

  const dispatch = createEventDispatcher();
</script>

<li class="user-item">
  <div
    class={user.isActive
      ? "user-item__active-indicator is-active"
      : "user-item__active-indicator"}
  />
  <p class="user-item__text">
    {user.firstName}
    {user.lastName}
  </p>
  <div class="user-item__buttons-container">
    <button
      disabled={isOnlyItem}
      class="user-items__buttons-container--action-button"
      on:click={() => dispatch("delete", { index })}
    >
      Delete
    </button>
  </div>
</li>

<style lang="scss">
  .user-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__active-indicator {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: red;
      margin-right: 5px;
      &.is-active {
        background-color: green;
      }
    }
  }
</style>
