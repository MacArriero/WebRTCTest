(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ef=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],a=n[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},bu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,c=s+2<n.length,u=c?n[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(d=64)),r.push(t[l],t[h],t[d],t[g])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Iu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ef(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw new tf;const d=i<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const w=u<<6&192|h;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class tf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nf=function(n){const e=Iu(n);return bu.encodeByteArray(e,!0)},ss=function(n){return nf(n).replace(/\./g,"")},rf=function(n){try{return bu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function is(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!sf(t)||(n[t]=is(n[t],e[t]));return n}function sf(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af=()=>of().__FIREBASE_DEFAULTS__,cf=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},uf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&rf(n[1]);return e&&JSON.parse(e)},Eu=()=>{try{return af()||cf()||uf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},lf=()=>{var n;return(n=Eu())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[ss(JSON.stringify(t)),ss(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ff(){var n;const e=(n=Eu())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mf(){return typeof self=="object"&&self.self===self}function gf(){return!ff()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Tu(){try{return typeof indexedDB=="object"}catch{return!1}}function pf(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf="FirebaseError";class Kt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=yf,Object.setPrototypeOf(this,Kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xs.prototype.create)}}class xs{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?wf(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Kt(s,a,r)}}function wf(n,e){return n.replace(vf,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const vf=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Ri(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(za(i)&&za(o)){if(!Ri(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function za(n){return n!==null&&typeof n=="object"}function If(n,e){const t=new bf(n,e);return t.subscribe.bind(t)}class bf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Ef(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=di),s.error===void 0&&(s.error=di),s.complete===void 0&&(s.complete=di);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ef(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function di(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(n){return n&&n._delegate?n._delegate:n}class Mt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new hf;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_f(e))try{this.getOrInitializeService({instanceIdentifier:bt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=bt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=bt){return this.instances.has(e)}getOptions(e=bt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Sf(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=bt){return this.component?this.component.multipleInstances?e:bt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sf(n){return n===bt?void 0:n}function _f(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Tf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo=[];var M;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(M||(M={}));const Su={debug:M.DEBUG,verbose:M.VERBOSE,info:M.INFO,warn:M.WARN,error:M.ERROR,silent:M.SILENT},Cf=M.INFO,xf={[M.DEBUG]:"log",[M.VERBOSE]:"log",[M.INFO]:"info",[M.WARN]:"warn",[M.ERROR]:"error"},Af=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=xf[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vo{constructor(e){this.name=e,this._logLevel=Cf,this._logHandler=Af,this._userLogHandler=null,wo.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in M))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Su[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,M.DEBUG,...e),this._logHandler(this,M.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,M.VERBOSE,...e),this._logHandler(this,M.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,M.INFO,...e),this._logHandler(this,M.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,M.WARN,...e),this._logHandler(this,M.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,M.ERROR,...e),this._logHandler(this,M.ERROR,...e)}}function Nf(n){wo.forEach(e=>{e.setLogLevel(n)})}function kf(n,e){for(const t of wo){let r=null;e&&e.level&&(r=Su[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(s,i,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");i>=(r??s.logLevel)&&n({level:M[i].toLowerCase(),message:a,args:o,type:s.name})}}}const Rf=(n,e)=>e.some(t=>n instanceof t);let Ga,Ka;function Of(){return Ga||(Ga=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Mf(){return Ka||(Ka=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _u=new WeakMap,Oi=new WeakMap,Du=new WeakMap,fi=new WeakMap,Io=new WeakMap;function Lf(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(tt(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&_u.set(t,n)}).catch(()=>{}),Io.set(e,n),e}function Ff(n){if(Oi.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Oi.set(n,e)}let Mi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Oi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Du.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return tt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Pf(n){Mi=n(Mi)}function Vf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(mi(this),e,...t);return Du.set(r,e.sort?e.sort():[e]),tt(r)}:Mf().includes(n)?function(...e){return n.apply(mi(this),e),tt(_u.get(this))}:function(...e){return tt(n.apply(mi(this),e))}}function Bf(n){return typeof n=="function"?Vf(n):(n instanceof IDBTransaction&&Ff(n),Rf(n,Of())?new Proxy(n,Mi):n)}function tt(n){if(n instanceof IDBRequest)return Lf(n);if(fi.has(n))return fi.get(n);const e=Bf(n);return e!==n&&(fi.set(n,e),Io.set(e,n)),e}const mi=n=>Io.get(n);function $f(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),a=tt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(tt(o.result),c.oldVersion,c.newVersion,tt(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Uf=["get","getKey","getAll","getAllKeys","count"],qf=["put","add","delete","clear"],gi=new Map;function Qa(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(gi.get(e))return gi.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=qf.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Uf.includes(t)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),s&&c.done]))[0]};return gi.set(e,i),i}Pf(n=>({...n,get:(e,t,r)=>Qa(e,t)||n.get(e,t,r),has:(e,t)=>!!Qa(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(zf(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function zf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Li="@firebase/app",Ha="0.9.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt=new vo("@firebase/app"),Gf="@firebase/app-compat",Kf="@firebase/analytics-compat",Qf="@firebase/analytics",Hf="@firebase/app-check-compat",Wf="@firebase/app-check",Yf="@firebase/auth",Xf="@firebase/auth-compat",Jf="@firebase/database",Zf="@firebase/database-compat",em="@firebase/functions",tm="@firebase/functions-compat",nm="@firebase/installations",rm="@firebase/installations-compat",sm="@firebase/messaging",im="@firebase/messaging-compat",om="@firebase/performance",am="@firebase/performance-compat",cm="@firebase/remote-config",um="@firebase/remote-config-compat",lm="@firebase/storage",hm="@firebase/storage-compat",dm="@firebase/firestore",fm="@firebase/firestore-compat",mm="firebase",gm="9.19.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st="[DEFAULT]",pm={[Li]:"fire-core",[Gf]:"fire-core-compat",[Qf]:"fire-analytics",[Kf]:"fire-analytics-compat",[Wf]:"fire-app-check",[Hf]:"fire-app-check-compat",[Yf]:"fire-auth",[Xf]:"fire-auth-compat",[Jf]:"fire-rtdb",[Zf]:"fire-rtdb-compat",[em]:"fire-fn",[tm]:"fire-fn-compat",[nm]:"fire-iid",[rm]:"fire-iid-compat",[sm]:"fire-fcm",[im]:"fire-fcm-compat",[om]:"fire-perf",[am]:"fire-perf-compat",[cm]:"fire-rc",[um]:"fire-rc-compat",[lm]:"fire-gcs",[hm]:"fire-gcs-compat",[dm]:"fire-fst",[fm]:"fire-fst-compat","fire-js":"fire-js",[mm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it=new Map,Yn=new Map;function os(n,e){try{n.container.addComponent(e)}catch(t){Lt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Cu(n,e){n.container.addOrOverwriteComponent(e)}function cn(n){const e=n.name;if(Yn.has(e))return Lt.debug(`There were multiple attempts to register component ${e}.`),!1;Yn.set(e,n);for(const t of it.values())os(t,n);return!0}function xu(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ym(n,e,t=st){xu(n,e).clearInstance(t)}function wm(){Yn.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ue=new xs("app","Firebase",vm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Im=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ue.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo=gm;function Eo(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:st,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Ue.create("bad-app-name",{appName:String(s)});if(t||(t=lf()),!t)throw Ue.create("no-options");const i=it.get(s);if(i){if(Ri(t,i.options)&&Ri(r,i.config))return i;throw Ue.create("duplicate-app",{appName:s})}const o=new Df(s);for(const c of Yn.values())o.addComponent(c);const a=new Im(t,r,o);return it.set(s,a),a}function bm(n=st){const e=it.get(n);if(!e&&n===st)return Eo();if(!e)throw Ue.create("no-app",{appName:n});return e}function Em(){return Array.from(it.values())}async function Au(n){const e=n.name;it.has(e)&&(it.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function nt(n,e,t){var r;let s=(r=pm[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Lt.warn(a.join(" "));return}cn(new Mt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}function Nu(n,e){if(n!==null&&typeof n!="function")throw Ue.create("invalid-log-argument");kf(n,e)}function ku(n){Nf(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm="firebase-heartbeat-database",Sm=1,Xn="firebase-heartbeat-store";let pi=null;function Ru(){return pi||(pi=$f(Tm,Sm,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Xn)}}}).catch(n=>{throw Ue.create("idb-open",{originalErrorMessage:n.message})})),pi}async function _m(n){try{return(await Ru()).transaction(Xn).objectStore(Xn).get(Ou(n))}catch(e){if(e instanceof Kt)Lt.warn(e.message);else{const t=Ue.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Lt.warn(t.message)}}}async function Wa(n,e){try{const r=(await Ru()).transaction(Xn,"readwrite");return await r.objectStore(Xn).put(e,Ou(n)),r.done}catch(t){if(t instanceof Kt)Lt.warn(t.message);else{const r=Ue.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Lt.warn(r.message)}}}function Ou(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm=1024,Cm=30*24*60*60*1e3;class xm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Nm(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ya();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Cm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ya(),{heartbeatsToSend:t,unsentEntries:r}=Am(this._heartbeatsCache.heartbeats),s=ss(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ya(){return new Date().toISOString().substring(0,10)}function Am(n,e=Dm){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Xa(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Xa(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Nm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Tu()?pf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await _m(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Wa(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Wa(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Xa(n){return ss(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function km(n){cn(new Mt("platform-logger",e=>new jf(e),"PRIVATE")),cn(new Mt("heartbeat",e=>new xm(e),"PRIVATE")),nt(Li,Ha,n),nt(Li,Ha,"esm2017"),nt("fire-js","")}km("");const Rm=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Kt,SDK_VERSION:bo,_DEFAULT_ENTRY_NAME:st,_addComponent:os,_addOrOverwriteComponent:Cu,_apps:it,_clearComponents:wm,_components:Yn,_getProvider:xu,_registerComponent:cn,_removeServiceInstance:ym,deleteApp:Au,getApp:bm,getApps:Em,initializeApp:Eo,onLog:Nu,registerVersion:nt,setLogLevel:ku},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e,t){this._delegate=e,this.firebase=t,os(e,new Mt("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Au(this._delegate)))}_getService(e,t=st){var r;this._delegate.checkDestroyed();const s=this._delegate.container.getProvider(e);return!s.isInitialized()&&((r=s.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&s.initialize(),s.getImmediate({identifier:t})}_removeServiceInstance(e,t=st){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){os(this._delegate,e)}_addOrOverwriteComponent(e){Cu(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Ja=new xs("app-compat","Firebase",Mm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(n){const e={},t={__esModule:!0,initializeApp:i,app:s,registerVersion:nt,setLogLevel:ku,onLog:Nu,apps:null,SDK_VERSION:bo,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:Rm}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(u){delete e[u]}function s(u){if(u=u||st,!ja(e,u))throw Ja.create("no-app",{appName:u});return e[u]}s.App=n;function i(u,l={}){const h=Eo(u,l);if(ja(e,h.name))return e[h.name];const d=new n(h,t);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if(cn(u)&&u.type==="PUBLIC"){const d=(g=s())=>{if(typeof g[h]!="function")throw Ja.create("invalid-app-argument",{appName:l});return g[h]()};u.serviceProps!==void 0&&is(d,u.serviceProps),t[h]=d,n.prototype[h]=function(...g){return this._getService.bind(this,l).apply(this,u.multipleInstances?g:[])}}return u.type==="PUBLIC"?t[h]:null}function c(u,l){return l==="serverAuth"?null:l}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(){const n=Lm(Om);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:Mu,extendNamespace:e,createSubscribe:If,ErrorFactory:xs,deepExtend:is});function e(t){is(n,t)}return n}const Fm=Mu();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za=new vo("@firebase/app-compat"),Pm="@firebase/app-compat",Vm="0.2.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(n){nt(Pm,Vm,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(mf()&&self.firebase!==void 0){Za.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&Za.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Jn=Fm;Bm();var $m="firebase",Um="9.19.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jn.registerVersion($m,Um,"app-compat");var qm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},T,To=To||{},C=qm||self;function as(){}function As(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function yr(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function jm(n){return Object.prototype.hasOwnProperty.call(n,yi)&&n[yi]||(n[yi]=++zm)}var yi="closure_uid_"+(1e9*Math.random()>>>0),zm=0;function Gm(n,e,t){return n.call.apply(n.bind,arguments)}function Km(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),n.apply(e,s)}}return function(){return n.apply(e,arguments)}}function ge(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ge=Gm:ge=Km,ge.apply(null,arguments)}function Br(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function fe(n,e){function t(){}t.prototype=e.prototype,n.X=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Wb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function mt(){this.s=this.s,this.o=this.o}var Qm=0;mt.prototype.s=!1;mt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Qm!=0)&&jm(this)};mt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Lu=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function So(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function ec(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(As(r)){const s=n.length||0,i=r.length||0;n.length=s+i;for(let o=0;o<i;o++)n[s+o]=r[o]}else n.push(r)}}function pe(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var Hm=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{C.addEventListener("test",as,e),C.removeEventListener("test",as,e)}catch{}return n}();function cs(n){return/^[\s\xa0]*$/.test(n)}var tc=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function wi(n,e){return n<e?-1:n>e?1:0}function Ns(){var n=C.navigator;return n&&(n=n.userAgent)?n:""}function Oe(n){return Ns().indexOf(n)!=-1}function _o(n){return _o[" "](n),n}_o[" "]=as;function Wm(n){var e=Jm;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var Ym=Oe("Opera"),un=Oe("Trident")||Oe("MSIE"),Fu=Oe("Edge"),Fi=Fu||un,Pu=Oe("Gecko")&&!(Ns().toLowerCase().indexOf("webkit")!=-1&&!Oe("Edge"))&&!(Oe("Trident")||Oe("MSIE"))&&!Oe("Edge"),Xm=Ns().toLowerCase().indexOf("webkit")!=-1&&!Oe("Edge");function Vu(){var n=C.document;return n?n.documentMode:void 0}var us;e:{var vi="",Ii=function(){var n=Ns();if(Pu)return/rv:([^\);]+)(\)|;)/.exec(n);if(Fu)return/Edge\/([\d\.]+)/.exec(n);if(un)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(Xm)return/WebKit\/(\S+)/.exec(n);if(Ym)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Ii&&(vi=Ii?Ii[1]:""),un){var bi=Vu();if(bi!=null&&bi>parseFloat(vi)){us=String(bi);break e}}us=vi}var Jm={};function Zm(){return Wm(function(){let n=0;const e=tc(String(us)).split("."),t=tc("9").split("."),r=Math.max(e.length,t.length);for(let o=0;n==0&&o<r;o++){var s=e[o]||"",i=t[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;n=wi(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||wi(s[2].length==0,i[2].length==0)||wi(s[2],i[2]),s=s[3],i=i[3]}while(n==0)}return 0<=n})}var Pi;if(C.document&&un){var nc=Vu();Pi=nc||parseInt(us,10)||void 0}else Pi=void 0;var eg=Pi;function Zn(n,e){if(pe.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Pu){e:{try{_o(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:tg[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Zn.X.h.call(this)}}fe(Zn,pe);var tg={2:"touch",3:"pen",4:"mouse"};Zn.prototype.h=function(){Zn.X.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var wr="closure_listenable_"+(1e6*Math.random()|0),ng=0;function rg(n,e,t,r,s){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.ha=s,this.key=++ng,this.ba=this.ea=!1}function ks(n){n.ba=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function Do(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function Bu(n){const e={};for(const t in n)e[t]=n[t];return e}const rc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function $u(n,e){let t,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(t in r)n[t]=r[t];for(let i=0;i<rc.length;i++)t=rc[i],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function Rs(n){this.src=n,this.g={},this.h=0}Rs.prototype.add=function(n,e,t,r,s){var i=n.toString();n=this.g[i],n||(n=this.g[i]=[],this.h++);var o=Bi(n,e,r,s);return-1<o?(e=n[o],t||(e.ea=!1)):(e=new rg(e,this.src,i,!!r,s),e.ea=t,n.push(e)),e};function Vi(n,e){var t=e.type;if(t in n.g){var r=n.g[t],s=Lu(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ks(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function Bi(n,e,t,r){for(var s=0;s<n.length;++s){var i=n[s];if(!i.ba&&i.listener==e&&i.capture==!!t&&i.ha==r)return s}return-1}var Co="closure_lm_"+(1e6*Math.random()|0),Ei={};function Uu(n,e,t,r,s){if(r&&r.once)return ju(n,e,t,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Uu(n,e[i],t,r,s);return null}return t=No(t),n&&n[wr]?n.N(e,t,yr(r)?!!r.capture:!!r,s):qu(n,e,t,!1,r,s)}function qu(n,e,t,r,s,i){if(!e)throw Error("Invalid event type");var o=yr(s)?!!s.capture:!!s,a=Ao(n);if(a||(n[Co]=a=new Rs(n)),t=a.add(e,t,r,o,i),t.proxy)return t;if(r=sg(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)Hm||(s=o),s===void 0&&(s=!1),n.addEventListener(e.toString(),r,s);else if(n.attachEvent)n.attachEvent(Gu(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function sg(){function n(t){return e.call(n.src,n.listener,t)}const e=ig;return n}function ju(n,e,t,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)ju(n,e[i],t,r,s);return null}return t=No(t),n&&n[wr]?n.O(e,t,yr(r)?!!r.capture:!!r,s):qu(n,e,t,!0,r,s)}function zu(n,e,t,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)zu(n,e[i],t,r,s);else r=yr(r)?!!r.capture:!!r,t=No(t),n&&n[wr]?(n=n.i,e=String(e).toString(),e in n.g&&(i=n.g[e],t=Bi(i,t,r,s),-1<t&&(ks(i[t]),Array.prototype.splice.call(i,t,1),i.length==0&&(delete n.g[e],n.h--)))):n&&(n=Ao(n))&&(e=n.g[e.toString()],n=-1,e&&(n=Bi(e,t,r,s)),(t=-1<n?e[n]:null)&&xo(t))}function xo(n){if(typeof n!="number"&&n&&!n.ba){var e=n.src;if(e&&e[wr])Vi(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(Gu(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=Ao(e))?(Vi(t,n),t.h==0&&(t.src=null,e[Co]=null)):ks(n)}}}function Gu(n){return n in Ei?Ei[n]:Ei[n]="on"+n}function ig(n,e){if(n.ba)n=!0;else{e=new Zn(e,this);var t=n.listener,r=n.ha||n.src;n.ea&&xo(n),n=t.call(r,e)}return n}function Ao(n){return n=n[Co],n instanceof Rs?n:null}var Ti="__closure_events_fn_"+(1e9*Math.random()>>>0);function No(n){return typeof n=="function"?n:(n[Ti]||(n[Ti]=function(e){return n.handleEvent(e)}),n[Ti])}function oe(){mt.call(this),this.i=new Rs(this),this.P=this,this.I=null}fe(oe,mt);oe.prototype[wr]=!0;oe.prototype.removeEventListener=function(n,e,t,r){zu(this,n,e,t,r)};function he(n,e){var t,r=n.I;if(r)for(t=[];r;r=r.I)t.push(r);if(n=n.P,r=e.type||e,typeof e=="string")e=new pe(e,n);else if(e instanceof pe)e.target=e.target||n;else{var s=e;e=new pe(r,n),$u(e,s)}if(s=!0,t)for(var i=t.length-1;0<=i;i--){var o=e.g=t[i];s=$r(o,r,!0,e)&&s}if(o=e.g=n,s=$r(o,r,!0,e)&&s,s=$r(o,r,!1,e)&&s,t)for(i=0;i<t.length;i++)o=e.g=t[i],s=$r(o,r,!1,e)&&s}oe.prototype.M=function(){if(oe.X.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)ks(t[r]);delete n.g[e],n.h--}}this.I=null};oe.prototype.N=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};oe.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function $r(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==t){var a=o.listener,c=o.ha||o.src;o.ea&&Vi(n.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var ko=C.JSON.stringify;function og(){var n=Hu;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class ag{constructor(){this.h=this.g=null}add(e,t){const r=Ku.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var Ku=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new cg,n=>n.reset());class cg{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function ug(n){C.setTimeout(()=>{throw n},0)}function Qu(n,e){$i||lg(),Ui||($i(),Ui=!0),Hu.add(n,e)}var $i;function lg(){var n=C.Promise.resolve(void 0);$i=function(){n.then(hg)}}var Ui=!1,Hu=new ag;function hg(){for(var n;n=og();){try{n.h.call(n.g)}catch(t){ug(t)}var e=Ku;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Ui=!1}function Os(n,e){oe.call(this),this.h=n||1,this.g=e||C,this.j=ge(this.lb,this),this.l=Date.now()}fe(Os,oe);T=Os.prototype;T.ca=!1;T.R=null;T.lb=function(){if(this.ca){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-n):(this.R&&(this.g.clearTimeout(this.R),this.R=null),he(this,"tick"),this.ca&&(Ro(this),this.start()))}};T.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ro(n){n.ca=!1,n.R&&(n.g.clearTimeout(n.R),n.R=null)}T.M=function(){Os.X.M.call(this),Ro(this),delete this.g};function Oo(n,e,t){if(typeof n=="function")t&&(n=ge(n,t));else if(n&&typeof n.handleEvent=="function")n=ge(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:C.setTimeout(n,e||0)}function Wu(n){n.g=Oo(()=>{n.g=null,n.i&&(n.i=!1,Wu(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class dg extends mt{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Wu(this)}M(){super.M(),this.g&&(C.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function er(n){mt.call(this),this.h=n,this.g={}}fe(er,mt);var sc=[];function Yu(n,e,t,r){Array.isArray(t)||(t&&(sc[0]=t.toString()),t=sc);for(var s=0;s<t.length;s++){var i=Uu(e,t[s],r||n.handleEvent,!1,n.h||n);if(!i)break;n.g[i.key]=i}}function Xu(n){Do(n.g,function(e,t){this.g.hasOwnProperty(t)&&xo(e)},n),n.g={}}er.prototype.M=function(){er.X.M.call(this),Xu(this)};er.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ms(){this.g=!0}Ms.prototype.Aa=function(){this.g=!1};function fg(n,e,t,r,s,i){n.info(function(){if(n.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+t+`
`+o})}function mg(n,e,t,r,s,i,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+t+`
`+i+" "+o})}function sn(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+pg(n,t)+(r?" "+r:"")})}function gg(n,e){n.info(function(){return"TIMEOUT: "+e})}Ms.prototype.info=function(){};function pg(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return ko(t)}catch{return e}}var Qt={},ic=null;function Ls(){return ic=ic||new oe}Qt.Pa="serverreachability";function Ju(n){pe.call(this,Qt.Pa,n)}fe(Ju,pe);function tr(n){const e=Ls();he(e,new Ju(e))}Qt.STAT_EVENT="statevent";function Zu(n,e){pe.call(this,Qt.STAT_EVENT,n),this.stat=e}fe(Zu,pe);function Ie(n){const e=Ls();he(e,new Zu(e,n))}Qt.Qa="timingevent";function el(n,e){pe.call(this,Qt.Qa,n),this.size=e}fe(el,pe);function vr(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return C.setTimeout(function(){n()},e)}var Fs={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},tl={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Mo(){}Mo.prototype.h=null;function oc(n){return n.h||(n.h=n.i())}function nl(){}var Ir={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Lo(){pe.call(this,"d")}fe(Lo,pe);function Fo(){pe.call(this,"c")}fe(Fo,pe);var qi;function Ps(){}fe(Ps,Mo);Ps.prototype.g=function(){return new XMLHttpRequest};Ps.prototype.i=function(){return{}};qi=new Ps;function br(n,e,t,r){this.l=n,this.j=e,this.m=t,this.U=r||1,this.S=new er(this),this.O=yg,n=Fi?125:void 0,this.T=new Os(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new rl}function rl(){this.i=null,this.g="",this.h=!1}var yg=45e3,ji={},ls={};T=br.prototype;T.setTimeout=function(n){this.O=n};function zi(n,e,t){n.K=1,n.v=Bs(qe(e)),n.s=t,n.P=!0,sl(n,null)}function sl(n,e){n.F=Date.now(),Er(n),n.A=qe(n.v);var t=n.A,r=n.U;Array.isArray(r)||(r=[String(r)]),dl(t.i,"t",r),n.C=0,t=n.l.H,n.h=new rl,n.g=Ol(n.l,t?e:null,!n.s),0<n.N&&(n.L=new dg(ge(n.La,n,n.g),n.N)),Yu(n.S,n.g,"readystatechange",n.ib),e=n.H?Bu(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.da(n.A,n.u,n.s,e)):(n.u="GET",n.g.da(n.A,n.u,null,e)),tr(),fg(n.j,n.u,n.A,n.m,n.U,n.s)}T.ib=function(n){n=n.target;const e=this.L;e&&$e(n)==3?e.l():this.La(n)};T.La=function(n){try{if(n==this.g)e:{const l=$e(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||Fi||this.g&&(this.h.h||this.g.fa()||lc(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?tr(3):tr(2)),Vs(this);var t=this.g.aa();this.Y=t;t:if(il(this)){var r=lc(this.g);n="";var s=r.length,i=$e(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xt(this),jn(this);var o="";break t}this.h.i=new C.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=t==200,mg(this.j,this.u,this.A,this.m,this.U,l,t),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!cs(a)){var u=a;break t}}u=null}if(t=u)sn(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Gi(this,t);else{this.i=!1,this.o=3,Ie(12),xt(this),jn(this);break e}}this.P?(ol(this,l,o),Fi&&this.i&&l==3&&(Yu(this.S,this.T,"tick",this.hb),this.T.start())):(sn(this.j,this.m,o,null),Gi(this,o)),l==4&&xt(this),this.i&&!this.I&&(l==4?Al(this.l,this):(this.i=!1,Er(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ie(12)):(this.o=0,Ie(13)),xt(this),jn(this)}}}catch{}finally{}};function il(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Da:!1}function ol(n,e,t){let r=!0,s;for(;!n.I&&n.C<t.length;)if(s=wg(n,t),s==ls){e==4&&(n.o=4,Ie(14),r=!1),sn(n.j,n.m,null,"[Incomplete Response]");break}else if(s==ji){n.o=4,Ie(15),sn(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else sn(n.j,n.m,s,null),Gi(n,s);il(n)&&s!=ls&&s!=ji&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,Ie(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.$&&(n.$=!0,e=n.l,e.g==n&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+t.length),jo(e),e.K=!0,Ie(11))):(sn(n.j,n.m,t,"[Invalid Chunked Response]"),xt(n),jn(n))}T.hb=function(){if(this.g){var n=$e(this.g),e=this.g.fa();this.C<e.length&&(Vs(this),ol(this,n,e),this.i&&n!=4&&Er(this))}};function wg(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?ls:(t=Number(e.substring(t,r)),isNaN(t)?ji:(r+=1,r+t>e.length?ls:(e=e.substr(r,t),n.C=r+t,e)))}T.cancel=function(){this.I=!0,xt(this)};function Er(n){n.V=Date.now()+n.O,al(n,n.O)}function al(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=vr(ge(n.gb,n),e)}function Vs(n){n.B&&(C.clearTimeout(n.B),n.B=null)}T.gb=function(){this.B=null;const n=Date.now();0<=n-this.V?(gg(this.j,this.A),this.K!=2&&(tr(),Ie(17)),xt(this),this.o=2,jn(this)):al(this,this.V-n)};function jn(n){n.l.G==0||n.I||Al(n.l,n)}function xt(n){Vs(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,Ro(n.T),Xu(n.S),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function Gi(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||Ki(t.h,n))){if(!n.J&&Ki(t.h,n)&&t.G==3){try{var r=t.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)fs(t),qs(t);else break e;qo(t),Ie(18)}}else t.Ba=s[1],0<t.Ba-t.T&&37500>s[2]&&t.L&&t.A==0&&!t.v&&(t.v=vr(ge(t.cb,t),6e3));if(1>=gl(t.h)&&t.ja){try{t.ja()}catch{}t.ja=void 0}}else At(t,11)}else if((n.J||t.g==n)&&fs(t),!cs(e))for(s=t.Fa.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(t.T=u[0],u=u[1],t.G==2)if(u[0]=="c"){t.I=u[1],t.ka=u[2];const l=u[3];l!=null&&(t.ma=l,t.j.info("VER="+t.ma));const h=u[4];h!=null&&(t.Ca=h,t.j.info("SVER="+t.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.J=r,t.j.info("backChannelRequestTimeoutMs_="+r)),r=t;const g=n.g;if(g){const w=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var i=r.h;i.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Po(i,i.h),i.h=null))}if(r.D){const b=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(r.za=b,U(r.F,r.D,b))}}t.G=3,t.l&&t.l.xa(),t.$&&(t.P=Date.now()-n.F,t.j.info("Handshake RTT: "+t.P+"ms")),r=t;var o=n;if(r.sa=Rl(r,r.H?r.ka:null,r.V),o.J){pl(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(Vs(a),Er(a)),r.g=o}else Cl(r);0<t.i.length&&js(t)}else u[0]!="stop"&&u[0]!="close"||At(t,7);else t.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?At(t,7):Uo(t):u[0]!="noop"&&t.l&&t.l.wa(u),t.A=0)}}tr(4)}catch{}}function vg(n){if(n.W&&typeof n.W=="function")return n.W();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(As(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function Ig(n){if(n.oa&&typeof n.oa=="function")return n.oa();if(!n.W||typeof n.W!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(As(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function cl(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(As(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=Ig(n),r=vg(n),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],t&&t[i],n)}var ul=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bg(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),s=null;if(0<=r){var i=n[t].substring(0,r);s=n[t].substring(r+1)}else i=n[t];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Rt(n,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Rt){this.h=e!==void 0?e:n.h,hs(this,n.j),this.s=n.s,this.g=n.g,ds(this,n.m),this.l=n.l,e=n.i;var t=new nr;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),ac(this,t),this.o=n.o}else n&&(t=String(n).match(ul))?(this.h=!!e,hs(this,t[1]||"",!0),this.s=Bn(t[2]||""),this.g=Bn(t[3]||"",!0),ds(this,t[4]),this.l=Bn(t[5]||"",!0),ac(this,t[6]||"",!0),this.o=Bn(t[7]||"")):(this.h=!!e,this.i=new nr(null,this.h))}Rt.prototype.toString=function(){var n=[],e=this.j;e&&n.push($n(e,cc,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push($n(e,cc,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push($n(t,t.charAt(0)=="/"?Sg:Tg,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",$n(t,Dg)),n.join("")};function qe(n){return new Rt(n)}function hs(n,e,t){n.j=t?Bn(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function ds(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function ac(n,e,t){e instanceof nr?(n.i=e,Cg(n.i,n.h)):(t||(e=$n(e,_g)),n.i=new nr(e,n.h))}function U(n,e,t){n.i.set(e,t)}function Bs(n){return U(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Bn(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function $n(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,Eg),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Eg(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var cc=/[#\/\?@]/g,Tg=/[#\?:]/g,Sg=/[#\?]/g,_g=/[#\?@]/g,Dg=/#/g;function nr(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function gt(n){n.g||(n.g=new Map,n.h=0,n.i&&bg(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}T=nr.prototype;T.add=function(n,e){gt(this),this.i=null,n=En(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function ll(n,e){gt(n),e=En(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function hl(n,e){return gt(n),e=En(n,e),n.g.has(e)}T.forEach=function(n,e){gt(this),this.g.forEach(function(t,r){t.forEach(function(s){n.call(e,s,r,this)},this)},this)};T.oa=function(){gt(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const s=n[r];for(let i=0;i<s.length;i++)t.push(e[r])}return t};T.W=function(n){gt(this);let e=[];if(typeof n=="string")hl(this,n)&&(e=e.concat(this.g.get(En(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};T.set=function(n,e){return gt(this),this.i=null,n=En(this,n),hl(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};T.get=function(n,e){return n?(n=this.W(n),0<n.length?String(n[0]):e):e};function dl(n,e,t){ll(n,e),0<t.length&&(n.i=null,n.g.set(En(n,e),So(t)),n.h+=t.length)}T.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const i=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),n.push(s)}}return this.i=n.join("&")};function En(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function Cg(n,e){e&&!n.j&&(gt(n),n.i=null,n.g.forEach(function(t,r){var s=r.toLowerCase();r!=s&&(ll(this,r),dl(this,s,t))},n)),n.j=e}var xg=class{constructor(e,t){this.h=e,this.g=t}};function fl(n){this.l=n||Ag,C.PerformanceNavigationTiming?(n=C.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(C.g&&C.g.Ga&&C.g.Ga()&&C.g.Ga().$b),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ag=10;function ml(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function gl(n){return n.h?1:n.g?n.g.size:0}function Ki(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function Po(n,e){n.g?n.g.add(e):n.h=e}function pl(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}fl.prototype.cancel=function(){if(this.i=yl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function yl(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return So(n.i)}function Vo(){}Vo.prototype.stringify=function(n){return C.JSON.stringify(n,void 0)};Vo.prototype.parse=function(n){return C.JSON.parse(n,void 0)};function Ng(){this.g=new Vo}function kg(n,e,t){const r=t||"";try{cl(n,function(s,i){let o=s;yr(s)&&(o=ko(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function Rg(n,e){const t=new Ms;if(C.Image){const r=new Image;r.onload=Br(Ur,t,r,"TestLoadImage: loaded",!0,e),r.onerror=Br(Ur,t,r,"TestLoadImage: error",!1,e),r.onabort=Br(Ur,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=Br(Ur,t,r,"TestLoadImage: timeout",!1,e),C.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function Ur(n,e,t,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Tr(n){this.l=n.ac||null,this.j=n.jb||!1}fe(Tr,Mo);Tr.prototype.g=function(){return new $s(this.l,this.j)};Tr.prototype.i=function(n){return function(){return n}}({});function $s(n,e){oe.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=Bo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}fe($s,oe);var Bo=0;T=$s.prototype;T.open=function(n,e){if(this.readyState!=Bo)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,rr(this)};T.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||C).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};T.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Sr(this)),this.readyState=Bo};T.Wa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,rr(this)),this.g&&(this.readyState=3,rr(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof C.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;wl(this)}else n.text().then(this.Va.bind(this),this.ga.bind(this))};function wl(n){n.j.read().then(n.Ta.bind(n)).catch(n.ga.bind(n))}T.Ta=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Sr(this):rr(this),this.readyState==3&&wl(this)}};T.Va=function(n){this.g&&(this.response=this.responseText=n,Sr(this))};T.Ua=function(n){this.g&&(this.response=n,Sr(this))};T.ga=function(){this.g&&Sr(this)};function Sr(n){n.readyState=4,n.l=null,n.j=null,n.A=null,rr(n)}T.setRequestHeader=function(n,e){this.v.append(n,e)};T.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};T.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function rr(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty($s.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var Og=C.JSON.parse;function K(n){oe.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=vl,this.K=this.L=!1}fe(K,oe);var vl="",Mg=/^https?$/i,Lg=["POST","PUT"];T=K.prototype;T.Ka=function(n){this.L=n};T.da=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():qi.g(),this.C=this.u?oc(this.u):oc(qi),this.g.onreadystatechange=ge(this.Ha,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(i){uc(this,i);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)t.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())t.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(i=>i.toLowerCase()=="content-type"),s=C.FormData&&n instanceof C.FormData,!(0<=Lu(Lg,e))||r||s||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of t)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{El(this),0<this.B&&((this.K=Fg(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ge(this.qa,this)):this.A=Oo(this.qa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(i){uc(this,i)}};function Fg(n){return un&&Zm()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}T.qa=function(){typeof To<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,he(this,"timeout"),this.abort(8))};function uc(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Il(n),Us(n)}function Il(n){n.D||(n.D=!0,he(n,"complete"),he(n,"error"))}T.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,he(this,"complete"),he(this,"abort"),Us(this))};T.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Us(this,!0)),K.X.M.call(this)};T.Ha=function(){this.s||(this.F||this.v||this.l?bl(this):this.fb())};T.fb=function(){bl(this)};function bl(n){if(n.h&&typeof To<"u"&&(!n.C[1]||$e(n)!=4||n.aa()!=2)){if(n.v&&$e(n)==4)Oo(n.Ha,0,n);else if(he(n,"readystatechange"),$e(n)==4){n.h=!1;try{const a=n.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=a===0){var s=String(n.H).match(ul)[1]||null;if(!s&&C.self&&C.self.location){var i=C.self.location.protocol;s=i.substr(0,i.length-1)}r=!Mg.test(s?s.toLowerCase():"")}t=r}if(t)he(n,"complete"),he(n,"success");else{n.m=6;try{var o=2<$e(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.aa()+"]",Il(n)}}finally{Us(n)}}}}function Us(n,e){if(n.g){El(n);const t=n.g,r=n.C[0]?as:null;n.g=null,n.C=null,e||he(n,"ready");try{t.onreadystatechange=r}catch{}}}function El(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(C.clearTimeout(n.A),n.A=null)}function $e(n){return n.g?n.g.readyState:0}T.aa=function(){try{return 2<$e(this)?this.g.status:-1}catch{return-1}};T.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};T.Sa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),Og(e)}};function lc(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case vl:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}T.Ea=function(){return this.m};T.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Tl(n){let e="";return Do(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function $o(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=Tl(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):U(n,e,t))}function Rn(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Sl(n){this.Ca=0,this.i=[],this.j=new Ms,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Rn("failFast",!1,n),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Rn("baseRetryDelayMs",5e3,n),this.bb=Rn("retryDelaySeedMs",1e4,n),this.$a=Rn("forwardChannelMaxRetries",2,n),this.ta=Rn("forwardChannelRequestTimeoutMs",2e4,n),this.ra=n&&n.xmlHttpFactory||void 0,this.Da=n&&n.Zb||!1,this.J=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.I="",this.h=new fl(n&&n.concurrentRequestLimit),this.Fa=new Ng,this.O=n&&n.fastHandshake||!1,this.N=n&&n.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=n&&n.Xb||!1,n&&n.Aa&&this.j.Aa(),n&&n.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&n&&n.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}T=Sl.prototype;T.ma=8;T.G=1;function Uo(n){if(_l(n),n.G==3){var e=n.U++,t=qe(n.F);U(t,"SID",n.I),U(t,"RID",e),U(t,"TYPE","terminate"),_r(n,t),e=new br(n,n.j,e,void 0),e.K=2,e.v=Bs(qe(t)),t=!1,C.navigator&&C.navigator.sendBeacon&&(t=C.navigator.sendBeacon(e.v.toString(),"")),!t&&C.Image&&(new Image().src=e.v,t=!0),t||(e.g=Ol(e.l,null),e.g.da(e.v)),e.F=Date.now(),Er(e)}kl(n)}function qs(n){n.g&&(jo(n),n.g.cancel(),n.g=null)}function _l(n){qs(n),n.u&&(C.clearTimeout(n.u),n.u=null),fs(n),n.h.cancel(),n.m&&(typeof n.m=="number"&&C.clearTimeout(n.m),n.m=null)}function js(n){ml(n.h)||n.m||(n.m=!0,Qu(n.Ja,n),n.C=0)}function Pg(n,e){return gl(n.h)>=n.h.j-(n.m?1:0)?!1:n.m?(n.i=e.D.concat(n.i),!0):n.G==1||n.G==2||n.C>=(n.Za?0:n.$a)?!1:(n.m=vr(ge(n.Ja,n,e),Nl(n,n.C)),n.C++,!0)}T.Ja=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.U=Math.floor(1e5*Math.random()),n=this.U++;const s=new br(this,this.j,n,void 0);let i=this.s;if(this.S&&(i?(i=Bu(i),$u(i,this.S)):i=this.S),this.o!==null||this.N||(s.H=i,i=null),this.O)e:{for(var e=0,t=0;t<this.i.length;t++){t:{var r=this.i[t];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.i.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=Dl(this,s,e),t=qe(this.F),U(t,"RID",n),U(t,"CVER",22),this.D&&U(t,"X-HTTP-Session-Id",this.D),_r(this,t),i&&(this.N?e="headers="+encodeURIComponent(String(Tl(i)))+"&"+e:this.o&&$o(t,this.o,i)),Po(this.h,s),this.Ya&&U(t,"TYPE","init"),this.O?(U(t,"$req",e),U(t,"SID","null"),s.Z=!0,zi(s,t,null)):zi(s,t,e),this.G=2}}else this.G==3&&(n?hc(this,n):this.i.length==0||ml(this.h)||hc(this))};function hc(n,e){var t;e?t=e.m:t=n.U++;const r=qe(n.F);U(r,"SID",n.I),U(r,"RID",t),U(r,"AID",n.T),_r(n,r),n.o&&n.s&&$o(r,n.o,n.s),t=new br(n,n.j,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.i=e.D.concat(n.i)),e=Dl(n,t,1e3),t.setTimeout(Math.round(.5*n.ta)+Math.round(.5*n.ta*Math.random())),Po(n.h,t),zi(t,r,e)}function _r(n,e){n.ia&&Do(n.ia,function(t,r){U(e,r,t)}),n.l&&cl({},function(t,r){U(e,r,t)})}function Dl(n,e,t){t=Math.min(n.i.length,t);var r=n.l?ge(n.l.Ra,n.l,n):null;e:{var s=n.i;let i=-1;for(;;){const o=["count="+t];i==-1?0<t?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<t;c++){let u=s[c].h;const l=s[c].g;if(u-=i,0>u)i=Math.max(0,s[c].h-100),a=!1;else try{kg(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return n=n.i.splice(0,t),e.D=n,r}function Cl(n){n.g||n.u||(n.Z=1,Qu(n.Ia,n),n.A=0)}function qo(n){return n.g||n.u||3<=n.A?!1:(n.Z++,n.u=vr(ge(n.Ia,n),Nl(n,n.A)),n.A++,!0)}T.Ia=function(){if(this.u=null,xl(this),this.$&&!(this.K||this.g==null||0>=this.P)){var n=2*this.P;this.j.info("BP detection timer enabled: "+n),this.B=vr(ge(this.eb,this),n)}};T.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ie(10),qs(this),xl(this))};function jo(n){n.B!=null&&(C.clearTimeout(n.B),n.B=null)}function xl(n){n.g=new br(n,n.j,"rpc",n.Z),n.o===null&&(n.g.H=n.s),n.g.N=0;var e=qe(n.sa);U(e,"RID","rpc"),U(e,"SID",n.I),U(e,"CI",n.L?"0":"1"),U(e,"AID",n.T),U(e,"TYPE","xmlhttp"),_r(n,e),n.o&&n.s&&$o(e,n.o,n.s),n.J&&n.g.setTimeout(n.J);var t=n.g;n=n.ka,t.K=1,t.v=Bs(qe(e)),t.s=null,t.P=!0,sl(t,n)}T.cb=function(){this.v!=null&&(this.v=null,qs(this),qo(this),Ie(19))};function fs(n){n.v!=null&&(C.clearTimeout(n.v),n.v=null)}function Al(n,e){var t=null;if(n.g==e){fs(n),jo(n),n.g=null;var r=2}else if(Ki(n.h,e))t=e.D,pl(n.h,e),r=1;else return;if(n.G!=0){if(n.pa=e.Y,e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var s=n.C;r=Ls(),he(r,new el(r,t)),js(n)}else Cl(n);else if(s=e.o,s==3||s==0&&0<n.pa||!(r==1&&Pg(n,e)||r==2&&qo(n)))switch(t&&0<t.length&&(e=n.h,e.i=e.i.concat(t)),s){case 1:At(n,5);break;case 4:At(n,10);break;case 3:At(n,6);break;default:At(n,2)}}}function Nl(n,e){let t=n.Xa+Math.floor(Math.random()*n.bb);return n.l||(t*=2),t*e}function At(n,e){if(n.j.info("Error code "+e),e==2){var t=null;n.l&&(t=null);var r=ge(n.kb,n);t||(t=new Rt("//www.google.com/images/cleardot.gif"),C.location&&C.location.protocol=="http"||hs(t,"https"),Bs(t)),Rg(t.toString(),r)}else Ie(2);n.G=0,n.l&&n.l.va(e),kl(n),_l(n)}T.kb=function(n){n?(this.j.info("Successfully pinged google.com"),Ie(2)):(this.j.info("Failed to ping google.com"),Ie(1))};function kl(n){if(n.G=0,n.la=[],n.l){const e=yl(n.h);(e.length!=0||n.i.length!=0)&&(ec(n.la,e),ec(n.la,n.i),n.h.i.length=0,So(n.i),n.i.length=0),n.l.ua()}}function Rl(n,e,t){var r=t instanceof Rt?qe(t):new Rt(t,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),ds(r,r.m);else{var s=C.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Rt(null,void 0);r&&hs(i,r),e&&(i.g=e),s&&ds(i,s),t&&(i.l=t),r=i}return t=n.D,e=n.za,t&&e&&U(r,t,e),U(r,"VER",n.ma),_r(n,r),r}function Ol(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Da&&!n.ra?new K(new Tr({jb:!0})):new K(n.ra),e.Ka(n.H),e}function Ml(){}T=Ml.prototype;T.xa=function(){};T.wa=function(){};T.va=function(){};T.ua=function(){};T.Ra=function(){};function ms(){if(un&&!(10<=Number(eg)))throw Error("Environmental error: no available transport.")}ms.prototype.g=function(n,e){return new Ae(n,e)};function Ae(n,e){oe.call(this),this.g=new Sl(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.S=n,(n=e&&e.Yb)&&!cs(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!cs(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Tn(this)}fe(Ae,oe);Ae.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;Ie(0),n.V=e,n.ia=t||{},n.L=n.Y,n.F=Rl(n,null,n.V),js(n)};Ae.prototype.close=function(){Uo(this.g)};Ae.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=ko(n),n=t);e.i.push(new xg(e.ab++,n)),e.G==3&&js(e)};Ae.prototype.M=function(){this.g.l=null,delete this.j,Uo(this.g),delete this.g,Ae.X.M.call(this)};function Ll(n){Lo.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}fe(Ll,Lo);function Fl(){Fo.call(this),this.status=1}fe(Fl,Fo);function Tn(n){this.g=n}fe(Tn,Ml);Tn.prototype.xa=function(){he(this.g,"a")};Tn.prototype.wa=function(n){he(this.g,new Ll(n))};Tn.prototype.va=function(n){he(this.g,new Fl)};Tn.prototype.ua=function(){he(this.g,"b")};ms.prototype.createWebChannel=ms.prototype.g;Ae.prototype.send=Ae.prototype.u;Ae.prototype.open=Ae.prototype.m;Ae.prototype.close=Ae.prototype.close;Fs.NO_ERROR=0;Fs.TIMEOUT=8;Fs.HTTP_ERROR=6;tl.COMPLETE="complete";nl.EventType=Ir;Ir.OPEN="a";Ir.CLOSE="b";Ir.ERROR="c";Ir.MESSAGE="d";oe.prototype.listen=oe.prototype.N;K.prototype.listenOnce=K.prototype.O;K.prototype.getLastError=K.prototype.Oa;K.prototype.getLastErrorCode=K.prototype.Ea;K.prototype.getStatus=K.prototype.aa;K.prototype.getResponseJson=K.prototype.Sa;K.prototype.getResponseText=K.prototype.fa;K.prototype.send=K.prototype.da;K.prototype.setWithCredentials=K.prototype.Ka;var Vg=function(){return new ms},Bg=function(){return Ls()},Si=Fs,$g=tl,Ug=Qt,dc={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},qg=Tr,qr=nl,jg=K;const fc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}se.UNAUTHENTICATED=new se(null),se.GOOGLE_CREDENTIALS=new se("google-credentials-uid"),se.FIRST_PARTY=new se("first-party-uid"),se.MOCK_USER=new se("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sn="9.19.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot=new vo("@firebase/firestore");function Qi(){return ot.logLevel}function zg(n){ot.setLogLevel(n)}function y(n,...e){if(ot.logLevel<=M.DEBUG){const t=e.map(zo);ot.debug(`Firestore (${Sn}): ${n}`,...t)}}function W(n,...e){if(ot.logLevel<=M.ERROR){const t=e.map(zo);ot.error(`Firestore (${Sn}): ${n}`,...t)}}function je(n,...e){if(ot.logLevel<=M.WARN){const t=e.map(zo);ot.warn(`Firestore (${Sn}): ${n}`,...t)}}function zo(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(n="Unexpected state"){const e=`FIRESTORE (${Sn}) INTERNAL ASSERTION FAILED: `+n;throw W(e),new Error(e)}function S(n,e){n||E()}function Gg(n,e){n||E()}function I(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class p extends Kt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Kg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(se.UNAUTHENTICATED))}shutdown(){}}class Qg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Hg{constructor(e){this.t=e,this.currentUser=se.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new ie;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ie,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ie)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(S(typeof r.accessToken=="string"),new Pl(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return S(e===null||typeof e=="string"),new se(e)}}class Wg{constructor(e,t,r){this.h=e,this.l=t,this.m=r,this.type="FirstParty",this.user=se.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Yg{constructor(e,t,r){this.h=e,this.l=t,this.m=r}getToken(){return Promise.resolve(new Wg(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(se.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Xg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Jg{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const r=i=>{i.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?s(i):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(S(typeof t.token=="string"),this.T=t.token,new Xg(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Zg(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function x(n,e){return n<e?-1:n>e?1:0}function ln(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}function Bl(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new p(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new p(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new p(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new p(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return j.fromMillis(Date.now())}static fromDate(e){return j.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new j(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?x(this.nanoseconds,e.nanoseconds):x(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(e){this.timestamp=e}static fromTimestamp(e){return new _(e)}static min(){return new _(new j(0,0))}static max(){return new _(new j(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,t,r){t===void 0?t=0:t>e.length&&E(),r===void 0?r=e.length-t:r>e.length-t&&E(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return sr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof sr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class R extends sr{construct(e,t,r){return new R(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new p(m.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new R(t)}static emptyPath(){return new R([])}}const ep=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Y extends sr{construct(e,t,r){return new Y(e,t,r)}static isValidIdentifier(e){return ep.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Y.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Y(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new p(m.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new p(m.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new p(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new p(m.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Y(t)}static emptyPath(){return new Y([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(e){this.path=e}static fromPath(e){return new v(R.fromString(e))}static fromName(e){return new v(R.fromString(e).popFirst(5))}static empty(){return new v(R.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&R.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return R.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new v(new R(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,t,r,s){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=s}}function Hi(n){return n.fields.find(e=>e.kind===2)}function Et(n){return n.fields.filter(e=>e.kind!==2)}$l.UNKNOWN_ID=-1;class tp{constructor(e,t){this.fieldPath=e,this.kind=t}}class gs{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new gs(0,Ne.min())}}function Ul(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=_.fromTimestamp(r===1e9?new j(t+1,0):new j(t,r));return new Ne(s,v.empty(),e)}function ql(n){return new Ne(n.readTime,n.key,-1)}class Ne{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ne(_.min(),v.empty(),-1)}static max(){return new Ne(_.max(),v.empty(),-1)}}function Go(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=v.comparator(n.documentKey,e.documentKey),t!==0?t:x(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pt(n){if(n.code!==m.FAILED_PRECONDITION||n.message!==jl)throw n;y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&E(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new f((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof f?t:f.resolve(t)}catch(t){return f.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):f.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):f.reject(t)}static resolve(e){return new f((t,r)=>{t(e)})}static reject(e){return new f((t,r)=>{r(e)})}static waitFor(e){return new f((t,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&t()},c=>r(c))}),o=!0,i===s&&t()})}static or(e){let t=f.resolve(!1);for(const r of e)t=t.next(s=>s?f.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new f((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;t(e[u]).next(l=>{o[u]=l,++a,a===i&&r(o)},l=>s(l))}})}static doWhile(e,t){return new f((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.R=new ie,this.transaction.oncomplete=()=>{this.R.resolve()},this.transaction.onabort=()=>{t.error?this.R.reject(new zn(e,t.error)):this.R.resolve()},this.transaction.onerror=r=>{const s=Ko(r.target.error);this.R.reject(new zn(e,s))}}static open(e,t,r,s){try{return new zs(t,e.transaction(s,r))}catch(i){throw new zn(t,i)}}get v(){return this.R.promise}abort(e){e&&this.R.reject(e),this.aborted||(y("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new rp(t)}}class Re{constructor(e,t,r){this.name=e,this.version=t,this.V=r,Re.S(ki())===12.2&&W("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return y("SimpleDb","Removing database:",e),Tt(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Tu())return!1;if(Re.C())return!0;const e=ki(),t=Re.S(e),r=0<t&&t<10,s=Re.N(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.k)==="YES"}static O(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static N(e){const t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async $(e){return this.db||(y("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{r(new zn(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new p(m.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new p(m.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new zn(e,o))},s.onupgradeneeded=i=>{y("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.V.M(o,s.transaction,i.oldVersion,this.version).next(()=>{y("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=t=>this.F(t)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.$(e);const a=zs.open(this.db,e,i?"readonly":"readwrite",r),c=s(a).next(u=>(a.P(),u)).catch(u=>(a.abort(u),f.reject(u))).toPromise();return c.catch(()=>{}),await a.v,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(y("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class np{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return Tt(this.L.delete())}}class zn extends p{constructor(e,t){super(m.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function yt(n){return n.name==="IndexedDbTransactionError"}class rp{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(y("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(y("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Tt(r)}add(e){return y("SimpleDb","ADD",this.store.name,e,e),Tt(this.store.add(e))}get(e){return Tt(this.store.get(e)).next(t=>(t===void 0&&(t=null),y("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return y("SimpleDb","DELETE",this.store.name,e),Tt(this.store.delete(e))}count(){return y("SimpleDb","COUNT",this.store.name),Tt(this.store.count())}j(e,t){const r=this.options(e,t);if(r.index||typeof this.store.getAll!="function"){const s=this.cursor(r),i=[];return this.W(s,(o,a)=>{i.push(a)}).next(()=>i)}{const s=this.store.getAll(r.range);return new f((i,o)=>{s.onerror=a=>{o(a.target.error)},s.onsuccess=a=>{i(a.target.result)}})}}H(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new f((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}J(e,t){y("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const s=this.cursor(r);return this.W(s,(i,o,a)=>a.delete())}Z(e,t){let r;t?r=e:(r={},t=e);const s=this.cursor(r);return this.W(s,t)}X(e){const t=this.cursor({});return new f((r,s)=>{t.onerror=i=>{const o=Ko(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,t){const r=[];return new f((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new np(a),u=t(a.primaryKey,a.value,c);if(u instanceof f){const l=u.catch(h=>(c.done(),f.reject(h)));r.push(l)}c.isDone?s():c.K===null?a.continue():a.continue(c.K)}}).next(()=>f.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Tt(n){return new f((e,t)=>{n.onsuccess=r=>{const s=r.target.result;e(s)},n.onerror=r=>{const s=Ko(r.target.error);t(s)}})}let mc=!1;function Ko(n){const e=Re.S(ki());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new p("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return mc||(mc=!0,setTimeout(()=>{throw r},0)),r}}return n}class sp{constructor(e,t){this.asyncQueue=e,this.tt=t,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}et(e){y("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{y("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(t){yt(t)?y("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await pt(t)}await this.et(6e4)})}}class ip{constructor(e,t){this.localStore=e,this.persistence=t}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.st(t,e))}st(e,t){const r=new Set;let s=t,i=!0;return f.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return y("IndexBackiller",`Processing collection: ${o}`),this.it(e,o,s).next(a=>{s-=a,r.add(o)});i=!1})).next(()=>t-s)}it(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,r).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.rt(s,i)).next(a=>(y("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}rt(e,t){let r=e;return t.changes.forEach((s,i)=>{const o=ql(i);Go(o,r)>0&&(r=o)}),new Ne(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>t.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Te.ct=-1;function Dr(n){return n==null}function ir(n){return n===0&&1/n==-1/0}function Gl(n){return typeof n=="number"&&Number.isInteger(n)&&!ir(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=gc(e)),e=op(n.get(t),e);return gc(e)}function op(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function gc(n){return n+""}function Me(n){const e=n.length;if(S(e>=2),e===2)return S(n.charAt(0)===""&&n.charAt(1)===""),R.emptyPath();const t=e-2,r=[];let s="";for(let i=0;i<e;){const o=n.indexOf("",i);switch((o<0||o>t)&&E(),n.charAt(o+1)){case"":const a=n.substring(i,o);let c;s.length===0?c=a:(s+=a,c=s,s=""),r.push(c);break;case"":s+=n.substring(i,o),s+="\0";break;case"":s+=n.substring(i,o+1);break;default:E()}i=o+2}return new R(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(n,e){return[n,be(e)]}function Kl(n,e,t){return[n,be(e),t]}const ap={},cp=["prefixPath","collectionGroup","readTime","documentId"],up=["prefixPath","collectionGroup","documentId"],lp=["collectionGroup","readTime","prefixPath","documentId"],hp=["canonicalId","targetId"],dp=["targetId","path"],fp=["path","targetId"],mp=["collectionId","parent"],gp=["indexId","uid"],pp=["uid","sequenceNumber"],yp=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],wp=["indexId","uid","orderedDocumentKey"],vp=["userId","collectionPath","documentId"],Ip=["userId","collectionPath","largestBatchId"],bp=["userId","collectionGroup","largestBatchId"],Ql=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Ep=[...Ql,"documentOverlays"],Hl=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Wl=Hl,Tp=[...Wl,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi extends zl{constructor(e,t){super(),this.at=e,this.currentSequenceNumber=t}}function ae(n,e){const t=I(n);return Re.O(t.at,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ht(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Yl(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t){this.comparator=e,this.root=t||ue.EMPTY}insert(e,t){return new Q(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ue.BLACK,null,null))}remove(e){return new Q(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ue.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new jr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new jr(this.root,e,this.comparator,!1)}getReverseIterator(){return new jr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new jr(this.root,e,this.comparator,!0)}}class jr{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ue{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??ue.RED,this.left=s??ue.EMPTY,this.right=i??ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new ue(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ue.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw E();const e=this.left.check();if(e!==this.right.check())throw E();return e+(this.isRed()?0:1)}}ue.EMPTY=null,ue.RED=!0,ue.BLACK=!1;ue.EMPTY=new class{constructor(){this.size=0}get key(){throw E()}get value(){throw E()}get color(){throw E()}get left(){throw E()}get right(){throw E()}copy(n,e,t,r,s){return this}insert(n,e,t){return new ue(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.comparator=e,this.data=new Q(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new wc(this.data.getIterator())}getIteratorFrom(e){return new wc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof P)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new P(this.comparator);return t.data=e,t}}class wc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Zt(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.fields=e,e.sort(Y.comparator)}static empty(){return new Se([])}unionWith(e){let t=new P(Y.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Se(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ln(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Sp("Invalid base64 string: "+s):s}}(e);return new te(t)}static fromUint8Array(e){const t=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new te(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return x(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}te.EMPTY_BYTE_STRING=new te("");const Dp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function at(n){if(S(!!n),typeof n=="string"){let e=0;const t=Dp.exec(n);if(S(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:G(n.seconds),nanos:G(n.nanos)}}function G(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ft(n){return typeof n=="string"?te.fromBase64String(n):te.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Xl(n){const e=n.mapValue.fields.__previous_value__;return Qo(e)?Xl(e):e}function or(n){const e=at(n.mapValue.fields.__local_write_time__.timestampValue);return new j(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e,t,r,s,i,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class ct{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ct("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ct&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Jr={nullValue:"NULL_VALUE"};function Pt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Qo(n)?4:Jl(n)?9007199254740991:10:E()}function Ve(n,e){if(n===e)return!0;const t=Pt(n);if(t!==Pt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return or(n).isEqual(or(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=at(r.timestampValue),o=at(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,s){return Ft(r.bytesValue).isEqual(Ft(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,s){return G(r.geoPointValue.latitude)===G(s.geoPointValue.latitude)&&G(r.geoPointValue.longitude)===G(s.geoPointValue.longitude)}(n,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return G(r.integerValue)===G(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=G(r.doubleValue),o=G(s.doubleValue);return i===o?ir(i)===ir(o):isNaN(i)&&isNaN(o)}return!1}(n,e);case 9:return ln(n.arrayValue.values||[],e.arrayValue.values||[],Ve);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(yc(i)!==yc(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Ve(i[a],o[a])))return!1;return!0}(n,e);default:return E()}}function ar(n,e){return(n.values||[]).find(t=>Ve(t,e))!==void 0}function ut(n,e){if(n===e)return 0;const t=Pt(n),r=Pt(e);if(t!==r)return x(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return x(n.booleanValue,e.booleanValue);case 2:return function(s,i){const o=G(s.integerValue||s.doubleValue),a=G(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return vc(n.timestampValue,e.timestampValue);case 4:return vc(or(n),or(e));case 5:return x(n.stringValue,e.stringValue);case 6:return function(s,i){const o=Ft(s),a=Ft(i);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=x(o[c],a[c]);if(u!==0)return u}return x(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,i){const o=x(G(s.latitude),G(i.latitude));return o!==0?o:x(G(s.longitude),G(i.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=ut(o[c],a[c]);if(u)return u}return x(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===et.mapValue&&i===et.mapValue)return 0;if(s===et.mapValue)return 1;if(i===et.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=x(a[l],u[l]);if(h!==0)return h;const d=ut(o[a[l]],c[u[l]]);if(d!==0)return d}return x(a.length,u.length)}(n.mapValue,e.mapValue);default:throw E()}}function vc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return x(n,e);const t=at(n),r=at(e),s=x(t.seconds,r.seconds);return s!==0?s:x(t.nanos,r.nanos)}function hn(n){return Yi(n)}function Yi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(r){const s=at(r);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?Ft(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,v.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=Yi(o);return s+"]"}(n.arrayValue):"mapValue"in n?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${Yi(r.fields[a])}`;return i+"}"}(n.mapValue):E();var e,t}function Vt(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Xi(n){return!!n&&"integerValue"in n}function cr(n){return!!n&&"arrayValue"in n}function Ic(n){return!!n&&"nullValue"in n}function bc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Zr(n){return!!n&&"mapValue"in n}function Gn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ht(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Gn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Gn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Jl(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function xp(n){return"nullValue"in n?Jr:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Vt(ct.empty(),v.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:E()}function Ap(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Vt(ct.empty(),v.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?et:E()}function Ec(n,e){const t=ut(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Tc(n,e){const t=ut(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.value=e}static empty(){return new le({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Zr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Gn(t)}setAll(e){let t=Y.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=a.popLast()}o?r[a.lastSegment()]=Gn(o):s.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Zr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ve(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Zr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Ht(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new le(Gn(this.value))}}function Zl(n){const e=[];return Ht(n.fields,(t,r)=>{const s=new Y([t]);if(Zr(r)){const i=Zl(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Se(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e,t,r,s,i,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new B(e,0,_.min(),_.min(),_.min(),le.empty(),0)}static newFoundDocument(e,t,r,s){return new B(e,1,t,_.min(),r,s,0)}static newNoDocument(e,t){return new B(e,2,t,_.min(),_.min(),le.empty(),0)}static newUnknownDocument(e,t){return new B(e,3,t,_.min(),_.min(),le.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(_.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=le.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=le.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof B&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new B(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,t){this.position=e,this.inclusive=t}}function Sc(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=v.comparator(v.fromName(o.referenceValue),t.key):r=ut(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function _c(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ve(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,t="asc"){this.field=e,this.dir=t}}function Np(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{}class N extends eh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new kp(e,t,r):t==="array-contains"?new Mp(e,r):t==="in"?new oh(e,r):t==="not-in"?new Lp(e,r):t==="array-contains-any"?new Fp(e,r):new N(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Rp(e,r):new Op(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ut(t,this.value)):t!==null&&Pt(this.value)===Pt(t)&&this.matchesComparison(ut(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return E()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class L extends eh{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new L(e,t)}matches(e){return dn(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(t=>t.isInequality());return e!==null?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function dn(n){return n.op==="and"}function Ji(n){return n.op==="or"}function Ho(n){return th(n)&&dn(n)}function th(n){for(const e of n.filters)if(e instanceof L)return!1;return!0}function Zi(n){if(n instanceof N)return n.field.canonicalString()+n.op.toString()+hn(n.value);if(Ho(n))return n.filters.map(e=>Zi(e)).join(",");{const e=n.filters.map(t=>Zi(t)).join(",");return`${n.op}(${e})`}}function nh(n,e){return n instanceof N?function(t,r){return r instanceof N&&t.op===r.op&&t.field.isEqual(r.field)&&Ve(t.value,r.value)}(n,e):n instanceof L?function(t,r){return r instanceof L&&t.op===r.op&&t.filters.length===r.filters.length?t.filters.reduce((s,i,o)=>s&&nh(i,r.filters[o]),!0):!1}(n,e):void E()}function rh(n,e){const t=n.filters.concat(e);return L.create(t,n.op)}function sh(n){return n instanceof N?function(e){return`${e.field.canonicalString()} ${e.op} ${hn(e.value)}`}(n):n instanceof L?function(e){return e.op.toString()+" {"+e.getFilters().map(sh).join(" ,")+"}"}(n):"Filter"}class kp extends N{constructor(e,t,r){super(e,t,r),this.key=v.fromName(r.referenceValue)}matches(e){const t=v.comparator(e.key,this.key);return this.matchesComparison(t)}}class Rp extends N{constructor(e,t){super(e,"in",t),this.keys=ih("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Op extends N{constructor(e,t){super(e,"not-in",t),this.keys=ih("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ih(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>v.fromName(r.referenceValue))}class Mp extends N{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return cr(t)&&ar(t.arrayValue,this.value)}}class oh extends N{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ar(this.value.arrayValue,t)}}class Lp extends N{constructor(e,t){super(e,"not-in",t)}matches(e){if(ar(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ar(this.value.arrayValue,t)}}class Fp extends N{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!cr(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ar(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e,t=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function eo(n,e=null,t=[],r=[],s=null,i=null,o=null){return new Pp(n,e,t,r,s,i,o)}function Bt(n){const e=I(n);if(e.ft===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Zi(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Dr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>hn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>hn(r)).join(",")),e.ft=t}return e.ft}function Cr(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Np(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!nh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!_c(n.startAt,e.startAt)&&_c(n.endAt,e.endAt)}function ps(n){return v.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function ys(n,e){return n.filters.filter(t=>t instanceof N&&t.field.isEqual(e))}function Dc(n,e,t){let r=Jr,s=!0;for(const i of ys(n,e)){let o=Jr,a=!0;switch(i.op){case"<":case"<=":o=xp(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=Jr}Ec({value:r,inclusive:s},{value:o,inclusive:a})<0&&(r=o,s=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Ec({value:r,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}function Cc(n,e,t){let r=et,s=!0;for(const i of ys(n,e)){let o=et,a=!0;switch(i.op){case">=":case">":o=Ap(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=et}Tc({value:r,inclusive:s},{value:o,inclusive:a})>0&&(r=o,s=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Tc({value:r,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,t=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function ah(n,e,t,r,s,i,o,a){return new Ge(n,e,t,r,s,i,o,a)}function _n(n){return new Ge(n)}function xc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Wo(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Gs(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function Yo(n){return n.collectionGroup!==null}function Ot(n){const e=I(n);if(e.dt===null){e.dt=[];const t=Gs(e),r=Wo(e);if(t!==null&&r===null)t.isKeyField()||e.dt.push(new on(t)),e.dt.push(new on(Y.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new on(Y.keyField(),i))}}}return e.dt}function De(n){const e=I(n);if(!e.wt)if(e.limitType==="F")e.wt=eo(e.path,e.collectionGroup,Ot(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Ot(e)){const o=i.dir==="desc"?"asc":"desc";t.push(new on(i.field,o))}const r=e.endAt?new lt(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new lt(e.startAt.position,e.startAt.inclusive):null;e.wt=eo(e.path,e.collectionGroup,t,e.filters,e.limit,r,s)}return e.wt}function to(n,e){e.getFirstInequalityField(),Gs(n);const t=n.filters.concat([e]);return new Ge(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ws(n,e,t){return new Ge(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function xr(n,e){return Cr(De(n),De(e))&&n.limitType===e.limitType}function ch(n){return`${Bt(De(n))}|lt:${n.limitType}`}function no(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(r=>sh(r)).join(", ")}]`),Dr(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(r=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(r)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>hn(r)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>hn(r)).join(",")),`Target(${t})`}(De(n))}; limitType=${n.limitType})`}function Ar(n,e){return e.isFoundDocument()&&function(t,r){const s=r.key.path;return t.collectionGroup!==null?r.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(s):v.isDocumentKey(t.path)?t.path.isEqual(s):t.path.isImmediateParentOf(s)}(n,e)&&function(t,r){for(const s of Ot(t))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(n,e)&&function(t,r){for(const s of t.filters)if(!s.matches(r))return!1;return!0}(n,e)&&function(t,r){return!(t.startAt&&!function(s,i,o){const a=Sc(s,i,o);return s.inclusive?a<=0:a<0}(t.startAt,Ot(t),r)||t.endAt&&!function(s,i,o){const a=Sc(s,i,o);return s.inclusive?a>=0:a>0}(t.endAt,Ot(t),r))}(n,e)}function uh(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function lh(n){return(e,t)=>{let r=!1;for(const s of Ot(n)){const i=Vp(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Vp(n,e,t){const r=n.field.isKeyField()?v.comparator(e.key,t.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?ut(a,c):E()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return E()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ht(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Yl(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp=new Q(v.comparator);function _e(){return Bp}const hh=new Q(v.comparator);function Un(...n){let e=hh;for(const t of n)e=e.insert(t.key,t);return e}function dh(n){let e=hh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Le(){return Kn()}function fh(){return Kn()}function Kn(){return new wt(n=>n.toString(),(n,e)=>n.isEqual(e))}const $p=new Q(v.comparator),Up=new P(v.comparator);function A(...n){let e=Up;for(const t of n)e=e.add(t);return e}const qp=new P(x);function Ks(){return qp}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ir(e)?"-0":e}}function gh(n){return{integerValue:""+n}}function ph(n,e){return Gl(e)?gh(e):mh(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(){this._=void 0}}function jp(n,e,t){return n instanceof fn?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(t,e):n instanceof $t?wh(n,e):n instanceof Ut?vh(n,e):function(r,s){const i=yh(r,s),o=Ac(i)+Ac(r._t);return Xi(i)&&Xi(r._t)?gh(o):mh(r.serializer,o)}(n,e)}function zp(n,e,t){return n instanceof $t?wh(n,e):n instanceof Ut?vh(n,e):t}function yh(n,e){return n instanceof mn?Xi(t=e)||function(r){return!!r&&"doubleValue"in r}(t)?e:{integerValue:0}:null;var t}class fn extends Qs{}class $t extends Qs{constructor(e){super(),this.elements=e}}function wh(n,e){const t=Ih(e);for(const r of n.elements)t.some(s=>Ve(s,r))||t.push(r);return{arrayValue:{values:t}}}class Ut extends Qs{constructor(e){super(),this.elements=e}}function vh(n,e){let t=Ih(e);for(const r of n.elements)t=t.filter(s=>!Ve(s,r));return{arrayValue:{values:t}}}class mn extends Qs{constructor(e,t){super(),this.serializer=e,this._t=t}}function Ac(n){return G(n.integerValue||n.doubleValue)}function Ih(n){return cr(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,t){this.field=e,this.transform=t}}function Gp(n,e){return n.field.isEqual(e.field)&&function(t,r){return t instanceof $t&&r instanceof $t||t instanceof Ut&&r instanceof Ut?ln(t.elements,r.elements,Ve):t instanceof mn&&r instanceof mn?Ve(t._t,r._t):t instanceof fn&&r instanceof fn}(n.transform,e.transform)}class Kp{constructor(e,t){this.version=e,this.transformResults=t}}class q{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new q}static exists(e){return new q(void 0,e)}static updateTime(e){return new q(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function es(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Hs{}function bh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Cn(n.key,q.none()):new Dn(n.key,n.data,q.none());{const t=n.data,r=le.empty();let s=new P(Y.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ke(n.key,r,new Se(s.toArray()),q.none())}}function Qp(n,e,t){n instanceof Dn?function(r,s,i){const o=r.value.clone(),a=kc(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(n,e,t):n instanceof Ke?function(r,s,i){if(!es(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=kc(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(Eh(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(n,e,t):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,t)}function Qn(n,e,t,r){return n instanceof Dn?function(s,i,o,a){if(!es(s.precondition,i))return o;const c=s.value.clone(),u=Rc(s.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof Ke?function(s,i,o,a){if(!es(s.precondition,i))return o;const c=Rc(s.fieldTransforms,a,i),u=i.data;return u.setAll(Eh(s)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(l=>l.field))}(n,e,t,r):function(s,i,o){return es(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(n,e,t)}function Hp(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=yh(r.transform,s||null);i!=null&&(t===null&&(t=le.empty()),t.set(r.field,i))}return t||null}function Nc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,r){return t===void 0&&r===void 0||!(!t||!r)&&ln(t,r,(s,i)=>Gp(s,i))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Dn extends Hs{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ke extends Hs{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Eh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function kc(n,e,t){const r=new Map;S(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,zp(o,a,t[s]))}return r}function Rc(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,jp(i,o,e))}return r}class Cn extends Hs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Xo extends Hs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Qp(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Qn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Qn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=fh();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(s.key)?null:a;const c=bh(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(_.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),A())}isEqual(e){return this.batchId===e.batchId&&ln(this.mutations,e.mutations,(t,r)=>Nc(t,r))&&ln(this.baseMutations,e.baseMutations,(t,r)=>Nc(t,r))}}class Zo{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){S(e.mutations.length===r.length);let s=$p;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Zo(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z,k;function Th(n){switch(n){default:return E();case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0}}function Sh(n){if(n===void 0)return W("GRPC error has no .code"),m.UNKNOWN;switch(n){case Z.OK:return m.OK;case Z.CANCELLED:return m.CANCELLED;case Z.UNKNOWN:return m.UNKNOWN;case Z.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case Z.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case Z.INTERNAL:return m.INTERNAL;case Z.UNAVAILABLE:return m.UNAVAILABLE;case Z.UNAUTHENTICATED:return m.UNAUTHENTICATED;case Z.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case Z.NOT_FOUND:return m.NOT_FOUND;case Z.ALREADY_EXISTS:return m.ALREADY_EXISTS;case Z.PERMISSION_DENIED:return m.PERMISSION_DENIED;case Z.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case Z.ABORTED:return m.ABORTED;case Z.OUT_OF_RANGE:return m.OUT_OF_RANGE;case Z.UNIMPLEMENTED:return m.UNIMPLEMENTED;case Z.DATA_LOSS:return m.DATA_LOSS;default:return E()}}(k=Z||(Z={}))[k.OK=0]="OK",k[k.CANCELLED=1]="CANCELLED",k[k.UNKNOWN=2]="UNKNOWN",k[k.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",k[k.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",k[k.NOT_FOUND=5]="NOT_FOUND",k[k.ALREADY_EXISTS=6]="ALREADY_EXISTS",k[k.PERMISSION_DENIED=7]="PERMISSION_DENIED",k[k.UNAUTHENTICATED=16]="UNAUTHENTICATED",k[k.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",k[k.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",k[k.ABORTED=10]="ABORTED",k[k.OUT_OF_RANGE=11]="OUT_OF_RANGE",k[k.UNIMPLEMENTED=12]="UNIMPLEMENTED",k[k.INTERNAL=13]="INTERNAL",k[k.UNAVAILABLE=14]="UNAVAILABLE",k[k.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return zr}static getOrCreateInstance(){return zr===null&&(zr=new ta),zr}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let zr=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Rr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new kr(_.min(),s,Ks(),_e(),A())}}class Rr{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Rr(r,t,A(),A(),A())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t,r,s){this.It=e,this.removedTargetIds=t,this.key=r,this.Tt=s}}class _h{constructor(e,t){this.targetId=e,this.Et=t}}class Dh{constructor(e,t,r=te.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Oc{constructor(){this.At=0,this.Rt=Lc(),this.vt=te.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=A(),t=A(),r=A();return this.Rt.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:E()}}),new Rr(this.vt,this.bt,e,t,r)}xt(){this.Pt=!1,this.Rt=Lc()}Nt(e,t){this.Pt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class Yp{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=_e(),this.qt=Mc(),this.Ut=new P(x)}Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}zt(e){this.forEachTarget(e,t=>{const r=this.jt(t);switch(e.state){case 0:this.Wt(t)&&r.Dt(e.resumeToken);break;case 1:r.$t(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.$t(),r.Vt||this.removeTarget(t);break;case 3:this.Wt(t)&&(r.Mt(),r.Dt(e.resumeToken));break;case 4:this.Wt(t)&&(this.Ht(t),r.Dt(e.resumeToken));break;default:E()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach((r,s)=>{this.Wt(s)&&t(s)})}Jt(e){var t;const r=e.targetId,s=e.Et.count,i=this.Yt(r);if(i){const o=i.target;if(ps(o))if(s===0){const a=new v(o.path);this.Qt(r,a,B.newNoDocument(a,_.min()))}else S(s===1);else{const a=this.Zt(r);a!==s&&(this.Ht(r),this.Ut=this.Ut.add(r),(t=ta.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const t=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&ps(a.target)){const c=new v(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,B.newNoDocument(c,e))}i.St&&(t.set(o,i.Ct()),i.xt())}});let r=A();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const s=new kr(e,t,this.Ut,this.Lt,r);return this.Lt=_e(),this.qt=Mc(),this.Ut=new P(x),s}Gt(e,t){if(!this.Wt(e))return;const r=this.te(e,t.key)?2:0;this.jt(e).Nt(t.key,r),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,r){if(!this.Wt(e))return;const s=this.jt(e);this.te(e,t)?s.Nt(t,1):s.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),r&&(this.Lt=this.Lt.insert(t,r))}removeTarget(e){this.Bt.delete(e)}Zt(e){const t=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let t=this.Bt.get(e);return t||(t=new Oc,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new P(x),this.qt=this.qt.insert(e,t)),t}Wt(e){const t=this.Yt(e)!==null;return t||y("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Oc),this.Ft.getRemoteKeysForTarget(e).forEach(t=>{this.Qt(e,t,null)})}te(e,t){return this.Ft.getRemoteKeysForTarget(e).has(t)}}function Mc(){return new Q(v.comparator)}function Lc(){return new Q(v.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Jp=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Zp=(()=>({and:"AND",or:"OR"}))();class ey{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function gn(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ch(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ty(n,e){return gn(n,e.toTimestamp())}function X(n){return S(!!n),_.fromTimestamp(function(e){const t=at(e);return new j(t.seconds,t.nanos)}(n))}function na(n,e){return function(t){return new R(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function xh(n){const e=R.fromString(n);return S(Ph(e)),e}function ur(n,e){return na(n.databaseId,e.path)}function Fe(n,e){const t=xh(e);if(t.get(1)!==n.databaseId.projectId)throw new p(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new p(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new v(Nh(t))}function ro(n,e){return na(n.databaseId,e)}function Ah(n){const e=xh(n);return e.length===4?R.emptyPath():Nh(e)}function lr(n){return new R(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Nh(n){return S(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Fc(n,e,t){return{name:ur(n,e),fields:t.value.mapValue.fields}}function kh(n,e,t){const r=Fe(n,e.name),s=X(e.updateTime),i=e.createTime?X(e.createTime):_.min(),o=new le({mapValue:{fields:e.fields}}),a=B.newFoundDocument(r,s,i,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function ny(n,e){return"found"in e?function(t,r){S(!!r.found),r.found.name,r.found.updateTime;const s=Fe(t,r.found.name),i=X(r.found.updateTime),o=r.found.createTime?X(r.found.createTime):_.min(),a=new le({mapValue:{fields:r.found.fields}});return B.newFoundDocument(s,i,o,a)}(n,e):"missing"in e?function(t,r){S(!!r.missing),S(!!r.readTime);const s=Fe(t,r.missing),i=X(r.readTime);return B.newNoDocument(s,i)}(n,e):E()}function ry(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:E()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(S(u===void 0||typeof u=="string"),te.fromBase64String(u||"")):(S(u===void 0||u instanceof Uint8Array),te.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?m.UNKNOWN:Sh(c.code);return new p(u,c.message||"")}(o);t=new Dh(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Fe(n,r.document.name),i=X(r.document.updateTime),o=r.document.createTime?X(r.document.createTime):_.min(),a=new le({mapValue:{fields:r.document.fields}}),c=B.newFoundDocument(s,i,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];t=new ts(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Fe(n,r.document),i=r.readTime?X(r.readTime):_.min(),o=B.newNoDocument(s,i),a=r.removedTargetIds||[];t=new ts([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Fe(n,r.document),i=r.removedTargetIds||[];t=new ts([],i,s,null)}else{if(!("filter"in e))return E();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new Wp(s),o=r.targetId;t=new _h(o,i)}}return t}function hr(n,e){let t;if(e instanceof Dn)t={update:Fc(n,e.key,e.value)};else if(e instanceof Cn)t={delete:ur(n,e.key)};else if(e instanceof Ke)t={update:Fc(n,e.key,e.data),updateMask:uy(e.fieldMask)};else{if(!(e instanceof Xo))return E();t={verify:ur(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof fn)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof $t)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ut)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof mn)return{fieldPath:i.field.canonicalString(),increment:o._t};throw E()}(0,r))),e.precondition.isNone||(t.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:ty(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:E()}(n,e.precondition)),t}function so(n,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?q.updateTime(X(s.updateTime)):s.exists!==void 0?q.exists(s.exists):q.none()}(e.currentDocument):q.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(i,o){let a=null;if("setToServerValue"in o)S(o.setToServerValue==="REQUEST_TIME"),a=new fn;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new $t(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new Ut(u)}else"increment"in o?a=new mn(i,o.increment):E();const c=Y.fromServerFormat(o.fieldPath);return new Nr(c,a)}(n,s)):[];if(e.update){e.update.name;const s=Fe(n,e.update.name),i=new le({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new Se(c.map(u=>Y.fromServerFormat(u)))}(e.updateMask);return new Ke(s,i,o,t,r)}return new Dn(s,i,t,r)}if(e.delete){const s=Fe(n,e.delete);return new Cn(s,t)}if(e.verify){const s=Fe(n,e.verify);return new Xo(s,t)}return E()}function sy(n,e){return n&&n.length>0?(S(e!==void 0),n.map(t=>function(r,s){let i=r.updateTime?X(r.updateTime):X(s);return i.isEqual(_.min())&&(i=X(s)),new Kp(i,r.transformResults||[])}(t,e))):[]}function Rh(n,e){return{documents:[ro(n,e.path)]}}function Oh(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=ro(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=ro(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return Fh(L.create(c,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:tn(l.field),direction:oy(l.dir)}}(u))}(e.orderBy);i&&(t.structuredQuery.orderBy=i);const o=function(c,u){return c.useProto3Json||Dr(u)?u:{value:u}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function Mh(n){let e=Ah(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){S(r===1);const l=t.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let i=[];t.where&&(i=function(l){const h=Lh(l);return h instanceof L&&Ho(h)?h.getFilters():[h]}(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(l=>function(h){return new on(nn(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;t.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Dr(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new lt(d,h)}(t.startAt));let u=null;return t.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new lt(d,h)}(t.endAt)),ah(e,s,o,i,a,"F",c,u)}function iy(n,e){const t=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return E()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function Lh(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=nn(e.unaryFilter.field);return N.create(t,"==",{doubleValue:NaN});case"IS_NULL":const r=nn(e.unaryFilter.field);return N.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=nn(e.unaryFilter.field);return N.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=nn(e.unaryFilter.field);return N.create(i,"!=",{nullValue:"NULL_VALUE"});default:return E()}}(n):n.fieldFilter!==void 0?function(e){return N.create(nn(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return E()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return L.create(e.compositeFilter.filters.map(t=>Lh(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return E()}}(e.compositeFilter.op))}(n):E()}function oy(n){return Xp[n]}function ay(n){return Jp[n]}function cy(n){return Zp[n]}function tn(n){return{fieldPath:n.canonicalString()}}function nn(n){return Y.fromServerFormat(n.fieldPath)}function Fh(n){return n instanceof N?function(e){if(e.op==="=="){if(bc(e.value))return{unaryFilter:{field:tn(e.field),op:"IS_NAN"}};if(Ic(e.value))return{unaryFilter:{field:tn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(bc(e.value))return{unaryFilter:{field:tn(e.field),op:"IS_NOT_NAN"}};if(Ic(e.value))return{unaryFilter:{field:tn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:tn(e.field),op:ay(e.op),value:e.value}}}(n):n instanceof L?function(e){const t=e.getFilters().map(r=>Fh(r));return t.length===1?t[0]:{compositeFilter:{op:cy(e.op),filters:t}}}(n):E()}function uy(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Ph(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,t,r,s,i=_.min(),o=_.min(),a=te.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new rt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new rt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new rt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e){this.se=e}}function ly(n,e){let t;if(e.document)t=kh(n.se,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=v.fromSegments(e.noDocument.path),s=jt(e.noDocument.readTime);t=B.newNoDocument(r,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return E();{const r=v.fromSegments(e.unknownDocument.path),s=jt(e.unknownDocument.version);t=B.newUnknownDocument(r,s)}}return e.readTime&&t.setReadTime(function(r){const s=new j(r[0],r[1]);return _.fromTimestamp(s)}(e.readTime)),t}function Pc(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:vs(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,i){return{name:ur(s,i.key),fields:i.data.value.mapValue.fields,updateTime:gn(s,i.version.toTimestamp()),createTime:gn(s,i.createTime.toTimestamp())}}(n.se,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:qt(e.version)};else{if(!e.isUnknownDocument())return E();r.unknownDocument={path:t.path.toArray(),version:qt(e.version)}}return r}function vs(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function qt(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function jt(n){const e=new j(n.seconds,n.nanoseconds);return _.fromTimestamp(e)}function St(n,e){const t=(e.baseMutations||[]).map(i=>so(n.se,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>so(n.se,i)),s=j.fromMillis(e.localWriteTimeMs);return new Jo(e.batchId,s,t,r)}function qn(n){const e=jt(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?jt(n.lastLimboFreeSnapshotVersion):_.min();let r;var s;return n.query.documents!==void 0?(S((s=n.query).documents.length===1),r=De(_n(Ah(s.documents[0])))):r=function(i){return De(Mh(i))}(n.query),new rt(r,n.targetId,0,n.lastListenSequenceNumber,e,t,te.fromBase64String(n.resumeToken))}function Bh(n,e){const t=qt(e.snapshotVersion),r=qt(e.lastLimboFreeSnapshotVersion);let s;s=ps(e.target)?Rh(n.se,e.target):Oh(n.se,e.target);const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Bt(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function ra(n){const e=Mh({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ws(e,e.limit,"L"):e}function _i(n,e){return new ea(e.largestBatchId,so(n.se,e.overlayMutation))}function Vc(n,e){const t=e.path.lastSegment();return[n,be(e.path.popLast()),t]}function Bc(n,e,t,r){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:qt(r.readTime),documentKey:be(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{getBundleMetadata(e,t){return $c(e).get(t).next(r=>{if(r)return{id:(s=r).bundleId,createTime:jt(s.createTime),version:s.version};var s})}saveBundleMetadata(e,t){return $c(e).put({bundleId:(r=t).id,createTime:qt(X(r.createTime)),version:r.version});var r}getNamedQuery(e,t){return Uc(e).get(t).next(r=>{if(r)return{name:(s=r).name,query:ra(s.bundledQuery),readTime:jt(s.readTime)};var s})}saveNamedQuery(e,t){return Uc(e).put(function(r){return{name:r.name,readTime:qt(X(r.readTime)),bundledQuery:r.bundledQuery}}(t))}}function $c(n){return ae(n,"bundles")}function Uc(n){return ae(n,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,t){this.serializer=e,this.userId=t}static ie(e,t){const r=t.uid||"";return new Ws(e,r)}getOverlay(e,t){return On(e).get(Vc(this.userId,t)).next(r=>r?_i(this.serializer,r):null)}getOverlays(e,t){const r=Le();return f.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){const s=[];return r.forEach((i,o)=>{const a=new ea(t,o);s.push(this.re(e,a))}),f.waitFor(s)}removeOverlaysForBatchId(e,t,r){const s=new Set;t.forEach(o=>s.add(be(o.getCollectionPath())));const i=[];return s.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(On(e).J("collectionPathOverlayIndex",a))}),f.waitFor(i)}getOverlaysForCollection(e,t,r){const s=Le(),i=be(t),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return On(e).j("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=_i(this.serializer,c);s.set(u.getKey(),u)}return s})}getOverlaysForCollectionGroup(e,t,r,s){const i=Le();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return On(e).Z({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=_i(this.serializer,u);i.size()<s||h.largestBatchId===o?(i.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>i)}re(e,t){return On(e).put(function(r,s,i){const[o,a,c]=Vc(s,i.mutation.key);return{userId:s,collectionPath:a,documentId:c,collectionGroup:i.mutation.key.getCollectionGroup(),largestBatchId:i.largestBatchId,overlayMutation:hr(r.se,i.mutation)}}(this.serializer,this.userId,t))}}function On(n){return ae(n,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(){}oe(e,t){this.ue(e,t),t.ce()}ue(e,t){if("nullValue"in e)this.ae(t,5);else if("booleanValue"in e)this.ae(t,10),t.he(e.booleanValue?1:0);else if("integerValue"in e)this.ae(t,15),t.he(G(e.integerValue));else if("doubleValue"in e){const r=G(e.doubleValue);isNaN(r)?this.ae(t,13):(this.ae(t,15),ir(r)?t.he(0):t.he(r))}else if("timestampValue"in e){const r=e.timestampValue;this.ae(t,20),typeof r=="string"?t.le(r):(t.le(`${r.seconds||""}`),t.he(r.nanos||0))}else if("stringValue"in e)this.fe(e.stringValue,t),this.de(t);else if("bytesValue"in e)this.ae(t,30),t.we(Ft(e.bytesValue)),this.de(t);else if("referenceValue"in e)this._e(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.ae(t,45),t.he(r.latitude||0),t.he(r.longitude||0)}else"mapValue"in e?Jl(e)?this.ae(t,Number.MAX_SAFE_INTEGER):(this.me(e.mapValue,t),this.de(t)):"arrayValue"in e?(this.ge(e.arrayValue,t),this.de(t)):E()}fe(e,t){this.ae(t,25),this.ye(e,t)}ye(e,t){t.le(e)}me(e,t){const r=e.fields||{};this.ae(t,55);for(const s of Object.keys(r))this.fe(s,t),this.ue(r[s],t)}ge(e,t){const r=e.values||[];this.ae(t,50);for(const s of r)this.ue(s,t)}_e(e,t){this.ae(t,37),v.fromName(e).path.forEach(r=>{this.ae(t,60),this.ye(r,t)})}ae(e,t){e.he(t)}de(e){e.he(2)}}_t.pe=new _t;function dy(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function qc(n){const e=64-function(t){let r=0;for(let s=0;s<8;++s){const i=dy(255&t[s]);if(r+=i,i!==8)break}return r}(n);return Math.ceil(e/8)}class fy{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ie(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Te(r.value),r=t.next();this.Ee()}Ae(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Re(r.value),r=t.next();this.ve()}be(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Te(r);else if(r<2048)this.Te(960|r>>>6),this.Te(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Te(480|r>>>12),this.Te(128|63&r>>>6),this.Te(128|63&r);else{const s=t.codePointAt(0);this.Te(240|s>>>18),this.Te(128|63&s>>>12),this.Te(128|63&s>>>6),this.Te(128|63&s)}}this.Ee()}Pe(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Re(r);else if(r<2048)this.Re(960|r>>>6),this.Re(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Re(480|r>>>12),this.Re(128|63&r>>>6),this.Re(128|63&r);else{const s=t.codePointAt(0);this.Re(240|s>>>18),this.Re(128|63&s>>>12),this.Re(128|63&s>>>6),this.Re(128|63&s)}}this.ve()}Ve(e){const t=this.Se(e),r=qc(t);this.De(1+r),this.buffer[this.position++]=255&r;for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=255&t[s]}Ce(e){const t=this.Se(e),r=qc(t);this.De(1+r),this.buffer[this.position++]=~(255&r);for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}xe(){this.Ne(255),this.Ne(255)}ke(){this.Oe(255),this.Oe(255)}reset(){this.position=0}seed(e){this.De(e.length),this.buffer.set(e,this.position),this.position+=e.length}$e(){return this.buffer.slice(0,this.position)}Se(e){const t=function(s){const i=new DataView(new ArrayBuffer(8));return i.setFloat64(0,s,!1),new Uint8Array(i.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let s=1;s<t.length;++s)t[s]^=r?255:0;return t}Te(e){const t=255&e;t===0?(this.Ne(0),this.Ne(255)):t===255?(this.Ne(255),this.Ne(0)):this.Ne(t)}Re(e){const t=255&e;t===0?(this.Oe(0),this.Oe(255)):t===255?(this.Oe(255),this.Oe(0)):this.Oe(e)}Ee(){this.Ne(0),this.Ne(1)}ve(){this.Oe(0),this.Oe(1)}Ne(e){this.De(1),this.buffer[this.position++]=e}Oe(e){this.De(1),this.buffer[this.position++]=~e}De(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class my{constructor(e){this.Me=e}we(e){this.Me.Ie(e)}le(e){this.Me.be(e)}he(e){this.Me.Ve(e)}ce(){this.Me.xe()}}class gy{constructor(e){this.Me=e}we(e){this.Me.Ae(e)}le(e){this.Me.Pe(e)}he(e){this.Me.Ce(e)}ce(){this.Me.ke()}}class Mn{constructor(){this.Me=new fy,this.Fe=new my(this.Me),this.Be=new gy(this.Me)}seed(e){this.Me.seed(e)}Le(e){return e===0?this.Fe:this.Be}$e(){return this.Me.$e()}reset(){this.Me.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,t,r,s){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=s}qe(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Dt(this.indexId,this.documentKey,this.arrayValue,r)}}function We(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=jc(n.arrayValue,e.arrayValue),t!==0?t:(t=jc(n.directionalValue,e.directionalValue),t!==0?t:v.comparator(n.documentKey,e.documentKey)))}function jc(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ue=e.orderBy,this.Ke=[];for(const t of e.filters){const r=t;r.isInequality()?this.Ge=r:this.Ke.push(r)}}Qe(e){S(e.collectionGroup===this.collectionId);const t=Hi(e);if(t!==void 0&&!this.ze(t))return!1;const r=Et(e);let s=0,i=0;for(;s<r.length&&this.ze(r[s]);++s);if(s===r.length)return!0;if(this.Ge!==void 0){const o=r[s];if(!this.je(this.Ge,o)||!this.We(this.Ue[i++],o))return!1;++s}for(;s<r.length;++s){const o=r[s];if(i>=this.Ue.length||!this.We(this.Ue[i++],o))return!1}return!0}ze(e){for(const t of this.Ke)if(this.je(t,e))return!0;return!1}je(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}We(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(n){var e,t;if(S(n instanceof N||n instanceof L),n instanceof N){if(n instanceof oh){const s=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>N.create(n.field,"==",i)))||[];return L.create(s,"or")}return n}const r=n.filters.map(s=>$h(s));return L.create(r,n.op)}function yy(n){if(n.getFilters().length===0)return[];const e=ao($h(n));return S(Uh(e)),io(e)||oo(e)?[e]:e.getFilters()}function io(n){return n instanceof N}function oo(n){return n instanceof L&&Ho(n)}function Uh(n){return io(n)||oo(n)||function(e){if(e instanceof L&&Ji(e)){for(const t of e.getFilters())if(!io(t)&&!oo(t))return!1;return!0}return!1}(n)}function ao(n){if(S(n instanceof N||n instanceof L),n instanceof N)return n;if(n.filters.length===1)return ao(n.filters[0]);const e=n.filters.map(r=>ao(r));let t=L.create(e,n.op);return t=Is(t),Uh(t)?t:(S(t instanceof L),S(dn(t)),S(t.filters.length>1),t.filters.reduce((r,s)=>sa(r,s)))}function sa(n,e){let t;return S(n instanceof N||n instanceof L),S(e instanceof N||e instanceof L),t=n instanceof N?e instanceof N?function(r,s){return L.create([r,s],"and")}(n,e):zc(n,e):e instanceof N?zc(e,n):function(r,s){if(S(r.filters.length>0&&s.filters.length>0),dn(r)&&dn(s))return rh(r,s.getFilters());const i=Ji(r)?r:s,o=Ji(r)?s:r,a=i.filters.map(c=>sa(c,o));return L.create(a,"or")}(n,e),Is(t)}function zc(n,e){if(dn(e))return rh(e,n.getFilters());{const t=e.filters.map(r=>sa(n,r));return L.create(t,"or")}}function Is(n){if(S(n instanceof N||n instanceof L),n instanceof N)return n;const e=n.getFilters();if(e.length===1)return Is(e[0]);if(th(n))return n;const t=e.map(s=>Is(s)),r=[];return t.forEach(s=>{s instanceof N?r.push(s):s instanceof L&&(s.op===n.op?r.push(...s.filters):r.push(s))}),r.length===1?r[0]:L.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(){this.He=new ia}addToCollectionParentIndex(e,t){return this.He.add(t),f.resolve()}getCollectionParents(e,t){return f.resolve(this.He.getEntries(t))}addFieldIndex(e,t){return f.resolve()}deleteFieldIndex(e,t){return f.resolve()}getDocumentsMatchingTarget(e,t){return f.resolve(null)}getIndexType(e,t){return f.resolve(0)}getFieldIndexes(e,t){return f.resolve([])}getNextCollectionGroupToUpdate(e){return f.resolve(null)}getMinOffset(e,t){return f.resolve(Ne.min())}getMinOffsetFromCollectionGroup(e,t){return f.resolve(Ne.min())}updateCollectionGroup(e,t,r){return f.resolve()}updateIndexEntries(e,t){return f.resolve()}}class ia{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new P(R.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new P(R.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr=new Uint8Array(0);class vy{constructor(e,t){this.user=e,this.databaseId=t,this.Je=new ia,this.Ye=new wt(r=>Bt(r),(r,s)=>Cr(r,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Je.has(t)){const r=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.Je.add(t)});const i={collectionId:r,parent:be(s)};return Gc(e).put(i)}return f.resolve()}getCollectionParents(e,t){const r=[],s=IDBKeyRange.bound([t,""],[Bl(t),""],!1,!0);return Gc(e).j(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;r.push(Me(o.parent))}return r})}addFieldIndex(e,t){const r=Kr(e),s=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(t);delete s.indexId;const i=r.add(s);if(t.indexState){const o=Fn(e);return i.next(a=>{o.put(Bc(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const r=Kr(e),s=Fn(e),i=Ln(e);return r.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const r=Ln(e);let s=!0;const i=new Map;return f.forEach(this.Ze(t),o=>this.Xe(e,o).next(a=>{s&&(s=!!a),i.set(o,a)})).next(()=>{if(s){let o=A();const a=[];return f.forEach(i,(c,u)=>{var l;y("IndexedDbIndexManager",`Using index ${l=c,`id=${l.indexId}|cg=${l.collectionGroup}|f=${l.fields.map(F=>`${F.fieldPath}:${F.kind}`).join(",")}`} to execute ${Bt(t)}`);const h=function(F,ye){const J=Hi(ye);if(J===void 0)return null;for(const z of ys(F,J.fieldPath))switch(z.op){case"array-contains-any":return z.value.arrayValue.values||[];case"array-contains":return[z.value]}return null}(u,c),d=function(F,ye){const J=new Map;for(const z of Et(ye))for(const Ce of ys(F,z.fieldPath))switch(Ce.op){case"==":case"in":J.set(z.fieldPath.canonicalString(),Ce.value);break;case"not-in":case"!=":return J.set(z.fieldPath.canonicalString(),Ce.value),Array.from(J.values())}return null}(u,c),g=function(F,ye){const J=[];let z=!0;for(const Ce of Et(ye)){const He=Ce.kind===0?Dc(F,Ce.fieldPath,F.startAt):Cc(F,Ce.fieldPath,F.startAt);J.push(He.value),z&&(z=He.inclusive)}return new lt(J,z)}(u,c),w=function(F,ye){const J=[];let z=!0;for(const Ce of Et(ye)){const He=Ce.kind===0?Cc(F,Ce.fieldPath,F.endAt):Dc(F,Ce.fieldPath,F.endAt);J.push(He.value),z&&(z=He.inclusive)}return new lt(J,z)}(u,c),b=this.tn(c,u,g),D=this.tn(c,u,w),V=this.en(c,u,d),ne=this.nn(c.indexId,h,b,g.inclusive,D,w.inclusive,V);return f.forEach(ne,F=>r.H(F,t.limit).next(ye=>{ye.forEach(J=>{const z=v.fromSegments(J.documentKey);o.has(z)||(o=o.add(z),a.push(z))})}))}).next(()=>a)}return f.resolve(null)})}Ze(e){let t=this.Ye.get(e);return t||(e.filters.length===0?t=[e]:t=yy(L.create(e.filters,"and")).map(r=>eo(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.Ye.set(e,t),t)}nn(e,t,r,s,i,o,a){const c=(t!=null?t.length:1)*Math.max(r.length,i.length),u=c/(t!=null?t.length:1),l=[];for(let h=0;h<c;++h){const d=t?this.sn(t[h/u]):Gr,g=this.rn(e,d,r[h%u],s),w=this.on(e,d,i[h%u],o),b=a.map(D=>this.rn(e,d,D,!0));l.push(...this.createRange(g,w,b))}return l}rn(e,t,r,s){const i=new Dt(e,v.empty(),t,r);return s?i:i.qe()}on(e,t,r,s){const i=new Dt(e,v.empty(),t,r);return s?i.qe():i}Xe(e,t){const r=new py(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const a of i)r.Qe(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const s=this.Ze(t);return f.forEach(s,i=>this.Xe(e,i).next(o=>{o?r!==0&&o.fields.length<function(a){let c=new P(Y.comparator),u=!1;for(const l of a.filters)for(const h of l.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?u=!0:c=c.add(h.field));for(const l of a.orderBy)l.field.isKeyField()||(c=c.add(l.field));return c.size+(u?1:0)}(i)&&(r=1):r=0})).next(()=>function(i){return i.limit!==null}(t)&&s.length>1&&r===2?1:r)}un(e,t){const r=new Mn;for(const s of Et(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=r.Le(s.kind);_t.pe.oe(i,o)}return r.$e()}sn(e){const t=new Mn;return _t.pe.oe(e,t.Le(0)),t.$e()}cn(e,t){const r=new Mn;return _t.pe.oe(Vt(this.databaseId,t),r.Le(function(s){const i=Et(s);return i.length===0?0:i[i.length-1].kind}(e))),r.$e()}en(e,t,r){if(r===null)return[];let s=[];s.push(new Mn);let i=0;for(const o of Et(e)){const a=r[i++];for(const c of s)if(this.an(t,o.fieldPath)&&cr(a))s=this.hn(s,o,a);else{const u=c.Le(o.kind);_t.pe.oe(a,u)}}return this.ln(s)}tn(e,t,r){return this.en(e,t,r.position)}ln(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].$e();return t}hn(e,t,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const a of s){const c=new Mn;c.seed(a.$e()),_t.pe.oe(o,c.Le(t.kind)),i.push(c)}return i}an(e,t){return!!e.filters.find(r=>r instanceof N&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=Kr(e),s=Fn(e);return(t?r.j("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.j()).next(i=>{const o=[];return f.forEach(i,a=>s.get([a.indexId,this.uid]).next(c=>{o.push(function(u,l){const h=l?new gs(l.sequenceNumber,new Ne(jt(l.readTime),new v(Me(l.documentKey)),l.largestBatchId)):gs.empty(),d=u.fields.map(([g,w])=>new tp(Y.fromServerFormat(g),w));return new $l(u.indexId,u.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:x(r.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const s=Kr(e),i=Fn(e);return this.fn(e).next(o=>s.j("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>f.forEach(a,c=>i.put(Bc(c.indexId,this.user,o,r)))))}updateIndexEntries(e,t){const r=new Map;return f.forEach(t,(s,i)=>{const o=r.get(s.collectionGroup);return(o?f.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(a=>(r.set(s.collectionGroup,a),f.forEach(a,c=>this.dn(e,s,c).next(u=>{const l=this.wn(i,c);return u.isEqual(l)?f.resolve():this._n(e,i,c,u,l)}))))})}mn(e,t,r,s){return Ln(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.cn(r,t.key),documentKey:t.key.path.toArray()})}gn(e,t,r,s){return Ln(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.cn(r,t.key),t.key.path.toArray()])}dn(e,t,r){const s=Ln(e);let i=new P(We);return s.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.cn(r,t)])},(o,a)=>{i=i.add(new Dt(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>i)}wn(e,t){let r=new P(We);const s=this.un(t,e);if(s==null)return r;const i=Hi(t);if(i!=null){const o=e.data.field(i.fieldPath);if(cr(o))for(const a of o.arrayValue.values||[])r=r.add(new Dt(t.indexId,e.key,this.sn(a),s))}else r=r.add(new Dt(t.indexId,e.key,Gr,s));return r}_n(e,t,r,s,i){y("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(a,c,u,l,h){const d=a.getIterator(),g=c.getIterator();let w=Zt(d),b=Zt(g);for(;w||b;){let D=!1,V=!1;if(w&&b){const ne=u(w,b);ne<0?V=!0:ne>0&&(D=!0)}else w!=null?V=!0:D=!0;D?(l(b),b=Zt(g)):V?(h(w),w=Zt(d)):(w=Zt(d),b=Zt(g))}}(s,i,We,a=>{o.push(this.mn(e,t,r,a))},a=>{o.push(this.gn(e,t,r,a))}),f.waitFor(o)}fn(e){let t=1;return Fn(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>We(o,a)).filter((o,a,c)=>!a||We(o,c[a-1])!==0);const s=[];s.push(e);for(const o of r){const a=We(o,e),c=We(o,t);if(a===0)s[0]=e.qe();else if(a>0&&c<0)s.push(o),s.push(o.qe());else if(c>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.yn(s[o],s[o+1]))return[];const a=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,Gr,[]],c=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,Gr,[]];i.push(IDBKeyRange.bound(a,c))}return i}yn(e,t){return We(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Kc)}getMinOffset(e,t){return f.mapArray(this.Ze(t),r=>this.Xe(e,r).next(s=>s||E())).next(Kc)}}function Gc(n){return ae(n,"collectionParents")}function Ln(n){return ae(n,"indexEntries")}function Kr(n){return ae(n,"indexConfiguration")}function Fn(n){return ae(n,"indexState")}function Kc(n){S(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const s=n[r].indexState.offset;Go(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new Ne(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ee{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Ee(e,Ee.DEFAULT_COLLECTION_PERCENTILE,Ee.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(n,e,t){const r=n.store("mutations"),s=n.store("documentMutations"),i=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=r.Z({range:o},(l,h,d)=>(a++,d.delete()));i.push(c.next(()=>{S(a===1)}));const u=[];for(const l of t.mutations){const h=Kl(e,l.key.path,t.batchId);i.push(s.delete(h)),u.push(l.key)}return f.waitFor(i).next(()=>u)}function bs(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw E();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ee.DEFAULT_COLLECTION_PERCENTILE=10,Ee.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ee.DEFAULT=new Ee(41943040,Ee.DEFAULT_COLLECTION_PERCENTILE,Ee.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ee.DISABLED=new Ee(-1,0,0);class Ys{constructor(e,t,r,s){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=s,this.pn={}}static ie(e,t,r,s){S(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new Ys(i,t,r,s)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ye(e).Z({index:"userMutationsIndex",range:r},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,s){const i=rn(e),o=Ye(e);return o.add({}).next(a=>{S(typeof a=="number");const c=new Jo(a,t,r,s),u=function(d,g,w){const b=w.baseMutations.map(V=>hr(d.se,V)),D=w.mutations.map(V=>hr(d.se,V));return{userId:g,batchId:w.batchId,localWriteTimeMs:w.localWriteTime.toMillis(),baseMutations:b,mutations:D}}(this.serializer,this.userId,c),l=[];let h=new P((d,g)=>x(d.canonicalString(),g.canonicalString()));for(const d of s){const g=Kl(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(i.put(g,ap))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.pn[a]=c.keys()}),f.waitFor(l).next(()=>c)})}lookupMutationBatch(e,t){return Ye(e).get(t).next(r=>r?(S(r.userId===this.userId),St(this.serializer,r)):null)}In(e,t){return this.pn[t]?f.resolve(this.pn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const s=r.keys();return this.pn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return Ye(e).Z({index:"userMutationsIndex",range:s},(o,a,c)=>{a.userId===this.userId&&(S(a.batchId>=r),i=St(this.serializer,a)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Ye(e).Z({index:"userMutationsIndex",range:t,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Ye(e).j("userMutationsIndex",t).next(r=>r.map(s=>St(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Xr(this.userId,t.path),s=IDBKeyRange.lowerBound(r),i=[];return rn(e).Z({range:s},(o,a,c)=>{const[u,l,h]=o,d=Me(l);if(u===this.userId&&t.path.isEqual(d))return Ye(e).get(h).next(g=>{if(!g)throw E();S(g.userId===this.userId),i.push(St(this.serializer,g))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new P(x);const s=[];return t.forEach(i=>{const o=Xr(this.userId,i.path),a=IDBKeyRange.lowerBound(o),c=rn(e).Z({range:a},(u,l,h)=>{const[d,g,w]=u,b=Me(g);d===this.userId&&i.path.isEqual(b)?r=r.add(w):h.done()});s.push(c)}),f.waitFor(s).next(()=>this.Tn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1,i=Xr(this.userId,r),o=IDBKeyRange.lowerBound(i);let a=new P(x);return rn(e).Z({range:o},(c,u,l)=>{const[h,d,g]=c,w=Me(d);h===this.userId&&r.isPrefixOf(w)?w.length===s&&(a=a.add(g)):l.done()}).next(()=>this.Tn(e,a))}Tn(e,t){const r=[],s=[];return t.forEach(i=>{s.push(Ye(e).get(i).next(o=>{if(o===null)throw E();S(o.userId===this.userId),r.push(St(this.serializer,o))}))}),f.waitFor(s).next(()=>r)}removeMutationBatch(e,t){return qh(e.at,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.En(t.batchId)}),f.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}En(e){delete this.pn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return f.resolve();const r=IDBKeyRange.lowerBound([this.userId]),s=[];return rn(e).Z({range:r},(i,o,a)=>{if(i[0]===this.userId){const c=Me(i[1]);s.push(c)}else a.done()}).next(()=>{S(s.length===0)})})}containsKey(e,t){return jh(e,this.userId,t)}An(e){return zh(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function jh(n,e,t){const r=Xr(e,t.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return rn(n).Z({range:i,Y:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===s&&(o=!0),u.done()}).next(()=>o)}function Ye(n){return ae(n,"mutations")}function rn(n){return ae(n,"documentMutations")}function zh(n){return ae(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new zt(0)}static bn(){return new zt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Pn(e).next(t=>{const r=new zt(t.highestTargetId);return t.highestTargetId=r.next(),this.Vn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Pn(e).next(t=>_.fromTimestamp(new j(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Pn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.Pn(e).next(s=>(s.highestListenSequenceNumber=t,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.Vn(e,s)))}addTargetData(e,t){return this.Sn(e,t).next(()=>this.Pn(e).next(r=>(r.targetCount+=1,this.Dn(t,r),this.Vn(e,r))))}updateTargetData(e,t){return this.Sn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>en(e).delete(t.targetId)).next(()=>this.Pn(e)).next(r=>(S(r.targetCount>0),r.targetCount-=1,this.Vn(e,r)))}removeTargets(e,t,r){let s=0;const i=[];return en(e).Z((o,a)=>{const c=qn(a);c.sequenceNumber<=t&&r.get(c.targetId)===null&&(s++,i.push(this.removeTargetData(e,c)))}).next(()=>f.waitFor(i)).next(()=>s)}forEachTarget(e,t){return en(e).Z((r,s)=>{const i=qn(s);t(i)})}Pn(e){return Hc(e).get("targetGlobalKey").next(t=>(S(t!==null),t))}Vn(e,t){return Hc(e).put("targetGlobalKey",t)}Sn(e,t){return en(e).put(Bh(this.serializer,t))}Dn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Pn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Bt(t),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return en(e).Z({range:s,index:"queryTargetsIndex"},(o,a,c)=>{const u=qn(a);Cr(t,u.target)&&(i=u,c.done())}).next(()=>i)}addMatchingKeys(e,t,r){const s=[],i=Je(e);return t.forEach(o=>{const a=be(o.path);s.push(i.put({targetId:r,path:a})),s.push(this.referenceDelegate.addReference(e,r,o))}),f.waitFor(s)}removeMatchingKeys(e,t,r){const s=Je(e);return f.forEach(t,i=>{const o=be(i.path);return f.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,t){const r=Je(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),s=Je(e);let i=A();return s.Z({range:r,Y:!0},(o,a,c)=>{const u=Me(o[1]),l=new v(u);i=i.add(l)}).next(()=>i)}containsKey(e,t){const r=be(t.path),s=IDBKeyRange.bound([r],[Bl(r)],!1,!0);let i=0;return Je(e).Z({index:"documentTargetsIndex",Y:!0,range:s},([o,a],c,u)=>{o!==0&&(i++,u.done())}).next(()=>i>0)}ne(e,t){return en(e).get(t).next(r=>r?qn(r):null)}}function en(n){return ae(n,"targets")}function Hc(n){return ae(n,"targetGlobal")}function Je(n){return ae(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc([n,e],[t,r]){const s=x(n,t);return s===0?x(e,r):s}class by{constructor(e){this.Cn=e,this.buffer=new P(Wc),this.xn=0}Nn(){return++this.xn}kn(e){const t=[e,this.Nn()];if(this.buffer.size<this.Cn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Wc(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Ey{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.On=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.$n(6e4)}stop(){this.On&&(this.On.cancel(),this.On=null)}get started(){return this.On!==null}$n(e){y("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.On=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.On=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){yt(t)?y("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await pt(t)}await this.$n(3e5)})}}class Ty{constructor(e,t){this.Mn=e,this.params=t}calculateTargetCount(e,t){return this.Mn.Fn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return f.resolve(Te.ct);const r=new by(t);return this.Mn.forEachTarget(e,s=>r.kn(s.sequenceNumber)).next(()=>this.Mn.Bn(e,s=>r.kn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Mn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Mn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(y("LruGarbageCollector","Garbage collection skipped; disabled"),f.resolve(Qc)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(y("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Qc):this.Ln(e,t))}getCacheSize(e){return this.Mn.getCacheSize(e)}Ln(e,t){let r,s,i,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(y("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),s=this.params.maximumSequenceNumbersToCollect):s=h,o=Date.now(),this.nthSequenceNumber(e,s))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,t))).next(h=>(i=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),Qi()<=M.DEBUG&&y("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),f.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:h})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e,t){this.db=e,this.garbageCollector=function(r,s){return new Ty(r,s)}(this,t)}Fn(e){const t=this.qn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}qn(e){let t=0;return this.Bn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Bn(e,t){return this.Un(e,(r,s)=>t(s))}addReference(e,t,r){return Qr(e,r)}removeReference(e,t,r){return Qr(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Qr(e,t)}Kn(e,t){return function(r,s){let i=!1;return zh(r).X(o=>jh(r,o,s).next(a=>(a&&(i=!0),f.resolve(!a)))).next(()=>i)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.Un(e,(o,a)=>{if(a<=t){const c=this.Kn(e,o).next(u=>{if(!u)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,_.min()),Je(e).delete([0,be(o.path)])))});s.push(c)}}).next(()=>f.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Qr(e,t)}Un(e,t){const r=Je(e);let s,i=Te.ct;return r.Z({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(i!==Te.ct&&t(new v(Me(s)),i),i=u,s=c):i=Te.ct}).next(()=>{i!==Te.ct&&t(new v(Me(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Qr(n,e){return Je(n).put(function(t,r){return{targetId:0,path:be(t.path),sequenceNumber:r}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(){this.changes=new wt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,B.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?f.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return It(e).put(r)}removeEntry(e,t,r){return It(e).delete(function(s,i){const o=s.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],vs(i),o[o.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.Gn(e,r)))}getEntry(e,t){let r=B.newInvalidDocument(t);return It(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Pn(t))},(s,i)=>{r=this.Qn(t,i)}).next(()=>r)}zn(e,t){let r={size:0,document:B.newInvalidDocument(t)};return It(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Pn(t))},(s,i)=>{r={document:this.Qn(t,i),size:bs(i)}}).next(()=>r)}getEntries(e,t){let r=_e();return this.jn(e,t,(s,i)=>{const o=this.Qn(s,i);r=r.insert(s,o)}).next(()=>r)}Wn(e,t){let r=_e(),s=new Q(v.comparator);return this.jn(e,t,(i,o)=>{const a=this.Qn(i,o);r=r.insert(i,a),s=s.insert(i,bs(o))}).next(()=>({documents:r,Hn:s}))}jn(e,t,r){if(t.isEmpty())return f.resolve();let s=new P(Jc);t.forEach(c=>s=s.add(c));const i=IDBKeyRange.bound(Pn(s.first()),Pn(s.last())),o=s.getIterator();let a=o.getNext();return It(e).Z({index:"documentKeyIndex",range:i},(c,u,l)=>{const h=v.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&Jc(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.G(Pn(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,s){const i=t.path,o=[i.popLast().toArray(),i.lastSegment(),vs(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[i.popLast().toArray(),i.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return It(e).j(IDBKeyRange.bound(o,a,!0)).next(c=>{let u=_e();for(const l of c){const h=this.Qn(v.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);h.isFoundDocument()&&(Ar(t,h)||s.has(h.key))&&(u=u.insert(h.key,h))}return u})}getAllFromCollectionGroup(e,t,r,s){let i=_e();const o=Xc(t,r),a=Xc(t,Ne.max());return It(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.Qn(v.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);i=i.insert(h.key,h),i.size===s&&l.done()}).next(()=>i)}newChangeBuffer(e){return new Dy(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Yc(e).get("remoteDocumentGlobalKey").next(t=>(S(!!t),t))}Gn(e,t){return Yc(e).put("remoteDocumentGlobalKey",t)}Qn(e,t){if(t){const r=ly(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(_.min())))return r}return B.newInvalidDocument(e)}}function Kh(n){return new _y(n)}class Dy extends Gh{constructor(e,t){super(),this.Jn=e,this.trackRemovals=t,this.Yn=new wt(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const t=[];let r=0,s=new P((i,o)=>x(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.Yn.get(i);if(t.push(this.Jn.removeEntry(e,i,a.readTime)),o.isValidDocument()){const c=Pc(this.Jn.serializer,o);s=s.add(i.path.popLast());const u=bs(c);r+=u-a.size,t.push(this.Jn.addEntry(e,i,c))}else if(r-=a.size,this.trackRemovals){const c=Pc(this.Jn.serializer,o.convertToNoDocument(_.min()));t.push(this.Jn.addEntry(e,i,c))}}),s.forEach(i=>{t.push(this.Jn.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.Jn.updateMetadata(e,r)),f.waitFor(t)}getFromCache(e,t){return this.Jn.zn(e,t).next(r=>(this.Yn.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.Jn.Wn(e,t).next(({documents:r,Hn:s})=>(s.forEach((i,o)=>{this.Yn.set(i,{size:o,readTime:r.get(i).readTime})}),r))}}function Yc(n){return ae(n,"remoteDocumentGlobal")}function It(n){return ae(n,"remoteDocumentsV14")}function Pn(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Xc(n,e){const t=e.documentKey.path.toArray();return[n,vs(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Jc(n,e){const t=n.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<r.length-2;++i)if(s=x(t[i],r[i]),s)return s;return s=x(t.length,r.length),s||(s=x(t[t.length-2],r[r.length-2]),s||x(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Qn(r.mutation,s,Se.empty(),j.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,A()).next(()=>r))}getLocalViewOfDocuments(e,t,r=A()){const s=Le();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=Un();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Le();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,A()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,s){let i=_e();const o=Kn(),a=Kn();return t.forEach((c,u)=>{const l=r.get(u.key);s.has(u.key)&&(l===void 0||l.mutation instanceof Ke)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),Qn(l.mutation,u,l.mutation.getFieldMask(),j.now())):o.set(u.key,Se.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),t.forEach((u,l)=>{var h;return a.set(u,new Cy(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=Kn();let s=new Q((o,a)=>o-a),i=A();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let l=r.get(c)||Se.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(s.get(a.batchId)||A()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=fh();l.forEach(d=>{if(!i.has(d)){const g=bh(t.get(d),r.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return f.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r){return function(s){return v.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Yo(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r):this.getDocumentsMatchingCollectionQuery(e,t,r)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):f.resolve(Le());let a=-1,c=i;return o.next(u=>f.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?f.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,A())).next(l=>({batchId:a,changes:dh(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new v(t)).next(r=>{let s=Un();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r){const s=t.collectionGroup;let i=Un();return this.indexManager.getCollectionParents(e,s).next(o=>f.forEach(o,a=>{const c=function(u,l){return new Ge(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s))).next(i=>{s.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,B.newInvalidDocument(u)))});let o=Un();return i.forEach((a,c)=>{const u=s.get(a);u!==void 0&&Qn(u.mutation,c,Se.empty(),j.now()),Ar(t,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,t){return f.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var r;return this.Zn.set(t.id,{id:(r=t).id,version:r.version,createTime:X(r.createTime)}),f.resolve()}getNamedQuery(e,t){return f.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,function(r){return{name:r.name,query:ra(r.bundledQuery),readTime:X(r.readTime)}}(t)),f.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(){this.overlays=new Q(v.comparator),this.ts=new Map}getOverlay(e,t){return f.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Le();return f.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.re(e,t,i)}),f.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.ts.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.ts.delete(r)),f.resolve()}getOverlaysForCollection(e,t,r){const s=Le(),i=t.length+1,o=new v(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return f.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Q((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let l=i.get(u.largestBatchId);l===null&&(l=Le(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Le(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=s)););return f.resolve(a)}re(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.ts.get(s.largestBatchId).delete(r.key);this.ts.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ea(t,r));let i=this.ts.get(t);i===void 0&&(i=A(),this.ts.set(t,i)),this.ts.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(){this.es=new P(re.ns),this.ss=new P(re.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,t){const r=new re(e,t);this.es=this.es.add(r),this.ss=this.ss.add(r)}os(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.us(new re(e,t))}cs(e,t){e.forEach(r=>this.removeReference(r,t))}hs(e){const t=new v(new R([])),r=new re(t,e),s=new re(t,e+1),i=[];return this.ss.forEachInRange([r,s],o=>{this.us(o),i.push(o.key)}),i}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const t=new v(new R([])),r=new re(t,e),s=new re(t,e+1);let i=A();return this.ss.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new re(e,0),r=this.es.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class re{constructor(e,t){this.key=e,this.ds=t}static ns(e,t){return v.comparator(e.key,t.key)||x(e.ds,t.ds)}static rs(e,t){return x(e.ds,t.ds)||v.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this._s=new P(re.ns)}checkEmpty(e){return f.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Jo(i,t,r,s);this.mutationQueue.push(o);for(const a of s)this._s=this._s.add(new re(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(e,t){return f.resolve(this.gs(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ys(r),i=s<0?0:s;return f.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return f.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new re(t,0),s=new re(t,Number.POSITIVE_INFINITY),i=[];return this._s.forEachInRange([r,s],o=>{const a=this.gs(o.ds);i.push(a)}),f.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new P(x);return t.forEach(s=>{const i=new re(s,0),o=new re(s,Number.POSITIVE_INFINITY);this._s.forEachInRange([i,o],a=>{r=r.add(a.ds)})}),f.resolve(this.ps(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;v.isDocumentKey(i)||(i=i.child(""));const o=new re(new v(i),0);let a=new P(x);return this._s.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.ds)),!0)},o),f.resolve(this.ps(a))}ps(e){const t=[];return e.forEach(r=>{const s=this.gs(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){S(this.Is(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this._s;return f.forEach(t.mutations,s=>{const i=new re(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this._s=r})}En(e){}containsKey(e,t){const r=new re(t,0),s=this._s.firstAfterOrEqual(r);return f.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,f.resolve()}Is(e,t){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const t=this.ys(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e){this.Ts=e,this.docs=new Q(v.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.Ts(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return f.resolve(r?r.document.mutableCopy():B.newInvalidDocument(t))}getEntries(e,t){let r=_e();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():B.newInvalidDocument(s))}),f.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=_e();const o=t.path,a=new v(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Go(ql(l),r)<=0||(s.has(l.key)||Ar(t,l))&&(i=i.insert(l.key,l.mutableCopy()))}return f.resolve(i)}getAllFromCollectionGroup(e,t,r,s){E()}Es(e,t){return f.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Ry(this)}getSize(e){return f.resolve(this.size)}}class Ry extends Gh{constructor(e){super(),this.Jn=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Jn.addEntry(e,s)):this.Jn.removeEntry(r)}),f.waitFor(t)}getFromCache(e,t){return this.Jn.getEntry(e,t)}getAllFromCache(e,t){return this.Jn.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e){this.persistence=e,this.As=new wt(t=>Bt(t),Cr),this.lastRemoteSnapshotVersion=_.min(),this.highestTargetId=0,this.Rs=0,this.vs=new oa,this.targetCount=0,this.bs=zt.vn()}forEachTarget(e,t){return this.As.forEach((r,s)=>t(s)),f.resolve()}getLastRemoteSnapshotVersion(e){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return f.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Rs&&(this.Rs=t),f.resolve()}Sn(e){this.As.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.bs=new zt(t),this.highestTargetId=t),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,t){return this.Sn(t),this.targetCount+=1,f.resolve()}updateTargetData(e,t){return this.Sn(t),f.resolve()}removeTargetData(e,t){return this.As.delete(t.target),this.vs.hs(t.targetId),this.targetCount-=1,f.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.As.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),f.waitFor(i).next(()=>s)}getTargetCount(e){return f.resolve(this.targetCount)}getTargetData(e,t){const r=this.As.get(t)||null;return f.resolve(r)}addMatchingKeys(e,t,r){return this.vs.os(t,r),f.resolve()}removeMatchingKeys(e,t,r){this.vs.cs(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),f.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.vs.hs(t),f.resolve()}getMatchingKeysForTargetId(e,t){const r=this.vs.fs(t);return f.resolve(r)}containsKey(e,t){return f.resolve(this.vs.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e,t){this.Ps={},this.overlays={},this.Vs=new Te(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new Oy(this),this.indexManager=new wy,this.remoteDocumentCache=function(r){return new ky(r)}(r=>this.referenceDelegate.Cs(r)),this.serializer=new Vh(t),this.xs=new xy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ay,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Ps[e.toKey()];return r||(r=new Ny(t,this.referenceDelegate),this.Ps[e.toKey()]=r),r}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,t,r){y("MemoryPersistence","Starting transaction:",e);const s=new My(this.Vs.next());return this.referenceDelegate.Ns(),r(s).next(i=>this.referenceDelegate.ks(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Os(e,t){return f.or(Object.values(this.Ps).map(r=>()=>r.containsKey(e,t)))}}class My extends zl{constructor(e){super(),this.currentSequenceNumber=e}}class Xs{constructor(e){this.persistence=e,this.$s=new oa,this.Ms=null}static Fs(e){return new Xs(e)}get Bs(){if(this.Ms)return this.Ms;throw E()}addReference(e,t,r){return this.$s.addReference(r,t),this.Bs.delete(r.toString()),f.resolve()}removeReference(e,t,r){return this.$s.removeReference(r,t),this.Bs.add(r.toString()),f.resolve()}markPotentiallyOrphaned(e,t){return this.Bs.add(t.toString()),f.resolve()}removeTarget(e,t){this.$s.hs(t.targetId).forEach(s=>this.Bs.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Bs.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ns(){this.Ms=new Set}ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Bs,r=>{const s=v.fromPath(r);return this.Ls(e,s).next(i=>{i||t.removeEntry(s,_.min())})}).next(()=>(this.Ms=null,t.apply(e)))}updateLimboDocument(e,t){return this.Ls(e,t).next(r=>{r?this.Bs.delete(t.toString()):this.Bs.add(t.toString())})}Cs(e){return 0}Ls(e,t){return f.or([()=>f.resolve(this.$s.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Os(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e){this.serializer=e}M(e,t,r,s){const i=new zs("createOrUpgrade",t);r<1&&s>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",pc,{unique:!0}),a.createObjectStore("documentMutations")}(e),Zc(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=f.resolve();return r<3&&s>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),Zc(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:_.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",u)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").j().next(u=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",pc,{unique:!0});const l=c.store("mutations"),h=u.map(d=>l.put(d));return f.waitFor(h)})}(e,i))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.qs(i))),r<6&&s>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Us(i)))),r<7&&s>=7&&(o=o.next(()=>this.Ks(i))),r<8&&s>=8&&(o=o.next(()=>this.Gs(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(o=o.next(()=>this.Qs(i))),r<11&&s>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:vp});c.createIndex("collectionPathOverlayIndex",Ip,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",bp,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:cp});c.createIndex("documentKeyIndex",up),c.createIndex("collectionGroupIndex",lp)}(e)).next(()=>this.zs(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&s>=14&&(o=o.next(()=>this.js(e,i))),r<15&&s>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:gp}).createIndex("sequenceNumberIndex",pp,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:yp}).createIndex("documentKeyIndex",wp,{unique:!1})}(e))),o}Us(e){let t=0;return e.store("remoteDocuments").Z((r,s)=>{t+=bs(s)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}qs(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.j().next(s=>f.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return r.j("userMutationsIndex",o).next(a=>f.forEach(a,c=>{S(c.userId===i.userId);const u=St(this.serializer,c);return qh(e,i.userId,u).next(()=>{})}))}))}Ks(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return r.Z((o,a)=>{const c=new R(o),u=function(l){return[0,be(l)]}(c);i.push(t.get(u).next(l=>l?f.resolve():(h=>t.put({targetId:0,path:be(h),sequenceNumber:s.highestListenSequenceNumber}))(c)))}).next(()=>f.waitFor(i))})}Gs(e,t){e.createObjectStore("collectionParents",{keyPath:mp});const r=t.store("collectionParents"),s=new ia,i=o=>{if(s.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:be(c)})}};return t.store("remoteDocuments").Z({Y:!0},(o,a)=>{const c=new R(o);return i(c.popLast())}).next(()=>t.store("documentMutations").Z({Y:!0},([o,a,c],u)=>{const l=Me(a);return i(l.popLast())}))}Qs(e){const t=e.store("targets");return t.Z((r,s)=>{const i=qn(s),o=Bh(this.serializer,i);return t.put(o)})}zs(e,t){const r=t.store("remoteDocuments"),s=[];return r.Z((i,o)=>{const a=t.store("remoteDocumentsV14"),c=(u=o,u.document?new v(R.fromString(u.document.name).popFirst(5)):u.noDocument?v.fromSegments(u.noDocument.path):u.unknownDocument?v.fromSegments(u.unknownDocument.path):E()).path.toArray();var u;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const l={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(a.put(l))}).next(()=>f.waitFor(s))}js(e,t){const r=t.store("mutations"),s=Kh(this.serializer),i=new Hh(Xs.Fs,this.serializer.se);return r.j().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:A();St(this.serializer,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),f.forEach(a,(c,u)=>{const l=new se(u),h=Ws.ie(this.serializer,l),d=i.getIndexManager(l),g=Ys.ie(l,this.serializer,d,i.referenceDelegate);return new Qh(s,g,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Wi(t,Te.ct),c).next()})})}}function Zc(n){n.createObjectStore("targetDocuments",{keyPath:dp}).createIndex("documentTargetsIndex",fp,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",hp,{unique:!0}),n.createObjectStore("targetGlobal")}const Di="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class aa{constructor(e,t,r,s,i,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Ws=i,this.window=o,this.document=a,this.Hs=u,this.Js=l,this.Ys=h,this.Vs=null,this.Ss=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.Xs=null,this.ti=null,this.ei=Number.NEGATIVE_INFINITY,this.ni=d=>Promise.resolve(),!aa.D())throw new p(m.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Sy(this,s),this.si=t+"main",this.serializer=new Vh(c),this.ii=new Re(this.si,this.Ys,new Ly(this.serializer)),this.Ds=new Iy(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Kh(this.serializer),this.xs=new hy,this.window&&this.window.localStorage?this.ri=this.window.localStorage:(this.ri=null,l===!1&&W("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.oi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new p(m.FAILED_PRECONDITION,Di);return this.ui(),this.ci(),this.ai(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ds.getHighestSequenceNumber(e))}).then(e=>{this.Vs=new Te(e,this.Hs)}).then(()=>{this.Ss=!0}).catch(e=>(this.ii&&this.ii.close(),Promise.reject(e)))}hi(e){return this.ni=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ii.B(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ws.enqueueAndForget(async()=>{this.started&&await this.oi()}))}oi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Hr(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.li(e).next(t=>{t||(this.isPrimary=!1,this.Ws.enqueueRetryable(()=>this.ni(!1)))})}).next(()=>this.fi(e)).next(t=>this.isPrimary&&!t?this.di(e).next(()=>!1):!!t&&this.wi(e).next(()=>!0))).catch(e=>{if(yt(e))return y("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return y("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Ws.enqueueRetryable(()=>this.ni(e)),this.isPrimary=e})}li(e){return Vn(e).get("owner").next(t=>f.resolve(this._i(t)))}mi(e){return Hr(e).delete(this.clientId)}async gi(){if(this.isPrimary&&!this.yi(this.ei,18e5)){this.ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=ae(t,"clientMetadata");return r.j().next(s=>{const i=this.pi(s,18e5),o=s.filter(a=>i.indexOf(a)===-1);return f.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.ri)for(const t of e)this.ri.removeItem(this.Ii(t.clientId))}}ai(){this.ti=this.Ws.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.oi().then(()=>this.gi()).then(()=>this.ai()))}_i(e){return!!e&&e.ownerId===this.clientId}fi(e){return this.Js?f.resolve(!0):Vn(e).get("owner").next(t=>{if(t!==null&&this.yi(t.leaseTimestampMs,5e3)&&!this.Ti(t.ownerId)){if(this._i(t)&&this.networkEnabled)return!0;if(!this._i(t)){if(!t.allowTabSynchronization)throw new p(m.FAILED_PRECONDITION,Di);return!1}}return!(!this.networkEnabled||!this.inForeground)||Hr(e).j().next(r=>this.pi(r,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,a=this.networkEnabled===s.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&y("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Ss=!1,this.Ei(),this.ti&&(this.ti.cancel(),this.ti=null),this.Ai(),this.Ri(),await this.ii.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Wi(e,Te.ct);return this.di(t).next(()=>this.mi(t))}),this.ii.close(),this.vi()}pi(e,t){return e.filter(r=>this.yi(r.updateTimeMs,t)&&!this.Ti(r.clientId))}bi(){return this.runTransaction("getActiveClients","readonly",e=>Hr(e).j().next(t=>this.pi(t,18e5).map(r=>r.clientId)))}get started(){return this.Ss}getMutationQueue(e,t){return Ys.ie(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new vy(e,this.serializer.se.databaseId)}getDocumentOverlayCache(e){return Ws.ie(this.serializer,e)}getBundleCache(){return this.xs}runTransaction(e,t,r){y("IndexedDbPersistence","Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=(o=this.Ys)===15?Tp:o===14?Wl:o===13?Hl:o===12?Ep:o===11?Ql:void E();var o;let a;return this.ii.runTransaction(e,s,i,c=>(a=new Wi(c,this.Vs?this.Vs.next():Te.ct),t==="readwrite-primary"?this.li(a).next(u=>!!u||this.fi(a)).next(u=>{if(!u)throw W(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ws.enqueueRetryable(()=>this.ni(!1)),new p(m.FAILED_PRECONDITION,jl);return r(a)}).next(u=>this.wi(a).next(()=>u)):this.Pi(a).next(()=>r(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Pi(e){return Vn(e).get("owner").next(t=>{if(t!==null&&this.yi(t.leaseTimestampMs,5e3)&&!this.Ti(t.ownerId)&&!this._i(t)&&!(this.Js||this.allowTabSynchronization&&t.allowTabSynchronization))throw new p(m.FAILED_PRECONDITION,Di)})}wi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Vn(e).put("owner",t)}static D(){return Re.D()}di(e){const t=Vn(e);return t.get("owner").next(r=>this._i(r)?(y("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):f.resolve())}yi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(W(`Detected an update time that is in the future: ${e} > ${r}`),!1))}ui(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Xs=()=>{this.Ws.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.oi()))},this.document.addEventListener("visibilitychange",this.Xs),this.inForeground=this.document.visibilityState==="visible")}Ai(){this.Xs&&(this.document.removeEventListener("visibilitychange",this.Xs),this.Xs=null)}ci(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Zs=()=>{this.Ei();const t=/(?:Version|Mobile)\/1[456]/;gf()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Ws.enterRestrictedMode(!0),this.Ws.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}Ri(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ti(e){var t;try{const r=((t=this.ri)===null||t===void 0?void 0:t.getItem(this.Ii(e)))!==null;return y("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return W("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Ei(){if(this.ri)try{this.ri.setItem(this.Ii(this.clientId),String(Date.now()))}catch(e){W("Failed to set zombie client id.",e)}}vi(){if(this.ri)try{this.ri.removeItem(this.Ii(this.clientId))}catch{}}Ii(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Vn(n){return ae(n,"owner")}function Hr(n){return ae(n,"clientMetadata")}function ca(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Vi=r,this.Si=s}static Di(e,t){let r=A(),s=A();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ua(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(){this.Ci=!1}initialize(e,t){this.xi=e,this.indexManager=t,this.Ci=!0}getDocumentsMatchingQuery(e,t,r,s){return this.Ni(e,t).next(i=>i||this.ki(e,t,s,r)).next(i=>i||this.Oi(e,t))}Ni(e,t){if(xc(t))return f.resolve(null);let r=De(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=ws(t,null,"F"),r=De(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=A(...i);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.$i(t,a);return this.Mi(t,u,o,c.readTime)?this.Ni(e,ws(t,null,"F")):this.Fi(e,u,t,c)}))})))}ki(e,t,r,s){return xc(t)||s.isEqual(_.min())?this.Oi(e,t):this.xi.getDocuments(e,r).next(i=>{const o=this.$i(t,i);return this.Mi(t,o,r,s)?this.Oi(e,t):(Qi()<=M.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),no(t)),this.Fi(e,o,t,Ul(s,-1)))})}$i(e,t){let r=new P(lh(e));return t.forEach((s,i)=>{Ar(e,i)&&(r=r.add(i))}),r}Mi(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Oi(e,t){return Qi()<=M.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",no(t)),this.xi.getDocumentsMatchingQuery(e,t,Ne.min())}Fi(e,t,r,s){return this.xi.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e,t,r,s){this.persistence=e,this.Bi=t,this.serializer=s,this.Li=new Q(x),this.qi=new wt(i=>Bt(i),Cr),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(r)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Qh(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Li))}}function Yh(n,e,t,r){return new Fy(n,e,t,r)}async function Xh(n,e){const t=I(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Gi(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=A();for(const u of s){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return t.localDocuments.getDocuments(r,c).next(u=>({Qi:u,removedBatchIds:o,addedBatchIds:a}))})})}function Py(n,e){const t=I(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=f.resolve();return h.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(w=>{const b=c.docVersions.get(g);S(b!==null),w.version.compareTo(b)<0&&(l.applyToRemoteDocument(w,c),w.isValidDocument()&&(w.setReadTime(c.commitVersion),u.addEntry(w)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=A();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Jh(n){const e=I(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ds.getLastRemoteSnapshotVersion(t))}function Vy(n,e){const t=I(n),r=e.snapshotVersion;let s=t.Li;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Ki.newChangeBuffer({trackRemovals:!0});s=t.Li;const a=[];e.targetChanges.forEach((l,h)=>{const d=s.get(h);if(!d)return;a.push(t.Ds.removeMatchingKeys(i,l.removedDocuments,h).next(()=>t.Ds.addMatchingKeys(i,l.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(te.EMPTY_BYTE_STRING,_.min()).withLastLimboFreeSnapshotVersion(_.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,r)),s=s.insert(h,g),function(w,b,D){return w.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(d,g,l)&&a.push(t.Ds.updateTargetData(i,g))});let c=_e(),u=A();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(Zh(i,o,e.documentUpdates).next(l=>{c=l.zi,u=l.ji})),!r.isEqual(_.min())){const l=t.Ds.getLastRemoteSnapshotVersion(i).next(h=>t.Ds.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return f.waitFor(a).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(t.Li=s,i))}function Zh(n,e,t){let r=A(),s=A();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=_e();return t.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(_.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{zi:o,ji:s}})}function By(n,e){const t=I(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function pn(n,e){const t=I(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ds.getTargetData(r,e).next(i=>i?(s=i,f.resolve(s)):t.Ds.allocateTargetId(r).next(o=>(s=new rt(e,o,0,r.currentSequenceNumber),t.Ds.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Li.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Li=t.Li.insert(r.targetId,r),t.qi.set(e,r.targetId)),r})}async function yn(n,e,t){const r=I(n),s=r.Li.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!yt(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Li=r.Li.remove(e),r.qi.delete(s.target)}function Es(n,e,t){const r=I(n);let s=_.min(),i=A();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=I(a),h=l.qi.get(u);return h!==void 0?f.resolve(l.Li.get(h)):l.Ds.getTargetData(c,u)}(r,o,De(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Bi.getDocumentsMatchingQuery(o,e,t?s:_.min(),t?i:A())).next(a=>(nd(r,uh(e),a),{documents:a,Wi:i})))}function ed(n,e){const t=I(n),r=I(t.Ds),s=t.Li.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",i=>r.ne(i,e).next(o=>o?o.target:null))}function td(n,e){const t=I(n),r=t.Ui.get(e)||_.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.Ki.getAllFromCollectionGroup(s,e,Ul(r,-1),Number.MAX_SAFE_INTEGER)).then(s=>(nd(t,e,s),s))}function nd(n,e,t){let r=n.Ui.get(e)||_.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Ui.set(e,r)}async function $y(n,e,t,r){const s=I(n);let i=A(),o=_e();for(const u of t){const l=e.Hi(u.metadata.name);u.document&&(i=i.add(l));const h=e.Ji(u);h.setReadTime(e.Yi(u.metadata.readTime)),o=o.insert(l,h)}const a=s.Ki.newChangeBuffer({trackRemovals:!0}),c=await pn(s,function(u){return De(_n(R.fromString(`__bundle__/docs/${u}`)))}(r));return s.persistence.runTransaction("Apply bundle documents","readwrite",u=>Zh(u,a,o).next(l=>(a.apply(u),l)).next(l=>s.Ds.removeMatchingKeysForTargetId(u,c.targetId).next(()=>s.Ds.addMatchingKeys(u,i,c.targetId)).next(()=>s.localDocuments.getLocalViewOfDocuments(u,l.zi,l.ji)).next(()=>l.zi)))}async function Uy(n,e,t=A()){const r=await pn(n,De(ra(e.bundledQuery))),s=I(n);return s.persistence.runTransaction("Save named query","readwrite",i=>{const o=X(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return s.xs.saveNamedQuery(i,e);const a=r.withResumeToken(te.EMPTY_BYTE_STRING,o);return s.Li=s.Li.insert(a.targetId,a),s.Ds.updateTargetData(i,a).next(()=>s.Ds.removeMatchingKeysForTargetId(i,r.targetId)).next(()=>s.Ds.addMatchingKeys(i,t,r.targetId)).next(()=>s.xs.saveNamedQuery(i,e))})}function eu(n,e){return`firestore_clients_${n}_${e}`}function tu(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Ci(n,e){return`firestore_targets_${n}_${e}`}class Ts{constructor(e,t,r,s){this.user=e,this.batchId=t,this.state=r,this.error=s}static Zi(e,t,r){const s=JSON.parse(r);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new p(s.error.code,s.error.message))),o?new Ts(e,t,s.state,i):(W("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}Xi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Hn{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Zi(e,t){const r=JSON.parse(t);let s,i=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return i&&r.error&&(i=typeof r.error.message=="string"&&typeof r.error.code=="string",i&&(s=new p(r.error.code,r.error.message))),i?new Hn(e,r.state,s):(W("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Xi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ss{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Zi(e,t){const r=JSON.parse(t);let s=typeof r=="object"&&r.activeTargetIds instanceof Array,i=Ks();for(let o=0;s&&o<r.activeTargetIds.length;++o)s=Gl(r.activeTargetIds[o]),i=i.add(r.activeTargetIds[o]);return s?new Ss(e,i):(W("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class la{constructor(e,t){this.clientId=e,this.onlineState=t}static Zi(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new la(t.clientId,t.onlineState):(W("SharedClientState",`Failed to parse online state: ${e}`),null)}}class co{constructor(){this.activeTargetIds=Ks()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class xi{constructor(e,t,r,s,i){this.window=e,this.Ws=t,this.persistenceKey=r,this.nr=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.sr=this.ir.bind(this),this.rr=new Q(x),this.started=!1,this.ur=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.cr=eu(this.persistenceKey,this.nr),this.ar=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.rr=this.rr.insert(this.nr,new co),this.hr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.lr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.dr=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.wr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this._r=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.sr)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.bi();for(const r of e){if(r===this.nr)continue;const s=this.getItem(eu(this.persistenceKey,r));if(s){const i=Ss.Zi(r,s);i&&(this.rr=this.rr.insert(i.clientId,i))}}this.mr();const t=this.storage.getItem(this.wr);if(t){const r=this.gr(t);r&&this.yr(r)}for(const r of this.ur)this.ir(r);this.ur=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.ar,JSON.stringify(e))}getAllActiveQueryTargets(){return this.pr(this.rr)}isActiveQueryTarget(e){let t=!1;return this.rr.forEach((r,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Ir(e,"pending")}updateMutationState(e,t,r){this.Ir(e,t,r),this.Tr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Ci(this.persistenceKey,e));if(r){const s=Hn.Zi(e,r);s&&(t=s.state)}}return this.Er.tr(e),this.mr(),t}removeLocalQueryTarget(e){this.Er.er(e),this.mr()}isLocalQueryTarget(e){return this.Er.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Ci(this.persistenceKey,e))}updateQueryState(e,t,r){this.Ar(e,t,r)}handleUserChange(e,t,r){t.forEach(s=>{this.Tr(s)}),this.currentUser=e,r.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.Rr(e)}notifyBundleLoaded(e){this.vr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.sr),this.removeItem(this.cr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return y("SharedClientState","READ",e,t),t}setItem(e,t){y("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){y("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ir(e){const t=e;if(t.storageArea===this.storage){if(y("SharedClientState","EVENT",t.key,t.newValue),t.key===this.cr)return void W("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ws.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.hr.test(t.key)){if(t.newValue==null){const r=this.br(t.key);return this.Pr(r,null)}{const r=this.Vr(t.key,t.newValue);if(r)return this.Pr(r.clientId,r)}}else if(this.lr.test(t.key)){if(t.newValue!==null){const r=this.Sr(t.key,t.newValue);if(r)return this.Dr(r)}}else if(this.dr.test(t.key)){if(t.newValue!==null){const r=this.Cr(t.key,t.newValue);if(r)return this.Nr(r)}}else if(t.key===this.wr){if(t.newValue!==null){const r=this.gr(t.newValue);if(r)return this.yr(r)}}else if(t.key===this.ar){const r=function(s){let i=Te.ct;if(s!=null)try{const o=JSON.parse(s);S(typeof o=="number"),i=o}catch(o){W("SharedClientState","Failed to read sequence number from WebStorage",o)}return i}(t.newValue);r!==Te.ct&&this.sequenceNumberHandler(r)}else if(t.key===this._r){const r=this.kr(t.newValue);await Promise.all(r.map(s=>this.syncEngine.Or(s)))}}}else this.ur.push(t)})}}get Er(){return this.rr.get(this.nr)}mr(){this.setItem(this.cr,this.Er.Xi())}Ir(e,t,r){const s=new Ts(this.currentUser,e,t,r),i=tu(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Xi())}Tr(e){const t=tu(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Rr(e){const t={clientId:this.nr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(t))}Ar(e,t,r){const s=Ci(this.persistenceKey,e),i=new Hn(e,t,r);this.setItem(s,i.Xi())}vr(e){const t=JSON.stringify(Array.from(e));this.setItem(this._r,t)}br(e){const t=this.hr.exec(e);return t?t[1]:null}Vr(e,t){const r=this.br(e);return Ss.Zi(r,t)}Sr(e,t){const r=this.lr.exec(e),s=Number(r[1]),i=r[2]!==void 0?r[2]:null;return Ts.Zi(new se(i),s,t)}Cr(e,t){const r=this.dr.exec(e),s=Number(r[1]);return Hn.Zi(s,t)}gr(e){return la.Zi(e)}kr(e){return JSON.parse(e)}async Dr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.$r(e.batchId,e.state,e.error);y("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Nr(e){return this.syncEngine.Mr(e.targetId,e.state,e.error)}Pr(e,t){const r=t?this.rr.insert(e,t):this.rr.remove(e),s=this.pr(this.rr),i=this.pr(r),o=[],a=[];return i.forEach(c=>{s.has(c)||o.push(c)}),s.forEach(c=>{i.has(c)||a.push(c)}),this.syncEngine.Fr(o,a).then(()=>{this.rr=r})}yr(e){this.rr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}pr(e){let t=Ks();return e.forEach((r,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class rd{constructor(){this.Br=new co,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,t,r){this.Lr[e]=t}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new co,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wr=null;function Ai(){return Wr===null?Wr=268435456+Math.round(2147483648*Math.random()):Wr++,"0x"+Wr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me="WebChannelConnection";class Gy extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.ro=t+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,t,r,s,i){const o=Ai(),a=this.ao(e,t);y("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const c={};return this.ho(c,s,i),this.lo(e,a,c,r).then(u=>(y("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw je("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}fo(e,t,r,s,i,o){return this.co(e,t,r,s,i)}ho(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Sn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}ao(e,t){const r=jy[e];return`${this.ro}/v1/${t}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,t,r,s){const i=Ai();return new Promise((o,a)=>{const c=new jg;c.setWithCredentials(!0),c.listenOnce($g.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Si.NO_ERROR:const l=c.getResponseJson();y(me,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(l)),o(l);break;case Si.TIMEOUT:y(me,`RPC '${e}' ${i} timed out`),a(new p(m.DEADLINE_EXCEEDED,"Request time out"));break;case Si.HTTP_ERROR:const h=c.getStatus();if(y(me,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const w=function(b){const D=b.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(D)>=0?D:m.UNKNOWN}(g.status);a(new p(w,g.message))}else a(new p(m.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new p(m.UNAVAILABLE,"Connection failed."));break;default:E()}}finally{y(me,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);y(me,`RPC '${e}' ${i} sending request:`,s),c.send(t,"POST",u,r,15)})}wo(e,t,r){const s=Ai(),i=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Vg(),a=Bg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new qg({})),this.ho(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const u=i.join("");y(me,`Creating RPC '${e}' stream ${s}: ${u}`,c);const l=o.createWebChannel(u,c);let h=!1,d=!1;const g=new zy({Wr:b=>{d?y(me,`Not sending because RPC '${e}' stream ${s} is closed:`,b):(h||(y(me,`Opening RPC '${e}' stream ${s} transport.`),l.open(),h=!0),y(me,`RPC '${e}' stream ${s} sending:`,b),l.send(b))},Hr:()=>l.close()}),w=(b,D,V)=>{b.listen(D,ne=>{try{V(ne)}catch(F){setTimeout(()=>{throw F},0)}})};return w(l,qr.EventType.OPEN,()=>{d||y(me,`RPC '${e}' stream ${s} transport opened.`)}),w(l,qr.EventType.CLOSE,()=>{d||(d=!0,y(me,`RPC '${e}' stream ${s} transport closed`),g.so())}),w(l,qr.EventType.ERROR,b=>{d||(d=!0,je(me,`RPC '${e}' stream ${s} transport errored:`,b),g.so(new p(m.UNAVAILABLE,"The operation could not be completed")))}),w(l,qr.EventType.MESSAGE,b=>{var D;if(!d){const V=b.data[0];S(!!V);const ne=V,F=ne.error||((D=ne[0])===null||D===void 0?void 0:D.error);if(F){y(me,`RPC '${e}' stream ${s} received error:`,F);const ye=F.status;let J=function(Ce){const He=Z[Ce];if(He!==void 0)return Sh(He)}(ye),z=F.message;J===void 0&&(J=m.INTERNAL,z="Unknown error status: "+ye+" with message "+F.message),d=!0,g.so(new p(J,z)),l.close()}else y(me,`RPC '${e}' stream ${s} received:`,V),g.io(V)}}),w(a,Ug.STAT_EVENT,b=>{b.stat===dc.PROXY?y(me,`RPC '${e}' stream ${s} detected buffering proxy`):b.stat===dc.NOPROXY&&y(me,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{g.no()},0),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(){return typeof window<"u"?window:null}function ns(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(n){return new ey(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ws=e,this.timerId=t,this._o=r,this.mo=s,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const t=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),s=Math.max(0,t-r);s>0&&y("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.po} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,s,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e,t,r,s,i,o,a,c){this.Ws=e,this.bo=r,this.Po=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new ha(e,t)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,t){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():t&&t.code===m.RESOURCE_EXHAUSTED?(W(t.toString()),W("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):t&&t.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),t=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Vo===t&&this.Ko(r,s)},r=>{e(()=>{const s=new p(m.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Go(s)})})}Ko(e,t){const r=this.Uo(this.Vo);this.stream=this.Qo(e,t),this.stream.Jr(()=>{r(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(s=>{r(()=>this.Go(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return t=>{this.Ws.enqueueAndForget(()=>this.Vo===e?t():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ky extends id{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}Qo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.Co.reset();const t=ry(this.serializer,e),r=function(s){if(!("targetChange"in s))return _.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?_.min():i.readTime?X(i.readTime):_.min()}(e);return this.listener.zo(t,r)}jo(e){const t={};t.database=lr(this.serializer),t.addTarget=function(s,i){let o;const a=i.target;return o=ps(a)?{documents:Rh(s,a)}:{query:Oh(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Ch(s,i.resumeToken):i.snapshotVersion.compareTo(_.min())>0&&(o.readTime=gn(s,i.snapshotVersion.toTimestamp())),o}(this.serializer,e);const r=iy(this.serializer,e);r&&(t.labels=r),this.Fo(t)}Wo(e){const t={};t.database=lr(this.serializer),t.removeTarget=e,this.Fo(t)}}class Qy extends id{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(S(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const t=sy(e.writeResults,e.commitTime),r=X(e.commitTime);return this.listener.Zo(r,t)}return S(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=lr(this.serializer),this.Fo(e)}Yo(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>hr(this.serializer,r))};this.Fo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.eu=!1}nu(){if(this.eu)throw new p(m.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,t,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.co(e,t,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new p(m.UNKNOWN,s.toString())})}fo(e,t,r,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.fo(e,t,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new p(m.UNKNOWN,i.toString())})}terminate(){this.eu=!0}}class Wy{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(W(t),this.ru=!1):y("OnlineStateTracker",t)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=i,this._u.qr(o=>{r.enqueueAndForget(async()=>{vt(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=I(a);c.du.add(4),await xn(c),c.mu.set("Unknown"),c.du.delete(4),await Mr(c)}(this))})}),this.mu=new Wy(r,s)}}async function Mr(n){if(vt(n))for(const e of n.wu)await e(!0)}async function xn(n){for(const e of n.wu)await e(!1)}function Js(n,e){const t=I(n);t.fu.has(e.targetId)||(t.fu.set(e.targetId,e),ma(t)?fa(t):Nn(t).No()&&da(t,e))}function dr(n,e){const t=I(n),r=Nn(t);t.fu.delete(e),r.No()&&od(t,e),t.fu.size===0&&(r.No()?r.$o():vt(t)&&t.mu.set("Unknown"))}function da(n,e){n.gu.Ot(e.targetId),Nn(n).jo(e)}function od(n,e){n.gu.Ot(e),Nn(n).Wo(e)}function fa(n){n.gu=new Yp({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>n.fu.get(e)||null}),Nn(n).start(),n.mu.ou()}function ma(n){return vt(n)&&!Nn(n).xo()&&n.fu.size>0}function vt(n){return I(n).du.size===0}function ad(n){n.gu=void 0}async function Xy(n){n.fu.forEach((e,t)=>{da(n,e)})}async function Jy(n,e){ad(n),ma(n)?(n.mu.au(e),fa(n)):n.mu.set("Unknown")}async function Zy(n,e,t){if(n.mu.set("Online"),e instanceof Dh&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.fu.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.fu.delete(o),r.gu.removeTarget(o))}(n,e)}catch(r){y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await _s(n,r)}else if(e instanceof ts?n.gu.Kt(e):e instanceof _h?n.gu.Jt(e):n.gu.zt(e),!t.isEqual(_.min()))try{const r=await Jh(n.localStore);t.compareTo(r)>=0&&await function(s,i){const o=s.gu.Xt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=s.fu.get(c);u&&s.fu.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.fu.get(a);if(!c)return;s.fu.set(a,c.withResumeToken(te.EMPTY_BYTE_STRING,c.snapshotVersion)),od(s,a);const u=new rt(c.target,a,1,c.sequenceNumber);da(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(r){y("RemoteStore","Failed to raise snapshot:",r),await _s(n,r)}}async function _s(n,e,t){if(!yt(e))throw e;n.du.add(1),await xn(n),n.mu.set("Offline"),t||(t=()=>Jh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await t(),n.du.delete(1),await Mr(n)})}function cd(n,e){return e().catch(t=>_s(n,t,e))}async function An(n){const e=I(n),t=ht(e);let r=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;ew(e);)try{const s=await By(e.localStore,r);if(s===null){e.lu.length===0&&t.$o();break}r=s.batchId,tw(e,s)}catch(s){await _s(e,s)}ud(e)&&ld(e)}function ew(n){return vt(n)&&n.lu.length<10}function tw(n,e){n.lu.push(e);const t=ht(n);t.No()&&t.Jo&&t.Yo(e.mutations)}function ud(n){return vt(n)&&!ht(n).xo()&&n.lu.length>0}function ld(n){ht(n).start()}async function nw(n){ht(n).tu()}async function rw(n){const e=ht(n);for(const t of n.lu)e.Yo(t.mutations)}async function sw(n,e,t){const r=n.lu.shift(),s=Zo.from(r,e,t);await cd(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await An(n)}async function iw(n,e){e&&ht(n).Jo&&await async function(t,r){if(s=r.code,Th(s)&&s!==m.ABORTED){const i=t.lu.shift();ht(t).Oo(),await cd(t,()=>t.remoteSyncer.rejectFailedWrite(i.batchId,r)),await An(t)}var s}(n,e),ud(n)&&ld(n)}async function ru(n,e){const t=I(n);t.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const r=vt(t);t.du.add(3),await xn(t),r&&t.mu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.du.delete(3),await Mr(t)}async function uo(n,e){const t=I(n);e?(t.du.delete(2),await Mr(t)):e||(t.du.add(2),await xn(t),t.mu.set("Unknown"))}function Nn(n){return n.yu||(n.yu=function(e,t,r){const s=I(e);return s.nu(),new Ky(t,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(n.datastore,n.asyncQueue,{Jr:Xy.bind(null,n),Zr:Jy.bind(null,n),zo:Zy.bind(null,n)}),n.wu.push(async e=>{e?(n.yu.Oo(),ma(n)?fa(n):n.mu.set("Unknown")):(await n.yu.stop(),ad(n))})),n.yu}function ht(n){return n.pu||(n.pu=function(e,t,r){const s=I(e);return s.nu(),new Qy(t,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(n.datastore,n.asyncQueue,{Jr:nw.bind(null,n),Zr:iw.bind(null,n),Xo:rw.bind(null,n),Zo:sw.bind(null,n)}),n.wu.push(async e=>{e?(n.pu.Oo(),await An(n)):(await n.pu.stop(),n.lu.length>0&&(y("RemoteStore",`Stopping write stream with ${n.lu.length} pending writes`),n.lu=[]))})),n.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ie,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,a=new ga(e,t,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new p(m.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kn(n,e){if(W("AsyncQueue",`${e}: ${n}`),yt(n))return new p(m.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.comparator=e?(t,r)=>e(t,r)||v.comparator(t.key,r.key):(t,r)=>v.comparator(t.key,r.key),this.keyedMap=Un(),this.sortedSet=new Q(this.comparator)}static emptySet(e){return new an(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof an)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new an;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(){this.Iu=new Q(v.comparator)}track(e){const t=e.doc.key,r=this.Iu.get(t);r?e.type!==0&&r.type===3?this.Iu=this.Iu.insert(t,e):e.type===3&&r.type!==1?this.Iu=this.Iu.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Iu=this.Iu.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Iu=this.Iu.remove(t):e.type===1&&r.type===2?this.Iu=this.Iu.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):E():this.Iu=this.Iu.insert(t,e)}Tu(){const e=[];return this.Iu.inorderTraversal((t,r)=>{e.push(r)}),e}}class wn{constructor(e,t,r,s,i,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new wn(e,t,an.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(){this.Eu=void 0,this.listeners=[]}}class aw{constructor(){this.queries=new wt(e=>ch(e),xr),this.onlineState="Unknown",this.Au=new Set}}async function pa(n,e){const t=I(n),r=e.query;let s=!1,i=t.queries.get(r);if(i||(s=!0,i=new ow),s)try{i.Eu=await t.onListen(r)}catch(o){const a=kn(o,`Initialization of query '${no(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,i),i.listeners.push(e),e.Ru(t.onlineState),i.Eu&&e.vu(i.Eu)&&wa(t)}async function ya(n,e){const t=I(n),r=e.query;let s=!1;const i=t.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return t.queries.delete(r),t.onUnlisten(r)}function cw(n,e){const t=I(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const a of o.listeners)a.vu(s)&&(r=!0);o.Eu=s}}r&&wa(t)}function uw(n,e,t){const r=I(n),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(t);r.queries.delete(e)}function wa(n){n.Au.forEach(e=>{e.next()})}class va{constructor(e,t,r){this.query=e,this.bu=t,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=r||{}}vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new wn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),t=!0):this.Du(e,this.onlineState)&&(this.Cu(e),t=!0),this.Vu=e,t}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let t=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),t=!0),t}Du(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.xu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const t=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Cu(e){e=wn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e,t){this.Nu=e,this.byteLength=t}ku(){return"metadata"in this.Nu}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e){this.serializer=e}Hi(e){return Fe(this.serializer,e)}Ji(e){return e.metadata.exists?kh(this.serializer,e.document,!1):B.newNoDocument(this.Hi(e.metadata.name),this.Yi(e.metadata.readTime))}Yi(e){return X(e)}}class hw{constructor(e,t,r){this.Ou=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=hd(e)}$u(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Nu.namedQuery)this.queries.push(e.Nu.namedQuery);else if(e.Nu.documentMetadata){this.documents.push({metadata:e.Nu.documentMetadata}),e.Nu.documentMetadata.exists||++t;const r=R.fromString(e.Nu.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Nu.document&&(this.documents[this.documents.length-1].document=e.Nu.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Mu(e){const t=new Map,r=new iu(this.serializer);for(const s of e)if(s.metadata.queries){const i=r.Hi(s.metadata.name);for(const o of s.metadata.queries){const a=(t.get(o)||A()).add(i);t.set(o,a)}}return t}async complete(){const e=await $y(this.localStore,new iu(this.serializer),this.documents,this.Ou.id),t=this.Mu(this.documents);for(const r of this.queries)await Uy(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Fu:this.collectionGroups,Bu:e}}}function hd(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e){this.key=e}}class fd{constructor(e){this.key=e}}class md{constructor(e,t){this.query=e,this.Lu=t,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=A(),this.mutatedKeys=A(),this.Ku=lh(e),this.Gu=new an(this.Ku)}get Qu(){return this.Lu}zu(e,t){const r=t?t.ju:new su,s=t?t.Gu:this.Gu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((l,h)=>{const d=s.get(l),g=Ar(this.query,h)?h:null,w=!!d&&this.mutatedKeys.has(d.key),b=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let D=!1;d&&g?d.data.isEqual(g.data)?w!==b&&(r.track({type:3,doc:g}),D=!0):this.Wu(d,g)||(r.track({type:2,doc:g}),D=!0,(c&&this.Ku(g,c)>0||u&&this.Ku(g,u)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),D=!0):d&&!g&&(r.track({type:1,doc:d}),D=!0,(c||u)&&(a=!0)),D&&(g?(o=o.add(g),i=b?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{Gu:o,ju:r,Mi:a,mutatedKeys:i}}Wu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const s=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const i=e.ju.Tu();i.sort((u,l)=>function(h,d){const g=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return E()}};return g(h)-g(d)}(u.type,l.type)||this.Ku(u.doc,l.doc)),this.Hu(r);const o=t?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new wn(this.query,e.Gu,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new su,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(t=>this.Lu=this.Lu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Lu=this.Lu.delete(t)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=A(),this.Gu.forEach(r=>{this.Zu(r.key)&&(this.Uu=this.Uu.add(r.key))});const t=[];return e.forEach(r=>{this.Uu.has(r)||t.push(new fd(r))}),this.Uu.forEach(r=>{e.has(r)||t.push(new dd(r))}),t}Xu(e){this.Lu=e.Wi,this.Uu=A();const t=this.zu(e.documents);return this.applyChanges(t,!0)}tc(){return wn.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class dw{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class fw{constructor(e){this.key=e,this.ec=!1}}class mw{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new wt(a=>ch(a),xr),this.ic=new Map,this.rc=new Set,this.oc=new Q(v.comparator),this.uc=new Map,this.cc=new oa,this.ac={},this.hc=new Map,this.lc=zt.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function gw(n,e){const t=Sa(n);let r,s;const i=t.sc.get(e);if(i)r=i.targetId,t.sharedClientState.addLocalQueryTarget(r),s=i.view.tc();else{const o=await pn(t.localStore,De(e));t.isPrimaryClient&&Js(t.remoteStore,o);const a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await Ia(t,e,r,a==="current",o.resumeToken)}return s}async function Ia(n,e,t,r,s){n.dc=(h,d,g)=>async function(w,b,D,V){let ne=b.view.zu(D);ne.Mi&&(ne=await Es(w.localStore,b.query,!1).then(({documents:J})=>b.view.zu(J,ne)));const F=V&&V.targetChanges.get(b.targetId),ye=b.view.applyChanges(ne,w.isPrimaryClient,F);return lo(w,b.targetId,ye.Yu),ye.snapshot}(n,h,d,g);const i=await Es(n.localStore,e,!0),o=new md(e,i.Wi),a=o.zu(i.documents),c=Rr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),u=o.applyChanges(a,n.isPrimaryClient,c);lo(n,t,u.Yu);const l=new dw(e,t,o);return n.sc.set(e,l),n.ic.has(t)?n.ic.get(t).push(e):n.ic.set(t,[e]),u.snapshot}async function pw(n,e){const t=I(n),r=t.sc.get(e),s=t.ic.get(r.targetId);if(s.length>1)return t.ic.set(r.targetId,s.filter(i=>!xr(i,e))),void t.sc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await yn(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),dr(t.remoteStore,r.targetId),vn(t,r.targetId)}).catch(pt)):(vn(t,r.targetId),await yn(t.localStore,r.targetId,!0))}async function yw(n,e,t){const r=_a(n);try{const s=await function(i,o){const a=I(i),c=j.now(),u=o.reduce((d,g)=>d.add(g.key),A());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=_e(),w=A();return a.Ki.getEntries(d,u).next(b=>{g=b,g.forEach((D,V)=>{V.isValidDocument()||(w=w.add(D))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(b=>{l=b;const D=[];for(const V of o){const ne=Hp(V,l.get(V.key).overlayedDocument);ne!=null&&D.push(new Ke(V.key,ne,Zl(ne.value.mapValue),q.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,D,o)}).next(b=>{h=b;const D=b.applyToLocalDocumentSet(l,w);return a.documentOverlayCache.saveOverlays(d,b.batchId,D)})}).then(()=>({batchId:h.batchId,changes:dh(l)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.ac[i.currentUser.toKey()];c||(c=new Q(x)),c=c.insert(o,a),i.ac[i.currentUser.toKey()]=c}(r,s.batchId,t),await Qe(r,s.changes),await An(r.remoteStore)}catch(s){const i=kn(s,"Failed to persist write");t.reject(i)}}async function gd(n,e){const t=I(n);try{const r=await Vy(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.uc.get(i);o&&(S(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ec=!0:s.modifiedDocuments.size>0?S(o.ec):s.removedDocuments.size>0&&(S(o.ec),o.ec=!1))}),await Qe(t,r,e)}catch(r){await pt(r)}}function ou(n,e,t){const r=I(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.sc.forEach((i,o)=>{const a=o.view.Ru(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=I(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Ru(o)&&(c=!0)}),c&&wa(a)}(r.eventManager,e),s.length&&r.nc.zo(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ww(n,e,t){const r=I(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.uc.get(e),i=s&&s.key;if(i){let o=new Q(v.comparator);o=o.insert(i,B.newNoDocument(i,_.min()));const a=A().add(i),c=new kr(_.min(),new Map,new P(x),o,a);await gd(r,c),r.oc=r.oc.remove(i),r.uc.delete(e),Ta(r)}else await yn(r.localStore,e,!1).then(()=>vn(r,e,t)).catch(pt)}async function vw(n,e){const t=I(n),r=e.batch.batchId;try{const s=await Py(t.localStore,e);Ea(t,r,null),ba(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Qe(t,s)}catch(s){await pt(s)}}async function Iw(n,e,t){const r=I(n);try{const s=await function(i,o){const a=I(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(S(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(r.localStore,e);Ea(r,e,t),ba(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Qe(r,s)}catch(s){await pt(s)}}async function bw(n,e){const t=I(n);vt(t.remoteStore)||y("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(i){const o=I(i);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(t.localStore);if(r===-1)return void e.resolve();const s=t.hc.get(r)||[];s.push(e),t.hc.set(r,s)}catch(r){const s=kn(r,"Initialization of waitForPendingWrites() operation failed");e.reject(s)}}function ba(n,e){(n.hc.get(e)||[]).forEach(t=>{t.resolve()}),n.hc.delete(e)}function Ea(n,e,t){const r=I(n);let s=r.ac[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.ac[r.currentUser.toKey()]=s}}function vn(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.ic.get(e))n.sc.delete(r),t&&n.nc.wc(r,t);n.ic.delete(e),n.isPrimaryClient&&n.cc.hs(e).forEach(r=>{n.cc.containsKey(r)||pd(n,r)})}function pd(n,e){n.rc.delete(e.path.canonicalString());const t=n.oc.get(e);t!==null&&(dr(n.remoteStore,t),n.oc=n.oc.remove(e),n.uc.delete(t),Ta(n))}function lo(n,e,t){for(const r of t)r instanceof dd?(n.cc.addReference(r.key,e),Ew(n,r)):r instanceof fd?(y("SyncEngine","Document no longer in limbo: "+r.key),n.cc.removeReference(r.key,e),n.cc.containsKey(r.key)||pd(n,r.key)):E()}function Ew(n,e){const t=e.key,r=t.path.canonicalString();n.oc.get(t)||n.rc.has(r)||(y("SyncEngine","New document in limbo: "+t),n.rc.add(r),Ta(n))}function Ta(n){for(;n.rc.size>0&&n.oc.size<n.maxConcurrentLimboResolutions;){const e=n.rc.values().next().value;n.rc.delete(e);const t=new v(R.fromString(e)),r=n.lc.next();n.uc.set(r,new fw(t)),n.oc=n.oc.insert(t,r),Js(n.remoteStore,new rt(De(_n(t.path)),r,2,Te.ct))}}async function Qe(n,e,t){const r=I(n),s=[],i=[],o=[];r.sc.isEmpty()||(r.sc.forEach((a,c)=>{o.push(r.dc(c,e,t).then(u=>{if((u||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){s.push(u);const l=ua.Di(c.targetId,u);i.push(l)}}))}),await Promise.all(o),r.nc.zo(s),await async function(a,c){const u=I(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>f.forEach(c,h=>f.forEach(h.Vi,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>f.forEach(h.Si,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!yt(l))throw l;y("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.Li.get(h),g=d.snapshotVersion,w=d.withLastLimboFreeSnapshotVersion(g);u.Li=u.Li.insert(h,w)}}}(r.localStore,i))}async function Tw(n,e){const t=I(n);if(!t.currentUser.isEqual(e)){y("SyncEngine","User change. New user:",e.toKey());const r=await Xh(t.localStore,e);t.currentUser=e,function(s,i){s.hc.forEach(o=>{o.forEach(a=>{a.reject(new p(m.CANCELLED,i))})}),s.hc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Qe(t,r.Qi)}}function Sw(n,e){const t=I(n),r=t.uc.get(e);if(r&&r.ec)return A().add(r.key);{let s=A();const i=t.ic.get(e);if(!i)return s;for(const o of i){const a=t.sc.get(o);s=s.unionWith(a.view.Qu)}return s}}async function _w(n,e){const t=I(n),r=await Es(t.localStore,e.query,!0),s=e.view.Xu(r);return t.isPrimaryClient&&lo(t,e.targetId,s.Yu),s}async function Dw(n,e){const t=I(n);return td(t.localStore,e).then(r=>Qe(t,r))}async function Cw(n,e,t,r){const s=I(n),i=await function(o,a){const c=I(o),u=I(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",l=>u.In(l,a).next(h=>h?c.localDocuments.getDocuments(l,h):f.resolve(null)))}(s.localStore,e);i!==null?(t==="pending"?await An(s.remoteStore):t==="acknowledged"||t==="rejected"?(Ea(s,e,r||null),ba(s,e),function(o,a){I(I(o).mutationQueue).En(a)}(s.localStore,e)):E(),await Qe(s,i)):y("SyncEngine","Cannot apply mutation batch with id: "+e)}async function xw(n,e){const t=I(n);if(Sa(t),_a(t),e===!0&&t.fc!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),s=await au(t,r.toArray());t.fc=!0,await uo(t.remoteStore,!0);for(const i of s)Js(t.remoteStore,i)}else if(e===!1&&t.fc!==!1){const r=[];let s=Promise.resolve();t.ic.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):s=s.then(()=>(vn(t,o),yn(t.localStore,o,!0))),dr(t.remoteStore,o)}),await s,await au(t,r),function(i){const o=I(i);o.uc.forEach((a,c)=>{dr(o.remoteStore,c)}),o.cc.ls(),o.uc=new Map,o.oc=new Q(v.comparator)}(t),t.fc=!1,await uo(t.remoteStore,!1)}}async function au(n,e,t){const r=I(n),s=[],i=[];for(const o of e){let a;const c=r.ic.get(o);if(c&&c.length!==0){a=await pn(r.localStore,De(c[0]));for(const u of c){const l=r.sc.get(u),h=await _w(r,l);h.snapshot&&i.push(h.snapshot)}}else{const u=await ed(r.localStore,o);a=await pn(r.localStore,u),await Ia(r,yd(u),o,!1,a.resumeToken)}s.push(a)}return r.nc.zo(i),s}function yd(n){return ah(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function Aw(n){const e=I(n);return I(I(e.localStore).persistence).bi()}async function Nw(n,e,t,r){const s=I(n);if(s.fc)return void y("SyncEngine","Ignoring unexpected query state notification.");const i=s.ic.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await td(s.localStore,uh(i[0])),a=kr.createSynthesizedRemoteEventForCurrentChange(e,t==="current",te.EMPTY_BYTE_STRING);await Qe(s,o,a);break}case"rejected":await yn(s.localStore,e,!0),vn(s,e,r);break;default:E()}}async function kw(n,e,t){const r=Sa(n);if(r.fc){for(const s of e){if(r.ic.has(s)){y("SyncEngine","Adding an already active target "+s);continue}const i=await ed(r.localStore,s),o=await pn(r.localStore,i);await Ia(r,yd(i),o.targetId,!1,o.resumeToken),Js(r.remoteStore,o)}for(const s of t)r.ic.has(s)&&await yn(r.localStore,s,!1).then(()=>{dr(r.remoteStore,s),vn(r,s)}).catch(pt)}}function Sa(n){const e=I(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=gd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Sw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ww.bind(null,e),e.nc.zo=cw.bind(null,e.eventManager),e.nc.wc=uw.bind(null,e.eventManager),e}function _a(n){const e=I(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Iw.bind(null,e),e}function Rw(n,e,t){const r=I(n);(async function(s,i,o){try{const a=await i.getMetadata();if(await function(h,d){const g=I(h),w=X(d.createTime);return g.persistence.runTransaction("hasNewerBundle","readonly",b=>g.xs.getBundleMetadata(b,d.id)).then(b=>!!b&&b.createTime.compareTo(w)>=0)}(s.localStore,a))return await i.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(hd(a));const c=new hw(a,s.localStore,i.serializer);let u=await i._c();for(;u;){const h=await c.$u(u);h&&o._updateProgress(h),u=await i._c()}const l=await c.complete();return await Qe(s,l.Bu,void 0),await function(h,d){const g=I(h);return g.persistence.runTransaction("Save bundle","readwrite",w=>g.xs.saveBundleMetadata(w,d))}(s.localStore,a),o._completeWith(l.progress),Promise.resolve(l.Fu)}catch(a){return je("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,t).then(s=>{r.sharedClientState.notifyBundleLoaded(s)})}class ho{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Or(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Yh(this.persistence,new Wh,e.initialUser,this.serializer)}createPersistence(e){return new Hh(Xs.Fs,this.serializer)}createSharedClientState(e){return new rd}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class wd extends ho{constructor(e,t,r){super(),this.mc=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.mc.initialize(this,e),await _a(this.mc.syncEngine),await An(this.mc.remoteStore),await this.persistence.hi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return Yh(this.persistence,new Wh,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new Ey(r,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const r=new ip(t,this.persistence);return new sp(e.asyncQueue,r)}createPersistence(e){const t=ca(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Ee.withCacheSize(this.cacheSizeBytes):Ee.DEFAULT;return new aa(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,sd(),ns(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new rd}}class Ow extends wd{constructor(e,t){super(e,t,!1),this.mc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.mc.syncEngine;this.sharedClientState instanceof xi&&(this.sharedClientState.syncEngine={$r:Cw.bind(null,t),Mr:Nw.bind(null,t),Fr:kw.bind(null,t),bi:Aw.bind(null,t),Or:Dw.bind(null,t)},await this.sharedClientState.start()),await this.persistence.hi(async r=>{await xw(this.mc.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const t=sd();if(!xi.D(t))throw new p(m.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=ca(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new xi(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Da{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ou(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Tw.bind(null,this.syncEngine),await uo(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new aw}createDatastore(e){const t=Or(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new Gy(s));var s;return function(i,o,a,c){return new Hy(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return t=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>ou(this.syncEngine,a,0),o=nu.D()?new nu:new qy,new Yy(t,r,s,i,o);var t,r,s,i,o}createSyncEngine(e,t){return function(r,s,i,o,a,c,u){const l=new mw(r,s,i,o,a,c);return u&&(l.fc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=I(e);y("RemoteStore","RemoteStore shutting down."),t.du.add(5),await xn(t),t._u.shutdown(),t.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):W("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(e,t){this.Ic=e,this.serializer=t,this.metadata=new ie,this.buffer=new Uint8Array,this.Tc=new TextDecoder("utf-8"),this.Ec().then(r=>{r&&r.ku()?this.metadata.resolve(r.Nu.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Nu)}`))},r=>this.metadata.reject(r))}close(){return this.Ic.cancel()}async getMetadata(){return this.metadata.promise}async _c(){return await this.getMetadata(),this.Ec()}async Ec(){const e=await this.Ac();if(e===null)return null;const t=this.Tc.decode(e),r=Number(t);isNaN(r)&&this.Rc(`length string (${t}) is not valid number`);const s=await this.vc(r);return new lw(JSON.parse(s),e.length+r)}bc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Ac(){for(;this.bc()<0&&!await this.Pc(););if(this.buffer.length===0)return null;const e=this.bc();e<0&&this.Rc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async vc(e){for(;this.buffer.length<e;)await this.Pc()&&this.Rc("Reached the end of bundle when more is expected.");const t=this.Tc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Rc(e){throw this.Ic.cancel(),new Error(`Invalid bundle format: ${e}`)}async Pc(){const e=await this.Ic.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new p(m.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(r,s){const i=I(r),o=lr(i.serializer)+"/documents",a={documents:s.map(h=>ur(i.serializer,h))},c=await i.fo("BatchGetDocuments",o,a,s.length),u=new Map;c.forEach(h=>{const d=ny(i.serializer,h);u.set(d.key.toString(),d)});const l=[];return s.forEach(h=>{const d=u.get(h.toString());S(!!d),l.push(d)}),l}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Cn(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const s=v.fromPath(r);this.mutations.push(new Xo(s,this.precondition(s)))}),await async function(t,r){const s=I(t),i=lr(s.serializer)+"/documents",o={writes:r.map(a=>hr(s.serializer,a))};await s.co("Commit",i,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw E();t=_.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new p(m.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(_.min())?q.exists(!1):q.updateTime(t):q.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(_.min()))throw new p(m.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return q.updateTime(t)}return q.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e,t,r,s,i){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=s,this.deferred=i,this.Vc=r.maxAttempts,this.Co=new ha(this.asyncQueue,"transaction_retry")}run(){this.Vc-=1,this.Sc()}Sc(){this.Co.Ao(async()=>{const e=new Lw(this.datastore),t=this.Dc(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.Cc(s)}))}).catch(r=>{this.Cc(r)})})}Dc(e){try{const t=this.updateFunction(e);return!Dr(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Cc(e){this.Vc>0&&this.xc(e)?(this.Vc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Sc(),Promise.resolve()))):this.deferred.reject(e)}xc(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!Th(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e,t,r,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=se.UNAUTHENTICATED,this.clientId=Vl.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{y("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(y("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new p(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ie;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=kn(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function rs(n,e){n.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Xh(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function fo(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Ca(n);y("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(s=>ru(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,i)=>ru(e.remoteStore,i)),n._onlineComponents=e}function vd(n){return n.name==="FirebaseError"?n.code===m.FAILED_PRECONDITION||n.code===m.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Ca(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){y("FirestoreClient","Using user provided OfflineComponentProvider");try{await rs(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!vd(t))throw t;je("Error using user provided cache. Falling back to memory cache: "+t),await rs(n,new ho)}}else y("FirestoreClient","Using default OfflineComponentProvider"),await rs(n,new ho);return n._offlineComponents}async function ei(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(y("FirestoreClient","Using user provided OnlineComponentProvider"),await fo(n,n._uninitializedComponentsProvider._online)):(y("FirestoreClient","Using default OnlineComponentProvider"),await fo(n,new Da))),n._onlineComponents}function Id(n){return Ca(n).then(e=>e.persistence)}function xa(n){return Ca(n).then(e=>e.localStore)}function bd(n){return ei(n).then(e=>e.remoteStore)}function Aa(n){return ei(n).then(e=>e.syncEngine)}function Vw(n){return ei(n).then(e=>e.datastore)}async function In(n){const e=await ei(n),t=e.eventManager;return t.onListen=gw.bind(null,e.syncEngine),t.onUnlisten=pw.bind(null,e.syncEngine),t}function Bw(n){return n.asyncQueue.enqueue(async()=>{const e=await Id(n),t=await bd(n);return e.setNetworkEnabled(!0),function(r){const s=I(r);return s.du.delete(0),Mr(s)}(t)})}function $w(n){return n.asyncQueue.enqueue(async()=>{const e=await Id(n),t=await bd(n);return e.setNetworkEnabled(!1),async function(r){const s=I(r);s.du.add(0),await xn(s),s.mu.set("Offline")}(t)})}function Uw(n,e){const t=new ie;return n.asyncQueue.enqueueAndForget(async()=>async function(r,s,i){try{const o=await function(a,c){const u=I(a);return u.persistence.runTransaction("read document","readonly",l=>u.localDocuments.getDocument(l,c))}(r,s);o.isFoundDocument()?i.resolve(o):o.isNoDocument()?i.resolve(null):i.reject(new p(m.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=kn(o,`Failed to get document '${s} from cache`);i.reject(a)}}(await xa(n),e,t)),t.promise}function Ed(n,e,t={}){const r=new ie;return n.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const u=new Zs({next:h=>{i.enqueueAndForget(()=>ya(s,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new p(m.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new p(m.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new va(_n(o.path),u,{includeMetadataChanges:!0,xu:!0});return pa(s,l)}(await In(n),n.asyncQueue,e,t,r)),r.promise}function qw(n,e){const t=new ie;return n.asyncQueue.enqueueAndForget(async()=>async function(r,s,i){try{const o=await Es(r,s,!0),a=new md(s,o.Wi),c=a.zu(o.documents),u=a.applyChanges(c,!1);i.resolve(u.snapshot)}catch(o){const a=kn(o,`Failed to execute query '${s} against cache`);i.reject(a)}}(await xa(n),e,t)),t.promise}function Td(n,e,t={}){const r=new ie;return n.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const u=new Zs({next:h=>{i.enqueueAndForget(()=>ya(s,l)),h.fromCache&&a.source==="server"?c.reject(new p(m.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new va(o,u,{includeMetadataChanges:!0,xu:!0});return pa(s,l)}(await In(n),n.asyncQueue,e,t,r)),r.promise}function jw(n,e){const t=new Zs(e);return n.asyncQueue.enqueueAndForget(async()=>function(r,s){I(r).Au.add(s),s.next()}(await In(n),t)),()=>{t.yc(),n.asyncQueue.enqueueAndForget(async()=>function(r,s){I(r).Au.delete(s)}(await In(n),t))}}function zw(n,e,t,r){const s=function(i,o){let a;return a=typeof i=="string"?new TextEncoder().encode(i):i,function(c,u){return new Mw(c,u)}(function(c,u){if(c instanceof Uint8Array)return cu(c,u);if(c instanceof ArrayBuffer)return cu(new Uint8Array(c),u);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(t,Or(e));n.asyncQueue.enqueueAndForget(async()=>{Rw(await Aa(n),s,r)})}function Gw(n,e){return n.asyncQueue.enqueue(async()=>function(t,r){const s=I(t);return s.persistence.runTransaction("Get named query","readonly",i=>s.xs.getNamedQuery(i,r))}(await xa(n),e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(n,e,t){if(!t)throw new p(m.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Sd(n,e,t,r){if(e===!0&&r===!0)throw new p(m.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function lu(n){if(!v.isDocumentKey(n))throw new p(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function hu(n){if(v.isDocumentKey(n))throw new p(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ti(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":E()}function O(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new p(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ti(n);throw new p(m.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function _d(n,e){if(e<=0)throw new p(m.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new p(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new p(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Sd("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new du({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new p(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new p(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new du(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new Kg;switch(t.type){case"firstParty":return new Yg(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new p(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=uu.get(e);t&&(y("ComponentProvider","Removing Datastore"),uu.delete(e),t.terminate())}(this),Promise.resolve()}}function Kw(n,e,t,r={}){var s;const i=(n=O(n,Lr))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&je("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${t}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=se.MOCK_USER;else{o=df(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new p(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new se(c)}n._authCredentials=new Qg(new Pl(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pe(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $(this.firestore,e,this._key)}}class de{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new de(this.firestore,e,this._query)}}class Pe extends de{constructor(e,t,r){super(e,t,_n(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $(this.firestore,null,new v(e))}withConverter(e){return new Pe(this.firestore,e,this._path)}}function Dd(n,e,...t){if(n=ee(n),Na("collection","path",e),n instanceof Lr){const r=R.fromString(e,...t);return hu(r),new Pe(n,null,r)}{if(!(n instanceof $||n instanceof Pe))throw new p(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(R.fromString(e,...t));return hu(r),new Pe(n.firestore,null,r)}}function Qw(n,e){if(n=O(n,Lr),Na("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new p(m.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new de(n,null,function(t){return new Ge(R.emptyPath(),t)}(e))}function Ds(n,e,...t){if(n=ee(n),arguments.length===1&&(e=Vl.A()),Na("doc","path",e),n instanceof Lr){const r=R.fromString(e,...t);return lu(r),new $(n,null,new v(r))}{if(!(n instanceof $||n instanceof Pe))throw new p(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(R.fromString(e,...t));return lu(r),new $(n.firestore,n instanceof Pe?n.converter:null,new v(r))}}function Cd(n,e){return n=ee(n),e=ee(e),(n instanceof $||n instanceof Pe)&&(e instanceof $||e instanceof Pe)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function xd(n,e){return n=ee(n),e=ee(e),n instanceof de&&e instanceof de&&n.firestore===e.firestore&&xr(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new ha(this,"async_queue_retry"),this.qc=()=>{const t=ns();t&&y("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Co.vo()};const e=ns();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const t=ns();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const t=new ie;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!yt(e))throw e;y("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const t=this.Nc.then(()=>(this.Fc=!0,e().catch(r=>{this.Mc=r,this.Fc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw W("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Fc=!1,r))));return this.Nc=t,t}enqueueAfterDelay(e,t,r){this.Uc(),this.Lc.indexOf(e)>-1&&(t=0);const s=ga.createAndSchedule(this,e,t,r,i=>this.Qc(i));return this.$c.push(s),s}Uc(){this.Mc&&E()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const t of this.$c)if(t.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.$c)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const t=this.$c.indexOf(e);this.$c.splice(t,1)}}function mo(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of t)if(s in r&&typeof r[s]=="function")return!0;return!1}(n,["next","error","complete"])}class Ww{constructor(){this._progressObserver={},this._taskCompletionResolver=new ie,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw=-1;class H extends Lr{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Hw,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ad(this),this._firestoreClient.terminate()}}function ce(n){return n._firestoreClient||Ad(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Ad(n){var e,t,r;const s=n._freezeSettings(),i=function(o,a,c,u){return new Cp(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new Pw(n._authCredentials,n._appCheckCredentials,n._queue,i),!((t=s.cache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}function Xw(n,e){kd(n=O(n,H));const t=ce(n);if(t._uninitializedComponentsProvider)throw new p(m.FAILED_PRECONDITION,"SDK cache is already specified.");je("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=n._freezeSettings(),s=new Da;return Nd(t,s,new wd(s,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function Jw(n){kd(n=O(n,H));const e=ce(n);if(e._uninitializedComponentsProvider)throw new p(m.FAILED_PRECONDITION,"SDK cache is already specified.");je("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings(),r=new Da;return Nd(e,r,new Ow(r,t.cacheSizeBytes))}function Nd(n,e,t){const r=new ie;return n.asyncQueue.enqueue(async()=>{try{await rs(n,t),await fo(n,e),r.resolve()}catch(s){const i=s;if(!vd(i))throw i;je("Error enabling indexeddb cache. Falling back to memory cache: "+i),r.reject(i)}}).then(()=>r.promise)}function Zw(n){if(n._initialized&&!n._terminated)throw new p(m.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new ie;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!Re.D())return Promise.resolve();const r=t+"main";await Re.delete(r)}(ca(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function ev(n){return function(e){const t=new ie;return e.asyncQueue.enqueueAndForget(async()=>bw(await Aa(e),t)),t.promise}(ce(n=O(n,H)))}function tv(n){return Bw(ce(n=O(n,H)))}function nv(n){return $w(ce(n=O(n,H)))}function rv(n,e){const t=ce(n=O(n,H)),r=new Ww;return zw(t,n._databaseId,e,r),r}function sv(n,e){return Gw(ce(n=O(n,H)),e).then(t=>t?new de(n,null,t.query):null)}function kd(n){if(n._initialized||n._terminated)throw new p(m.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Be(te.fromBase64String(e))}catch(t){throw new p(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Be(te.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new p(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Y(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new p(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new p(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return x(this._lat,e._lat)||x(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv=/^__.*__$/;class ov{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ke(e,this.data,this.fieldMask,t,this.fieldTransforms):new Dn(e,this.data,t,this.fieldTransforms)}}class Rd{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Ke(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Od(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw E()}}class ri{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Jc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new ri(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Zc({path:r,ta:!1});return s.ea(e),s}na(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Zc({path:r,ta:!1});return s.Jc(),s}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return Cs(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(Od(this.Yc)&&iv.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class av{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Or(e)}ua(e,t,r,s=!1){return new ri({Yc:e,methodName:t,oa:r,path:Y.emptyPath(),ta:!1,ra:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Yt(n){const e=n._freezeSettings(),t=Or(n._databaseId);return new av(n._databaseId,!!e.ignoreUndefinedProperties,t)}function si(n,e,t,r,s,i={}){const o=n.ua(i.merge||i.mergeFields?2:0,e,t,s);Ma("Data must be an object, but it was:",o,r);const a=Fd(r,o);let c,u;if(i.merge)c=new Se(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=go(e,h,t);if(!o.contains(d))throw new p(m.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Vd(l,d)||l.push(d)}c=new Se(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new ov(new le(a),c,u)}class Fr extends Wt{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Fr}}function Md(n,e,t){return new ri({Yc:3,oa:e.settings.oa,methodName:n._methodName,ta:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class ka extends Wt{_toFieldTransform(e){return new Nr(e.path,new fn)}isEqual(e){return e instanceof ka}}class cv extends Wt{constructor(e,t){super(e),this.ca=t}_toFieldTransform(e){const t=Md(this,e,!0),r=this.ca.map(i=>Xt(i,t)),s=new $t(r);return new Nr(e.path,s)}isEqual(e){return this===e}}class uv extends Wt{constructor(e,t){super(e),this.ca=t}_toFieldTransform(e){const t=Md(this,e,!0),r=this.ca.map(i=>Xt(i,t)),s=new Ut(r);return new Nr(e.path,s)}isEqual(e){return this===e}}class lv extends Wt{constructor(e,t){super(e),this.aa=t}_toFieldTransform(e){const t=new mn(e.serializer,ph(e.serializer,this.aa));return new Nr(e.path,t)}isEqual(e){return this===e}}function Ra(n,e,t,r){const s=n.ua(1,e,t);Ma("Data must be an object, but it was:",s,r);const i=[],o=le.empty();Ht(r,(c,u)=>{const l=La(e,c,t);u=ee(u);const h=s.na(l);if(u instanceof Fr)i.push(l);else{const d=Xt(u,h);d!=null&&(i.push(l),o.set(l,d))}});const a=new Se(i);return new Rd(o,a,s.fieldTransforms)}function Oa(n,e,t,r,s,i){const o=n.ua(1,e,t),a=[go(e,r,t)],c=[s];if(i.length%2!=0)throw new p(m.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(go(e,i[d])),c.push(i[d+1]);const u=[],l=le.empty();for(let d=a.length-1;d>=0;--d)if(!Vd(u,a[d])){const g=a[d];let w=c[d];w=ee(w);const b=o.na(g);if(w instanceof Fr)u.push(g);else{const D=Xt(w,b);D!=null&&(u.push(g),l.set(g,D))}}const h=new Se(u);return new Rd(l,h,o.fieldTransforms)}function Ld(n,e,t,r=!1){return Xt(t,n.ua(r?4:3,e))}function Xt(n,e){if(Pd(n=ee(n)))return Ma("Unsupported field value:",e,n),Fd(n,e);if(n instanceof Wt)return function(t,r){if(!Od(r.Yc))throw r.ia(`${t._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ia(`${t._methodName}() is not currently supported inside arrays`);const s=t._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(t,r){const s=[];let i=0;for(const o of t){let a=Xt(o,r.sa(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(n,e)}return function(t,r){if((t=ee(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return ph(r.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const s=j.fromDate(t);return{timestampValue:gn(r.serializer,s)}}if(t instanceof j){const s=new j(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:gn(r.serializer,s)}}if(t instanceof ni)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Be)return{bytesValue:Ch(r.serializer,t._byteString)};if(t instanceof $){const s=r.databaseId,i=t.firestore._databaseId;if(!i.isEqual(s))throw r.ia(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:na(t.firestore._databaseId||r.databaseId,t._key.path)}}throw r.ia(`Unsupported field value: ${ti(t)}`)}(n,e)}function Fd(n,e){const t={};return Yl(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ht(n,(r,s)=>{const i=Xt(s,e.Xc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Pd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof j||n instanceof ni||n instanceof Be||n instanceof $||n instanceof Wt)}function Ma(n,e,t){if(!Pd(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const r=ti(t);throw r==="an object"?e.ia(n+" a custom object"):e.ia(n+" "+r)}}function go(n,e,t){if((e=ee(e))instanceof dt)return e._internalPath;if(typeof e=="string")return La(n,e);throw Cs("Field path arguments must be of type string or ",n,!1,void 0,t)}const hv=new RegExp("[~\\*/\\[\\]]");function La(n,e,t){if(e.search(hv)>=0)throw Cs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new dt(...e.split("."))._internalPath}catch{throw Cs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Cs(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new p(m.INVALID_ARGUMENT,a+n+c)}function Vd(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new $(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new dv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ii("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class dv extends fr{data(){return super.data()}}function ii(n,e){return typeof e=="string"?La(n,e):e instanceof dt?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new p(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Fa{}class Pr extends Fa{}function Xe(n,e,...t){let r=[];e instanceof Fa&&r.push(e),r=r.concat(t),function(s){const i=s.filter(a=>a instanceof Pa).length,o=s.filter(a=>a instanceof oi).length;if(i>1||i>0&&o>0)throw new p(m.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class oi extends Pr{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new oi(e,t,r)}_apply(e){const t=this._parse(e);return Ud(e._query,t),new de(e.firestore,e.converter,to(e._query,t))}_parse(e){const t=Yt(e.firestore);return function(s,i,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new p(m.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){mu(l,u);const d=[];for(const g of l)d.push(fu(a,s,g));h={arrayValue:{values:d}}}else h=fu(a,s,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||mu(l,u),h=Ld(o,i,l,u==="in"||u==="not-in");return N.create(c,u,h)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function fv(n,e,t){const r=e,s=ii("where",n);return oi._create(s,r,t)}class Pa extends Fa{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Pa(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:L.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(r,s){let i=r;const o=s.getFlattenedFilters();for(const a of o)Ud(i,a),i=to(i,a)}(e._query,t),new de(e.firestore,e.converter,to(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Va extends Pr{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Va(e,t)}_apply(e){const t=function(r,s,i){if(r.startAt!==null)throw new p(m.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new p(m.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new on(s,i);return function(a,c){if(Wo(a)===null){const u=Gs(a);u!==null&&qd(a,u,c.field)}}(r,o),o}(e._query,this._field,this._direction);return new de(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new Ge(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,t))}}function mv(n,e="asc"){const t=e,r=ii("orderBy",n);return Va._create(r,t)}class ai extends Pr{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new ai(e,t,r)}_apply(e){return new de(e.firestore,e.converter,ws(e._query,this._limit,this._limitType))}}function gv(n){return _d("limit",n),ai._create("limit",n,"F")}function pv(n){return _d("limitToLast",n),ai._create("limitToLast",n,"L")}class ci extends Pr{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new ci(e,t,r)}_apply(e){const t=$d(e,this.type,this._docOrFields,this._inclusive);return new de(e.firestore,e.converter,function(r,s){return new Ge(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,s,r.endAt)}(e._query,t))}}function yv(...n){return ci._create("startAt",n,!0)}function wv(...n){return ci._create("startAfter",n,!1)}class ui extends Pr{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new ui(e,t,r)}_apply(e){const t=$d(e,this.type,this._docOrFields,this._inclusive);return new de(e.firestore,e.converter,function(r,s){return new Ge(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,s)}(e._query,t))}}function vv(...n){return ui._create("endBefore",n,!1)}function Iv(...n){return ui._create("endAt",n,!0)}function $d(n,e,t,r){if(t[0]=ee(t[0]),t[0]instanceof fr)return function(s,i,o,a,c){if(!a)throw new p(m.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const l of Ot(s))if(l.field.isKeyField())u.push(Vt(i,a.key));else{const h=a.data.field(l.field);if(Qo(h))throw new p(m.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+l.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=l.field.canonicalString();throw new p(m.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}u.push(h)}return new lt(u,c)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const s=Yt(n.firestore);return function(i,o,a,c,u,l){const h=i.explicitOrderBy;if(u.length>h.length)throw new p(m.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let g=0;g<u.length;g++){const w=u[g];if(h[g].field.isKeyField()){if(typeof w!="string")throw new p(m.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof w}`);if(!Yo(i)&&w.indexOf("/")!==-1)throw new p(m.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${w}' contains a slash.`);const b=i.path.child(R.fromString(w));if(!v.isDocumentKey(b))throw new p(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${b}' is not because it contains an odd number of segments.`);const D=new v(b);d.push(Vt(o,D))}else{const b=Ld(a,c,w);d.push(b)}}return new lt(d,l)}(n._query,n.firestore._databaseId,s,e,t,r)}}function fu(n,e,t){if(typeof(t=ee(t))=="string"){if(t==="")throw new p(m.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Yo(e)&&t.indexOf("/")!==-1)throw new p(m.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(R.fromString(t));if(!v.isDocumentKey(r))throw new p(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Vt(n,new v(r))}if(t instanceof $)return Vt(n,t._key);throw new p(m.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ti(t)}.`)}function mu(n,e){if(!Array.isArray(n)||n.length===0)throw new p(m.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ud(n,e){if(e.isInequality()){const r=Gs(n),s=e.field;if(r!==null&&!r.isEqual(s))throw new p(m.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=Wo(n);i!==null&&qd(n,s,i)}const t=function(r,s){for(const i of r)for(const o of i.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new p(m.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new p(m.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function qd(n,e,t){if(!t.isEqual(e))throw new p(m.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class Ba{convertValue(e,t="none"){switch(Pt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return G(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ft(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw E()}}convertObject(e,t){const r={};return Ht(e.fields,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertGeoPoint(e){return new ni(G(e.latitude),G(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Xl(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(or(e));default:return null}}convertTimestamp(e){const t=at(e);return new j(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=R.fromString(e);S(Ph(r));const s=new ct(r.get(1),r.get(3)),i=new v(r.popFirst(5));return s.isEqual(t)||W(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class bv extends Ba{constructor(e){super(),this.firestore=e}convertBytes(e){return new Be(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new $(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ze extends fr{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Wn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ii("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Wn extends ze{data(e={}){return super.data(e)}}class ft{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Nt(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Wn(this._firestore,this._userDataWriter,r.key,r,new Nt(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new p(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>{const a=new Wn(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Nt(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Wn(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Nt(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:Ev(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Ev(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return E()}}function jd(n,e){return n instanceof ze&&e instanceof ze?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof ft&&e instanceof ft&&n._firestore===e._firestore&&xd(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tv(n){n=O(n,$);const e=O(n.firestore,H);return Ed(ce(e),n._key).then(t=>$a(e,n,t))}class Jt extends Ba{constructor(e){super(),this.firestore=e}convertBytes(e){return new Be(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new $(this.firestore,null,t)}}function Sv(n){n=O(n,$);const e=O(n.firestore,H),t=ce(e),r=new Jt(e);return Uw(t,n._key).then(s=>new ze(e,r,n._key,s,new Nt(s!==null&&s.hasLocalMutations,!0),n.converter))}function _v(n){n=O(n,$);const e=O(n.firestore,H);return Ed(ce(e),n._key,{source:"server"}).then(t=>$a(e,n,t))}function Dv(n){n=O(n,de);const e=O(n.firestore,H),t=ce(e),r=new Jt(e);return Bd(n._query),Td(t,n._query).then(s=>new ft(e,r,n,s))}function Cv(n){n=O(n,de);const e=O(n.firestore,H),t=ce(e),r=new Jt(e);return qw(t,n._query).then(s=>new ft(e,r,n,s))}function xv(n){n=O(n,de);const e=O(n.firestore,H),t=ce(e),r=new Jt(e);return Td(t,n._query,{source:"server"}).then(s=>new ft(e,r,n,s))}function gu(n,e,t){n=O(n,$);const r=O(n.firestore,H),s=li(n.converter,e,t);return Vr(r,[si(Yt(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,q.none())])}function pu(n,e,t,...r){n=O(n,$);const s=O(n.firestore,H),i=Yt(s);let o;return o=typeof(e=ee(e))=="string"||e instanceof dt?Oa(i,"updateDoc",n._key,e,t,r):Ra(i,"updateDoc",n._key,e),Vr(s,[o.toMutation(n._key,q.exists(!0))])}function Av(n){return Vr(O(n.firestore,H),[new Cn(n._key,q.none())])}function Nv(n,e){const t=O(n.firestore,H),r=Ds(n),s=li(n.converter,e);return Vr(t,[si(Yt(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,q.exists(!1))]).then(()=>r)}function zd(n,...e){var t,r,s;n=ee(n);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||mo(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(mo(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,u,l;if(n instanceof $)u=O(n.firestore,H),l=_n(n._key.path),c={next:h=>{e[o]&&e[o]($a(u,n,h))},error:e[o+1],complete:e[o+2]};else{const h=O(n,de);u=O(h.firestore,H),l=h._query;const d=new Jt(u);c={next:g=>{e[o]&&e[o](new ft(u,d,h,g))},error:e[o+1],complete:e[o+2]},Bd(n._query)}return function(h,d,g,w){const b=new Zs(w),D=new va(d,b,g);return h.asyncQueue.enqueueAndForget(async()=>pa(await In(h),D)),()=>{b.yc(),h.asyncQueue.enqueueAndForget(async()=>ya(await In(h),D))}}(ce(u),l,a,c)}function kv(n,e){return jw(ce(n=O(n,H)),mo(e)?e:{next:e})}function Vr(n,e){return function(t,r){const s=new ie;return t.asyncQueue.enqueueAndForget(async()=>yw(await Aa(t),r,s)),s.promise}(ce(n),e)}function $a(n,e,t){const r=t.docs.get(e._key),s=new Jt(n);return new ze(n,s,e._key,r,new Nt(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Yt(e)}set(e,t,r){this._verifyNotCommitted();const s=Ze(e,this._firestore),i=li(s.converter,t,r),o=si(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,q.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=Ze(e,this._firestore);let o;return o=typeof(t=ee(t))=="string"||t instanceof dt?Oa(this._dataReader,"WriteBatch.update",i._key,t,r,s):Ra(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,q.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Ze(e,this._firestore);return this._mutations=this._mutations.concat(new Cn(t._key,q.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new p(m.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ze(n,e){if((n=ee(n)).firestore!==e)throw new p(m.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Yt(e)}get(e){const t=Ze(e,this._firestore),r=new bv(this._firestore);return this._transaction.lookup([t._key]).then(s=>{if(!s||s.length!==1)return E();const i=s[0];if(i.isFoundDocument())return new fr(this._firestore,r,i.key,i,t.converter);if(i.isNoDocument())return new fr(this._firestore,r,t._key,null,t.converter);throw E()})}set(e,t,r){const s=Ze(e,this._firestore),i=li(s.converter,t,r),o=si(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,o),this}update(e,t,r,...s){const i=Ze(e,this._firestore);let o;return o=typeof(t=ee(t))=="string"||t instanceof dt?Oa(this._dataReader,"Transaction.update",i._key,t,r,s):Ra(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,o),this}delete(e){const t=Ze(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Ze(e,this._firestore),r=new Jt(this._firestore);return super.get(e).then(s=>new ze(this._firestore,r,t._key,s._document,new Nt(!1,!1),t.converter))}}function Lv(n,e,t){n=O(n,H);const r=Object.assign(Object.assign({},Rv),t);return function(s){if(s.maxAttempts<1)throw new p(m.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,i,o){const a=new ie;return s.asyncQueue.enqueueAndForget(async()=>{const c=await Vw(s);new Fw(s.asyncQueue,c,o,i,a).run()}),a.promise}(ce(n),s=>e(new Mv(n,s)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(){return new Fr("deleteField")}function Pv(){return new ka("serverTimestamp")}function Vv(...n){return new cv("arrayUnion",n)}function Bv(...n){return new uv("arrayRemove",n)}function $v(n){return new lv("increment",n)}(function(n,e=!0){(function(t){Sn=t})(bo),cn(new Mt("firestore",(t,{instanceIdentifier:r,options:s})=>{const i=t.getProvider("app").getImmediate(),o=new H(new Hg(t.getProvider("auth-internal")),new Jg(t.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new p(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ct(a.options.projectId,c)}(i,r),i);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),nt(fc,"3.10.0",n),nt(fc,"3.10.0","esm2017")})();const Uv="@firebase/firestore-compat",qv="0.3.6";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new p("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(){if(typeof Uint8Array>"u")throw new p("unimplemented","Uint8Arrays are not available in this environment.")}function wu(){if(!_p())throw new p("unimplemented","Blobs are unavailable in Firestore in this environment.")}class mr{constructor(e){this._delegate=e}static fromBase64String(e){return wu(),new mr(Be.fromBase64String(e))}static fromUint8Array(e){return yu(),new mr(Be.fromUint8Array(e))}toBase64(){return wu(),this._delegate.toBase64()}toUint8Array(){return yu(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(n){return jv(n,["next","error","complete"])}function jv(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{enableIndexedDbPersistence(e,t){return Xw(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return Jw(e._delegate)}clearIndexedDbPersistence(e){return Zw(e._delegate)}}class Gd{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof ct||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&je("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){Kw(this._delegate,e,t,r)}enableNetwork(){return tv(this._delegate)}disableNetwork(){return nv(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,Sd("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return ev(this._delegate)}onSnapshotsInSync(e){return kv(this._delegate,e)}get app(){if(!this._appCompat)throw new p("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new bn(this,Dd(this._delegate,e))}catch(t){throw ve(t,"collection()","Firestore.collection()")}}doc(e){try{return new ke(this,Ds(this._delegate,e))}catch(t){throw ve(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new we(this,Qw(this._delegate,e))}catch(t){throw ve(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Lv(this._delegate,t=>e(new Kd(this,t)))}batch(){return ce(this._delegate),new Qd(new Ov(this._delegate,e=>Vr(this._delegate,e)))}loadBundle(e){return rv(this._delegate,e)}namedQuery(e){return sv(this._delegate,e).then(t=>t?new we(this,t):null)}}class hi extends Ba{constructor(e){super(),this.firestore=e}convertBytes(e){return new mr(new Be(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return ke.forKey(t,this.firestore,null)}}function Gv(n){zg(n)}class Kd{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new hi(e)}get(e){const t=kt(e);return this._delegate.get(t).then(r=>new gr(this._firestore,new ze(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const s=kt(e);return r?(Ua("Transaction.set",r),this._delegate.set(s,t,r)):this._delegate.set(s,t),this}update(e,t,r,...s){const i=kt(e);return arguments.length===2?this._delegate.update(i,t):this._delegate.update(i,t,r,...s),this}delete(e){const t=kt(e);return this._delegate.delete(t),this}}class Qd{constructor(e){this._delegate=e}set(e,t,r){const s=kt(e);return r?(Ua("WriteBatch.set",r),this._delegate.set(s,t,r)):this._delegate.set(s,t),this}update(e,t,r,...s){const i=kt(e);return arguments.length===2?this._delegate.update(i,t):this._delegate.update(i,t,r,...s),this}delete(e){const t=kt(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Gt{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new Wn(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new pr(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=Gt.INSTANCES;let s=r.get(e);s||(s=new WeakMap,r.set(e,s));let i=s.get(t);return i||(i=new Gt(e,new hi(e),t),s.set(t,i)),i}}Gt.INSTANCES=new WeakMap;class ke{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new hi(e)}static forPath(e,t,r){if(e.length%2!==0)throw new p("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new ke(t,new $(t._delegate,r,new v(e)))}static forKey(e,t,r){return new ke(t,new $(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new bn(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new bn(this.firestore,Dd(this._delegate,e))}catch(t){throw ve(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=ee(e),e instanceof $?Cd(this._delegate,e):!1}set(e,t){t=Ua("DocumentReference.set",t);try{return t?gu(this._delegate,e,t):gu(this._delegate,e)}catch(r){throw ve(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?pu(this._delegate,e):pu(this._delegate,e,t,...r)}catch(s){throw ve(s,"updateDoc()","DocumentReference.update()")}}delete(){return Av(this._delegate)}onSnapshot(...e){const t=Hd(e),r=Wd(e,s=>new gr(this.firestore,new ze(this.firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,this._delegate.converter)));return zd(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=Sv(this._delegate):(e==null?void 0:e.source)==="server"?t=_v(this._delegate):t=Tv(this._delegate),t.then(r=>new gr(this.firestore,new ze(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new ke(this.firestore,e?this._delegate.withConverter(Gt.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ve(n,e,t){return n.message=n.message.replace(e,t),n}function Hd(n){for(const e of n)if(typeof e=="object"&&!po(e))return e;return{}}function Wd(n,e){var t,r;let s;return po(n[0])?s=n[0]:po(n[1])?s=n[1]:typeof n[0]=="function"?s={next:n[0],error:n[1],complete:n[2]}:s={next:n[1],error:n[2],complete:n[3]},{next:i=>{s.next&&s.next(e(i))},error:(t=s.error)===null||t===void 0?void 0:t.bind(s),complete:(r=s.complete)===null||r===void 0?void 0:r.bind(s)}}class gr{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new ke(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return jd(this._delegate,e._delegate)}}class pr extends gr{data(e){const t=this._delegate.data(e);return Gg(t!==void 0),t}}class we{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new hi(e)}where(e,t,r){try{return new we(this.firestore,Xe(this._delegate,fv(e,t,r)))}catch(s){throw ve(s,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new we(this.firestore,Xe(this._delegate,mv(e,t)))}catch(r){throw ve(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new we(this.firestore,Xe(this._delegate,gv(e)))}catch(t){throw ve(t,"limit()","Query.limit()")}}limitToLast(e){try{return new we(this.firestore,Xe(this._delegate,pv(e)))}catch(t){throw ve(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new we(this.firestore,Xe(this._delegate,yv(...e)))}catch(t){throw ve(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new we(this.firestore,Xe(this._delegate,wv(...e)))}catch(t){throw ve(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new we(this.firestore,Xe(this._delegate,vv(...e)))}catch(t){throw ve(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new we(this.firestore,Xe(this._delegate,Iv(...e)))}catch(t){throw ve(t,"endAt()","Query.endAt()")}}isEqual(e){return xd(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=Cv(this._delegate):(e==null?void 0:e.source)==="server"?t=xv(this._delegate):t=Dv(this._delegate),t.then(r=>new yo(this.firestore,new ft(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=Hd(e),r=Wd(e,s=>new yo(this.firestore,new ft(this.firestore._delegate,this._userDataWriter,this._delegate,s._snapshot)));return zd(this._delegate,t,r)}withConverter(e){return new we(this.firestore,e?this._delegate.withConverter(Gt.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class Kv{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new pr(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class yo{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new we(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new pr(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new Kv(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new pr(this._firestore,r))})}isEqual(e){return jd(this._delegate,e._delegate)}}class bn extends we{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new ke(this.firestore,e):null}doc(e){try{return e===void 0?new ke(this.firestore,Ds(this._delegate)):new ke(this.firestore,Ds(this._delegate,e))}catch(t){throw ve(t,"doc()","CollectionReference.doc()")}}add(e){return Nv(this._delegate,e).then(t=>new ke(this.firestore,t))}isEqual(e){return Cd(this._delegate,e._delegate)}withConverter(e){return new bn(this.firestore,e?this._delegate.withConverter(Gt.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function kt(n){return O(n,$)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(...e){this._delegate=new dt(...e)}static documentId(){return new qa(Y.keyField().canonicalString())}isEqual(e){return e=ee(e),e instanceof dt?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this._delegate=e}static serverTimestamp(){const e=Pv();return e._methodName="FieldValue.serverTimestamp",new Ct(e)}static delete(){const e=Fv();return e._methodName="FieldValue.delete",new Ct(e)}static arrayUnion(...e){const t=Vv(...e);return t._methodName="FieldValue.arrayUnion",new Ct(t)}static arrayRemove(...e){const t=Bv(...e);return t._methodName="FieldValue.arrayRemove",new Ct(t)}static increment(e){const t=$v(e);return t._methodName="FieldValue.increment",new Ct(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv={Firestore:Gd,GeoPoint:ni,Timestamp:j,Blob:mr,Transaction:Kd,WriteBatch:Qd,DocumentReference:ke,DocumentSnapshot:gr,Query:we,QueryDocumentSnapshot:pr,QuerySnapshot:yo,CollectionReference:bn,FieldPath:qa,FieldValue:Ct,setLogLevel:Gv,CACHE_SIZE_UNLIMITED:Yw};function Hv(n,e){n.INTERNAL.registerComponent(new Mt("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),s=t.getProvider("firestore").getImmediate();return e(r,s)},"PUBLIC").setServiceProps(Object.assign({},Qv)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wv(n){Hv(n,(e,t)=>new Gd(e,t,new zv)),n.registerVersion(Uv,qv)}Wv(Jn);const Yv={apiKey:"AIzaSyDGuBNCm_mLocS_0_uunWRQuBKr7k31ArM",authDomain:"callme-6ac7d.firebaseapp.com",projectId:"callme-6ac7d",storageBucket:"callme-6ac7d.appspot.com",messagingSenderId:"75296236471",appId:"1:75296236471:web:1b7ad421380e8577993e32"};Jn.apps.length||Jn.initializeApp(Yv);const Yd=Jn.firestore(),Xv={iceServers:[{urls:["stun:stun1.l.google.com:19302","stun:stun2.l.google.com:19302"]}],iceCandidatePoolSize:10},xe=new RTCPeerConnection(Xv);let Yr=null,Ni=null;const vu=document.getElementById("webcamButton"),Jv=document.getElementById("webcamVideo"),Xd=document.getElementById("callButton"),Jd=document.getElementById("callInput"),Zd=document.getElementById("answerButton"),Zv=document.getElementById("remoteVideo"),eI=document.getElementById("hangupButton");vu.onclick=async()=>{Yr=await navigator.mediaDevices.getUserMedia({video:!0,audio:!0}),Ni=new MediaStream,Yr.getTracks().forEach(n=>{xe.addTrack(n,Yr)}),xe.ontrack=n=>{n.streams[0].getTracks().forEach(e=>{Ni.addTrack(e)})},Jv.srcObject=Yr,Zv.srcObject=Ni,Xd.disabled=!1,Zd.disabled=!1,vu.disabled=!0};Xd.onclick=async()=>{const n=Yd.collection("calls").doc(),e=n.collection("offerCandidates"),t=n.collection("answerCandidates");Jd.value=n.id,xe.onicecandidate=i=>{i.candidate&&e.add(i.candidate.toJSON())};const r=await xe.createOffer();await xe.setLocalDescription(r);const s={sdp:r.sdp,type:r.type};await n.set({offer:s}),n.onSnapshot(i=>{const o=i.data();if(!xe.currentRemoteDescription&&(o!=null&&o.answer)){const a=new RTCSessionDescription(o.answer);xe.setRemoteDescription(a)}}),t.onSnapshot(i=>{i.docChanges().forEach(o=>{if(o.type==="added"){const a=new RTCIceCandidate(o.doc.data());xe.addIceCandidate(a)}})}),eI.disabled=!1};Zd.onclick=async()=>{const n=Jd.value,e=Yd.collection("calls").doc(n),t=e.collection("answerCandidates"),r=e.collection("offerCandidates");xe.onicecandidate=c=>{c.candidate&&t.add(c.candidate.toJSON())};const i=(await e.get()).data().offer;await xe.setRemoteDescription(new RTCSessionDescription(i));const o=await xe.createAnswer();await xe.setLocalDescription(o);const a={type:o.type,sdp:o.sdp};await e.update({answer:a}),r.onSnapshot(c=>{c.docChanges().forEach(u=>{if(console.log(u),u.type==="added"){let l=u.doc.data();xe.addIceCandidate(new RTCIceCandidate(l))}})})};
