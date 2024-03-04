import{r as j,M as h,a as E,F}from"./index-39e09190.js";import{C}from"./ContainerForm-777b056e.js";const y=[{routeSection:"interiores",nameSection:"Interiores",nameForm:"Puertas y/o Lienzos Fijos",nextSection:"Domo Trasero y/o Cajuela",prevSection:"Tablero",nextRoute:"domoTraseroCajuela",prevRoute:"tablero"}],c=[{name:"",inputs:[{label:"Estado",nameElement:"estado"},{label:"Tapas",nameElement:"tapas"},{label:"Autoparlantes",nameElement:"autoparlantes"},{label:"Manijas",nameElement:"manijas"},{label:"Seguros",nameElement:"seguros"},{label:"Elevadores",nameElement:"elevadores"},{label:"Almacenaje",nameElement:"almacenaje"},{label:"Control Espejos",nameElement:"controlEspejos"},{label:"Molduras",nameElement:"molduras"},{label:"Sujeciones",nameElement:"sujeciones"},{label:"Cableados y Conectores",nameElement:"cableadosConectores"},{label:"Otros",nameElement:"otros"}]}],z=()=>{const[u,m]=j.useState({select_estado:"",select_tapas:"",select_autoparlantes:"",select_manijas:"",select_seguros:"",select_elevadores:"",select_almacenaje:"",select_controlEspejos:"",select_molduras:"",select_sujeciones:"",select_cableadosConectores:"",select_otros:"",au_estado:"0",or_estado:"0",rt_estado:"0",rc_estado:"0",ev_estado:"0",observaciones_estado:" ",au_tapas:"0",or_tapas:"0",rt_tapas:"0",rc_tapas:"0",ev_tapas:"0",observaciones_tapas:" ",au_autoparlantes:"0",or_autoparlantes:"0",rt_autoparlantes:"0",rc_autoparlantes:"0",ev_autoparlantes:"0",observaciones_autoparlantes:" ",au_manijas:"0",or_manijas:"0",rt_manijas:"0",rc_manijas:"0",ev_manijas:"0",observaciones_manijas:" ",au_seguros:"0",or_seguros:"0",rt_seguros:"0",rc_seguros:"0",ev_seguros:"0",observaciones_seguros:" ",au_elevadores:"0",or_elevadores:"0",rt_elevadores:"0",rc_elevadores:"0",ev_elevadores:"0",observaciones_elevadores:" ",au_almacenaje:"0",or_almacenaje:"0",rt_almacenaje:"0",rc_almacenaje:"0",ev_almacenaje:"0",observaciones_almacenaje:" ",au_controlEspejos:"0",or_controlEspejos:"0",rt_controlEspejos:"0",rc_controlEspejos:"0",ev_controlEspejos:"0",observaciones_controlEspejos:" ",au_molduras:"0",or_molduras:"0",rt_molduras:"0",rc_molduras:"0",ev_molduras:"0",observaciones_molduras:" ",au_sujeciones:"0",or_sujeciones:"0",rt_sujeciones:"0",rc_sujeciones:"0",ev_sujeciones:"0",observaciones_sujeciones:" ",au_cableadosConectores:"0",or_cableadosConectores:"0",rt_cableadosConectores:"0",rc_cableadosConectores:"0",ev_cableadosConectores:"0",observaciones_cableadosConectores:" ",au_otros:"0",or_otros:"0",rt_otros:"0",rc_otros:"0",ev_otros:"0",observaciones_otros:" "}),[b,f]=j.useState({}),{dataDictamen:g}=j.useContext(h);return j.useEffect(()=>{g&&g.interiores&&g.interiores.interiores_puertas_lienzos_fijos&&m({...u,...g.interiores.interiores_puertas_lienzos_fijos})},[]),E(C,{handleForm:a=>{a.preventDefault();const s=F.getInstance();s.setData(u),s.guardarInterioresPuertasLienzosFijos()},data:y,inputs:c,handleInput:a=>{let s;if(a.target.localName=="ion-select")return;let o,r;if(a.target.localName!="ion-input"){let n=b[a.target.name],p=a.target.name.split("_")[1];if(!a.target.value){if(o=n.split("_")[1],r=n.split("_")[2],s=c[r].inputs.length,r>0){s=0;for(let i=0;i<=r;i++)s+=c[i].inputs.length}let t={...u};if(t={...t,[n]:t[n]-1||0,[`select_${p}`]:"",[`res_${o}_${r}`]:parseInt((t[n]-1||0)*100/s)},r==0){let i=c.length;for(let $=1;$<i;$++)s+=c[$].inputs.length,t={...t,[`sum_${o}_${$}`]:t[n]||0,[`res_${o}_${$}`]:Math.round((t[n]||0)*100/s)};m(t);return}m(t);return}let _=a.target.value.split("-")[0],v=a.target.value.split("-")[1],e=_.split("_")[1],l=v.split("_")[1];if(r=_.split("_")[2],s=c[r].inputs.length,f({...b,[a.target.name]:_}),u[n]>0){if(o=n.split("_")[1],r>0){s=0;for(let i=0;i<=r;i++)s+=c[i].inputs.length}let t={...u};if(u[`sum_${e}_0`]&&o==e){t={...t,[`sum_${e}_${r}`]:t[_]+1||1,[v]:a.target.value,[`au_${l}`]:0,[`or_${l}`]:0,[`rt_${l}`]:0,[`rc_${l}`]:0,[`${e}_${l}`]:1,[`res_${e}_${r}`]:Math.round((t[_]+1||1)*100/s)},m(t);return}t={...t,[_]:t[_]+1||1,[n]:t[n]-1||0,[v]:a.target.value,[`au_${l}`]:0,[`or_${l}`]:0,[`rt_${l}`]:0,[`rc_${l}`]:0,[`${e}_${l}`]:1,[`res_${e}_${r}`]:Math.round((t[_]+1||1)*100/s),[`res_${o}_${r}`]:Math.round((t[n]-1||0)*100/s)},m(t);return}if(r>0){s=0;for(let t=0;t<=r;t++)s+=c[t].inputs.length}let d={...u};if(d={...d,[`sum_${e}_${r}`]:d[_]+1||1,[v]:a.target.value,[`au_${l}`]:0,[`or_${l}`]:0,[`rt_${l}`]:0,[`rc_${l}`]:0,[`${e}_${l}`]:1,[`res_${e}_${r}`]:Math.round((d[_]+1||1)*100/s)},r==0){let t=c.length;console.log(s);for(let i=1;i<t;i++)s+=c[i].inputs.length,d={...d,[`sum_${e}_${i}`]:d[[`sum_${e}_${i}`]]+1||1,[`res_${e}_${i}`]:Math.round((d[[`sum_${e}_${i}`]]+1||1)*100/s)};m(d);return}m(d)}else m({...u,[a.target.name]:a.target.value})},dataForm:u,handleInputSelect:a=>{console.clear();let s=a.target.name.split("_")[a.target.name.split("_").length-1],o=a.target.name.split("_")[a.target.name.split("_").length-2],r=a.target.name.split("_")[a.target.name.split("_").length-3],n=[],p=0,_=c[o].inputs.length;u[`ev_${o}`]?(n.push(...u[`ev_${o}`]),n[s]=a.target.value,m({...u,[`ev_${o}`]:n})):(m({...u,[`ev_${o}`]:[a.target.value]}),n[s]=a.target.value);for(let e=0;e<n.length;e++)n[e]||(n[e]="0");if(n.map(e=>{p+=parseInt(e)||0}),o>0){_=0;for(let e=0;e<=o;e++)_+=c[e].inputs.length}if(u.sum_ev_0&&o==1){console.warn("Exist"),p+=u.sum_ev_0;let e={...u};console.log(_*4),e={...e,[`ev_${o}`]:n,[`ev_${r}`]:a.target.value,[`sum_ev_${o}`]:p,[`res_ev_${o}`]:Math.round(p*100/(_*4))},m(e);return}let v={...u};if(v={...v,[`ev_${o}`]:n,[`ev_${r}`]:a.target.value,[`sum_ev_${o}`]:p,[`res_ev_${o}`]:Math.round(p*100/(_*4))},o==0){let e=c.length;for(let l=1;l<e;l++)_+=c[l].inputs.length,console.log(p),v={...v,[`ev_${r}`]:a.target.value,[`sum_ev_${l}`]:p,[`res_ev_${l}`]:Math.round(p*100/(_*4))};m(v);return}m(v)}})};export{z as default};