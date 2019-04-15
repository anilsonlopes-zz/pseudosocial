<template>
  <section class="flex min-h-screen">
    <div class="bg-grey-light text-grey-light w-full max-w-xs min-h-screen z-10 overflow-x-hidden overflow-y-scroll scroll max-h-inner-screen" aria-label="Lista de amigos">
      <div class="p-2">
        <c-search-friend />
      </div>
      <div class="pr-2">
        <c-list-friends />
      </div>
    </div>
    <div class="w-full bg-grey">
      <c-talk />
    </div>
  </section>
</template>

<script>
export default {
  head: {
    title: 'Conversas'
  },
  components: {
    CSearchFriend: () => import('@/components/CSearchFriend'),
    CListFriends: () => import('@/components/CListFriends'),
    CTalk: () => import('@/components/CTalk')
  },
  mounted() {
    this.$store.dispatch('users/friends')
  }
}
</script>
