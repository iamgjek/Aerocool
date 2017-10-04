<template>
  <div id="container" class="row">
    <div id="sidebar">
      <div class="row">
        <div class="leftContralBar">
          <p>M</p>
        </div>
        <div>
          <div id="profile" class="row">
            <div id="profileSelect" class="col-md-6">
              <img src="../assets/logo.png" class="img-fluid">
              <p>ThunderX3 Profile A</p>
            </div>
            <div class="col-md-6">
              <ul>
                <li><img src="../assets/logo.png" class="img-fluid"><p>Profile B</p></li>
                <li><img src="../assets/logo.png" class="img-fluid"><p>Profile C</p></li>
                <li><img src="../assets/logo.png" class="img-fluid"><p>Profile D</p></li>
                <li>+</li>
              </ul>
            </div>
          </div>
          <div id="device" class="row">
            <ul>
              <li @click="showDevice(1)"><img src="../assets/logo.png" class="img-fluid"><p>device 1</p></li>
              <li @click="showDevice(2)"><img src="../assets/logo.png" class="img-fluid"><p>device 2</p></li>
              <li @click="showDevice(3)"><img src="../assets/logo.png" class="img-fluid"><p>device 3</p></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="leftContralBar">
          <p>M</p>
        </div>
        <div id="presets">
          <device1Presets></device1Presets>
          <device2Presets></device2Presets>
          <device3Presets></device3Presets>
        </div>
      </div>
    </div>
    <div id="graphicBackground">
      <div id="topButton"></div>
      <div id="preview">
        <device1View></device1View>
        <device2View></device2View>
        <device3View></device3View>
      </div>
      <div id="setting">
        <device1Setting></device1Setting>
        <device2Setting></device2Setting>
        <device3Setting></device3Setting>
      </div>
    </div>
  </div>
</template>

<script>
import device1Presets from './device1/Presets'
import device2Presets from './device2/Presets'
import device3Presets from './device3/Presets'
import device1View from './device1/View'
import device2View from './device2/View'
import device3View from './device3/View'
import device1Setting from './device1/Setting'
import device2Setting from './device2/Setting'
import device3Setting from './device3/Setting'

export default {
  name: 'container',
  components: {
    device1Presets,
    device2Presets,
    device3Presets,
    device1View,
    device2View,
    device3View,
    device1Setting,
    device2Setting,
    device3Setting
  },
  data() {
    return {
    }
  },
  methods: {
    showDevice(num) {
      $('.device').addClass('d-none')
      $('.device'+num).removeClass('d-none')
    }
  }
}
</script>