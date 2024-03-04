import{r as h,M as j,a as C,F}from"./index-39e09190.js";import{C as E}from"./ContainerForm-777b056e.js";const y=[{routeSection:"interiores",nameSection:"Interiores",nameForm:"Domo Trasero y/o Cajuela",nextSection:"Luces Interiores",prevSection:"Puertas y/o Lienzos Fijos",nextRoute:"lucesInteriores",prevRoute:"puertasLienzosFijos"}],c=[{name:"",inputs:[{label:"Estado",nameElement:"estado"},{label:"Tapas",nameElement:"tapas"},{label:"Autoparlantes",nameElement:"autoparlantes"},{label:"Manijas",nameElement:"manijas"},{label:"Molduras",nameElement:"molduras"},{label:"Sujeciones",nameElement:"sujeciones"},{label:"Cableados y Conectores",nameElement:"cableadosConectores"},{label:"Otros",nameElement:"otros"}]}],Q=()=>{const[i,m]=h.useState({select_estado:"",select_tapas:"",select_autoparlantes:"",select_manijas:"",select_molduras:"",select_sujeciones:"",select_cableadosConectores:"",select_otros:"",au_estado:"0",or_estado:"0",rt_estado:"0",rc_estado:"0",ev_estado:"0",observaciones_estado:" ",au_tapas:"0",or_tapas:"0",rt_tapas:"0",rc_tapas:"0",ev_tapas:"0",observaciones_tapas:" ",au_autoparlantes:"0",or_autoparlantes:"0",rt_autoparlantes:"0",rc_autoparlantes:"0",ev_autoparlantes:"0",observaciones_autoparlantes:" ",au_manijas:"0",or_manijas:"0",rt_manijas:"0",rc_manijas:"0",ev_manijas:"0",observaciones_manijas:" ",au_molduras:"0",or_molduras:"0",rt_molduras:"0",rc_molduras:"0",ev_molduras:"0",observaciones_molduras:" ",au_sujeciones:"0",or_sujeciones:"0",rt_sujeciones:"0",rc_sujeciones:"0",ev_sujeciones:"0",observaciones_sujeciones:" ",au_cableadosConectores:"0",or_cableadosConectores:"0",rt_cableadosConectores:"0",rc_cableadosConectores:"0",ev_cableadosConectores:"0",observaciones_cableadosConectores:" ",au_otros:"0",or_otros:"0",rt_otros:"0",rc_otros:"0",ev_otros:"0",observaciones_otros:" "}),[f,b]=h.useState({}),{dataDictamen:g}=h.useContext(j);return h.useEffect(()=>{g&&g.interiores&&g.interiores.interiores_domo_trasero_cajuela&&m({...i,...g.interiores.interiores_domo_trasero_cajuela})},[]),C(E,{handleForm:a=>{a.preventDefault();const s=F.getInstance();s.setData(i),s.guardarInterioresDomoTraseroCajuela()},data:y,inputs:c,handleInput:a=>{let s;if(a.target.localName=="ion-select")return;let o,r;if(a.target.localName!="ion-input"){let n=f[a.target.name],p=a.target.name.split("_")[1];if(!a.target.value){if(o=n.split("_")[1],r=n.split("_")[2],s=c[r].inputs.length,r>0){s=0;for(let u=0;u<=r;u++)s+=c[u].inputs.length}let t={...i};if(t={...t,[n]:t[n]-1||0,[`select_${p}`]:"",[`res_${o}_${r}`]:parseInt((t[n]-1||0)*100/s)},r==0){let u=c.length;for(let v=1;v<u;v++)s+=c[v].inputs.length,t={...t,[`sum_${o}_${v}`]:t[n]||0,[`res_${o}_${v}`]:Math.round((t[n]||0)*100/s)};m(t);return}m(t);return}let _=a.target.value.split("-")[0],$=a.target.value.split("-")[1],e=_.split("_")[1],l=$.split("_")[1];if(r=_.split("_")[2],s=c[r].inputs.length,b({...f,[a.target.name]:_}),i[n]>0){if(o=n.split("_")[1],r>0){s=0;for(let u=0;u<=r;u++)s+=c[u].inputs.length}let t={...i};if(i[`sum_${e}_0`]&&o==e){t={...t,[`sum_${e}_${r}`]:t[_]+1||1,[$]:a.target.value,[`au_${l}`]:0,[`or_${l}`]:0,[`rt_${l}`]:0,[`rc_${l}`]:0,[`${e}_${l}`]:1,[`res_${e}_${r}`]:Math.round((t[_]+1||1)*100/s)},m(t);return}t={...t,[_]:t[_]+1||1,[n]:t[n]-1||0,[$]:a.target.value,[`au_${l}`]:0,[`or_${l}`]:0,[`rt_${l}`]:0,[`rc_${l}`]:0,[`${e}_${l}`]:1,[`res_${e}_${r}`]:Math.round((t[_]+1||1)*100/s),[`res_${o}_${r}`]:Math.round((t[n]-1||0)*100/s)},m(t);return}if(r>0){s=0;for(let t=0;t<=r;t++)s+=c[t].inputs.length}let d={...i};if(d={...d,[`sum_${e}_${r}`]:d[_]+1||1,[$]:a.target.value,[`au_${l}`]:0,[`or_${l}`]:0,[`rt_${l}`]:0,[`rc_${l}`]:0,[`${e}_${l}`]:1,[`res_${e}_${r}`]:Math.round((d[_]+1||1)*100/s)},r==0){let t=c.length;console.log(s);for(let u=1;u<t;u++)s+=c[u].inputs.length,d={...d,[`sum_${e}_${u}`]:d[[`sum_${e}_${u}`]]+1||1,[`res_${e}_${u}`]:Math.round((d[[`sum_${e}_${u}`]]+1||1)*100/s)};m(d);return}m(d)}else m({...i,[a.target.name]:a.target.value})},dataForm:i,handleInputSelect:a=>{console.clear();let s=a.target.name.split("_")[a.target.name.split("_").length-1],o=a.target.name.split("_")[a.target.name.split("_").length-2],r=a.target.name.split("_")[a.target.name.split("_").length-3],n=[],p=0,_=c[o].inputs.length;i[`ev_${o}`]?(n.push(...i[`ev_${o}`]),n[s]=a.target.value,m({...i,[`ev_${o}`]:n})):(m({...i,[`ev_${o}`]:[a.target.value]}),n[s]=a.target.value);for(let e=0;e<n.length;e++)n[e]||(n[e]="0");if(n.map(e=>{p+=parseInt(e)||0}),o>0){_=0;for(let e=0;e<=o;e++)_+=c[e].inputs.length}if(i.sum_ev_0&&o==1){console.warn("Exist"),p+=i.sum_ev_0;let e={...i};console.log(_*4),e={...e,[`ev_${o}`]:n,[`ev_${r}`]:a.target.value,[`sum_ev_${o}`]:p,[`res_ev_${o}`]:Math.round(p*100/(_*4))},m(e);return}let $={...i};if($={...$,[`ev_${o}`]:n,[`ev_${r}`]:a.target.value,[`sum_ev_${o}`]:p,[`res_ev_${o}`]:Math.round(p*100/(_*4))},o==0){let e=c.length;for(let l=1;l<e;l++)_+=c[l].inputs.length,console.log(p),$={...$,[`ev_${r}`]:a.target.value,[`sum_ev_${l}`]:p,[`res_ev_${l}`]:Math.round(p*100/(_*4))};m($);return}m($)}})};export{Q as default};
