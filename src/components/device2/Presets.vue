<template>
  <div id="device2Presets" class="device device2 d-none">
    <div id="accordion2" role="tablist">
      <div class="card" @click="showSetting(1)">
        <a class="collapsed" data-toggle="collapse" href="#collapse2-1" aria-expanded="false" aria-controls="collapse2-1">
          <div class="card-header" role="tab" id="heading2-1">
            <h5 class="mb-0">
              {{msg + '1'}}
            </h5>
          </div>
        </a>
        <div id="collapse2-1" class="collapse show" role="tabpanel" aria-labelledby="heading2-1" data-parent="#accordion2">
          <div class="card-body">
            <button class="btn btn-primary">button</button>
          </div>
        </div>
      </div>
      <div class="card" @click="showSetting(2)">
        <a class="collapsed" data-toggle="collapse" href="#collapse2-2" aria-expanded="false" aria-controls="collapse2-2">
          <div class="card-header" role="tab" id="heading2-2">
            <h5 class="mb-0">
              {{msg + '2'}}
            </h5>
          </div>
        </a>
        <div id="collapse2-2" class="collapse" role="tabpanel" aria-labelledby="heading2-2" data-parent="#accordion2">
          <div class="card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </div>
        </div>
      </div>
      <div class="card" @click="showSetting(3)">
        <a class="collapsed" data-toggle="collapse" href="#collapse2-3" aria-expanded="false" aria-controls="collapse2-3">
          <div class="card-header" role="tab" id="heading2-3">
            <h5 class="mb-0">
              {{msg + '3'}}
            </h5>
          </div>
        </a>
        <div id="collapse2-3" class="collapse" role="tabpanel" aria-labelledby="heading2-3" data-parent="#accordion2">
          <div class="card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Card 2-'
    }
  },
  methods: {
    showSetting(num) {
      $('.setting').addClass('d-none')
      $('.setting'+num).removeClass('d-none')
    }
  }
}
</script>