<template>
  <div class="relative">
    <div v-if="downloading" class="p-4 text-sm font-bold text-grey-darker">
      <i class="fa fa-spinner fa-spin" />
      <span>Baixando contatos...</span>
    </div>
    <div v-else-if="friends.length === 0" class="p-4 text-sm font-bold text-grey-darker">
      <i class="fa fa-times" />
      <span>Nada.</span>
    </div>
    <div
      v-for="friend in friends"
      :key="friend.uid"
      class="animated fadeIn faster flex items-center cursor-pointer px-2 py-3 rounded-r hover:shadow hover:bg-white transition select-none no-underline"
      aria-label="Amigo"
      @click="openUser(friend.uid)"
    >
      <c-bg-image class="w-10 h-10 rounded" :src="friend.photoURL" :label="friend.username" />
      <div class="flex flex-col ml-2">
        <div v-if="auth" class="font-bold text-grey-darker text-sm mb-1" aria-label="Nome do usuário">
          {{ friend.displayName || friend.username }}<span v-if="friend.uid == auth.uid" class="font-medium ml-2">(Você)</span>
        </div>
        <div class="text-xs text-grey-dark" aria-label="Nome legal">
          @{{ friend.username }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CBgImage from '@/components/CBgImage'

export default {
  components: { CBgImage },
  props: {
    downloading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters({
      'auth': 'users/auth',
      'friends': 'users/friends'
    })
  },
  methods: {
    openUser(uid) {
      this.$store.commit('users/styleSidebar', { transform: 'translateX(-1000px)' })
      this.$store.commit('users/opened', uid)
      this.$store.commit('users/talk')
    }
  }
}
</script>
