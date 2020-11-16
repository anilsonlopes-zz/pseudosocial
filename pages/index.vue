<template>
  <section class="flex min-h-screen">
    <div class="sidebar transition fixed bg-grey-light text-grey-light w-full max-w-xs min-h-screen z-20 shadow-lg overflow-x-hidden overflow-y-scroll scroll max-h-inner-screen" :style="styleSidebar" aria-label="Lista de amigos">
      <div class="p-2">
        <c-search-friend />
      </div>
      <div class="pr-2">
        <c-list-friends :downloading="downloading" />
      </div>
    </div>
    <div class="w-full bg-grey">
      <c-talk />
    </div>
  </section>
</template>

<style scoped>
.sidebar {
  box-shadow: 0 0 0 1100px rgba(96, 111, 123, 0.729);
}
</style>

<script>
import { mapGetters } from 'vuex'

export default {
  head: {
    title: 'Conversas'
  },
  components: {
    CSearchFriend: () => import('@/components/CSearchFriend'),
    CListFriends: () => import('@/components/CListFriends'),
    CTalk: () => import('@/components/CTalk')
  },
  data: () => ({
    downloading: false
  }),
  computed: {
    ...mapGetters({
      'styleSidebar': 'users/styleSidebar'
    })
  },
  mounted() {
    this.fetchFriends()
  },
  methods: {
    async fetchFriends() {
      this.downloading = true
      await this.$store.dispatch('users/friends')
      this.downloading = false
    }
  }
}
</script>
