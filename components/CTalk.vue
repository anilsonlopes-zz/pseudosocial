<template>
  <div v-if="user" class="relative min-h-screen">
    <div class="absolute pin-t pin-r pin-l z-10 p-2 shadow flex justify-between items-center bg-grey-dark animated fadeInUp faster" aria-label="Menu da conversa atual">
      <div class="flex items-center" aria-label="Dados do usuário da conversa">
        <div class="bg-cover rounded w-10 h-10" :style="{ backgroundImage: `url(${user.photoURL})` }" aria-label="Foto do usuário" />
        <div class="flex flex-col ml-2">
          <div class="font-bold text-sm text-white mb-1" aria-label="Nome do usuário">
            {{ user.displayName || user.username }}
          </div>
          <div class="text-xs text-white select-none" aria-label="Nome legal">
            @{{ user.username }}
          </div>
        </div>
      </div>
      <div class="flex">
        <button class="text-grey-light text-lg p-2 mx-4 opacity-75 focus:outline-none" @click="closeUser(null)">
          <i class="fa fa-times" />
        </button>
      </div>
    </div>
    <div class="absolute pin-r pin-l flex flex-col-reverse py-16 pl-4 pr-1 max-h-screen min-h-screen text-grey overflow-x-hidden overflow-y-scroll scroll bg-cover" aria-label="Bate-papo">
      <c-talk-message
        v-for="message in talk"
        :key="message.id"
        class="animated fadeInUp faster max-w-md"
        :message="message"
      />
      <div class="py-8 mb-2 flex-1" />
    </div>
    <div class="absolute pin-r pin-b pin-l p-4 z-10">
      <form class="relative" @submit="messageHandle">
        <input v-model="message" type="text" class="w-full rounded p-4 pr-12 text-sm text-grey-dark shadow transition focus:outline-none" placeholder="Digitar a mensagem...">
        <transition enter-active-class="animated faster fadeIn" leave-active-class="animated faster fadeOut">
          <button v-show="message.length" class="absolute pin-r pin-t w-10 h-10 mt-1 mr-1 p-2 bg-grey-darkest text-xs text-white rounded focus:outline-none">
            <i class="fa fa-paper-plane pointer-events-none" />
          </button>
        </transition>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import CTalkMessage from '@/components/CTalkMessage'

export default {
  components: { CTalkMessage },
  data: () => ({
    message: ''
  }),
  computed: {
    ...mapGetters({
      'user': 'users/opened',
      'talk': 'users/talk'
    })
  },
  methods: {
    ...mapMutations({
      'closeUser': 'users/opened'
    }),
    messageHandle() {
      event.preventDefault()
      if (this.message.length) {
        this.$store.dispatch('users/sendMessage', this.message)
        this.message = ''
      }
    }
  }
}
</script>
