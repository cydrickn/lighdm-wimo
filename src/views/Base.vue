<template>
  <div id="app" class="bg-blue-800 h-screen w-screen">
    <div class="absolute top-0 right-0 w-scree h-screen overflow-hidden">
    </div>
    <div class="absolute w-full h-full">
      <transition name="fade">
        <router-view/>
      </transition>
    </div>
    <div class="absolute w-full p-12 text-right">
      <button class="rounded-full h-12 w-12 bg-gray-600 text-white focus:outline-none" @click="nextBackground">
        <fa :icon="['fas', 'arrow-right']"/>
      </button>
    </div>
    <div class="absolute bottom-0 w-full p-12 text-right">
      <button class="text-white focus:outline-none">
        <fa :icon="['fas', 'power-off']" size="lg"/>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    currentBackgroundIndex: -1,
    backgroundList: [],
    width: 0,
    height: 0
  }),
  mounted () {
    this.width = window.innerWidth
    this.height = window.innerHeight

    window.addEventListener('resize', () => {
      this.width = window.innerWidth
      this.height = window.innerHeight
    })

    this.getList()
  },
  computed: {
  },
  methods: {
    getList: function () {
      window.theme_utils.dirlist()
    },
    nextBackground: function () {
      this.currentBackgroundIndex++
      if (this.currentBackgroundIndex >= this.backgroundList.length) {
        this.currentBackgroundIndex = 0
      }
    }
  }
}
</script>

<style>
</style>
