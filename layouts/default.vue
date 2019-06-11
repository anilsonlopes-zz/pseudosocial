<template>
  <div class="bg-white">
    <nuxt />
    <div class="fixed pin-r pin-b z-50 px-4 flex flex-col items-end">
      <c-notification
        v-for="(notification, index) in notifications"
        :key="index"
        :notification="notification"
        :duration="2"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CNotification from '~/components/CNotification'

export default {
  components: { CNotification },
  computed: {
    ...mapGetters({
      'notifications': 'users/notifications'
    })
  }
}
</script>
