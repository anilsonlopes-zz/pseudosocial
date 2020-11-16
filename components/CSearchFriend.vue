<template>
  <div>
    <div v-if="user" class="flex justify-between items-center">
      <div class="flex">
        <button type="button" class="flex items-center text-grey-darker px-4 focus:outline-none focus:text-red transition" title="Fechar" @click="close">
          <i class="fa fa-bars" />
        </button>
        <div class="animated fadeInDown faster flex items-center px-2 py-3 rounded-r select-none no-underline">
          <c-bg-image class="w-10 h-10 rounded-full" :src="user.photoURL" :label="user.username" />
          <div class="flex flex-col ml-5">
            <div class="font-bold text-grey-darker text-sm mb-1" aria-label="Nome do usuário">
              {{ user.displayName }}
            </div>
            <div class="text-xs text-grey-dark" aria-label="Nome legal">
              @{{ user.username }}
            </div>
          </div>
        </div>
      </div>
      <button type="button" class="flex items-center text-grey-darker px-4 focus:outline-none focus:text-red transition" title="Desconectar" @click="logout">
        <i class="fa fa-sign-out" />
      </button>
    </div>
    <div class="relative mt-5">
      <button type="button" class="absolute pin-l pin-t pin-b flex items-center text-black px-4 focus:outline-none focus:text-green transition" title="Buscar">
        <i class="fa fa-search" />
      </button>
      <input v-model="search" placeholder="Encontrar alguém" type="search" class="w-full pl-10 pr-4 py-2 h-10 text-sm text-grey-dark rounded shadow focus:shadow-lg transition focus:outline-none" spellcheck="false">
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CBgImage from '@/components/CBgImage'

export default {
  components: { CBgImage },
  data: () => ({
    search: ''
  }),
  computed: {
    ...mapGetters({
      'user': 'users/auth'
    })
  },
  watch: {
    search(text, old) {
      this.$store.commit('users/search', text)
    }
  },
  methods: {
    logout() {
      if (window.confirm('Deseja desconectar?')) {
        this.$store.dispatch('users/logout').then(() => {
          this.$store.commit('users/notification', { type: 'info', message: 'Desconectado!? Ver se não esquece a senha.', duration: 5 })
          this.$router.push('/login')
        })
      }
    },
    close() {
      this.$store.commit('users/styleSidebar', { transform: 'translateX(-1000px)' })
    }
  }
}
</script>
