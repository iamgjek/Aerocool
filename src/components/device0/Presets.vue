<template>
  <div id="device0Presets" class="row device device0">
    <div class="leftContralBar">
      <ul>
        <li><i class="icon icon-search"></i></li>
        <li><i class="icon icon-add"></i></li>
        <li><i class="icon icon-copy"></i></li>
        <li><i class="icon icon-save"></i></li>
        <li><i class="icon icon-edit"></i></li>
        <li><i class="icon icon-delete"></i></li>
      </ul>
      <ol>
        <li class="icon icon-setting"></i></li>
        <li class="icon icon-languate-en"></i></li>
      </ol>
    </div>
    <div id="accordion" role="tablist">
      <div class="card" @click="showSetting(lists[0].id)">
        <a data-toggle="collapse" href="#collapse1-1" aria-expanded="true" aria-controls="collapse1-1">
          <div class="card-header" role="tab" id="heading1-1">
            <h5 class="mb-0">{{lists[0].label}}</h5>
          </div>
        </a>
        <div id="collapse1-1" class="collapse show" role="tabpanel" aria-labelledby="heading1-1" data-parent="#accordion">
          <div class="card-body">
            <ul class="nav nav-tabs" role="tablist">
              <li class="nav-item col-md-6">
                <a class="nav-link active" data-toggle="tab" href="#action-1" role="tab">Action</a>
              </li>
              <li class="nav-item col-md-6">
                <a class="nav-link" data-toggle="tab" href="#library-1" role="tab">Library</a>
              </li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane active" id="action-1" role="tabpanel">
                <ul>
                  <li class="d-flex justify-content-start align-items-center" v-for="(list, index) in lists[0].action" :key="index" :class="{'active': list.active}" @click="selectListAction(index, '0')">
                    <div class="btn-group">
                      <button class="btn btn-outline-theme" v-if="list.shortcut1 != ''">{{list.shortcut1}}</button>
                      <button class="btn btn-outline-theme" v-if="list.shortcut2 != ''">{{list.shortcut2}}</button>
                    </div>
                    <i class="fa" :class="list.ico"></i>{{list.name}}</li>
                </ul>
              </div>
              <div class="tab-pane" id="library-1" role="tabpanel">
                <ul>
                  <li class="d-flex justify-content-start align-items-center" v-for="(list, index) in lists[0].library" :key="index" :class="{'active': list.active}" @click="selectListLibrary(index, '0')">
                    <div class="btn-group">
                      <button class="btn btn-outline-theme" v-if="list.shortcut1 != ''">{{list.shortcut1}}</button>
                      <button class="btn btn-outline-theme" v-if="list.shortcut2 != ''">{{list.shortcut2}}</button>
                    </div>
                    <i class="fa" :class="list.ico"></i>{{list.name}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card" @click="showSetting(lists[1].id)">
        <a class="collapsed" data-toggle="collapse" href="#collapse1-2" aria-expanded="false" aria-controls="collapse1-2">
          <div class="card-header" role="tab" id="heading1-2">
            <h5 class="mb-0">{{lists[1].label}}</h5>
          </div>
        </a>
        <div id="collapse1-2" class="collapse" role="tabpanel" aria-labelledby="heading1-2" data-parent="#accordion">
          <div class="card-body">
            <ul class="nav nav-tabs" role="tablist">
              <li class="nav-item col-md-6">
                <a class="nav-link active" data-toggle="tab" href="#action-2" role="tab">Action</a>
              </li>
              <li class="nav-item col-md-6">
                <a class="nav-link" data-toggle="tab" href="#library-2" role="tab">Library</a>
              </li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane active" id="action-2" role="tabpanel">
                <ul>
                  <li class="d-flex justify-content-start align-items-center" v-for="(list, index) in lists[1].action" :key="index" :class="{'active': list.active}" @click="selectListAction(index, '1')">
                    <div class="btn-group">
                      <button class="btn btn-outline-theme" v-if="list.shortcut1 != ''">{{list.shortcut1}}</button>
                      <button class="btn btn-outline-theme" v-if="list.shortcut2 != ''">{{list.shortcut2}}</button>
                    </div>
                    <i class="fa" :class="list.ico"></i>{{list.name}}</li>
                </ul>
              </div>
              <div class="tab-pane" id="library-2" role="tabpanel">
                <ul>
                  <li class="d-flex justify-content-start align-items-center" v-for="(list, index) in lists[1].library" :key="index" :class="{'active': list.active}" @click="selectListLibrary(index, '1')">
                    <div class="btn-group">
                      <button class="btn btn-outline-theme" v-if="list.shortcut1 != ''">{{list.shortcut1}}</button>
                      <button class="btn btn-outline-theme" v-if="list.shortcut2 != ''">{{list.shortcut2}}</button>
                    </div>
                    <i class="fa" :class="list.ico"></i>{{list.name}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card" @click="showSetting(lists[2].id)">
        <a class="collapsed" data-toggle="collapse" href="#collapse1-3" aria-expanded="false" aria-controls="collapse1-3">
          <div class="card-header" role="tab" id="heading1-3">
            <h5 class="mb-0">{{lists[2].label}}</h5>
          </div>
        </a>
        <div id="collapse1-3" class="collapse" role="tabpanel" aria-labelledby="heading1-3" data-parent="#accordion">
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
  name: 'device0Presets',
  data() {
    return {
      lists: [
        { id: '0', label: 'CUSTOMIZE', 
          leftContralBar: [
            { name: 'search' },
            { name: 'add' },
            { name: 'copy' },
            { name: 'save' },
            { name: 'edit' },
            { name: 'delete' },
          ],
          action: [
            { name: 'Macro', ico: 'fa-bars', shortcut1: 'Fn', shortcut2: 'Left Shift', active: false },
            { name: 'Text', ico: 'fa-bars', shortcut1: 'Fn', shortcut2: '', active: false },
            { name: 'Keyboard Function', ico: 'fa-thunder', shortcut1: 'Fn', shortcut2: 'Left Shift', active: false }
          ], 
          library: [
            { name: 'library', ico: 'fa-gear', shortcut1: 'Fn', shortcut2: 'right Shift', active: false },
            { name: '?', ico: '', shortcut1: '', shortcut2: '', active: false }
          ]
        },
        { id: '1', label: 'LIGHTING', 
          action: [
            { name: 'action', ico: 'fa-bars', shortcut1: 'Fn', shortcut2: '', active: false },
            { name: '?', ico: '', shortcut1: '', shortcut2: '', active: false }
          ], 
          library: [
            { name: 'library', ico: 'fa-bars', shortcut1: 'Fn', shortcut2: '', active: false }
          ] 
        },
        { id: '2', label: 'PERFORMANCE', 
          action: [
            { name: '?', ico: '', shortcut1: '', shortcut2: '', active: false }
          ], 
          library: [
            { name: '?', ico: '', shortcut1: '', shortcut2: '', active: false }
          ]
        }
      ]
    }
  },
  methods: {
    showSetting(index) {
      // console.log(index)
      $('.setting').addClass('d-none')
      $('.setting'+index).removeClass('d-none')
    },
    selectListAction(index, value) {
      let lists1 = this.lists[value].action
      lists1.forEach(function(val, key){
        val.active = false
      })
      this.lists[value].action[index].active = true
    },
    selectListLibrary(index, value) {
      let lists2 = this.lists[value].library
      lists2.forEach(function(val, key){
        val.active = false
      })
      this.lists[value].library[index].active = true
    }
  }
}
</script>