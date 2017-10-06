<template>
  <div id="device0Setting" class="device device0">
    <section id="device0Setting1" class="setting setting1">
      <h1>{{ msg + ' 0-1' }}</h1>
      <h2>Essential Links</h2>
    </section>
    <section id="device0Setting2" class="setting setting2 d-none">
      <h1>{{ msg + ' 0-2' }}</h1>
      <h2>Essential Links</h2>
    </section>
    <section id="device0Setting3" class="setting setting3 d-none">
      <h1>{{ msg + ' 0-3' }}</h1>
      <h2>Essential Links</h2>
    </section>
  </div>
</template>

<script>

export default {
  data () {
    return {
      msg: 'device0Setting'
    }
  }
}
</script>