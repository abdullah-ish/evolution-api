import{isBooleanString as _}from"class-validator";import n from"dotenv";n.config();var A=class{constructor(){this.loadEnv()}get(e){return this.env[e]}loadEnv(){this.env=this.envProcess(),this.env.PRODUCTION=process.env?.NODE_ENV==="PROD",process.env?.DOCKER_ENV==="true"&&(this.env.SERVER.TYPE=process.env.SERVER_TYPE,this.env.SERVER.PORT=Number.parseInt(process.env.SERVER_PORT)||8080)}envProcess(){return{SERVER:{TYPE:process.env.SERVER_TYPE||"http",PORT:Number.parseInt(process.env.SERVER_PORT)||8080,URL:process.env.SERVER_URL,DISABLE_DOCS:process.env?.SERVER_DISABLE_DOCS==="true",DISABLE_MANAGER:process.env?.SERVER_DISABLE_MANAGER==="true"},CORS:{ORIGIN:process.env.CORS_ORIGIN?.split(",")||["*"],METHODS:process.env.CORS_METHODS?.split(",")||["POST","GET","PUT","DELETE"],CREDENTIALS:process.env?.CORS_CREDENTIALS==="true"},SSL_CONF:{PRIVKEY:process.env?.SSL_CONF_PRIVKEY||"",FULLCHAIN:process.env?.SSL_CONF_FULLCHAIN||""},PROVIDER:{ENABLED:process.env?.PROVIDER_ENABLED==="true",HOST:process.env.PROVIDER_HOST,PORT:process.env?.PROVIDER_PORT||"5656",PREFIX:process.env?.PROVIDER_PREFIX||"evolution"},DATABASE:{CONNECTION:{URI:process.env.DATABASE_CONNECTION_URI||"",CLIENT_NAME:process.env.DATABASE_CONNECTION_CLIENT_NAME||"evolution"},PROVIDER:process.env.DATABASE_PROVIDER||"postgresql",SAVE_DATA:{INSTANCE:process.env?.DATABASE_SAVE_DATA_INSTANCE==="true",NEW_MESSAGE:process.env?.DATABASE_SAVE_DATA_NEW_MESSAGE==="true",MESSAGE_UPDATE:process.env?.DATABASE_SAVE_MESSAGE_UPDATE==="true",CONTACTS:process.env?.DATABASE_SAVE_DATA_CONTACTS==="true",CHATS:process.env?.DATABASE_SAVE_DATA_CHATS==="true",HISTORIC:process.env?.DATABASE_SAVE_DATA_HISTORIC==="true",LABELS:process.env?.DATABASE_SAVE_DATA_LABELS==="true",IS_ON_WHATSAPP:process.env?.DATABASE_SAVE_IS_ON_WHATSAPP==="true",IS_ON_WHATSAPP_DAYS:Number.parseInt(process.env?.DATABASE_SAVE_IS_ON_WHATSAPP_DAYS??"7")},DELETE_DATA:{LOGICAL_MESSAGE_DELETE:process.env?.DATABASE_DELETE_MESSAGE==="true"}},RABBITMQ:{ENABLED:process.env?.RABBITMQ_ENABLED==="true",GLOBAL_ENABLED:process.env?.RABBITMQ_GLOBAL_ENABLED==="true",EXCHANGE_NAME:process.env?.RABBITMQ_EXCHANGE_NAME||"evolution_exchange",URI:process.env.RABBITMQ_URI||"",EVENTS:{APPLICATION_STARTUP:process.env?.RABBITMQ_EVENTS_APPLICATION_STARTUP==="true",INSTANCE_CREATE:process.env?.RABBITMQ_EVENTS_INSTANCE_CREATE==="true",INSTANCE_DELETE:process.env?.RABBITMQ_EVENTS_INSTANCE_DELETE==="true",QRCODE_UPDATED:process.env?.RABBITMQ_EVENTS_QRCODE_UPDATED==="true",MESSAGES_SET:process.env?.RABBITMQ_EVENTS_MESSAGES_SET==="true",MESSAGES_UPSERT:process.env?.RABBITMQ_EVENTS_MESSAGES_UPSERT==="true",MESSAGES_EDITED:process.env?.RABBITMQ_EVENTS_MESSAGES_EDITED==="true",MESSAGES_UPDATE:process.env?.RABBITMQ_EVENTS_MESSAGES_UPDATE==="true",MESSAGES_DELETE:process.env?.RABBITMQ_EVENTS_MESSAGES_DELETE==="true",SEND_MESSAGE:process.env?.RABBITMQ_EVENTS_SEND_MESSAGE==="true",CONTACTS_SET:process.env?.RABBITMQ_EVENTS_CONTACTS_SET==="true",CONTACTS_UPDATE:process.env?.RABBITMQ_EVENTS_CONTACTS_UPDATE==="true",CONTACTS_UPSERT:process.env?.RABBITMQ_EVENTS_CONTACTS_UPSERT==="true",PRESENCE_UPDATE:process.env?.RABBITMQ_EVENTS_PRESENCE_UPDATE==="true",CHATS_SET:process.env?.RABBITMQ_EVENTS_CHATS_SET==="true",CHATS_UPDATE:process.env?.RABBITMQ_EVENTS_CHATS_UPDATE==="true",CHATS_UPSERT:process.env?.RABBITMQ_EVENTS_CHATS_UPSERT==="true",CHATS_DELETE:process.env?.RABBITMQ_EVENTS_CHATS_DELETE==="true",CONNECTION_UPDATE:process.env?.RABBITMQ_EVENTS_CONNECTION_UPDATE==="true",LABELS_EDIT:process.env?.RABBITMQ_EVENTS_LABELS_EDIT==="true",LABELS_ASSOCIATION:process.env?.RABBITMQ_EVENTS_LABELS_ASSOCIATION==="true",GROUPS_UPSERT:process.env?.RABBITMQ_EVENTS_GROUPS_UPSERT==="true",GROUP_UPDATE:process.env?.RABBITMQ_EVENTS_GROUPS_UPDATE==="true",GROUP_PARTICIPANTS_UPDATE:process.env?.RABBITMQ_EVENTS_GROUP_PARTICIPANTS_UPDATE==="true",CALL:process.env?.RABBITMQ_EVENTS_CALL==="true",TYPEBOT_START:process.env?.RABBITMQ_EVENTS_TYPEBOT_START==="true",TYPEBOT_CHANGE_STATUS:process.env?.RABBITMQ_EVENTS_TYPEBOT_CHANGE_STATUS==="true"}},SQS:{ENABLED:process.env?.SQS_ENABLED==="true",ACCESS_KEY_ID:process.env.SQS_ACCESS_KEY_ID||"",SECRET_ACCESS_KEY:process.env.SQS_SECRET_ACCESS_KEY||"",ACCOUNT_ID:process.env.SQS_ACCOUNT_ID||"",REGION:process.env.SQS_REGION||""},WEBSOCKET:{ENABLED:process.env?.WEBSOCKET_ENABLED==="true",GLOBAL_EVENTS:process.env?.WEBSOCKET_GLOBAL_EVENTS==="true"},PUSHER:{ENABLED:process.env?.PUSHER_ENABLED==="true",GLOBAL:{ENABLED:process.env?.PUSHER_GLOBAL_ENABLED==="true",APP_ID:process.env?.PUSHER_GLOBAL_APP_ID||"",KEY:process.env?.PUSHER_GLOBAL_KEY||"",SECRET:process.env?.PUSHER_GLOBAL_SECRET||"",CLUSTER:process.env?.PUSHER_GLOBAL_CLUSTER||"",USE_TLS:process.env?.PUSHER_GLOBAL_USE_TLS==="true"},EVENTS:{APPLICATION_STARTUP:process.env?.PUSHER_EVENTS_APPLICATION_STARTUP==="true",INSTANCE_CREATE:process.env?.PUSHER_EVENTS_INSTANCE_CREATE==="true",INSTANCE_DELETE:process.env?.PUSHER_EVENTS_INSTANCE_DELETE==="true",QRCODE_UPDATED:process.env?.PUSHER_EVENTS_QRCODE_UPDATED==="true",MESSAGES_SET:process.env?.PUSHER_EVENTS_MESSAGES_SET==="true",MESSAGES_UPSERT:process.env?.PUSHER_EVENTS_MESSAGES_UPSERT==="true",MESSAGES_EDITED:process.env?.PUSHER_EVENTS_MESSAGES_EDITED==="true",MESSAGES_UPDATE:process.env?.PUSHER_EVENTS_MESSAGES_UPDATE==="true",MESSAGES_DELETE:process.env?.PUSHER_EVENTS_MESSAGES_DELETE==="true",SEND_MESSAGE:process.env?.PUSHER_EVENTS_SEND_MESSAGE==="true",CONTACTS_SET:process.env?.PUSHER_EVENTS_CONTACTS_SET==="true",CONTACTS_UPDATE:process.env?.PUSHER_EVENTS_CONTACTS_UPDATE==="true",CONTACTS_UPSERT:process.env?.PUSHER_EVENTS_CONTACTS_UPSERT==="true",PRESENCE_UPDATE:process.env?.PUSHER_EVENTS_PRESENCE_UPDATE==="true",CHATS_SET:process.env?.PUSHER_EVENTS_CHATS_SET==="true",CHATS_UPDATE:process.env?.PUSHER_EVENTS_CHATS_UPDATE==="true",CHATS_UPSERT:process.env?.PUSHER_EVENTS_CHATS_UPSERT==="true",CHATS_DELETE:process.env?.PUSHER_EVENTS_CHATS_DELETE==="true",CONNECTION_UPDATE:process.env?.PUSHER_EVENTS_CONNECTION_UPDATE==="true",LABELS_EDIT:process.env?.PUSHER_EVENTS_LABELS_EDIT==="true",LABELS_ASSOCIATION:process.env?.PUSHER_EVENTS_LABELS_ASSOCIATION==="true",GROUPS_UPSERT:process.env?.PUSHER_EVENTS_GROUPS_UPSERT==="true",GROUP_UPDATE:process.env?.PUSHER_EVENTS_GROUPS_UPDATE==="true",GROUP_PARTICIPANTS_UPDATE:process.env?.PUSHER_EVENTS_GROUP_PARTICIPANTS_UPDATE==="true",CALL:process.env?.PUSHER_EVENTS_CALL==="true",TYPEBOT_START:process.env?.PUSHER_EVENTS_TYPEBOT_START==="true",TYPEBOT_CHANGE_STATUS:process.env?.PUSHER_EVENTS_TYPEBOT_CHANGE_STATUS==="true"}},WA_BUSINESS:{TOKEN_WEBHOOK:process.env.WA_BUSINESS_TOKEN_WEBHOOK||"evolution",URL:process.env.WA_BUSINESS_URL||"https://graph.facebook.com",VERSION:process.env.WA_BUSINESS_VERSION||"v18.0",LANGUAGE:process.env.WA_BUSINESS_LANGUAGE||"en"},LOG:{LEVEL:process.env?.LOG_LEVEL?.split(",")||["ERROR","WARN","DEBUG","INFO","LOG","VERBOSE","DARK","WEBHOOKS","WEBSOCKET"],COLOR:process.env?.LOG_COLOR==="true",BAILEYS:process.env?.LOG_BAILEYS||"error"},DEL_INSTANCE:_(process.env?.DEL_INSTANCE)?process.env.DEL_INSTANCE==="true":Number.parseInt(process.env.DEL_INSTANCE)||!1,DEL_TEMP_INSTANCES:_(process.env?.DEL_TEMP_INSTANCES)?process.env.DEL_TEMP_INSTANCES==="true":!0,LANGUAGE:process.env?.LANGUAGE||"en",WEBHOOK:{GLOBAL:{URL:process.env?.WEBHOOK_GLOBAL_URL||"",ENABLED:process.env?.WEBHOOK_GLOBAL_ENABLED==="true",WEBHOOK_BY_EVENTS:process.env?.WEBHOOK_GLOBAL_WEBHOOK_BY_EVENTS==="true"},EVENTS:{APPLICATION_STARTUP:process.env?.WEBHOOK_EVENTS_APPLICATION_STARTUP==="true",INSTANCE_CREATE:process.env?.WEBHOOK_EVENTS_INSTANCE_CREATE==="true",INSTANCE_DELETE:process.env?.WEBHOOK_EVENTS_INSTANCE_DELETE==="true",QRCODE_UPDATED:process.env?.WEBHOOK_EVENTS_QRCODE_UPDATED==="true",MESSAGES_SET:process.env?.WEBHOOK_EVENTS_MESSAGES_SET==="true",MESSAGES_UPSERT:process.env?.WEBHOOK_EVENTS_MESSAGES_UPSERT==="true",MESSAGES_EDITED:process.env?.WEBHOOK_EVENTS_MESSAGES_EDITED==="true",MESSAGES_UPDATE:process.env?.WEBHOOK_EVENTS_MESSAGES_UPDATE==="true",MESSAGES_DELETE:process.env?.WEBHOOK_EVENTS_MESSAGES_DELETE==="true",SEND_MESSAGE:process.env?.WEBHOOK_EVENTS_SEND_MESSAGE==="true",CONTACTS_SET:process.env?.WEBHOOK_EVENTS_CONTACTS_SET==="true",CONTACTS_UPDATE:process.env?.WEBHOOK_EVENTS_CONTACTS_UPDATE==="true",CONTACTS_UPSERT:process.env?.WEBHOOK_EVENTS_CONTACTS_UPSERT==="true",PRESENCE_UPDATE:process.env?.WEBHOOK_EVENTS_PRESENCE_UPDATE==="true",CHATS_SET:process.env?.WEBHOOK_EVENTS_CHATS_SET==="true",CHATS_UPDATE:process.env?.WEBHOOK_EVENTS_CHATS_UPDATE==="true",CHATS_UPSERT:process.env?.WEBHOOK_EVENTS_CHATS_UPSERT==="true",CHATS_DELETE:process.env?.WEBHOOK_EVENTS_CHATS_DELETE==="true",CONNECTION_UPDATE:process.env?.WEBHOOK_EVENTS_CONNECTION_UPDATE==="true",LABELS_EDIT:process.env?.WEBHOOK_EVENTS_LABELS_EDIT==="true",LABELS_ASSOCIATION:process.env?.WEBHOOK_EVENTS_LABELS_ASSOCIATION==="true",GROUPS_UPSERT:process.env?.WEBHOOK_EVENTS_GROUPS_UPSERT==="true",GROUP_UPDATE:process.env?.WEBHOOK_EVENTS_GROUPS_UPDATE==="true",GROUP_PARTICIPANTS_UPDATE:process.env?.WEBHOOK_EVENTS_GROUP_PARTICIPANTS_UPDATE==="true",CALL:process.env?.WEBHOOK_EVENTS_CALL==="true",TYPEBOT_START:process.env?.WEBHOOK_EVENTS_TYPEBOT_START==="true",TYPEBOT_CHANGE_STATUS:process.env?.WEBHOOK_EVENTS_TYPEBOT_CHANGE_STATUS==="true",ERRORS:process.env?.WEBHOOK_EVENTS_ERRORS==="true",ERRORS_WEBHOOK:process.env?.WEBHOOK_EVENTS_ERRORS_WEBHOOK||""}},CONFIG_SESSION_PHONE:{CLIENT:process.env?.CONFIG_SESSION_PHONE_CLIENT||"Evolution API",NAME:process.env?.CONFIG_SESSION_PHONE_NAME||"Chrome",VERSION:process.env?.CONFIG_SESSION_PHONE_VERSION||null},QRCODE:{LIMIT:Number.parseInt(process.env.QRCODE_LIMIT)||30,COLOR:process.env.QRCODE_COLOR||"#198754"},TYPEBOT:{ENABLED:process.env?.TYPEBOT_ENABLED==="true",API_VERSION:process.env?.TYPEBOT_API_VERSION||"old",SEND_MEDIA_BASE64:process.env?.TYPEBOT_SEND_MEDIA_BASE64==="true"},CHATWOOT:{ENABLED:process.env?.CHATWOOT_ENABLED==="true",MESSAGE_DELETE:process.env.CHATWOOT_MESSAGE_DELETE==="true",MESSAGE_READ:process.env.CHATWOOT_MESSAGE_READ==="true",BOT_CONTACT:!process.env.CHATWOOT_BOT_CONTACT||process.env.CHATWOOT_BOT_CONTACT==="true",IMPORT:{DATABASE:{CONNECTION:{URI:process.env.CHATWOOT_IMPORT_DATABASE_CONNECTION_URI||""}},PLACEHOLDER_MEDIA_MESSAGE:process.env?.CHATWOOT_IMPORT_PLACEHOLDER_MEDIA_MESSAGE==="true"}},OPENAI:{ENABLED:process.env?.OPENAI_ENABLED==="true",API_KEY_GLOBAL:process.env?.OPENAI_API_KEY_GLOBAL||null},DIFY:{ENABLED:process.env?.DIFY_ENABLED==="true"},CACHE:{REDIS:{ENABLED:process.env?.CACHE_REDIS_ENABLED==="true",URI:process.env?.CACHE_REDIS_URI||"",PREFIX_KEY:process.env?.CACHE_REDIS_PREFIX_KEY||"evolution-cache",TTL:Number.parseInt(process.env?.CACHE_REDIS_TTL)||604800,SAVE_INSTANCES:process.env?.CACHE_REDIS_SAVE_INSTANCES==="true"},LOCAL:{ENABLED:process.env?.CACHE_LOCAL_ENABLED==="true",TTL:Number.parseInt(process.env?.CACHE_REDIS_TTL)||86400}},S3:{ACCESS_KEY:process.env?.S3_ACCESS_KEY,SECRET_KEY:process.env?.S3_SECRET_KEY,ENDPOINT:process.env?.S3_ENDPOINT,BUCKET_NAME:process.env?.S3_BUCKET,ENABLE:process.env?.S3_ENABLED==="true",PORT:Number.parseInt(process.env?.S3_PORT||"9000"),USE_SSL:process.env?.S3_USE_SSL==="true",REGION:process.env?.S3_REGION},AUTHENTICATION:{API_KEY:{KEY:process.env.AUTHENTICATION_API_KEY||"BQYHJGJHJ"},EXPOSE_IN_FETCH_INSTANCES:process.env?.AUTHENTICATION_EXPOSE_IN_FETCH_INSTANCES==="true"}}}},o=new A;var r=E=>{let e;o.get("S3").ENABLE?e=E.message.mediaUrl:e=E.key.id;let S={conversation:E?.message?.conversation,extendedTextMessage:E?.message?.extendedTextMessage?.text,contactMessage:E?.message?.contactMessage?.displayName,locationMessage:E?.message?.locationMessage?.degreesLatitude,viewOnceMessageV2:E?.message?.viewOnceMessageV2?.message?.imageMessage?.url||E?.message?.viewOnceMessageV2?.message?.videoMessage?.url||E?.message?.viewOnceMessageV2?.message?.audioMessage?.url,listResponseMessage:E?.message?.listResponseMessage?.title,responseRowId:E?.message?.listResponseMessage?.singleSelectReply?.selectedRowId,templateButtonReplyMessage:E?.message?.templateButtonReplyMessage?.selectedId,audioMessage:E?.message?.speechToText?E?.message?.speechToText:E?.message?.audioMessage?`audioMessage|${e}`:void 0,imageMessage:E?.message?.imageMessage?`imageMessage|${e}${E?.message?.imageMessage?.caption?`|${E?.message?.imageMessage?.caption}`:""}`:void 0,videoMessage:E?.message?.videoMessage?`videoMessage|${e}${E?.message?.videoMessage?.caption?`|${E?.message?.videoMessage?.caption}`:""}`:void 0,documentMessage:E?.message?.documentMessage?`documentMessage|${e}${E?.message?.documentMessage?.caption?`|${E?.message?.documentMessage?.caption}`:""}`:void 0,documentWithCaptionMessage:E?.message?.documentWithCaptionMessage?.message?.documentMessage?`documentWithCaptionMessage|${e}${E?.message?.documentWithCaptionMessage?.message?.documentMessage?.caption?`|${E?.message?.documentWithCaptionMessage?.message?.documentMessage?.caption}`:""}`:void 0,externalAdReplyBody:E?.contextInfo?.externalAdReply?.body?`externalAdReplyBody|${E.contextInfo.externalAdReply.body}`:void 0},T=Object.keys(S).find(s=>S[s]!==void 0)||"unknown";return{...S,messageType:T}},N=E=>{let e=Object.keys(E).find(T=>T!=="externalAdReplyBody"&&E[T]!==void 0),S=e?E[e]:void 0;return E.externalAdReplyBody&&(S=S?`${S}
${E.externalAdReplyBody}`:E.externalAdReplyBody),S},I=E=>{let e=r(E);return N(e)};export{I as getConversationMessage};
//# sourceMappingURL=getConversationMessage.mjs.map