<template>
  <div class="block flex w-full h-full">
    <div class="m-auto text-center">
      <div class="m-auto rounded-full w-32 h-32 bg-gray-400 overflow-hidden">
        <img :src="currentUser.pic" />
      </div>
      <div class="mt-4 mb-4 text-3xl text-white">{{ currentUser.display_name }}</div>
      <form @submit.prevent="submit" class="text-white text-2xl bg-white bg-opacity-50 rounded flex">
        <input type="password" placeholder="Password" v-model="password" @keypress="resetMessage" class="p-2 focus:outline-none bg-transparent flex-grow text-center" />
      </form>
      <div class="mt-2 text-white">{{ loginMessage }}</div>
    </div>
    <div class="absolute m-16 top-0 lef-0 w-1/5">
      <div v-for="(user, key) in userList" :key="key" class="bg-black bg-opacity-50 p-4 mb-2 flex">
        <div class="rounded-full w-16 h-16 bg-gray-400 overflow-hidden">
          <img src="" />
        </div>
        <div class="text-white pl-4 text-right flex-grow">
          <div class="text-xl">{{ user.display_name }}</div>
          <div>{{ user.username }}</div>
        </div>
      </div>
    </div>
    <div class="text-white absolute p-4 bg-black rounded w-1/5 text-right bg-opacity-50 bottom-0 m-16">
      <div class="text-5xl">{{ time }}</div>
      <div class="text-lg">{{ date }}</div>
    </div>
    <div class="absolute bottom-0 mb-16 w-full flex">
      <div class="mr-auto ml-auto">
        <div class="text-white text-lg">{{ currentSession.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'Login',
  data: () => ({
    now: moment(),
    timeInterval: null,
    profilePic: '',
    currentUser: {},
    loginMessage: 'Press Enter to Login',
    logging: false,
    password: '',
    currentSession: null
  }),
  mounted () {
    this.currentUser = lightdm.users[0]
    this.currentSession = lightdm.sessions.filter((session) => {
      return lightdm.default_session === session.key
    })[0]
    this.timeInterval = setInterval(() => {
      this.now = moment()
    }, 500)
  },
  computed: {
    time: function () {
      return this.now.format('LTS')
    },
    date: function () {
      return this.now.format('dddd, MMMM D, YYYY')
    },
    userList: function () {
      return lightdm.users.map((user) => {
        user.current = user.username === this.currentUser.username

        return user
      })
    },
    sessions: function () {
      return lightdm.sessions
    }
  },
  methods: {
    submit: function () {
      this.logging = true
    },
    resetMessage: function () {
    }
  }
}
</script>

<style scoped>

</style>
