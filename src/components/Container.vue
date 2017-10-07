<template>
  <div id="container" class="row">
    <div id="sidebar">
      <div class="row">
        <div class="leftContralBar">
          <ul>
            <li><i class="fa fa-search"></i></li>
            <li><i class="fa fa-plus"></i></li>
            <li><i class="fa fa-clone"></i></li>
            <li><i class="fa fa-exchange"></i></li>
            <li><i class="fa fa-pencil-square-o"></i></li>
            <li><i class="fa fa-trash-o"></i></li>
          </ul>
        </div>
        <div>
          <div id="profile" class="row">
            <div id="profileSelect" class="col-md-6">
              <img src="../assets/images/logo.png" class="img-fluid">
              <p class="flex">ThunderX3 Profile A</p>
            </div>
            <div id="profileList" class="col-md-6">
              <ul>
                <li><img src="../assets/images/logo.png" class="img-fluid"><p class="flex">Profile B</p></li>
                <li><img src="../assets/images/logo.png" class="img-fluid"><p class="flex">Profile C</p></li>
                <li><img src="../assets/images/logo.png" class="img-fluid"><p class="flex">Profile D</p></li>
                <li><h1 class="flex">+</h1></li>
              </ul>
            </div>
          </div>
          <div id="device" class="">
            <div class="slider multiple-items">
              <div class="device-slick" :class="{'active': list.active}":key="list.id" v-for="list in lists" @click="showDevice(list.id)">
                <img :src="list.images" class="img-fluid"><p class="flex">{{list.label}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="leftContralBar">
          <ul>
            <li><i class="fa fa-search"></i></li>
            <li><i class="fa fa-plus"></i></li>
            <li><i class="fa fa-clone"></i></li>
            <li><i class="fa fa-download"></i></li>
            <li><i class="fa fa-pencil-square-o"></i></li>
            <li><i class="fa fa-trash-o"></i></li>
          </ul>
          <ol>
            <li class="fa fa-gear"></i></li>
            <li class="fa fa-gear"></i></li>
          </ol>
        </div>
        <div id="presets">
          <device0Presets></device0Presets>
          <device1Presets></device1Presets>
          <device2Presets></device2Presets>
        </div>
      </div>
    </div>
    <div id="graphicBackground">
      <div id="topButton" class="row">
        <ul class="col-md-6">
          <li><img src="../assets/images/logo.png" class="img-fluid"></li>
        </ul>
        <ol class="col-md-6 text-right pr-2">
          <li><i class="fa fa-user"></i></li>
          <li><i class="fa fa-volume-control-phone"></i></li>
          <li><i class="fa fa-facebook"></i></li>
          <li><i class="fa fa-twitter"></i></li>
          <li></li>
          <li><i class="fa fa-minus"></i></li>
          <li><i class="fa fa-times"></i></li>
        </ol>
      </div>
      <div id="preview">
        <device0View></device0View>
        <device1View></device1View>
        <device2View></device2View>
      </div>
      <div id="setting">
        <device0Setting></device0Setting>
        <device1Setting></device1Setting>
        <device2Setting></device2Setting>
      </div>
    </div>
  </div>
</template>

<script>
import device0Presets from './device0/Presets'
import device1Presets from './device1/Presets'
import device2Presets from './device2/Presets'
import device0View from './device0/View'
import device1View from './device1/View'
import device2View from './device2/View'
import device0Setting from './device0/Setting'
import device1Setting from './device1/Setting'
import device2Setting from './device2/Setting'
// import device3Presets from './device3/Presets'
// import device3View from './device3/View'
// import device3Setting from './device3/Setting'

export default {
  name: 'container',
  components: {
    device0Presets,
    device1Presets,
    device2Presets,
    device0View,
    device1View,
    device2View,
    device0Setting,
    device1Setting,
    device2Setting
  },
  data() {
    return {
      activeIndex: 0,
      lists: [
        { id: '0', label: 'KEYBOARD', active: true, images: 'static/images/logo.png' },
        { id: '1', label: 'MOUSE', active: false, images: 'static/images/logo.png' },
        { id: '2', label: 'HEADSET', active: false, images: 'static/images/logo.png' }
      ]
    }
  },
  methods: {
    showDevice(index) {
      this.lists.forEach(function(val, key){
        val.active = false
      })
      this.lists[index].active = true
      this.activeIndex = index
      $('.device').addClass('d-none')
      $('.device'+index).removeClass('d-none')
    }
  },
  mounted: function() {
    $('.multiple-items').slick({
      infinite: true,
      dots: false,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1
    });
  }
}
</script>