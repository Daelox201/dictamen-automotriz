import{r as h,M as F,a as M,F as y}from"./index-39e09190.js";import{C as D}from"./ContainerForm-777b056e.js";const j=[{routeSection:"carroceria",nameSection:"Carrocería",nameForm:"Molduras",nextSection:"Luces",prevSection:"Accesorios",nextRoute:"luces",prevRoute:"accesorios"}],u=[{name:"",inputs:[{label:"Completas",nameElement:"completas"},{label:"Acabados y Terminados",nameElement:"acabadosTerminados"},{label:"Sujeciones",nameElement:"sujeciones"},{label:"Otros",nameElement:"otros"}]}],I=()=>{const[i,m]=h.useState({select_completas:"",select_acabadosTerminados:"",select_sujeciones:"",select_otros:"",au_completas:"0",or_completas:"0",rt_completas:"0",rc_completas:"0",ev_completas:"0",observaciones_completas:" ",au_acabadosTerminados:"0",or_acabadosTerminados:"0",rt_acabadosTerminados:"0",rc_acabadosTerminados:"0",ev_acabadosTerminados:"0",observaciones_acabadosTerminados:" ",au_sujeciones:"0",or_sujeciones:"0",rt_sujeciones:"0",rc_sujeciones:"0",ev_sujeciones:"0",observaciones_sujeciones:" ",au_otros:"0",or_otros:"0",rt_otros:"0",rc_otros:"0",ev_otros:"0",observaciones_otros:" "}),[f,b]=h.useState({}),{dataDictamen:v}=h.useContext(F);return h.useEffect(()=>{v&&v.carroceria&&v.carroceria.carroceria_molduras&&m({...i,...v.carroceria.carroceria_molduras})},[]),M(D,{handleForm:a=>{a.preventDefault();const r=y.getInstance();r.setData(i),r.guardarCarroceriaMolduras()},data:j,inputs:u,handleInput:a=>{let r;if(a.target.localName=="ion-select")return;let s,o;if(a.target.localName!="ion-input"){let n=f[a.target.name],p=a.target.name.split("_")[1];if(!a.target.value){if(s=n.split("_")[1],o=n.split("_")[2],r=u[o].inputs.length,o>0){r=0;for(let c=0;c<=o;c++)r+=u[c].inputs.length}let t={...i};if(t={...t,[n]:t[n]-1||0,[`select_${p}`]:"",[`res_${s}_${o}`]:parseInt((t[n]-1||0)*100/r)},o==0){let c=u.length;for(let g=1;g<c;g++)r+=u[g].inputs.length,t={...t,[`sum_${s}_${g}`]:t[n]||0,[`res_${s}_${g}`]:Math.round((t[n]||0)*100/r)};m(t);return}m(t);return}let _=a.target.value.split("-")[0],$=a.target.value.split("-")[1],e=_.split("_")[1],l=$.split("_")[1];if(o=_.split("_")[2],r=u[o].inputs.length,b({...f,[a.target.name]:_}),i[n]>0){if(s=n.split("_")[1],o>0){r=0;for(let c=0;c<=o;c++)r+=u[c].inputs.length}let t={...i};if(i[`sum_${e}_0`]&&s==e){t={...t,[`sum_${e}_${o}`]:t[_]+1||1,[$]:a.target.value,[`au_${l}`]:0,[`or_${l}`]:0,[`rt_${l}`]:0,[`rc_${l}`]:0,[`${e}_${l}`]:1,[`res_${e}_${o}`]:Math.round((t[_]+1||1)*100/r)},m(t);return}t={...t,[_]:t[_]+1||1,[n]:t[n]-1||0,[$]:a.target.value,[`au_${l}`]:0,[`or_${l}`]:0,[`rt_${l}`]:0,[`rc_${l}`]:0,[`${e}_${l}`]:1,[`res_${e}_${o}`]:Math.round((t[_]+1||1)*100/r),[`res_${s}_${o}`]:Math.round((t[n]-1||0)*100/r)},m(t);return}if(o>0){r=0;for(let t=0;t<=o;t++)r+=u[t].inputs.length}let d={...i};if(d={...d,[`sum_${e}_${o}`]:d[_]+1||1,[$]:a.target.value,[`au_${l}`]:0,[`or_${l}`]:0,[`rt_${l}`]:0,[`rc_${l}`]:0,[`${e}_${l}`]:1,[`res_${e}_${o}`]:Math.round((d[_]+1||1)*100/r)},o==0){let t=u.length;console.log(r);for(let c=1;c<t;c++)r+=u[c].inputs.length,d={...d,[`sum_${e}_${c}`]:d[[`sum_${e}_${c}`]]+1||1,[`res_${e}_${c}`]:Math.round((d[[`sum_${e}_${c}`]]+1||1)*100/r)};m(d);return}m(d)}else m({...i,[a.target.name]:a.target.value})},dataForm:i,handleInputSelect:a=>{console.clear();let r=a.target.name.split("_")[a.target.name.split("_").length-1],s=a.target.name.split("_")[a.target.name.split("_").length-2],o=a.target.name.split("_")[a.target.name.split("_").length-3],n=[],p=0,_=u[s].inputs.length;i[`ev_${s}`]?(n.push(...i[`ev_${s}`]),n[r]=a.target.value,m({...i,[`ev_${s}`]:n})):(m({...i,[`ev_${s}`]:[a.target.value]}),n[r]=a.target.value);for(let e=0;e<n.length;e++)n[e]||(n[e]="0");if(n.map(e=>{p+=parseInt(e)||0}),s>0){_=0;for(let e=0;e<=s;e++)_+=u[e].inputs.length}if(i.sum_ev_0&&s==1){console.warn("Exist"),p+=i.sum_ev_0;let e={...i};console.log(_*4),e={...e,[`ev_${s}`]:n,[`ev_${o}`]:a.target.value,[`sum_ev_${s}`]:p,[`res_ev_${s}`]:Math.round(p*100/(_*4))},m(e);return}let $={...i};if($={...$,[`ev_${s}`]:n,[`ev_${o}`]:a.target.value,[`sum_ev_${s}`]:p,[`res_ev_${s}`]:Math.round(p*100/(_*4))},s==0){let e=u.length;for(let l=1;l<e;l++)_+=u[l].inputs.length,console.log(p),$={...$,[`ev_${o}`]:a.target.value,[`sum_ev_${l}`]:p,[`res_ev_${l}`]:Math.round(p*100/(_*4))};m($);return}m($)}})};export{I as default};