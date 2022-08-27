<template>
  <div class="full">
    <map-viewer @click="point($event)" :dataPoints="dataPoints"></map-viewer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MapViewer from './components/map-viewer.vue';
import {computeRoute} from './plugins/geodes';

export default Vue.extend({
  name: 'App',

  components: {
    MapViewer,
  },

  data: () => ({
    points: [],
  }),

  computed: {
    dataPoints() {
      return this.points.map((point) => ({
        point,
        type: 'point',
        color: '#00f',
      }));
    },
  },

  methods: {
    point(point: never) {
      this.points.push(point);
      if (this.points.length == 2) {
        const allPoints = computeRoute(this.points[0], this.points[1]);
        this.points.push(...allPoints.map((p) => p.point));
      }
    },
  },
});
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  min-height: 100%;
}
.full {
  width: 100%;
  height: 100%;
}
</style>
