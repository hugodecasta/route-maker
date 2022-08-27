<template>
  <div class="uicontrols">
    <v-card class="pa-2 ma-3">
      <v-btn
        v-for="mode in global.availableModes"
        elevation="0"
        :key="mode"
        :color="mode == currentMode ? 'primary' : ''"
        :text="currentMode != mode"
        @click="global.mode = mode"
      >
        {{ mode }}</v-btn
      >
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex"
import Editor from "../modes/editor.vue"
export default {
  components: { Editor },
  methods: {
    pointClick(point) {
      console.log("selected point", point)
      this.global.path.push(point)
    },
  },
  computed: {
    ...mapState(["map"]),
    ...mapState(["global"]),
    modes() {
      return this.global.availableModes
    },
    currentMode() {
      return this.global.mode
    },
  },
  mounted() {
    setTimeout(() => {
      this.$set(this.map, "click", (point) => this.pointClick.call(this, point))
    }, 1)
  },
}
</script>

<style>
.uicontrols {
  position: fixed;
  left: 0px;
  height: 0px;
  z-index: 10;
}
</style>
