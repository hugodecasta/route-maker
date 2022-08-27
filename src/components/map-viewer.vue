<template>
  <div class="area_map">
    <l-map
      class="map"
      ref="map"
      @click="click"
      :zoom="12"
      :center="[48.33311839423551, -4.384384458870503]"
      @update:bounds="moved"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        class="tt"
      >
      </l-tile-layer>
      <l-tile-layer
        url="https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png"
        attribution='&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        class="tt"
        :opacity="1"
      >
      </l-tile-layer>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer } from "vue2-leaflet"
import { mapGetters, mapState } from "vuex"
export default {
  components: { LMap, LTileLayer },
  data: () => ({
    bounds: {
      _southWest: {
        lat: 48.23166359704231,
        lng: -4.71235290448407,
      },
      _northEast: {
        lat: 48.44550159764089,
        lng: -4.19874206464032,
      },
    },
  }),
  computed: {
    uiMap() {
      return this.$refs.map?.mapObject
    },
    ...mapState(["map"]),
  },
  methods: {
    click(e) {
      this.map.click(e.latlng)
    },
    moved(bounds) {
      this.bounds = bounds
    },
  },
  mounted() {
    setTimeout(() => {
      this.$set(this.map, "getPosition", (point) =>
        this.uiMap?.latLngToContainerPoint.call(this.uiMap, point)
      )
    }, 1)
  },
}
</script>

<style>
.area_map {
  position: fixed;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
}
.leaflet-grab {
  cursor: default !important;
}
.leaflet-control-container {
  display: none;
}
.area_map.disabled .map {
  pointer-events: none;
}
.leaflet-pane {
  z-index: 0 !important;
}
</style>
