(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0db883"],{"6feb":function(e,t,r){"use strict";r.r(t);var i,o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Layout",[r("PageHeader",{attrs:{title:e.title,items:e.items}}),r("div",{staticClass:"clearfix mb-3"},[r("b-button",{staticClass:"float-right btn-info",attrs:{left:""},on:{click:function(t){e.$bvModal.show("modal"),e.editMode=!1}}},[e._v("Crear administrador de regional")])],1),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("h4",{staticClass:"card-title"}),r("div",{staticClass:"row mt-4"},[r("div",{staticClass:"col-sm-12 col-md-6"},[r("div",{staticClass:"dataTables_length",attrs:{id:"tickets-table_length"}},[r("label",{staticClass:"d-inline-flex align-items-center"},[e._v(" Show "),r("b-form-select",{attrs:{size:"sm",options:e.pageOptions},model:{value:e.perPage,callback:function(t){e.perPage=t},expression:"perPage"}}),e._v(" entries ")],1)])]),r("div",{staticClass:"col-sm-12 col-md-6"},[r("div",{staticClass:"dataTables_filter text-md-right",attrs:{id:"tickets-table_filter"}},[r("label",{staticClass:"d-inline-flex align-items-center"},[e._v(" Search: "),r("b-form-input",{staticClass:"form-control form-control-sm ml-2",attrs:{type:"search",placeholder:"Search..."},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})],1)])])]),r("div",{staticClass:"table-responsive mb-0"},[r("b-table",{attrs:{items:e.regional,fields:e.fields,responsive:"sm","per-page":e.perPage,"current-page":e.currentPage,"sort-by":e.sortBy,"sort-desc":e.sortDesc,filter:e.filter,"filter-included-fields":e.filterOn},on:{"update:sortBy":function(t){e.sortBy=t},"update:sort-by":function(t){e.sortBy=t},"update:sortDesc":function(t){e.sortDesc=t},"update:sort-desc":function(t){e.sortDesc=t},filtered:e.onFiltered},scopedSlots:e._u([{key:"cell(Entidad)",fn:function(t){return[e._v(" "+e._s(t.item.entidad.empresa)+" ")]}},{key:"cell(actions)",fn:function(t){return[r("b-dropdown",{attrs:{size:"sm"},scopedSlots:e._u([{key:"button-content",fn:function(){return[e._v(" Action "),r("i",{staticClass:"mdi mdi-chevron-down"})]},proxy:!0}],null,!0)},[r("b-dropdown-item-button",{on:{click:function(r){e.editMode=!0,e.ver=!1,e.setear(t.item.id)}}},[e._v(" Editar ")]),r("b-dropdown-item-button",{on:{click:function(r){return e.eliminarregional(t.item.id)}}},[e._v(" Eliminar ")]),r("b-dropdown-item-button",{on:{click:function(r){e.editMode=!1,e.ver=!0,e.setear(t.item.id)}}},[e._v(" Ver ")])],1)]}}])})],1),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("div",{staticClass:"dataTables_paginate paging_simple_numbers float-right"},[r("ul",{staticClass:"pagination pagination-rounded mb-0"},[r("b-pagination",{attrs:{"total-rows":e.rows,"per-page":e.perPage},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)])])])])])])]),r("b-modal",{attrs:{id:"modal",false:"",size:"lg",title:"Gestión de regional","hide-footer":""}},[r("ValidationObserver",{ref:"form"},[r("b-row",[r("b-col",[r("div",{staticClass:"form-group"},[r("label",[e._v("Nombre")]),r("ValidationProvider",{attrs:{name:"nombre",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.nombre,expression:"form.nombre"}],staticClass:"form-control",attrs:{type:"text",placeholder:" ",disabled:e.ver},domProps:{value:e.form.nombre},on:{input:function(t){t.target.composing||e.$set(e.form,"nombre",t.target.value)}}}),r("span",{staticStyle:{color:"red"}},[e._v(e._s(i[0]))])]}}])})],1)])],1),r("b-row",[r("b-col",[r("div",{staticClass:"form-group"},[r("label",[e._v("Descripción")]),r("ValidationProvider",{attrs:{name:"descripcion",rules:""},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.descripcion,expression:"form.descripcion"}],staticClass:"form-control",attrs:{type:"text",placeholder:" ",disabled:e.ver},domProps:{value:e.form.descripcion},on:{input:function(t){t.target.composing||e.$set(e.form,"descripcion",t.target.value)}}}),r("span",{staticStyle:{color:"red"}},[e._v(e._s(i[0]))])]}}])})],1)])],1)],1),e.ver||e.editMode?e._e():r("button",{staticClass:"btn btn-block float-right btn-success",on:{click:e.switchLoc}},[e._v("Guardar")]),!e.ver&&e.editMode?r("button",{staticClass:"btn btn-block float-right btn-success",on:{click:e.switchLoc}},[e._v("Editar")]):e._e()],1)],1)},a=[],n=r("ade3"),s=r("1da1"),l=r("5530"),c=(r("2b3d"),r("d3b7"),r("3ca3"),r("ddb0"),r("96cf"),r("92c3")),d=r.n(c),u=r("2f62"),m=r("7bb1"),f=r("5658"),p=r("2579"),g=(i={components:{vueDropzone:d.a,Layout:f["a"],PageHeader:p["a"],ValidationProvider:m["b"],ValidationObserver:m["a"]},data:function(){return{title:"Administracion",items:[{text:"Gestión corporativa"},{text:"Administrador de regional",active:!0}],dropzoneOptions:{thumbnailWidth:150,maxFilesize:.5,headers:{"My-Awesome-Header":"header value"}},ver:!1,url:"",url_firma:"",modal:!0,file:null,firma:null,email:"",password:"",totalRows:1,currentPage:1,perPage:10,pageOptions:[10,25,50,100],filter:null,filterOn:[],sortBy:"age",sortDesc:!1,fields:["nombre","descripcion","actions"],regional:[],entidades:[],editMode:!1,form:{id:"",regional:"",descripcion:""}}},computed:Object(l["a"])({},Object(u["d"])(["counter"])),created:function(){this.listarUsers()},methods:Object(l["a"])(Object(l["a"])({onFiltered:function(e){this.totalRows=e.length,this.currentPage=1}},Object(u["b"])(["guardarUsuario"])),{},{switchLoc:function(){var e=this;this.editMode?this.$refs.form.validate().then((function(t){t&&e.editarregional()})):this.$refs.form.validate().then((function(t){t&&e.agregarregional()}))},agregarregional:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(o in r=new FormData,i=e.form,i)r.append(o,i[o]);return t.next=5,e.axios.post("api/regional",r,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){if(200==t.status)for(var r in e.$swal("Agregado exito!","","success"),e.listarregional(),e.$root.$emit("bv::hide::modal","modal","#btnShow"),i)e.form[r]=""})).catch((function(t){console.log(t.response.data.menssage),e.$swal(t.response.data)}));case 5:case"end":return t.stop()}}),t)})))()},editarregional:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(o in r=new FormData,i=e.form,i)r.append(o,i[o]);return t.next=5,e.axios.put("api/regional",r).then((function(t){if(200==t.status)for(var r in e.$swal("Editado con exito","","success"),e.listarregional(),e.$root.$emit("bv::hide::modal","modal","#btnShow"),i)e.form[r]=""})).catch((function(t){e.$swal("ocurrio un problema","","warning")}));case 5:case"end":return t.stop()}}),t)})))()},eliminarregionals:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i=new FormData,i.append("id",e),r.next=4,t.axios.post("api/regional/delete",i,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){200==e.status&&(t.$swal("Eliminado con exito!","","success"),t.listarregional())})).catch((function(e){console.log(e.response.data.menssage),t.$swal(e.response.data)}));case 4:case"end":return r.stop()}}),r)})))()},eliminarregional:function(e){var t=this;this.$swal({title:"Desea borrar este regional?",icon:"question",iconHtml:"",confirmButtonText:"Si",cancelButtonText:"No",showCancelButton:!0,showCloseButton:!0}).then((function(r){r.isConfirmed&&t.eliminarregionals(e)}))},resete:function(){var e=this.form;for(var t in e)this.form[t]=""},setear:function(e){for(var t=0;t<this.regional.length;t++)if(this.regional[t].id===e)return this.form.id=this.regional[t].id,this.form.nombre=this.regional[t].nombre,this.form.descripcion=this.regional[t].descripcion,void this.$root.$emit("bv::show::modal","modal","#btnShow")},listarregional:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.axios.get("api/regional").then((function(t){e.regional=t.data.rows})).catch((function(e){console.log("error"+e)}));case 2:case"end":return t.stop()}}),t)})))()},setEmail:function(){this.form.username=this.form.email,console.log("holas")},setRoles:function(){"Administrador"===this.form.tipo?(this.form.codigo="",this.form.entidad="No",this.form.regional="",this.form.roles="3"):"Coordinador"===this.form.tipo?(this.form.entidad="No",this.form.regional="",this.form.roles="2"):this.form.roles="1"},onFileChange:function(e){var t=e.target.files[0];this.url=URL.createObjectURL(t)},toggleModal:function(){this.modal=!this.modal},session:function(){if(localStorage.getItem("token")){var e=localStorage.getItem("token");this.guardarUsuario(e)}else this.$router.push({name:"Home"})},listarentidades:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.axios.get("api/entidades").then((function(t){e.entidades=t.data.rows})).catch((function(e){console.log("error"+e)}));case 2:case"end":return t.stop()}}),t)})))()}})},Object(n["a"])(i,"created",(function(){this.session(),this.listarregional()})),Object(n["a"])(i,"mounted",(function(){})),Object(n["a"])(i,"computed",{rows:function(){return this.regional.length}}),i),h=g,b=r("2877"),v=Object(b["a"])(h,o,a,!1,null,null,null);t["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d0db883.c03d477a.js.map