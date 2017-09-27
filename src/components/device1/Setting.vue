<template>
  <div id="device1Setting" class="device device1">
    <section id="device1Setting1" class="setting setting1">
      <h1>{{ msg + ' 1-1' }}</h1>
      <h2>Essential Links</h2>
    </section>
    <section id="device1Setting2" class="setting setting2 d-none">
      <h1>{{ msg + ' 1-2' }}</h1>
      <h2>Essential Links</h2>
    </section>
    <section id="device1Setting3" class="setting setting3 d-none">
      <h1>{{ msg + ' 1-3' }}</h1>
      <h2>Essential Links</h2>
    </section>
  </div>
</template>

<script>

export default {
  data () {
    return {
      msg: 'device1Setting'
    }
  }
}
</script>