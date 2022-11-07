<script>
  export let user = null;
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
</li>

<style lang="scss">
  .user-item {
    display: flex;
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
