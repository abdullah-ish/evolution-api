var a=Object.defineProperty;var S=Object.getOwnPropertyDescriptor;var E=Object.getOwnPropertyNames;var u=Object.prototype.hasOwnProperty;var l=(r,e)=>{for(var t in e)a(r,t,{get:e[t],enumerable:!0})},h=(r,e,t,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of E(e))!u.call(r,i)&&i!==t&&a(r,i,{get:()=>e[i],enumerable:!(s=S(e,i))||s.enumerable});return r};var T=r=>h(a({},"__esModule",{value:!0}),r);var A={};l(A,{eventSchema:()=>v,pusherSchema:()=>y,webhookSchema:()=>d});module.exports=T(A);var c=require("uuid");var o=class o{constructor(e,t,s,i){this.prisma=e,this.monitor=t,this.status=s,this.name=i}set prisma(e){this.prismaRepository=e}get prisma(){return this.prismaRepository}set monitor(e){this.waMonitor=e}get monitor(){return this.waMonitor}set name(e){this.integrationName=e}get name(){return this.integrationName}set status(e){this.integrationStatus=e}get status(){return this.integrationStatus}async set(e,t){if(this.status)return t[this.name]?.enabled?t[this.name].events.length===0&&(t[this.name].events=o.events):t[this.name].events=[],this.prisma[this.name].upsert({where:{instanceId:this.monitor.waInstances[e].instanceId},update:{enabled:t[this.name]?.enabled,events:t[this.name].events},create:{enabled:t[this.name]?.enabled,events:t[this.name].events,instanceId:this.monitor.waInstances[e].instanceId}})}async get(e){if(!this.status)return;if(this.monitor.waInstances[e]===void 0)return null;let t=await this.prisma[this.name].findUnique({where:{instanceId:this.monitor.waInstances[e].instanceId}});return t||null}};o.events=["APPLICATION_STARTUP","QRCODE_UPDATED","MESSAGES_SET","MESSAGES_UPSERT","MESSAGES_EDITED","MESSAGES_UPDATE","MESSAGES_DELETE","SEND_MESSAGE","CONTACTS_SET","CONTACTS_UPSERT","CONTACTS_UPDATE","PRESENCE_UPDATE","CHATS_SET","CHATS_UPSERT","CHATS_UPDATE","CHATS_DELETE","GROUPS_UPSERT","GROUP_UPDATE","GROUP_PARTICIPANTS_UPDATE","CONNECTION_UPDATE","LABELS_EDIT","LABELS_ASSOCIATION","CALL","TYPEBOT_START","TYPEBOT_CHANGE_STATUS","REMOVE_INSTANCE","LOGOUT_INSTANCE"];var n=o;var m=require("uuid");var b=(...r)=>{let e={};return r.forEach(t=>e[t]={minLength:1,description:`The "${t}" cannot be empty`}),{if:{propertyNames:{enum:[...r]}},then:{properties:e}}},y={$id:(0,m.v4)(),type:"object",properties:{pusher:{type:"object",properties:{enabled:{type:"boolean"},appId:{type:"string"},key:{type:"string"},secret:{type:"string"},cluster:{type:"string"},useTLS:{type:"boolean"},events:{type:"array",minItems:0,items:{type:"string",enum:n.events}}},required:["enabled","appId","key","secret","cluster","useTLS"],...b("enabled","appId","key","secret","cluster","useTLS")}},required:["pusher"]};var p=require("uuid");var g=(...r)=>{let e={};return r.forEach(t=>e[t]={minLength:1,description:`The "${t}" cannot be empty`}),{if:{propertyNames:{enum:[...r]}},then:{properties:e}}},d={$id:(0,p.v4)(),type:"object",properties:{webhook:{type:"object",properties:{enabled:{type:"boolean"},url:{type:"string"},headers:{type:"object"},byEvents:{type:"boolean"},base64:{type:"boolean"},events:{type:"array",minItems:0,items:{type:"string",enum:n.events}}},required:["enabled","url"],...g("enabled","url")}},required:["webhook"]};var v={$id:(0,c.v4)(),type:"object",properties:{websocket:{$ref:"#/$defs/event"},rabbitmq:{$ref:"#/$defs/event"},sqs:{$ref:"#/$defs/event"}},$defs:{event:{type:"object",properties:{enabled:{type:"boolean",enum:[!0,!1]},events:{type:"array",minItems:0,items:{type:"string",enum:n.events}}},required:["enabled"]}}};0&&(module.exports={eventSchema,pusherSchema,webhookSchema});
//# sourceMappingURL=event.schema.js.map