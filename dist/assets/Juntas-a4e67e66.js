import{r as h,M,a as b,F as E}from"./index-39e09190.js";import{C as y}from"./ContainerForm-777b056e.js";const D=[{routeSection:"generalesMotor",nameSection:"Generales Motor",nameForm:"Juntas",nextSection:"Tapones",prevSection:"",nextRoute:"tapones",prevRoute:""}],m=[{name:"",inputs:[{label:"Sellos",nameElement:"sellos"},{label:"Adhesivos",nameElement:"adhesivos"},{label:"Acentamientos",nameElement:"acentamientos"},{label:"Fugas",nameElement:"fugas"},{label:"Estado",nameElement:"estado"}]}],C=()=>{const[i,c]=h.useState({select_sellos:"",select_adhesivos:"",select_acentamientos:"",select_fugas:"",select_estado:"",au_sellos:0,or_sellos:0,rt_sellos:0,rc_sellos:0,ev_sellos:0,observaciones_sellos:"",au_adhesivos:0,or_adhesivos:0,rt_adhesivos:0,rc_adhesivos:0,ev_adhesivos:0,observaciones_adhesivos:"",au_acentamientos:0,or_acentamientos:0,rt_acentamientos:0,rc_acentamientos:0,ev_acentamientos:0,observaciones_acentamientos:"",au_fugas:0,or_fugas:0,rt_fugas:0,rc_fugas:0,ev_fugas:0,observaciones_fugas:"",au_estado:0,or_estado:0,rt_estado:0,rc_estado:0,ev_estado:0,observaciones_estado:""}),[f,F]=h.useState({}),{dataDictamen:d}=h.useContext(M);return h.useEffect(()=>{d&&d.generales_motor&&d.generales_motor.motores_juntas&&c({...i,...d.generales_motor.motores_juntas})},[]),b(y,{data:D,handleForm:a=>{a.preventDefault();const s=E.getInstance();s.setData(i),s.guardarMotorJuntas()},inputs:m,dataForm:i,handleInput:a=>{let s;if(a.target.localName=="ion-select")return;let n,o;if(a.target.localName!="ion-input"){let r=f[a.target.name],$=a.target.name.split("_")[1];if(!a.target.value){if(n=r.split("_")[1],o=r.split("_")[2],s=m[o].inputs.length,o>0){s=0;for(let u=0;u<=o;u++)s+=m[u].inputs.length}let t={...i};if(t={...t,[r]:t[r]-1||0,[`select_${$}`]:"",[`res_${n}_${o}`]:parseInt((t[r]-1||0)*100/s)},o==0){let u=m.length;for(let p=1;p<u;p++)s+=m[p].inputs.length,t={...t,[`sum_${n}_${p}`]:t[r]||0,[`res_${n}_${p}`]:Math.round((t[r]||0)*100/s)};c(t);return}c(t);return}let _=a.target.value.split("-")[0],g=a.target.value.split("-")[1],e=_.split("_")[1],l=g.split("_")[1];if(o=_.split("_")[2],s=m[o].inputs.length,F({...f,[a.target.name]:_}),i[r]>0){if(n=r.split("_")[1],o>0){s=0;for(let u=0;u<=o;u++)s+=m[u].inputs.length}let t={...i};if(i[`sum_${e}_0`]&&n==e){t={...t,[`sum_${e}_${o}`]:t[_]+1||1,[g]:a.target.value,[`au_${l}`]:0,[`or_${l}`]:0,[`rt_${l}`]:0,[`rc_${l}`]:0,[`${e}_${l}`]:1,[`res_${e}_${o}`]:Math.round((t[_]+1||1)*100/s)},c(t);return}t={...t,[_]:t[_]+1||1,[r]:t[r]-1||0,[g]:a.target.value,[`au_${l}`]:0,[`or_${l}`]:0,[`rt_${l}`]:0,[`rc_${l}`]:0,[`${e}_${l}`]:1,[`res_${e}_${o}`]:Math.round((t[_]+1||1)*100/s),[`res_${n}_${o}`]:Math.round((t[r]-1||0)*100/s)},c(t);return}if(o>0){s=0;for(let t=0;t<=o;t++)s+=m[t].inputs.length}let v={...i};if(v={...v,[`sum_${e}_${o}`]:v[_]+1||1,[g]:a.target.value,[`au_${l}`]:0,[`or_${l}`]:0,[`rt_${l}`]:0,[`rc_${l}`]:0,[`${e}_${l}`]:1,[`res_${e}_${o}`]:Math.round((v[_]+1||1)*100/s)},o==0){let t=m.length;console.log(s);for(let u=1;u<t;u++)s+=m[u].inputs.length,v={...v,[`sum_${e}_${u}`]:v[[`sum_${e}_${u}`]]+1||1,[`res_${e}_${u}`]:Math.round((v[[`sum_${e}_${u}`]]+1||1)*100/s)};c(v);return}c(v)}else c({...i,[a.target.name]:a.target.value})},handleInputSelect:a=>{console.clear();let s=a.target.name.split("_")[a.target.name.split("_").length-1],n=a.target.name.split("_")[a.target.name.split("_").length-2],o=a.target.name.split("_")[a.target.name.split("_").length-3],r=[],$=0,_=m[n].inputs.length;i[`ev_${n}`]?(r.push(...i[`ev_${n}`]),r[s]=a.target.value,c({...i,[`ev_${n}`]:r})):(c({...i,[`ev_${n}`]:[a.target.value]}),r[s]=a.target.value);for(let e=0;e<r.length;e++)r[e]||(r[e]="0");if(r.map(e=>{$+=parseInt(e)||0}),n>0){_=0;for(let e=0;e<=n;e++)_+=m[e].inputs.length}if(i.sum_ev_0&&n==1){console.warn("Exist"),$+=i.sum_ev_0;let e={...i};console.log(_*4),e={...e,[`ev_${n}`]:r,[`ev_${o}`]:a.target.value,[`sum_ev_${n}`]:$,[`res_ev_${n}`]:Math.round($*100/(_*4))},c(e);return}let g={...i};if(g={...g,[`ev_${n}`]:r,[`ev_${o}`]:a.target.value,[`sum_ev_${n}`]:$,[`res_ev_${n}`]:Math.round($*100/(_*4))},n==0){let e=m.length;for(let l=1;l<e;l++)_+=m[l].inputs.length,console.log($),g={...g,[`ev_${o}`]:a.target.value,[`sum_ev_${l}`]:$,[`res_ev_${l}`]:Math.round($*100/(_*4))};c(g);return}c(g)}})};export{C as default};