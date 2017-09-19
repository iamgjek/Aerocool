<template>
  <div id="device1Presets" class="device device1 col-md-10 row">
    <div id="accordion1" role="tablist">
      <div class="card" @click="showSetting(1)">
        <a data-toggle="collapse" href="#collapse1-1" aria-expanded="true" aria-controls="collapse1-1">
          <div class="card-header" role="tab" id="heading1-1">
            <h5 class="mb-0">
              {{msg + '1'}}
            </h5>
          </div>
        </a>
        <div id="collapse1-1" class="collapse show" role="tabpanel" aria-labelledby="heading1-1" data-parent="#accordion1">
          <div class="card-body">
            <button class="btn btn-primary">button</button>
          </div>
        </div>
      </div>
      <div class="card" @click="showSetting(2)">
        <a class="collapsed" data-toggle="collapse" href="#collapse1-2" aria-expanded="false" aria-controls="collapse1-2">
          <div class="card-header" role="tab" id="heading1-2">
            <h5 class="mb-0">
              {{msg + '2'}}
            </h5>
          </div>
        </a>
        <div id="collapse1-2" class="collapse" role="tabpanel" aria-labelledby="heading1-2" data-parent="#accordion1">
          <div class="card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </div>
        </div>
      </div>
      <div class="card" @click="showSetting(3)">
        <a class="collapsed" data-toggle="collapse" href="#collapse1-3" aria-expanded="false" aria-controls="collapse1-3">
          <div class="card-header" role="tab" id="heading1-3">
            <h5 class="mb-0">
              {{msg + '3'}}
            </h5>
          </div>
        </a>
        <div id="collapse1-3" class="collapse" role="tabpanel" aria-labelledby="heading1-3" data-parent="#accordion1">
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
      msg: 'Card 1-'
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