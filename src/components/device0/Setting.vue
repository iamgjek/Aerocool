<template>
  <div id="device0Setting" class="device device0">
    <section id="device0Setting1" class="setting setting0">
      <h1>{{ msg + ' 0-1' }}</h1>
      <h2>Essential Links</h2>
    </section>
    <section id="device0Setting2" class="setting setting1 d-none">
      <button class="bnt btn-primary" id="anim-linear">linear</button>
      <button class="bnt btn-primary" id="anim-fadein">fadein</button>
    </section>
    <section id="device0Setting3" class="setting setting2 d-none">
      <h1>{{ msg + ' 0-3' }}</h1>
      <h2>Essential Links</h2>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "device0Setting"
    };
  },
  mounted: function() {
    $("#anim-linear").click(function() {
      // $("#device0View .mask-block").removeClass("anim-fadein");
      $("#device0View .mask-block").toggleClass("animation anim-linear animation-repeat-0");
    });
    $("#anim-fadein").click(function() {
      // $("#device0View .mask-block").removeClass("anim-linear");
      $("#device0View .mask-block").toggleClass("animation anim-fadein");
    });
  }
};
</script>