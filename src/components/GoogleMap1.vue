<template>
  <div>
    <div>
      <h3>---------밑은 GoogleMap1.vue 컴포넌트 임--</h3>
      <h2>Search and add a pin</h2>
      <GmapAutocomplete  @place_changed='setPlace' />
      <button  @click='addMarker' >  더하기   </button>
    </div>
    <br>

    <GmapMap class="mt-1"
             ref="gmap"
       :options="{
         zoomControl: true,
         mapTypeControl: false,
         scaleControl: false,
         streetViewControl: false,  //거리를 사람입장에서 보기 옵션
         rotateControl: true,
         fullscreenControl: false,
         disableDefaultUi: false
       }"
        :center='center'
        :zoom='12'
        style='width:800px;  height: 500px;'
    >
      <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          @click="center=m.position"
      />
    </GmapMap>
  </div>
</template>

<script>
// eslint-disable-next-line
import {InfoWindow} from "vue2-google-maps";

export default {
  name: 'GoogleMap1',
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
      currentPlace: null,
      markers: [],
      places: [],
    }
  },
  mounted() {
    this.geolocate();
  },
  methods: {
//     if(options.installComponents){
//       Vue.component('GmapInfoWindow', InfoWindow)
// }

    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = { //위도, 경도 가진 값.
          lat : this.currentPlace.geometry.location.lat(),
          lng : this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
  },
};
</script>