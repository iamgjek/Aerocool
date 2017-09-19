<template>
  <div id="sidebar">
    <div class="row">
      <div class="col-md-1">
        <p>M</p>
      </div>
      <div id="profile" class="col-md-10 row">
        <div class="col-md-6">
          <img src="../assets/logo.png" class="img-thumbnail">
          <p>Profile A</p>
        </div>
        <div class="col-md-6">
          <ul>
            <li><img src="../assets/logo.png" class="img-thumbnail"><p>Profile B</p></li>
            <li><img src="../assets/logo.png" class="img-thumbnail"><p>Profile C</p></li>
            <li><img src="../assets/logo.png" class="img-thumbnail"><p>Profile D</p></li>
            <li>+</li>
          </ul>
        </div>
        <div id="deviceSelection" class="row">
          <ul>
            <li @click="showDevice(1)"><img src="../assets/logo.png" class="img-fluid"><p>device 1</p></li>
            <li @click="showDevice(2)"><img src="../assets/logo.png" class="img-fluid"><p>device 2</p></li>
            <li @click="showDevice(3)"><img src="../assets/logo.png" class="img-fluid"><p>device 3</p></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-1">
        <p>M</p>
      </div>
      <device1Presets></device1Presets>
      <device2Presets></device2Presets>
      <device3Presets></device3Presets>
    </div>
  </div>
</template>

<script>
import device1Presets from './device1Presets'
import device2Presets from './device2Presets'
import device3Presets from './device3Presets'

export default {
  components: {
    device1Presets,
    device2Presets,
    device3Presets
  },
  methods: {
    showDevice(num) {
      $('.device').addClass('d-none')
      $('.device'+num).removeClass('d-none')
    }
  }
}
</script>