<template>
  <div id="container">
    <div id="preview" class="container">
      <device1View></device1View>
      <device2View></device2View>
      <device3View></device3View>
    </div>
    <div id="Setting">
      <device1Setting></device1Setting>
      <device2Setting></device2Setting>
      <device3Setting></device3Setting>
    </div>
  </div>
</template>

<script>
import device1View from './device1View'
import device2View from './device2View'
import device3View from './device3View'
import device1Setting from './device1Setting'
import device2Setting from './device2Setting'
import device3Setting from './device3Setting'

export default {
  components: {
    device1View,
    device2View,
    device3View,
    device1Setting,
    device2Setting,
    device3Setting
  }
}
</script>