<template>
  <div id="sidebar">
    <div class="row">
      <div class="col-md-1">
        <p>M</p>
      </div>
      <div id="profile" class="col-md-10 row">
        <div class="col-md-6">
          <img src="../assets/logo.png" class="img-thumbnail">
          <p>Profile A</p>
        </div>
        <div class="col-md-6">
          <ul>
            <li><img src="../assets/logo.png" class="img-thumbnail"><p>Profile B</p></li>
            <li><img src="../assets/logo.png" class="img-thumbnail"><p>Profile C</p></li>
            <li><img src="../assets/logo.png" class="img-thumbnail"><p>Profile D</p></li>
            <li>+</li>
          </ul>
        </div>
        <div id="deviceSelection" class="row">
          <ul>
            <li @click="showDevice(1,3)"><img src="../assets/logo.png" class="img-fluid"><p>Profile B</p></li>
            <li @click="showDevice(2,3)"><img src="../assets/logo.png" class="img-fluid"><p>Profile B</p></li>
            <li @click="showDevice(3,3)"><img src="../assets/logo.png" class="img-fluid"><p>Profile B</p></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showDevice(num, total) {
      for (var i=1; i<=total; i++) {
        $('#device'+i).addClass('d-none')
      }
      $('#device'+num).removeClass('d-none')
    }
  }
}
</script>