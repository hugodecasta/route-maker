<template>
  <div class="mapdisplay" v-if="this.map.getPosition">
    <h1>Map Display</h1>
    <div
      v-for="(elm, index) in styledData"
      :class="elm.classe"
      :style="elm.style"
      :key="index"
    ></div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex"
export default {
  data: () => ({
    mykey: 10,
  }),
  computed: {
    ...mapGetters(["displayData"]),
    ...mapState(["map"]),
    styledData() {
      const dat = this.mykey
      return this.displayData.map((elm) => {
        const classe = elm.type
        const xypos = this.map.getPosition(elm.point)
        const style = {
          left: xypos.x + "px",
          top: xypos.y + "px",
          background: elm.color,
        }
        return { classe, style }
      })
    },
  },
  mounted() {
    setInterval(() => {
      this.$set(this, "mykey", Math.random())
    }, 1)
  },
}
</script>

<style>
.mapdisplay {
  position: fixed;
  left: 0px;
  height: 0px;
  z-index: 5;
}

.point {
  position: absolute;
  width: 10px;
  height: 10px;
  transform: translate(-50%, -50%) rotate(45deg);
}
</style>
