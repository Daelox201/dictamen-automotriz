import{r as $,M as h,a as S,F as x}from"./index-39e09190.js";import{C as F}from"./ContainerForm-777b056e.js";const B=[{routeSection:"automotrices",nameSection:"Sistemas Automotrices",nameForm:"Frenos",nextSection:"Trasmisión",prevSection:"Chassis",nextRoute:"trasmision",prevRoute:"chassis"}],u=[{name:"",inputs:[{label:"Discos",nameElement:"discos"},{label:"Tambores",nameElement:"tambores"},{label:"Guardas",nameElement:"guardas"},{label:"Bases",nameElement:"bases"},{label:"Bomba Principal de Freno",nameElement:"bombaFreno"},{label:"Cilindros de Rueda",nameElement:"cilindroRueda"},{label:"Mangueras y Ductos",nameElement:"manguerasDuctos"},{label:"Conexiones H&N",nameElement:"conexionesHN"},{label:"Fugas",nameElement:"fugas"},{label:"Soportes",nameElement:"soportes"},{label:"Sujeciones",nameElement:"sujeciones"},{label:"Otros",nameElement:"otros"}]},{name:"Con control Electronico",inputs:[{label:"Modulos ABS",nameElement:"modulosABS"},{label:"Sensores ABS",nameElement:"sensoresABS"},{label:"Cableados y Conectores",nameElement:"cableadosConectores"},{label:"Conexiones E&E",nameElement:"conexionesEE"}]}],R=()=>{const[c,m]=$.useState({select_discos:"",select_tambores:"",select_guardas:"",select_bases:"",select_bombaFreno:"",select_acorazados:"",select_cilindroRueda:"",select_manguerasDuctos:"",select_conexionesHN:"",select_fugas:"",select_soportes:"",select_sujeciones:"",select_otros:"",select_modulosABS:"",select_sensoresABS:"",select_cableadosConectores:"",select_conexionesEE:"",au_discos:"0",or_discos:"0",rt_discos:"0",rc_discos:"0",ev_discos:"0",observaciones_discos:"",au_tambores:"0",or_tambores:"0",rt_tambores:"0",rc_tambores:"0",ev_tambores:"0",observaciones_tambores:"",au_guardas:"0",or_guardas:"0",rt_guardas:"0",rc_guardas:"0",ev_guardas:"0",observaciones_guardas:"",au_bases:"0",or_bases:"0",rt_bases:"0",rc_bases:"0",ev_bases:"0",observaciones_bases:"",au_bombaFreno:"0",or_bombaFreno:"0",rt_bombaFreno:"0",rc_bombaFreno:"0",ev_bombaFreno:"0",observaciones_bombaFreno:"",au_cilindroRueda:"0",or_cilindroRueda:"0",rt_cilindroRueda:"0",rc_cilindroRueda:"0",ev_cilindroRueda:"0",observaciones_cilindroRueda:"",au_manguerasDuctos:"0",or_manguerasDuctos:"0",rt_manguerasDuctos:"0",rc_manguerasDuctos:"0",ev_manguerasDuctos:"0",observaciones_manguerasDuctos:"",au_conexionesHN:"0",or_conexionesHN:"0",rt_conexionesHN:"0",rc_conexionesHN:"0",ev_conexionesHN:"0",observaciones_conexionesHN:"",au_fugas:"0",or_fugas:"0",rt_fugas:"0",rc_fugas:"0",ev_fugas:"0",observaciones_fugas:"",au_soportes:"0",or_soportes:"0",rt_soportes:"0",rc_soportes:"0",ev_soportes:"0",observaciones_soportes:"",au_sujeciones:"0",or_sujeciones:"0",rt_sujeciones:"0",rc_sujeciones:"0",ev_sujeciones:"0",observaciones_sujeciones:"",au_otros:"0",or_otros:"0",rt_otros:"0",rc_otros:"0",ev_otros:"0",observaciones_otros:"",au_modulosABS:"0",or_modulosABS:"0",rt_modulosABS:"0",rc_modulosABS:"0",ev_modulosABS:"0",observaciones_modulosABS:"",au_sensoresABS:"0",or_sensoresABS:"0",rt_sensoresABS:"0",rc_sensoresABS:"0",ev_sensoresABS:"0",observaciones_sensoresABS:"",au_cableadosConectores:"0",or_cableadosConectores:"0",rt_cableadosConectores:"0",rc_cableadosConectores:"0",ev_cableadosConectores:"0",observaciones_cableadosConectores:"",au_conexionesEE:"0",or_conexionesEE:"0",rt_conexionesEE:"0",rc_conexionesEE:"0",ev_conexionesEE:"0",observaciones_conexionesEE:""}),[f,E]=$.useState({}),{dataDictamen:p}=$.useContext(h);return $.useEffect(()=>{p&&p.automotrices&&p.automotrices.sitemas_automotrices_frenos&&m({...c,...p.automotrices.sitemas_automotrices_frenos})},[]),S(F,{handleForm:t=>{t.preventDefault();const o=x.getInstance();o.setData(c),o.guardarAutomotricesFrenos()},data:B,inputs:u,dataForm:c,handleInput:t=>{let o;if(t.target.localName=="ion-select")return;let a,r;if(t.target.localName!="ion-input"){let n=f[t.target.name],d=t.target.name.split("_")[1];if(!t.target.value){if(a=n.split("_")[1],r=n.split("_")[2],o=u[r].inputs.length,r>0){o=0;for(let i=0;i<=r;i++)o+=u[i].inputs.length}let s={...c};if(s={...s,[n]:s[n]-1||0,[`select_${d}`]:"",[`res_${a}_${r}`]:parseInt((s[n]-1||0)*100/o)},r==0){let i=u.length;for(let v=1;v<i;v++)o+=u[v].inputs.length,s={...s,[`sum_${a}_${v}`]:s[n]||0,[`res_${a}_${v}`]:Math.round((s[n]||0)*100/o)};m(s);return}m(s);return}let _=t.target.value.split("-")[0],b=t.target.value.split("-")[1],e=_.split("_")[1],l=b.split("_")[1];if(r=_.split("_")[2],o=u[r].inputs.length,E({...f,[t.target.name]:_}),c[n]>0){if(a=n.split("_")[1],r>0){o=0;for(let i=0;i<=r;i++)o+=u[i].inputs.length}let s={...c};if(c[`sum_${e}_0`]&&a==e){s={...s,[`sum_${e}_${r}`]:s[_]+1||1,[b]:t.target.value,[`au_${l}`]:0,[`or_${l}`]:0,[`rt_${l}`]:0,[`rc_${l}`]:0,[`${e}_${l}`]:1,[`res_${e}_${r}`]:Math.round((s[_]+1||1)*100/o)},m(s);return}s={...s,[_]:s[_]+1||1,[n]:s[n]-1||0,[b]:t.target.value,[`au_${l}`]:0,[`or_${l}`]:0,[`rt_${l}`]:0,[`rc_${l}`]:0,[`${e}_${l}`]:1,[`res_${e}_${r}`]:Math.round((s[_]+1||1)*100/o),[`res_${a}_${r}`]:Math.round((s[n]-1||0)*100/o)},m(s);return}if(r>0){o=0;for(let s=0;s<=r;s++)o+=u[s].inputs.length}let g={...c};if(g={...g,[`sum_${e}_${r}`]:g[_]+1||1,[b]:t.target.value,[`au_${l}`]:0,[`or_${l}`]:0,[`rt_${l}`]:0,[`rc_${l}`]:0,[`${e}_${l}`]:1,[`res_${e}_${r}`]:Math.round((g[_]+1||1)*100/o)},r==0){let s=u.length;console.log(o);for(let i=1;i<s;i++)o+=u[i].inputs.length,g={...g,[`sum_${e}_${i}`]:g[[`sum_${e}_${i}`]]+1||1,[`res_${e}_${i}`]:Math.round((g[[`sum_${e}_${i}`]]+1||1)*100/o)};m(g);return}m(g)}else m({...c,[t.target.name]:t.target.value})},handleInputSelect:t=>{console.clear();let o=t.target.name.split("_")[t.target.name.split("_").length-1],a=t.target.name.split("_")[t.target.name.split("_").length-2],r=t.target.name.split("_")[t.target.name.split("_").length-3],n=[],d=0,_=u[a].inputs.length;c[`ev_${a}`]?(n.push(...c[`ev_${a}`]),n[o]=t.target.value,m({...c,[`ev_${a}`]:n})):(m({...c,[`ev_${a}`]:[t.target.value]}),n[o]=t.target.value);for(let e=0;e<n.length;e++)n[e]||(n[e]="0");if(n.map(e=>{d+=parseInt(e)||0}),a>0){_=0;for(let e=0;e<=a;e++)_+=u[e].inputs.length}if(c.sum_ev_0&&a==1){console.warn("Exist"),d+=c.sum_ev_0;let e={...c};console.log(_*4),e={...e,[`ev_${a}`]:n,[`ev_${r}`]:t.target.value,[`sum_ev_${a}`]:d,[`res_ev_${a}`]:Math.round(d*100/(_*4))},m(e);return}let b={...c};if(b={...b,[`ev_${a}`]:n,[`ev_${r}`]:t.target.value,[`sum_ev_${a}`]:d,[`res_ev_${a}`]:Math.round(d*100/(_*4))},a==0){let e=u.length;for(let l=1;l<e;l++)_+=u[l].inputs.length,console.log(d),b={...b,[`ev_${r}`]:t.target.value,[`sum_ev_${l}`]:d,[`res_ev_${l}`]:Math.round(d*100/(_*4))};m(b);return}m(b)}})};export{R as default};