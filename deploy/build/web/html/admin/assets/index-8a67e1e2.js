var ve=(t,u,h)=>new Promise((m,f)=>{var b=k=>{try{g(h.next(k))}catch(y){f(y)}},I=k=>{try{g(h.throw(k))}catch(y){f(y)}},g=k=>k.done?m(k.value):Promise.resolve(k.value).then(b,I);g((h=h.apply(t,u)).next())});import{J as Re,v as p,D as Ke,E as Ge,G as We,F as Je,a0 as Qe,I as he,K as Xe,M as Me,L as Ye,r as _,O as Ze,P as et,a1 as D,Y as tt,a2 as it,Q as nt,a3 as lt,a4 as ge,a5 as be,a6 as ke,U as ye,a7 as we,V as $,T as at,a8 as ot,o as C,Z as q,a as o,w as c,u as i,a9 as Q,b as H,aa as ut,ab as dt,ac as rt,d as ce,k as j,p as st,c as oe,N as J,j as ct,$ as xe,q as mt,x as ft,y as ue}from"./index-f53dfd2d.js";import{_ as pt}from"./CommonPage-328ed173.js";import{_ as vt}from"./QueryBarItem-a7adc33b.js";import{_ as ht}from"./CrudModal-8441a1a6.js";import{_ as gt}from"./CrudTable-e7ebf5b4.js";import{u as bt,N as T}from"./Input-d1b207b8.js";import{u as kt}from"./useCRUD-6648f9c7.js";import{A as yt}from"./Add-8e2e4207.js";import{N as wt,a as M}from"./FormItem-9890d329.js";import{N as xt,a as _e}from"./RadioGroup-373382a0.js";import{b as _t}from"./Space-fc8792cb.js";import{N as de}from"./Switch-5cbaa6a9.js";import{N as It}from"./Popconfirm-7d90b5a9.js";import"./AppPage-64321f57.js";import"./Checkbox-23248bff.js";import"./Forward-fc22679e.js";import"./get-slot-1efb97e5.js";const Vt=Re({name:"Remove",render(){return p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},p("line",{x1:"400",y1:"256",x2:"112",y2:"256",style:`
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      `}))}}),Nt=t=>{const{textColorDisabled:u}=t;return{iconColorDisabled:u}},Bt=Ke({name:"InputNumber",common:Ge,peers:{Button:We,Input:Je},self:Nt}),Rt=Bt;function Mt(t){return t==null||typeof t=="string"&&t.trim()===""?null:Number(t)}function St(t){return t.includes(".")&&(/^(-)?\d+.*(\.|0)$/.test(t)||/^\.\d+$/.test(t))}function re(t){return t==null?!0:!Number.isNaN(t)}function Ie(t,u){return t==null?"":u===void 0?String(t):t.toFixed(u)}function se(t){if(t===null)return null;if(typeof t=="number")return t;{const u=Number(t);return Number.isNaN(u)?null:u}}const Ut=Qe([he("input-number-suffix",`
 display: inline-block;
 margin-right: 10px;
 `),he("input-number-prefix",`
 display: inline-block;
 margin-left: 10px;
 `)]),Ve=800,Ne=100,Ct=Object.assign(Object.assign({},Me.props),{autofocus:Boolean,loading:{type:Boolean,default:void 0},placeholder:String,defaultValue:{type:Number,default:null},value:Number,step:{type:[Number,String],default:1},min:[Number,String],max:[Number,String],size:String,disabled:{type:Boolean,default:void 0},validator:Function,bordered:{type:Boolean,default:void 0},showButton:{type:Boolean,default:!0},buttonPlacement:{type:String,default:"right"},readonly:Boolean,clearable:Boolean,keyboard:{type:Object,default:{}},updateValueOnInput:{type:Boolean,default:!0},parse:Function,format:Function,precision:Number,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onChange:[Function,Array]}),Dt=Re({name:"InputNumber",props:Ct,setup(t){const{mergedBorderedRef:u,mergedClsPrefixRef:h,mergedRtlRef:m}=Xe(t),f=Me("InputNumber","-input-number",Ut,Rt,t,h),{localeRef:b}=bt("InputNumber"),I=Ye(t),{mergedSizeRef:g,mergedDisabledRef:k,mergedStatusRef:y}=I,w=_(null),s=_(null),K=_(null),S=_(t.defaultValue),X=Ze(t,"value"),x=et(X,S),B=_(""),l=e=>{const n=String(e).split(".")[1];return n?n.length:0},d=e=>{const n=[t.min,t.max,t.step,e].map(a=>a===void 0?0:l(a));return Math.max(...n)},r=D(()=>{const{placeholder:e}=t;return e!==void 0?e:b.value.placeholder}),F=D(()=>{const e=se(t.step);return e!==null?e===0?1:Math.abs(e):1}),me=D(()=>{const e=se(t.min);return e!==null?e:null}),fe=D(()=>{const e=se(t.max);return e!==null?e:null}),A=e=>{const{value:n}=x;if(e===n){P();return}const{"onUpdate:value":a,onUpdateValue:v,onChange:N}=t,{nTriggerFormInput:R,nTriggerFormChange:O}=I;N&&$(N,e),v&&$(v,e),a&&$(a,e),S.value=e,R(),O()},V=({offset:e,doUpdateIfValid:n,fixPrecision:a,isInputing:v})=>{const{value:N}=B;if(v&&St(N))return!1;const R=(t.parse||Mt)(N);if(R===null)return n&&A(null),null;if(re(R)){const O=l(R),{precision:E}=t;if(E!==void 0&&E<O&&!a)return!1;let U=parseFloat((R+e).toFixed(E!=null?E:d(R)));if(re(U)){const{value:le}=fe,{value:ae}=me;if(le!==null&&U>le){if(!n||v)return!1;U=le}if(ae!==null&&U<ae){if(!n||v)return!1;U=ae}return t.validator&&!t.validator(U)?!1:(n&&A(U),U)}}return!1},P=()=>{const{value:e}=x;if(re(e)){const{format:n,precision:a}=t;n?B.value=n(e):e===null||a===void 0||l(e)>a?B.value=Ie(e,void 0):B.value=Ie(e,a)}else B.value=String(e)};P();const Se=D(()=>V({offset:0,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})===!1),Y=D(()=>{const{value:e}=x;if(t.validator&&e===null)return!1;const{value:n}=F;return V({offset:-n,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1}),Z=D(()=>{const{value:e}=x;if(t.validator&&e===null)return!1;const{value:n}=F;return V({offset:+n,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1});function Ue(e){const{onFocus:n}=t,{nTriggerFormFocus:a}=I;n&&$(n,e),a()}function Ce(e){var n,a;if(e.target===((n=w.value)===null||n===void 0?void 0:n.wrapperElRef))return;const v=V({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0});if(v!==!1){const O=(a=w.value)===null||a===void 0?void 0:a.inputElRef;O&&(O.value=String(v||"")),x.value===v&&P()}else P();const{onBlur:N}=t,{nTriggerFormBlur:R}=I;N&&$(N,e),R(),at(()=>{P()})}function De(e){const{onClear:n}=t;n&&$(n,e)}function ee(){const{value:e}=Z;if(!e){ne();return}const{value:n}=x;if(n===null)t.validator||A(pe());else{const{value:a}=F;V({offset:a,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}function te(){const{value:e}=Y;if(!e){ie();return}const{value:n}=x;if(n===null)t.validator||A(pe());else{const{value:a}=F;V({offset:-a,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}const Te=Ue,Fe=Ce;function pe(){if(t.validator)return null;const{value:e}=me,{value:n}=fe;return e!==null?Math.max(0,e):n!==null?Math.min(0,n):0}function Pe(e){De(e),A(null)}function Oe(e){var n,a,v;!((n=K.value)===null||n===void 0)&&n.$el.contains(e.target)&&e.preventDefault(),!((a=s.value)===null||a===void 0)&&a.$el.contains(e.target)&&e.preventDefault(),(v=w.value)===null||v===void 0||v.activate()}let z=null,L=null,G=null;function ie(){G&&(window.clearTimeout(G),G=null),z&&(window.clearInterval(z),z=null)}function ne(){W&&(window.clearTimeout(W),W=null),L&&(window.clearInterval(L),L=null)}function $e(){ie(),G=window.setTimeout(()=>{z=window.setInterval(()=>{te()},Ne)},Ve),be("mouseup",document,ie,{once:!0})}let W=null;function Ae(){ne(),W=window.setTimeout(()=>{L=window.setInterval(()=>{ee()},Ne)},Ve),be("mouseup",document,ne,{once:!0})}const ze=()=>{L||ee()},Le=()=>{z||te()};function Ee(e){var n,a;if(e.key==="Enter"){if(e.target===((n=w.value)===null||n===void 0?void 0:n.wrapperElRef))return;V({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&((a=w.value)===null||a===void 0||a.deactivate())}else if(e.key==="ArrowUp"){if(!Z.value||t.keyboard.ArrowUp===!1)return;e.preventDefault(),V({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&ee()}else if(e.key==="ArrowDown"){if(!Y.value||t.keyboard.ArrowDown===!1)return;e.preventDefault(),V({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&te()}}function qe(e){B.value=e,t.updateValueOnInput&&!t.format&&!t.parse&&t.precision===void 0&&V({offset:0,doUpdateIfValid:!0,isInputing:!0,fixPrecision:!1})}tt(x,()=>{P()});const je={focus:()=>{var e;return(e=w.value)===null||e===void 0?void 0:e.focus()},blur:()=>{var e;return(e=w.value)===null||e===void 0?void 0:e.blur()}},He=it("InputNumber",m,h);return Object.assign(Object.assign({},je),{rtlEnabled:He,inputInstRef:w,minusButtonInstRef:s,addButtonInstRef:K,mergedClsPrefix:h,mergedBordered:u,uncontrolledValue:S,mergedValue:x,mergedPlaceholder:r,displayedValueInvalid:Se,mergedSize:g,mergedDisabled:k,displayedValue:B,addable:Z,minusable:Y,mergedStatus:y,handleFocus:Te,handleBlur:Fe,handleClear:Pe,handleMouseDown:Oe,handleAddClick:ze,handleMinusClick:Le,handleAddMousedown:Ae,handleMinusMousedown:$e,handleKeyDown:Ee,handleUpdateDisplayedValue:qe,mergedTheme:f,inputThemeOverrides:{paddingSmall:"0 8px 0 10px",paddingMedium:"0 8px 0 12px",paddingLarge:"0 8px 0 14px"},buttonThemeOverrides:nt(()=>{const{self:{iconColorDisabled:e}}=f.value,[n,a,v,N]=lt(e);return{textColorTextDisabled:`rgb(${n}, ${a}, ${v})`,opacityDisabled:`${N}`}})})},render(){const{mergedClsPrefix:t,$slots:u}=this,h=()=>p(we,{text:!0,disabled:!this.minusable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleMinusClick,onMousedown:this.handleMinusMousedown,ref:"minusButtonInstRef"},{icon:()=>ke(u["minus-icon"],()=>[p(ye,{clsPrefix:t},{default:()=>p(Vt,null)})])}),m=()=>p(we,{text:!0,disabled:!this.addable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleAddClick,onMousedown:this.handleAddMousedown,ref:"addButtonInstRef"},{icon:()=>ke(u["add-icon"],()=>[p(ye,{clsPrefix:t},{default:()=>p(yt,null)})])});return p("div",{class:[`${t}-input-number`,this.rtlEnabled&&`${t}-input-number--rtl`]},p(T,{ref:"inputInstRef",autofocus:this.autofocus,status:this.mergedStatus,bordered:this.mergedBordered,loading:this.loading,value:this.displayedValue,onUpdateValue:this.handleUpdateDisplayedValue,theme:this.mergedTheme.peers.Input,themeOverrides:this.mergedTheme.peerOverrides.Input,builtinThemeOverrides:this.inputThemeOverrides,size:this.mergedSize,placeholder:this.mergedPlaceholder,disabled:this.mergedDisabled,readonly:this.readonly,textDecoration:this.displayedValueInvalid?"line-through":void 0,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onClear:this.handleClear,clearable:this.clearable,internalLoadingBeforeSuffix:!0},{prefix:()=>{var f;return this.showButton&&this.buttonPlacement==="both"?[h(),ge(u.prefix,b=>b?p("span",{class:`${t}-input-number-prefix`},b):null)]:(f=u.prefix)===null||f===void 0?void 0:f.call(u)},suffix:()=>{var f;return this.showButton?[ge(u.suffix,b=>b?p("span",{class:`${t}-input-number-suffix`},b):null),this.buttonPlacement==="right"?h():null,m()]:(f=u.suffix)===null||f===void 0?void 0:f.call(u)}}))}}),Be=["mdi-air-humidifier-off","mdi-chili-off","mdi-cigar-off","mdi-clock-time-eight","mdi-clock-time-eight-outline","mdi-clock-time-eleven","mdi-clock-time-eleven-outline","mdi-clock-time-five","mdi-clock-time-five-outline","mdi-clock-time-four","mdi-clock-time-four-outline","mdi-clock-time-nine","mdi-clock-time-nine-outline","mdi-clock-time-one","mdi-clock-time-one-outline","mdi-clock-time-seven","mdi-clock-time-seven-outline","mdi-clock-time-six","mdi-clock-time-six-outline","mdi-clock-time-ten","mdi-clock-time-ten-outline","mdi-clock-time-three","mdi-clock-time-three-outline","mdi-clock-time-twelve","mdi-clock-time-twelve-outline","mdi-clock-time-two","mdi-clock-time-two-outline","mdi-cog-refresh","mdi-cog-refresh-outline","mdi-cog-sync","mdi-cog-sync-outline","mdi-content-save-cog","mdi-content-save-cog-outline","mdi-cosine-wave","mdi-cube-off","mdi-cube-off-outline","mdi-dome-light","mdi-download-box","mdi-download-box-outline","mdi-download-circle","mdi-download-circle-outline","mdi-fan-alert","mdi-fan-chevron-down","mdi-fan-chevron-up","mdi-fan-minus","mdi-fan-plus","mdi-fan-remove","mdi-fan-speed-1","mdi-fan-speed-2","mdi-fan-speed-3","mdi-food-drumstick","mdi-food-drumstick-off","mdi-food-drumstick-off-outline","mdi-food-drumstick-outline","mdi-food-steak","mdi-food-steak-off","mdi-fuse-alert","mdi-fuse-off","mdi-heart-minus","mdi-heart-minus-outline","mdi-heart-off-outline","mdi-heart-plus","mdi-heart-plus-outline","mdi-heart-remove","mdi-heart-remove-outline","mdi-hours-24","mdi-incognito-circle","mdi-incognito-circle-off","mdi-lingerie","mdi-microwave-off","mdi-minus-circle-off","mdi-minus-circle-off-outline","mdi-motion-sensor-off","mdi-pail-minus","mdi-pail-minus-outline","mdi-pail-off","mdi-pail-off-outline","mdi-pail-outline","mdi-pail-plus","mdi-pail-plus-outline","mdi-pail-remove","mdi-pail-remove-outline","mdi-pine-tree-fire","mdi-power-plug-off-outline","mdi-power-plug-outline","mdi-printer-eye","mdi-printer-search","mdi-puzzle-check","mdi-puzzle-check-outline","mdi-rug","mdi-sawtooth-wave","mdi-set-square","mdi-smoking-pipe-off","mdi-spoon-sugar","mdi-square-wave","mdi-table-split-cell","mdi-ticket-percent-outline","mdi-triangle-wave","mdi-waveform","mdi-wizard-hat","mdi-ab-testing","mdi-abjad-arabic","mdi-abjad-hebrew","mdi-abugida-devanagari","mdi-abugida-thai","mdi-access-point","mdi-access-point-network","mdi-access-point-network-off","mdi-account","mdi-account-alert","mdi-account-alert-outline","mdi-account-arrow-left","mdi-account-arrow-left-outline","mdi-account-arrow-right","mdi-account-arrow-right-outline","mdi-account-box","mdi-account-box-multiple","mdi-account-box-multiple-outline","mdi-account-box-outline","mdi-account-cancel","mdi-account-cancel-outline","mdi-account-cash","mdi-account-cash-outline","mdi-account-check","mdi-account-check-outline","mdi-account-child","mdi-account-child-circle","mdi-account-child-outline","mdi-account-circle","mdi-account-circle-outline","mdi-account-clock","mdi-account-clock-outline","mdi-account-cog","mdi-account-cog-outline","mdi-account-convert","mdi-account-convert-outline","mdi-account-cowboy-hat","mdi-account-details","mdi-account-details-outline","mdi-account-edit","mdi-account-edit-outline","mdi-account-group","mdi-account-group-outline","mdi-account-hard-hat","mdi-account-heart","mdi-account-heart-outline","mdi-account-key","mdi-account-key-outline","mdi-account-lock","mdi-account-lock-outline","mdi-account-minus","mdi-account-minus-outline","mdi-account-multiple","mdi-account-multiple-check","mdi-account-multiple-check-outline","mdi-account-multiple-minus","mdi-account-multiple-minus-outline","mdi-account-multiple-outline","mdi-account-multiple-plus","mdi-account-multiple-plus-outline","mdi-account-multiple-remove","mdi-account-multiple-remove-outline","mdi-account-music","mdi-account-music-outline","mdi-account-network","mdi-account-network-outline","mdi-account-off","mdi-account-off-outline","mdi-account-outline","mdi-account-plus","mdi-account-plus-outline","mdi-account-question","mdi-account-question-outline","mdi-account-remove","mdi-account-remove-outline","mdi-account-search","mdi-account-search-outline","mdi-account-settings","mdi-account-settings-outline","mdi-account-star","mdi-account-star-outline","mdi-account-supervisor","mdi-account-supervisor-circle","mdi-account-supervisor-outline","mdi-account-switch","mdi-account-switch-outline","mdi-account-tie","mdi-account-tie-outline","mdi-account-tie-voice","mdi-account-tie-voice-off","mdi-account-tie-voice-off-outline","mdi-account-tie-voice-outline","mdi-account-voice","mdi-adjust","mdi-adobe","mdi-adobe-acrobat","mdi-air-conditioner","mdi-air-filter","mdi-air-horn","mdi-air-humidifier","mdi-air-purifier","mdi-airbag","mdi-airballoon","mdi-airballoon-outline","mdi-airplane","mdi-airplane-landing","mdi-airplane-off","mdi-airplane-takeoff","mdi-airport","mdi-alarm","mdi-alarm-bell","mdi-alarm-check","mdi-alarm-light","mdi-alarm-light-outline","mdi-alarm-multiple","mdi-alarm-note","mdi-alarm-note-off","mdi-alarm-off","mdi-alarm-plus","mdi-alarm-snooze","mdi-album","mdi-alert","mdi-alert-box","mdi-alert-box-outline","mdi-alert-circle","mdi-alert-circle-check","mdi-alert-circle-check-outline","mdi-alert-circle-outline"],Tt={class:"w-full"},Ft=ce("span",{class:"i-mdi:magnify text-18"},null,-1),Pt=ce("a",{class:"text-blue",target:"_blank",href:"https://icones.js.org/collection/all"}," Icones ",-1),Ot={key:0,class:"h-150 w-300 overflow-y-scroll"},$t=["onClick"],At={key:1},zt={__name:"IconPicker",props:{value:String},emits:["update:value"],setup(t,{emit:u}){const m=_(t.value),f=_(Be.filter(g=>g.includes(m.value)));function b(){f.value=Be.filter(g=>g.includes(m.value))}function I(g){m.value=g,u("update:value",m.value)}return ot(m,()=>{b(),u("update:value",m.value)},{debounce:500}),(g,k)=>(C(),q("div",Tt,[o(i(rt),{trigger:"click",placement:"bottom-start"},{trigger:c(()=>[o(i(T),{value:m.value,"onUpdate:value":[k[0]||(k[0]=y=>m.value=y),b],placeholder:"请输入图标名称"},{prefix:c(()=>[Ft]),suffix:c(()=>[o(Q,{icon:m.value,size:18},null,8,["icon"])]),_:1},8,["value"])]),footer:c(()=>[H(" 更多图标去 "),Pt,H(" 查看 ")]),default:c(()=>[f.value.length?(C(),q("ul",Ot,[(C(!0),q(ut,null,dt(f.value,(y,w)=>(C(),q("li",{key:w,class:"mx-5 inline-block cursor-pointer hover:text-cyan",onClick:s=>I(y)},[o(Q,{icon:y,size:18},null,8,["icon"])],8,$t))),128))])):(C(),q("div",At,[o(Q,{icon:m.value,size:18},null,8,["icon"])]))]),_:1})]))}},Lt=ce("span",{class:"i-material-symbols:add mr-5 text-18"},null,-1),oi=Object.assign({name:"菜单管理"},{__name:"index",setup(t){const u=_(null),h=_({}),m=_({order_num:1,is_hidden:0}),{modalVisible:f,modalTitle:b,modalLoading:I,handleAdd:g,handleDelete:k,handleEdit:y,handleSave:w,modalForm:s,modalFormRef:K}=kt({name:"菜单",initForm:m,doCreate:j.saveOrUpdateMenu,doDelete:j.deleteMenu,doUpdate:j.saveOrUpdateMenu,refresh:()=>{var l;return(l=u.value)==null?void 0:l.handleSearch()}});st(()=>{var l;(l=u.value)==null||l.handleSearch()});const S=_(!1),X=[{title:"菜单名称",key:"name",width:80,ellipsis:{tooltip:!0}},{title:"图标",key:"icon",width:30,render(l){return p(Q,{icon:l.icon,size:20})}},{title:"排序",key:"order_num",width:30,ellipsis:{tooltip:!0}},{title:"访问路径",key:"path",width:60,ellipsis:{tooltip:!0}},{title:"跳转路径",key:"redirect",width:80,ellipsis:{tooltip:!0}},{title:"组件路径",key:"component",width:80,ellipsis:{tooltip:!0}},{title:"保活",key:"keep_alive",width:30,fixed:"left",render(l){return p("span",l.keep_alive===1)}},{title:"隐藏",key:"is_hidden",width:30,fixed:"left",render(l){return p(de,{size:"small",rubberBand:!1,value:l.is_hidden,loading:!!l.publishing,checkedValue:1,uncheckedValue:0,onUpdateValue:()=>x(l)})}},{title:"创建日期",key:"created_at",width:70,render(l){return p("span",ft(l.created_at))}},{title:"操作",key:"actions",width:115,align:"center",fixed:"right",render(l){return[p(J,{size:"tiny",quaternary:!0,type:"primary",style:`display: ${l.children?"":"none"};`,onClick:()=>{m.value.is_catalogue=!1,m.value.component="",m.value.parent_id=l.id,S.value=!1,g()}},{default:()=>"新增",icon:ue("material-symbols:add",{size:16})}),p(J,{size:"tiny",quaternary:!0,type:"info",onClick:()=>{S.value=!1,y(l)}},{default:()=>"编辑",icon:ue("material-symbols:edit-outline",{size:16})}),p(It,{onPositiveClick:()=>k([l.id],!1)},{trigger:()=>p(J,{size:"tiny",quaternary:!0,type:"error"},{default:()=>"删除",icon:ue("material-symbols:delete-outline",{size:16})}),default:()=>p("div",{},"确定删除该菜单吗?")})]}}];function x(l){return ve(this,null,function*(){l.id&&(l.publishing=!0,l.is_hidden=l.is_hidden===0?1:0,yield j.saveOrUpdateMenu(l),l.publishing=!1,$message==null||$message.success(l.is_hidden?"已隐藏":"已取消隐藏"))})}function B(){S.value=!0,m.value.is_catalogue=!0,m.value.component="Layout",m.value.parent_id=0,g()}return(l,d)=>(C(),oe(pt,{"show-footer":"",title:"菜单管理"},{action:c(()=>[o(i(J),{type:"primary",onClick:B},{default:c(()=>[Lt,H(" 新建菜单 ")]),_:1})]),default:c(()=>[o(gt,{ref_key:"$table",ref:u,"query-items":h.value,"onUpdate:queryItems":d[1]||(d[1]=r=>h.value=r),"is-pagination":!1,columns:X,"get-data":i(j).getMenus,"single-line":!0},{queryBar:c(()=>[o(vt,{label:"菜单名","label-width":50},{default:c(()=>{var r;return[o(i(T),{value:h.value.keyword,"onUpdate:value":d[0]||(d[0]=F=>h.value.keyword=F),clearable:"",type:"text",placeholder:"请输入菜单名",onKeydown:ct((r=u.value)==null?void 0:r.handleSearch,["enter"])},null,8,["value","onKeydown"])]}),_:1})]),_:1},8,["query-items","get-data"]),o(ht,{visible:i(f),"onUpdate:visible":d[11]||(d[11]=r=>mt(f)?f.value=r:null),title:i(b),loading:i(I),onSave:i(w)},{default:c(()=>[o(i(wt),{ref_key:"modalFormRef",ref:K,"label-placement":"left","label-align":"left","label-width":80,model:i(s)},{default:c(()=>[S.value?(C(),oe(i(M),{key:0,label:"菜单类型",path:"type"},{default:c(()=>[o(i(xt),{value:i(s).is_catalogue,"onUpdate:value":d[2]||(d[2]=r=>i(s).is_catalogue=r),name:"radiogroup"},{default:c(()=>[o(i(_t),null,{default:c(()=>[o(i(_e),{value:!0},{default:c(()=>[H(" 目录 ")]),_:1}),o(i(_e),{value:!1},{default:c(()=>[H(" 一级菜单 ")]),_:1})]),_:1})]),_:1},8,["value"])]),_:1})):xe("",!0),o(i(M),{label:"菜单名称",path:"name"},{default:c(()=>[o(i(T),{value:i(s).name,"onUpdate:value":d[3]||(d[3]=r=>i(s).name=r),placeholder:"请输入菜单名称"},null,8,["value"])]),_:1}),o(i(M),{label:"菜单图标",path:"icon"},{default:c(()=>[o(zt,{value:i(s).icon,"onUpdate:value":d[4]||(d[4]=r=>i(s).icon=r)},null,8,["value"])]),_:1}),i(s).is_catalogue?xe("",!0):(C(),oe(i(M),{key:1,label:"组件路径",path:"component"},{default:c(()=>[o(i(T),{value:i(s).component,"onUpdate:value":d[5]||(d[5]=r=>i(s).component=r),placeholder:"请输入组件路径"},null,8,["value"])]),_:1})),o(i(M),{label:"访问路径",path:"path"},{default:c(()=>[o(i(T),{value:i(s).path,"onUpdate:value":d[6]||(d[6]=r=>i(s).path=r),placeholder:"请输入访问路径"},null,8,["value"])]),_:1}),o(i(M),{label:"跳转路径",path:"redirect"},{default:c(()=>[o(i(T),{value:i(s).redirect,"onUpdate:value":d[7]||(d[7]=r=>i(s).redirect=r),disabled:i(s).parent_id!==0,placeholder:"只有一级菜单可以设置跳转路径"},null,8,["value","disabled"])]),_:1}),o(i(M),{label:"显示排序",path:"order_num"},{default:c(()=>[o(i(Dt),{value:i(s).order_num,"onUpdate:value":d[8]||(d[8]=r=>i(s).order_num=r)},null,8,["value"])]),_:1}),o(i(M),{label:"是否隐藏",path:"is_hidden"},{default:c(()=>[o(i(de),{value:i(s).is_hidden,"onUpdate:value":d[9]||(d[9]=r=>i(s).is_hidden=r),"checked-value":1,"unchecked-value":0},null,8,["value"])]),_:1}),o(i(M),{label:"KeepAlive",path:"keep_alive"},{default:c(()=>[o(i(de),{value:i(s).keep_alive,"onUpdate:value":d[10]||(d[10]=r=>i(s).keep_alive=r),"checked-value":1,"unchecked-value":0},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible","title","loading","onSave"])]),_:1}))}});export{oi as default};
