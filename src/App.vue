<template>
  <div id="app" class="row">
    <sidebar></sidebar>
    <container></container>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import Container from './components/Container'

export default {
  name: 'app',
  components: {
    Sidebar,
    Container
  }
}
</script>
