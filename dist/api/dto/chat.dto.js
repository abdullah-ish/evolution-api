var t=Object.defineProperty;var j=Object.getOwnPropertyDescriptor;var k=Object.getOwnPropertyNames;var G=Object.prototype.hasOwnProperty;var I=(s,e)=>{for(var n in e)t(s,n,{get:e[n],enumerable:!0})},J=(s,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of k(e))!G.call(s,r)&&r!==n&&t(s,r,{get:()=>e[r],enumerable:!(i=j(e,r))||i.enumerable});return s};var K=s=>J(t({},"__esModule",{value:!0}),s);var T={};I(T,{ArchiveChatDto:()=>y,BlockUserDto:()=>R,DeleteMessage:()=>V,LastMessage:()=>m,MarkChatUnreadDto:()=>A,Metadata:()=>a,NumberBusiness:()=>g,NumberDto:()=>p,OnWhatsAppDto:()=>l,Options:()=>v,PrivacySettingDto:()=>W,ProfileNameDto:()=>u,ProfilePictureDto:()=>b,ProfileStatusDto:()=>x,ReadMessageDto:()=>d,SendPresenceDto:()=>f,UpdateMessageDto:()=>w,WhatsAppNumberDto:()=>o,getBase64FromMediaMessageDto:()=>c});module.exports=K(T);var l=class{constructor(e,n,i,r){this.jid=e;this.exists=n;this.number=i;this.name=r}},c=class{},o=class{},p=class{},g=class{},u=class{},x=class{},b=class{};var d=class{},m=class{},y=class{},A=class{},W=class{},V=class{},v=class{},P=class{},a=class extends P{},f=class extends a{},w=class extends a{},R=class{};0&&(module.exports={ArchiveChatDto,BlockUserDto,DeleteMessage,LastMessage,MarkChatUnreadDto,Metadata,NumberBusiness,NumberDto,OnWhatsAppDto,Options,PrivacySettingDto,ProfileNameDto,ProfilePictureDto,ProfileStatusDto,ReadMessageDto,SendPresenceDto,UpdateMessageDto,WhatsAppNumberDto,getBase64FromMediaMessageDto});
//# sourceMappingURL=chat.dto.js.map