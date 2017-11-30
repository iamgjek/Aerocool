<template>
  <div id="container" class="row">
    <div id="sidebar">
      <div class="row">
        <div class="leftContralBar">
          <ul>
            <li><i class="icon icon-search"></i></li>
            <li><i class="icon icon-add"></i></li>
            <li><i class="icon icon-copy"></i></li>
            <li><i class="icon icon-IE"></i></li>
            <li><i class="icon icon-edit"></i></li>
            <li><i class="icon icon-delete"></i></li>
          </ul>
        </div>
        <div>
          <div id="profile" class="row">
            <div id="profileSelect" class="col-md-6">
              <img src="../assets/images/ThunderX3_Loading-1.gif" class="img-fluid">
              <p class="d-flex justify-content-center align-items-center">ThunderX3 Profile A</p>
            </div>
            <div id="profileList" class="col-md-6">
              <ul>
                <li><img src="../assets/images/profile-image.png" class="img-fluid"><p class="d-flex justify-content-center align-items-center"><span class="font-size-xs text-center">ThunderX3 Profile B</span></p></li>
                <li><img src="../assets/images/profile-image.png" class="img-fluid"><p class="d-flex justify-content-center align-items-center"><span class="font-size-xs text-center">ThunderX3 Profile C</span></p></li>
                <li><img src="../assets/images/profile-image.png" class="img-fluid"><p class="d-flex justify-content-center align-items-center"><span class="font-size-xs text-center">Profile D</span></p></li>
                <li><h1 class="d-flex justify-content-center align-items-center">+</h1></li>
              </ul>
            </div>
          </div>
          <div id="device" class="row">
            <div class="slider multiple-items">
              <div class="device-slick" :class="{'active': list.active}" v-for="(list, index) in lists" :key="list.id" @click="showDevice(list.id)">
                <p class="d-flex justify-content-center align-items-center icon" :class="list.label">{{list.label}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div id="presets">
          <device0Presets></device0Presets>
          <device1Presets></device1Presets>
          <device2Presets></device2Presets>
          <device3Presets></device3Presets>
        </div>
      </div>
    </div>
    <div id="graphicBackground">
      <div id="topButton" class="row">
        <ul class="col-md-6">
          <li><a :href="officialWebsite" target="_blank" class="official"></a></li>
        </ul>
        <ol class="col-md-6 text-right pr-2">
          <li><i class="icon icon-login"></i></li>
          <li><i class="icon icon-call"></i></li>
          <li><i class="icon icon-facebook"></i></li>
          <li><i class="icon icon-twitter"></i></li>
          <li></li>
          <li><i class="icon icon-minimize"></i></li>
          <li><i class="icon icon-close"></i></li>
        </ol>
      </div>
      <div id="preview">
        <device0View></device0View>
        <device1View></device1View>
        <device2View></device2View>
        <device3View></device3View>
      </div>
      <div id="setting">
        <device0Setting></device0Setting>
        <device1Setting></device1Setting>
        <device2Setting></device2Setting>
        <device3Setting></device3Setting>
      </div>
    </div>
  </div>
</template>

<script>
import device0Presets from "./device0/Presets";
import device1Presets from "./device1/Presets";
import device2Presets from "./device2/Presets";
import device0View from "./device0/View";
import device1View from "./device1/View";
import device2View from "./device2/View";
import device0Setting from "./device0/Setting";
import device1Setting from "./device1/Setting";
import device2Setting from "./device2/Setting";
import device3Presets from './device3/Presets'
import device3View from './device3/View'
import device3Setting from './device3/Setting'

export default {
  name: "container",
  components: {
    device0Presets,
    device1Presets,
    device2Presets,
    device3Presets,
    device0View,
    device1View,
    device2View,
    device3View,
    device0Setting,
    device1Setting,
    device2Setting,
    device3Setting
  },
  data() {
    return {
      activeIndex: 0,
      officialWebsite: "http://google.com",
      lists: [
        { id: "0", label: "KEYBOARD", active: true },
        { id: "1", label: "MOUSE", active: false },
        { id: "2", label: "HEADSET", active: false },
        { id: "3", label: "mouse", active: false }
      ]
    };
  },
  methods: {
    showDevice(index) {
      this.lists.forEach(function(val, key) {
        val.active = false;
      });
      this.lists[index].active = true;
      this.activeIndex = index;
      $(".device").addClass("d-none");
      $(".device" + index).removeClass("d-none");
    }
  },
  mounted: function() {
    $(".multiple-items").slick({
      infinite: false,
      dots: false,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1
    });
  }
};
</script>