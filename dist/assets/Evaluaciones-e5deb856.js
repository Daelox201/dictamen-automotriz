import{r as p,M as N,a as e,l as f,j as i,w as u,x as m,s as v,m as b,y as x,z as F,A as M,C,D as A,n as E,o as c,p as a,h as D,I as R,b as G,c as L,d as z,e as k,L as q,f as w,g as H}from"./index-39e09190.js";let _=[],h=[];const $=n=>{const{dataDictamen:S,setDataDictamen:J}=p.useContext(N),[O,T]=p.useState(),[t,y]=p.useState(20);p.useState({originalidad_sin_control_electronico:0,originalidad_con_control_electronico:0,funcionalidad_sin_control_electronico:0,funcionalidad_con_control_electronico:0});let o={originalidad_sin_control_electronico:[],originalidad_con_control_electronico:[],funcionalidad_sin_control_electronico:[],funcionalidad_con_control_electronico:[]};const P=s=>{s.target.value?y(parseInt(`${s.target.value}`)):y(parseInt(0))};return p.useEffect(()=>{S&&T(S[`${n.nameObjFirestore[0]}`]),y(n.maximoPuntos)},[]),e(f,{children:O&&i(f,{children:[n.nameObjFirestore.map((s,g)=>{let r=O[s];if(r)return e("div",{className:"accordion",children:e(u,{children:i(m,{value:"first",children:[e(v,{slot:"header",className:"titleAccordion",children:e(b,{children:n.name[g-1]})}),i(x,{slot:"content",children:[e(F,{children:e(M,{class:"title-card",children:n.name[g-1]})}),n.sectiones.map((d,l)=>{if(l==0){h=[],_=[];let I=(r[`res_au_${l}`]||0)+(r[`res_or_${l}`]||0)+(r[`res_rt_${l}`]||0)+(r[`res_rc_${l}`]||0),j=r[`res_ev_${l}`]||0;o&&o.originalidad_sin_control_electronico&&_.push(...o.originalidad_sin_control_electronico),o&&o.funcionalidad_sin_control_electronico&&h.push(...o.funcionalidad_sin_control_electronico),h.push(j),_.push(I),o.funcionalidad_sin_control_electronico=h,o.originalidad_sin_control_electronico=_}if(l>0){h=[],_=[];let I=(r[`res_au_${l}`]||0)+(r[`res_or_${l}`]||0)+(r[`res_rt_${l}`]||0)+(r[`res_rc_${l}`]||0),j=r[`res_ev_${l}`]||0;o&&o.originalidad_con_control_electronico&&_.push(...o.originalidad_con_control_electronico),o&&o.funcionalidad_con_control_electronico&&h.push(...o.funcionalidad_con_control_electronico),h.push(j),_.push(I),o.funcionalidad_con_control_electronico=h,o.originalidad_con_control_electronico=_}return i(C,{children:[l!=0&&e(A,{class:"subtitle",children:d}),i(E,{children:[i(c,{children:[e(a,{class:"label",children:"AU:"}),e(a,{children:r[`res_au_${l}`]||0})]}),i(c,{children:[e(a,{class:"label",children:"OR:"}),e(a,{children:r[`res_or_${l}`]||0})]}),i(c,{children:[e(a,{class:"label",children:"RT:"}),e(a,{children:r[`res_rt_${l}`]||0})]}),i(c,{children:[e(a,{class:"label",children:"RC:"}),e(a,{children:r[`res_rc_${l}`]||0})]}),e(c,{children:e(a,{class:"label-total",children:e("strong",{children:"Totales"})})}),i(c,{children:[e(a,{class:"label",children:"Originalidad:"}),e(a,{children:(r[`res_au_${l}`]||0)+(r[`res_or_${l}`]||0)+(r[`res_rt_${l}`]||0)+(r[`res_rc_${l}`]||0)})]}),i(c,{children:[e(a,{class:"label",children:"Funcionalidad:"}),e(a,{children:r[`res_ev_${l}`]||0})]})]})]})})]})]})})})}),e("div",{className:"accordion",children:e(u,{children:i(m,{value:"first",children:[e(v,{slot:"header",className:"titleAccordion",children:e(b,{children:"Resultados"})}),i(x,{slot:"content",children:[e(F,{children:e(M,{class:"title-card",children:"Resultados"})}),i(C,{children:[e(A,{class:"subtitle",children:"Totales"}),e(E,{children:Object.keys(o).map((s,g)=>{let r="";const d=o[s].reduce((l,I)=>l+I,0);if(/originalidad_sin_/.test(s)||/originalidad_con_/.test(s))return/originalidad_sin_/.test(s)?(r="Para Autos sin Control Electronico",o.originalidad_sin_control_electronico=d):/originalidad_con_/.test(s)&&(r="Para Autos con Control Electronico",o.originalidad_con_control_electronico=d),i(f,{children:[g==0&&e(c,{children:e(a,{class:"",children:"Originalidad"})}),i(c,{children:[e(a,{class:"label",children:r}),e(a,{children:d})]})]});if(/funcionalidad_sin_/.test(s)||/funcionalidad_con_/.test(s))return/funcionalidad_sin_/.test(s)?(r="Para Autos sin Control Electronico",o.funcionalidad_sin_control_electronico=d):/funcionalidad_con_/.test(s)&&(r="Para Autos con Control Electronico",o.funcionalidad_con_control_electronico=d),i(f,{children:[g==2&&e(c,{children:e(a,{class:"",children:"Funcionalidad"})}),i(c,{children:[e(a,{class:"label",children:r}),e(a,{children:d})]})]})})})]}),i(C,{children:[e(A,{class:"subtitle",children:"Evaluacion basada en la Originalidad"}),i(E,{children:[e(c,{children:e(a,{class:"label",children:"Maxima de puntos para esta seccion:"})}),e(c,{children:e(D,{type:"number",label:":",value:t,onIonInput:P})}),e(c,{children:e(a,{class:"label",children:"Obtenida en evaluacion para Dictamen:"})}),n.divisores.length>1?e(c,{children:e(a,{children:`${Math.round(parseInt(`${o.originalidad_sin_control_electronico}`)*t/n.divisores[0])}% Para Autos sin Control Electronico`})}):e(c,{children:e(a,{children:`${Math.round(parseInt(`${o.originalidad_sin_control_electronico}`)*t/n.divisores[0])}% Autos en General`})}),n.divisores.length>1&&i(f,{children:[e(c,{children:e(a,{class:"label",children:"Obtenida en evaluacion para Dictamen:"})}),e(c,{children:e(a,{children:`${Math.round(parseInt(`${o.originalidad_con_control_electronico}`)*t/n.divisores[1])}% Para Autos con Control Electronico`})})]})]})]}),i(C,{children:[e(A,{class:"subtitle",children:"Evaluacion basada en la Funcionalidad"}),i(E,{children:[e(c,{children:e(a,{class:"label",children:"Maxima de puntos para esta seccion:"})}),e(c,{children:e(D,{type:"number",label:":",value:t,onIonInput:P})}),e(c,{children:e(a,{class:"label",children:"Obtenida en evaluacion para Dictamen:"})}),n.divisores.length>1?e(c,{children:e(a,{children:`${Math.round(parseInt(`${o.funcionalidad_sin_control_electronico}`)*t/n.divisores[0])}% Para Autos sin Control Electronico`})}):e(c,{children:e(a,{children:`${Math.round(parseInt(`${o.funcionalidad_sin_control_electronico}`)*t/n.divisores[0])}% Autos en General`})}),n.divisores.length>1&&i(f,{children:[e(c,{children:e(a,{class:"label",children:"Obtenida en evaluacion para Dictamen:"})}),e(c,{children:e(a,{children:`${Math.round(parseInt(`${o.funcionalidad_con_control_electronico}`)*t/n.divisores[1])}% Para Autos con Control Electronico`})})]})]})]})]})]})})})]})})},B=()=>{const{dataDictamen:n}=p.useContext(N);return i(R,{children:[e(G,{class:"custom-header",children:e(L,{children:e(z,{children:"Ingeniería Automotriz"})})}),e(k,{fullscreen:!0,children:i("div",{className:"container evaluaciones",children:[i(q,{to:"/forms",className:"btn-back",children:[e(w,{class:"icon",icon:H}),e("p",{children:e("strong",{children:"Evaluaciones"})})]}),i("div",{className:"data",children:[e("p",{className:"title",children:"Datos del Vehiculo"}),n&&i("div",{className:"data-flex",children:[i("div",{children:[i("p",{children:["Marca: ",e("span",{children:n&&n.data_vehiculo.marca&&n.data_vehiculo.marca||""})]}),i("p",{children:["Submarca: ",e("span",{children:n&&n.data_vehiculo.submarca&&n.data_vehiculo.submarca||""})]}),i("p",{children:["Modelo: ",e("span",{children:n&&n.data_vehiculo.modelo&&n.data_vehiculo.modelo||""})]}),i("p",{children:["Segmento: ",e("span",{children:n&&n.data_vehiculo.segmento&&n.data_vehiculo.segmento||""})]})]}),i("div",{children:[i("p",{children:["Tipo: ",e("span",{children:n&&n.data_vehiculo.tipo&&n.data_vehiculo.tipo||""})]}),i("p",{children:["No. de Serie: ",e("span",{children:n&&n.data_vehiculo.noSerie&&n.data_vehiculo.noSerie||""})]}),i("p",{children:["Propietario: ",e("span",{children:n&&n.datos_propietario.propietario&&n.datos_propietario.propietario||""})]})]})]}),e(u,{children:i(m,{value:"first",children:[e(v,{slot:"header",color:"primary",className:"accordion-title",children:e(b,{children:"Sistemas Alternos de Motor y Generales Motor"})}),e("div",{slot:"content",children:e($,{name:["Sistema Carga y Arranque","Sistema de Encendido o Ignicion","Sistema de Admision de Aire","Sistema de Inyeccion de combustible","Sistema de Emision de Gases","Sistema Evaporativo","Sistema de Enfriamiento"],nameObjFirestore:["sistemas_motor","sistema_carga_arranque","sistema_encendido_ignicion","sistema_admision_aire","sistema_inyeccion_combustible","sistema_emison_gases","sistema_evaporativo","sistema_enfriamento"],sectiones:["Sistema Carga y Arranque","Con control Electronico"],maximoPuntos:20,divisores:[600,700]})})]})}),e("br",{}),e(u,{children:i(m,{value:"first",children:[e(v,{slot:"header",color:"primary",className:"accordion-title",children:e(b,{children:"Generales Motor"})}),e("div",{slot:"content",children:e($,{name:["Juntas","Tapas y Depositos","Tapones","Filtros","Sujeciones"],nameObjFirestore:["generales_motor","motores_juntas","motores_tapas_depositos","motores_tapones","motores_filtros","motores_sujeciones"],sectiones:["Juntas"],maximoPuntos:10,divisores:[500]})})]})}),e("br",{}),e(u,{children:i(m,{value:"first",children:[e(v,{slot:"header",color:"primary",className:"accordion-title",children:e(b,{children:"Sistemas Automotrices"})}),e("div",{slot:"content",children:e($,{name:["Dirección","Suspension","Frenos","Trasmision","Chassis"],nameObjFirestore:["automotrices","sitemas_automotrices_direccion","sitemas_automotrices_suspension","sitemas_automotrices_frenos","sitemas_automotrices_trasmision","sitemas_automotrices_chassis"],sectiones:["Dirección","Con control Electronico"],maximoPuntos:30,divisores:[500,500]})})]})}),e("br",{}),e(u,{children:i(m,{value:"first",children:[e(v,{slot:"header",color:"primary",className:"accordion-title",children:e(b,{children:"Carroceria"})}),e("div",{slot:"content",children:e($,{name:["Pintura","Lienzos y Partes de Colision","Cristales y Ventanas","Cerrajerias y Enclaves","Ruedas","Accesorios","Molduras","Luces"],nameObjFirestore:["carroceria","carroceria_pintura","carroceria_lienzos_partes_colision","carroceria_cristales_ventanas","carroceria_cerrajerias_enclaves","carroceria_ruedas","carroceria_accesorios","carroceria_molduras","carroceria_luces"],sectiones:["Pintura"],maximoPuntos:20,divisores:[800]})})]})}),e("br",{}),e(u,{children:i(m,{value:"first",children:[e(v,{slot:"header",color:"primary",className:"accordion-title",children:e(b,{children:"Interiores"})}),e("div",{slot:"content",children:e($,{name:["Asientos","Tablero","Puertas y/o Lienzos Fijos","Domo Trasero y/o Cajuela","Luces Interiores","Tapicerias y Alfombrados"],nameObjFirestore:["interiores","interiores_asientos","interiores_tablero","interiores_puertas_lienzos_fijos","interiores_domo_trasero_cajuela","interiores_luces_interiores","interiores_tapicerias_alfombrados"],sectiones:["Asientos"],maximoPuntos:20,divisores:[600]})})]})})]})]})})]})};export{B as default};
