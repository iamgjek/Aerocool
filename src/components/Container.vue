<template>
  <div id="container">
    <div id="preview">
      <device1></device1>
      <device2></device2>
      <device3></device3>
    </div>
    <div id="setting">
      
    </div>
  </div>
</template>

<script>
import Device1 from './Device1'
import Device2 from './Device2'
import Device3 from './Device3'

export default {
  components: {
    Device1,
    Device2,
    Device3
  }
}
</script>