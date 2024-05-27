import{r as h,M as F,a as E,F as S}from"./index-39e09190.js";import{C as y}from"./ContainerForm-777b056e.js";const D=[{routeSection:"automotrices",nameSection:"Sistemas Automotrices",nameForm:"Chassis",nextSection:"Frenos",prevSection:"Suspensión",nextRoute:"",prevRoute:"suspension"}],u=[{name:"",inputs:[{label:"Largeros",nameElement:"largeros"},{label:"Travesaños",nameElement:"travesanos"},{label:"Soportes",nameElement:"soportes"},{label:"Sujeciones",nameElement:"sujeciones"},{label:"Acoplamientos",nameElement:"acoplamientos"},{label:"Acorazados",nameElement:"acorazados"},{label:"Empalmes",nameElement:"empalmes"}]}],I=()=>{const[i,c]=h.useState({select_largeros:"",select_travesanos:"",select_soportes:"",select_sujeciones:"",select_acoplamientos:"",select_acorazados:"",select_empalmes:"",au_largeros:"0",or_largeros:"0",rt_largeros:"0",rc_largeros:"0",ev_largeros:"0",observaciones_largeros:"",au_travesanos:"0",or_travesanos:"0",rt_travesanos:"0",rc_travesanos:"0",ev_travesanos:"0",observaciones_travesanos:"",au_soportes:"0",or_soportes:"0",rt_soportes:"0",rc_soportes:"0",ev_soportes:"0",observaciones_soportes:"",au_sujeciones:"0",or_sujeciones:"0",rt_sujeciones:"0",rc_sujeciones:"0",ev_sujeciones:"0",observaciones_sujeciones:"",au_acoplamientos:"0",or_acoplamientos:"0",rt_acoplamientos:"0",rc_acoplamientos:"0",ev_acoplamientos:"0",observaciones_acoplamientos:"",au_acorazados:"0",or_acorazados:"0",rt_acorazados:"0",rc_acorazados:"0",ev_acorazados:"0",observaciones_acorazados:"",au_empalmes:"0",or_empalmes:"0",rt_empalmes:"0",rc_empalmes:"0",ev_empalmes:"0",observaciones_empalmes:""}),[f,b]=h.useState({}),{dataDictamen:d}=h.useContext(F);return h.useEffect(()=>{d&&d.automotrices&&d.automotrices.sitemas_automotrices_chassis&&c({...i,...d.automotrices.sitemas_automotrices_chassis})},[]),E(y,{handleForm:a=>{a.preventDefault();const s=S.getInstance();s.setData(i),s.guardarAutomotricesChassis()},data:D,inputs:u,handleInput:a=>{let s;if(a.target.localName=="ion-select")return;let o,r;if(a.target.localName!="ion-input"){let n=f[a.target.name],p=a.target.name.split("_")[1];if(!a.target.value){if(o=n.split("_")[1],r=n.split("_")[2],s=u[r].inputs.length,r>0){s=0;for(let m=0;m<=r;m++)s+=u[m].inputs.length}let t={...i};if(t={...t,[n]:t[n]-1||0,[`select_${p}`]:"",[`res_${o}_${r}`]:parseInt((t[n]-1||0)*100/s)},r==0){let m=u.length;for(let g=1;g<m;g++)s+=u[g].inputs.length,t={...t,[`sum_${o}_${g}`]:t[n]||0,[`res_${o}_${g}`]:Math.round((t[n]||0)*100/s)};c(t);return}c(t);return}let _=a.target.value.split("-")[0],$=a.target.value.split("-")[1],e=_.split("_")[1],l=$.split("_")[1];if(r=_.split("_")[2],s=u[r].inputs.length,b({...f,[a.target.name]:_}),i[n]>0){if(o=n.split("_")[1],r>0){s=0;for(let m=0;m<=r;m++)s+=u[m].inputs.length}let t={...i};if(i[`sum_${e}_0`]&&o==e){t={...t,[`sum_${e}_${r}`]:t[_]+1||1,[$]:a.target.value,[`au_${l}`]:0,[`or_${l}`]:0,[`rt_${l}`]:0,[`rc_${l}`]:0,[`${e}_${l}`]:1,[`res_${e}_${r}`]:Math.round((t[_]+1||1)*100/s)},c(t);return}t={...t,[_]:t[_]+1||1,[n]:t[n]-1||0,[$]:a.target.value,[`au_${l}`]:0,[`or_${l}`]:0,[`rt_${l}`]:0,[`rc_${l}`]:0,[`${e}_${l}`]:1,[`res_${e}_${r}`]:Math.round((t[_]+1||1)*100/s),[`res_${o}_${r}`]:Math.round((t[n]-1||0)*100/s)},c(t);return}if(r>0){s=0;for(let t=0;t<=r;t++)s+=u[t].inputs.length}let v={...i};if(v={...v,[`sum_${e}_${r}`]:v[_]+1||1,[$]:a.target.value,[`au_${l}`]:0,[`or_${l}`]:0,[`rt_${l}`]:0,[`rc_${l}`]:0,[`${e}_${l}`]:1,[`res_${e}_${r}`]:Math.round((v[_]+1||1)*100/s)},r==0){let t=u.length;console.log(s);for(let m=1;m<t;m++)s+=u[m].inputs.length,v={...v,[`sum_${e}_${m}`]:v[[`sum_${e}_${m}`]]+1||1,[`res_${e}_${m}`]:Math.round((v[[`sum_${e}_${m}`]]+1||1)*100/s)};c(v);return}c(v)}else c({...i,[a.target.name]:a.target.value})},dataForm:i,handleInputSelect:a=>{console.clear();let s=a.target.name.split("_")[a.target.name.split("_").length-1],o=a.target.name.split("_")[a.target.name.split("_").length-2],r=a.target.name.split("_")[a.target.name.split("_").length-3],n=[],p=0,_=u[o].inputs.length;i[`ev_${o}`]?(n.push(...i[`ev_${o}`]),n[s]=a.target.value,c({...i,[`ev_${o}`]:n})):(c({...i,[`ev_${o}`]:[a.target.value]}),n[s]=a.target.value);for(let e=0;e<n.length;e++)n[e]||(n[e]="0");if(n.map(e=>{p+=parseInt(e)||0}),o>0){_=0;for(let e=0;e<=o;e++)_+=u[e].inputs.length}if(i.sum_ev_0&&o==1){console.warn("Exist"),p+=i.sum_ev_0;let e={...i};console.log(_*4),e={...e,[`ev_${o}`]:n,[`ev_${r}`]:a.target.value,[`sum_ev_${o}`]:p,[`res_ev_${o}`]:Math.round(p*100/(_*4))},c(e);return}let $={...i};if($={...$,[`ev_${o}`]:n,[`ev_${r}`]:a.target.value,[`sum_ev_${o}`]:p,[`res_ev_${o}`]:Math.round(p*100/(_*4))},o==0){let e=u.length;for(let l=1;l<e;l++)_+=u[l].inputs.length,console.log(p),$={...$,[`ev_${r}`]:a.target.value,[`sum_ev_${l}`]:p,[`res_ev_${l}`]:Math.round(p*100/(_*4))};c($);return}c($)}})};export{I as default};
