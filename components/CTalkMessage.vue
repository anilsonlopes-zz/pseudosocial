<template>
  <div class="mb-2" :class="classes('wrapper')">
    <div class="rounded text-sm px-4 py-2 break-words" :class="classes('canvas')">
      {{ message.body }}
    </div>
    <div class="text-grey-dark text-xxs pt-1 select-none">
      {{ new Date(message.timestamp).toLocaleString() }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    message: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      'userAuth': 'users/auth'
    })
  },
  methods: {
    classes(target) {
      const classes = {
        sent: {
          wrapper: 'self-end',
          canvas: 'bg-grey-darker text-grey-light'
        },
        received: {
          wrapper: 'self-start',
          canvas: 'bg-grey-light text-grey-darker'
        }
      }
      const sent = this.message.sent === this.userAuth.uid
      const received = this.message.received === this.userAuth.uid
      return sent ? classes.sent[target] : received ? classes.received[target] : ''
    }
  }
}
</script>
