<template>
  <div id="device2Setting" class="device device2 col-md-9 d-none">
    <section id="device2Setting1" class="setting setting1">
      <h1>{{ msg + ' 2-1' }}</h1>
      <h2>Essential Links</h2>
    </section>
    <section id="device2Setting2" class="setting setting2 d-none">
      <h1>{{ msg + ' 2-2' }}</h1>
      <h2>Essential Links</h2>
    </section>
    <section id="device2Setting3" class="setting setting3 d-none">
      <h1>{{ msg + ' 2-3' }}</h1>
      <h2>Essential Links</h2>
    </section>
  </div>
</template>

<script>

export default {
  data () {
    return {
      msg: 'device2Setting'
    }
  }
}
</script>