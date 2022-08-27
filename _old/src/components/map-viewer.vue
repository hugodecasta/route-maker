<template>
  <div class="area_map">
    <div class="points">
      <div
        class="point"
        v-for="(point, index) in dataPoints"
        :key="index"
        :style="area_style(point)"
      >
        <div class="pointView"></div>
      </div>
    </div>
    <l-map
      class="map"
      ref="map"
      @click="click"
      :zoom="11"
      :center="[47.4633793993578, -2.9058837890625]"
      @update:bounds="moved"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        class="tt"
      >
      </l-tile-layer>
    </l-map>
  </div>
</template>

<script>
import {LMap, LTileLayer} from 'vue2-leaflet';
import {loc2pix} from '../plugins/geodes';
export default {
  components: {LMap, LTileLayer},
  props: {
    dataPoints: Array,
  },
  data: () => ({
    bounds: {
      _southWest: {
        lat: 47.2452118854519,
        lng: -3.433914184570313,
      },
      _northEast: {
        lat: 47.68018294648414,
        lng: -2.3764801025390625,
      },
    },
  }),
  methods: {
    click(e) {
      this.$emit('click', e.latlng);
    },
    moved(bounds) {
      console.log('moved');
      this.bounds = bounds;
      console.log(bounds);
    },
    node_pos(point) {
      return loc2pix(this.bounds, point.point);
    },
    area_style(point) {
      console.log('PP', point);
      const data = this.$refs.map?.mapObject?.latLngToContainerPoint(
        point.point,
      );
      console.log('PT', data);
      let place = this.node_pos(point);
      console.log(place);
      return {
        left: data?.x - 15 + 'px',
        top: data?.y - 15 + 'px',
      };
    },
  },
};
</script>

<style>
.leaflet-grab {
  cursor: default !important;
}
.leaflet-control-container {
  display: none;
}
.area_map {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
}
/* .area_map.disabled {
    filter: saturate(50%);
    opacity: 0.5;
} */
.area_map.disabled .map {
  pointer-events: none;
}
.leaflet-pane {
  z-index: 0 !important;
}

.points {
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 10;
}
.point {
  position: fixed;
}
.pointView {
  width: 30px;
  height: 30px;
  opacity: 1;
  border-radius: 50%;
  background: #fff;
}
</style>
