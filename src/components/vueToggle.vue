<template id="vueToggle">
  <span class="fa toggle" v-bind:class="{'fa-toggle-on': toggled, 'fa-toggle-off': !toggled, 'text-success': toggled, 'text-muted': !toggled}" @click="toggled = !toggled"></span> <span class="toggle-label" v-show="label">{{ label }}</span>
</template>

<script>
export default {
  name: 'vueToggle',
  data () {
    return {
      toggled_1: 1
    }
    // props: ['toggled','label']
  }
}
</script>