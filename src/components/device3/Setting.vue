<template>
  <div id="device3Setting" class="device device3 col-md-9 d-none">
    <section id="device3Setting1" class="setting setting1">
      <h1>{{ msg + ' 3-1' }}</h1>
      <h2>Essential Links</h2>
    </section>
    <section id="device3Setting2" class="setting setting2 d-none">
      <h1>{{ msg + ' 3-2' }}</h1>
      <h2>Essential Links</h2>
    </section>
    <section id="device3Setting3" class="setting setting3 d-none">
      <h1>{{ msg + ' 3-3' }}</h1>
      <h2>Essential Links</h2>
    </section>
  </div>
</template>

<script>

export default {
  data () {
    return {
      msg: 'device3Setting'
    }
  }
}
</script>