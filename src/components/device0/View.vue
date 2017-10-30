<template>
  <div id="device0View" class="device device0 row">
    <section id="device1Setting1" class="setting setting0">
      <!-- <h1>{{ msg + ' 0-1' }}</h1> -->
      <!-- <h2>Essential Links</h2> -->
      <img src="../../assets/images/keyboard.png" class="img-fluid">
    </section>
    <section id="device1Setting2" class="setting setting1 d-none">
      <h1>{{ msg + ' 0-2' }}</h1>
      <h2>Essential Links</h2>
    </section>
    <section id="device1Setting3" class="setting setting2 d-none">
      <h1>{{ msg + ' 0-3' }}</h1>
      <h2>Essential Links</h2>
    </section>
  </div>
</template>

<script>

export default {
  data () {
    return {
      msg: 'Keyboard'
    }
  }
}
</script>