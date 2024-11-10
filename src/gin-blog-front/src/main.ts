// 自定义样式
import '@/styles/reset.css'
import '@/styles/index.scss'
import '@/styles/animate.scss'

// unocss
import 'uno.css'
import '@unocss/reset/tailwind.css'

// vue
import { createApp } from 'vue'
import { setupRouter } from './router'
import { setupStore } from './store'
import App from './App.vue'


import { datafluxRum } from '@cloudcare/browser-rum';
datafluxRum.init({
    applicationId: 'GinVueBlog_Front_Web',
    // applicationId: 'cdn_test',
    // datakitOrigin: 'http://120.79.195.78:9529', // 协议（包括：//），域名（或IP地址）[和端口号]
    site: 'https://rum.pre-guance.houtai.io',
    clientToken: 'b61e59753fb44212aaf518af2c9b3d9d',
    env: 'production',
    version: '1.0.0',
    service: 'GinVueBlog_Front_Web',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 100,
    trackInteractions: true,
    traceType: 'w3c_traceparent', // 非必填，默认为ddtrace，目前支持 ddtrace、zipkin、skywalking_v3、jaeger、zipkin_single_header、w3c_traceparent 6种类型
    allowedTracingOrigins: [/.*/],  // 非必填，允许注入trace采集器所需header头部的所有请求列表。可以是请求的origin，也可以是是正则

})
datafluxRum.startSessionReplayRecording();
const app = createApp(App)
setupStore(app)
setupRouter(app)
app.mount('#app')
