import{v4 as o}from"uuid";var a=(...e)=>{let t={};return e.forEach(n=>t[n]={minLength:1,description:`The "${n}" cannot be empty`}),{if:{propertyNames:{enum:[...e]}},then:{properties:t}}},m={$id:o(),type:"object",properties:{name:{type:"string"},category:{type:"string",enum:["AUTHENTICATION","MARKETING","UTILITY"]},allowCategoryChange:{type:"boolean"},language:{type:"string"},components:{type:"array"},webhookUrl:{type:"string"}},required:["name","category","language","components"],...a("name","category","language","components")};export{m as templateSchema};
//# sourceMappingURL=template.schema.mjs.map