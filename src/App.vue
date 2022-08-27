<template>
  <v-app>
    <div class="app">
      <map-viewer />
      <map-display />
      <ui-controls />
    </div>
  </v-app>
</template>

<script>
import MapDisplay from "./components/map-display.vue"
import MapViewer from "./components/map-viewer.vue"
import UiControls from "./components/ui-controls.vue"
export default {
  components: { MapViewer, UiControls, MapDisplay },
}
</script>

<style>
html,
body,
.app {
  width: 100%;
  height: 100%;
  min-height: 100%;
}
</style>
