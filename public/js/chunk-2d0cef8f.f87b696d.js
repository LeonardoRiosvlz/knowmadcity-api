(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cef8f"],{6274:function(e,t,r){"use strict";r.r(t);var a,o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Layout",{staticClass:"authentication-bg"},[r("PageHeader",{attrs:{title:e.title,items:e.items}}),r("div",{staticClass:"clearfix mb-3"},[r("b-button",{staticClass:"float-right btn-info",attrs:{left:""},on:{click:function(t){e.$bvModal.show("modal"),e.resete(),e.editMode=!1}}},[e._v("Crear cliente")])],1),r("div",{staticClass:"row "},[r("div",{staticClass:"col-12 "},[r("div",{staticClass:"card ",staticStyle:{"background-color":"rgba(0,0,0,0.5)",color:"#fff"}},[r("div",{staticClass:"card-body"},[r("h4",{staticClass:"card-title"}),r("div",{staticClass:"row mt-4"},[r("div",{staticClass:"col-sm-12 col-md-6"},[r("div",{staticClass:"dataTables_length ",attrs:{id:"tickets-table_length"}},[r("label",{staticClass:"d-inline-flex align-items-center"},[e._v(" Mostrar "),r("b-form-select",{attrs:{size:"sm",options:e.pageOptions},model:{value:e.perPage,callback:function(t){e.perPage=t},expression:"perPage"}}),e._v(" Clientes ")],1)])]),r("div",{staticClass:"col-sm-12 col-md-6 "},[r("div",{staticClass:"dataTables_filter text-md-right",attrs:{id:"tickets-table_filter"}},[r("label",{staticClass:"d-inline-flex align-items-center"},[e._v(" Buscar Cliente: "),r("b-form-input",{staticClass:"form-control form-control-sm ml-2",attrs:{type:"Buscar Cliente",placeholder:"Buscar Cliente..."},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})],1)])])]),r("div",{staticClass:"table-responsive mb-0 ",staticStyle:{color:"#fff"}},[r("b-table",{staticStyle:{color:"#fff"},attrs:{light:"",items:e.clientes,fields:e.fields,responsive:"sm","per-page":e.perPage,"current-page":e.currentPage,"sort-by":e.sortBy,"sort-desc":e.sortDesc,filter:e.filter,variant:"danger","filter-included-fields":e.filterOn},on:{"update:sortBy":function(t){e.sortBy=t},"update:sort-by":function(t){e.sortBy=t},"update:sortDesc":function(t){e.sortDesc=t},"update:sort-desc":function(t){e.sortDesc=t},filtered:e.onFiltered},scopedSlots:e._u([{key:"cell(status)",fn:function(t){return["activo"===t.item.user.status?r("span",{staticClass:"badge badge-success"},[e._v("Activo")]):r("span",{staticClass:"badge badge-danger"},[e._v("Inactivo")])]}},{key:"cell(actions)",fn:function(t){return[r("b-dropdown",{attrs:{size:"sm"},scopedSlots:e._u([{key:"button-content",fn:function(){return[e._v(" Action "),r("i",{staticClass:"mdi mdi-chevron-down"})]},proxy:!0}],null,!0)},[r("b-dropdown-item-button",{on:{click:function(r){e.editMode=!0,e.setear(t.item.id)}}},[e._v("Editar")])],1)]}}])})],1),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("div",{staticClass:"dataTables_paginate paging_simple_numbers float-right"},[r("ul",{staticClass:"pagination pagination-rounded mb-0"},[r("b-pagination",{attrs:{"total-rows":e.rows,"per-page":e.perPage},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)])])])])])])]),r("b-modal",{attrs:{id:"modal",false:"",size:"lg","hide-footer":"",title:"Gestión de clientes","ok-only":""}},[r("ValidationObserver",{ref:"form"},[r("form-wizard",{attrs:{"next-button-text":"Siguiente","back-button-text":"Anterior","finish-button-text":"---",color:"#7fa3a3",transition:"fade"}},[r("tab-content",{attrs:{title:"Datos Personales",subtitle:"Paso 1",icon:"ri-user-3-fill"}},[r("b-row",[r("b-col",[r("div",{staticClass:"form-group"},[r("label",[e._v("Nombre ")]),r("ValidationProvider",{attrs:{name:"nombre",rules:"required|alpha_spaces"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.nombre,expression:"form.nombre"}],staticClass:"form-control",attrs:{type:"text",placeholder:" "},domProps:{value:e.form.nombre},on:{input:function(t){t.target.composing||e.$set(e.form,"nombre",t.target.value)}}}),r("span",{staticStyle:{color:"red"}},[e._v(e._s(a[0]))])]}}])})],1)])],1),r("b-row",[r("b-col",[r("div",{staticClass:"form-group"},[r("label",[e._v("Email")]),r("ValidationProvider",{attrs:{name:"email",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{type:"text",placeholder:" "},domProps:{value:e.form.email},on:{keyup:function(t){return e.setEmail()},input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}}),r("span",{staticStyle:{color:"red"}},[e._v(e._s(a[0]))])]}}])})],1)]),r("b-col",[r("div",{staticClass:"form-group"},[r("label",[e._v("Telefono")]),r("ValidationProvider",{attrs:{name:"telefono",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.telefono,expression:"form.telefono"}],staticClass:"form-control",attrs:{type:"text",placeholder:" "},domProps:{value:e.form.telefono},on:{input:function(t){t.target.composing||e.$set(e.form,"telefono",t.target.value)}}}),r("span",{staticStyle:{color:"red"}},[e._v(e._s(a[0]))])]}}])})],1)])],1),r("b-row",[r("b-col",[r("div",{staticClass:"form-group"},[r("label",[e._v("Fax")]),r("ValidationProvider",{attrs:{name:"email",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.fax,expression:"form.fax"}],staticClass:"form-control",attrs:{type:"text",placeholder:" "},domProps:{value:e.form.fax},on:{input:function(t){t.target.composing||e.$set(e.form,"fax",t.target.value)}}}),r("span",{staticStyle:{color:"red"}},[e._v(e._s(a[0]))])]}}])})],1)]),r("b-col",[r("div",{staticClass:"form-group"},[r("label",[e._v("Celular")]),r("ValidationProvider",{attrs:{name:"celular",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.celular,expression:"form.celular"}],staticClass:"form-control",attrs:{type:"text",placeholder:" "},domProps:{value:e.form.celular},on:{input:function(t){t.target.composing||e.$set(e.form,"celular",t.target.value)}}}),r("span",{staticStyle:{color:"red"}},[e._v(e._s(a[0]))])]}}])})],1)])],1)],1),r("tab-content",{attrs:{title:"Estado de Cliente",subtitle:"Paso 1",icon:"ri-lock-password-fill"}},[r("b-row",[r("b-col",[r("div",{staticClass:"form-group"},[r("label",[e._v("Estatus")]),r("ValidationProvider",{attrs:{name:"status",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.status,expression:"form.status"}],staticClass:"form-control form-control-lg",attrs:{name:"tipo"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.form,"status",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"activo"}},[e._v("Activo")]),r("option",{attrs:{value:"inactivo"}},[e._v("Inactivo")])]),r("span",{staticStyle:{color:"red"}},[e._v(e._s(a[0]))])]}}])})],1)])],1),e.editMode?e._e():r("b-row",[r("b-col",[r("div",{staticClass:"form-group"},[r("label",[e._v("Contraseña")]),r("ValidationProvider",{attrs:{name:"password",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:" "},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}}),r("span",{staticStyle:{color:"red"}},[e._v(e._s(a[0]))])]}}],null,!1,3329201509)})],1)]),r("b-col",[r("div",{staticClass:"form-group"},[r("label",[e._v("Confirmar contraseña")]),r("ValidationProvider",{attrs:{name:"repass",rules:"required|confirmed:password"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.repass,expression:"form.repass"}],staticClass:"form-control",attrs:{type:"password",placeholder:" "},domProps:{value:e.form.repass},on:{input:function(t){t.target.composing||e.$set(e.form,"repass",t.target.value)}}}),r("span",{staticStyle:{color:"red"}},[e._v(e._s(a[0]))])]}}],null,!1,3018238149)})],1)])],1),r("b-row",{staticClass:"mb-2"},[r("b-col",[r("label",[e._v("Imagen")]),r("div",{attrs:{id:"preview mb-2"}},[e.url?r("img",{staticClass:"rounded",staticStyle:{float:"center!importan"},attrs:{width:"100%",src:e.url}}):e._e()]),r("b-form-file",{attrs:{placeholder:"Seleccione su image...","drop-placeholder":"Drop file here..."},on:{change:e.onFileChange},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}})],1)],1)],1),r("tab-content",{attrs:{title:"Finalizar",subtitle:"Paso 1",icon:"ri-check-fill"}},[e.ver||e.editMode?e._e():r("button",{staticClass:"btn btn-block float-right btn-success",on:{click:e.switchLoc}},[e._v("Crear Cliente")]),!e.ver&&e.editMode?r("button",{staticClass:"btn btn-block float-right btn-success",on:{click:e.switchLoc}},[e._v("Guardar Cambios")]):e._e()])],1)],1)],1)],1)},s=[],i=r("ade3"),n=r("1da1"),l=r("5530"),c=(r("2b3d"),r("d3b7"),r("3ca3"),r("ddb0"),r("96cf"),r("6dfc"),r("4a7a")),u=r.n(c),d=r("92c3"),f=r.n(d),m=r("2f62"),p=r("7bb1"),v=r("5658"),b=r("2579"),h=r("2ee4"),g=(r("da93"),a={components:{vueDropzone:f.a,Layout:v["a"],PageHeader:b["a"],ValidationProvider:p["b"],ValidationObserver:p["a"],vSelect:u.a,FormWizard:h["FormWizard"],TabContent:h["TabContent"]},data:function(){return{title:"Administracion",items:[{text:"Gestión corporativa"},{text:"Clientes",active:!0}],dropzoneOptions:{thumbnailWidth:150,maxFilesize:.5,headers:{"My-Awesome-Header":"header value"}},ver:!1,url:"",url_firma:"",modal:!0,file:null,firma:null,email:"",password:"",totalRows:1,currentPage:1,perPage:10,pageOptions:[10,25,50,100],filter:null,filterOn:[],sortBy:"age",sortDesc:!1,fields:["nombre","telefono","email","status","actions"],clientes:[],areas:[],cargos:[],regionales:[],regional:[],editMode:!1,form:{id:"",logo:"",nombre:"",direccion:"",telefono:"",fax:"",celular:"",email:"",status:"",password:""}}},computed:Object(l["a"])({},Object(m["d"])(["counter"])),created:function(){this.listarclientes()},methods:Object(l["a"])(Object(l["a"])({},Object(m["b"])(["guardarUsuario"])),{},{submit:function(){return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("email submitted!");case 1:case"end":return e.stop()}}),e)})))()},switchLoc:function(){var e=this;this.editMode?this.$refs.form.validate().then((function(t){t&&e.editarCliente()})):this.$refs.form.validate().then((function(t){t&&e.agregarCliente()}))},resete:function(){var e=this.form;for(var t in e)this.form[t]=""},onFiltered:function(e){this.totalRows=e.length,this.currentPage=1},agregarCliente:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(o in r=new FormData,a=e.form,a)r.append(o,a[o]);return e.file&&r.append("filename",e.file),t.next=6,e.axios.post("api/clientes",r,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){if(200==t.status)for(var r in e.$swal("Cliente creado exitosamente","","success"),e.listarclientes(),e.$root.$emit("bv::hide::modal","modal","#btnShow"),a)e.form[r]=""})).catch((function(t){e.$swal("Ocurrio un problema al crear el cliente","","warning")}));case 6:case"end":return t.stop()}}),t)})))()},editarCliente:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(o in r=new FormData,a=e.form,a)r.append(o,a[o]);return e.file&&r.append("filename",e.file),t.next=6,e.axios.put("api/clientes",r,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){if(200==t.status)for(var r in e.$swal("Editado con exito","","success"),e.listarClientes(),e.$root.$emit("bv::hide::modal","modal","#btnShow"),a)e.form[r]=""})).catch((function(t){e.$swal("ocurrio un problema","","warning")}));case 6:case"end":return t.stop()}}),t)})))()},setear:function(e){for(var t=0;t<this.clientes.length;t++)if(this.clientes[t].id===e)return this.form.id=this.clientes[t].id,this.form.nombre=this.clientes[t].nombre,this.form.direccion=this.clientes[t].direccion,this.form.telefono=this.clientes[t].telefono,this.form.fax=this.clientes[t].fax,this.form.celular=this.clientes[t].celular,this.form.email=this.clientes[t].email,this.form.status=this.clientes[t].user.status,this.url=this.clientes[t].logo,void this.$root.$emit("bv::show::modal","modal","#btnShow")},listarClientes:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.axios.get("api/clientes").then((function(t){e.clientes=t.data})).catch((function(e){console.log("error"+e)}));case 2:case"end":return t.stop()}}),t)})))()},setEmail:function(){this.form.username=this.form.email},setRoles:function(){"Administrador"===this.form.tipo?(this.form.codigo="",this.form.entidad="No",this.form.cargo="",this.form.roles="3"):"Coordinador"===this.form.tipo?(this.form.entidad="No",this.form.cargo="",this.form.roles="2"):this.form.roles="1"},onFileChange:function(e){var t=e.target.files[0];this.url=URL.createObjectURL(t)},onFileChangeFirma:function(e){var t=e.target.files[0];this.url_firma=URL.createObjectURL(t)},toggleModal:function(){this.modal=!this.modal},session:function(){if(localStorage.getItem("token")){var e=localStorage.getItem("token");this.guardarUsuario(e)}else this.$router.push({name:"Home"})}})},Object(i["a"])(a,"created",(function(){this.session(),this.listarClientes()})),Object(i["a"])(a,"computed",{rows:function(){return this.clientes.length}}),a),w=g,C=r("2877"),_=Object(C["a"])(w,o,s,!1,null,null,null);t["default"]=_.exports}}]);
//# sourceMappingURL=chunk-2d0cef8f.f87b696d.js.map