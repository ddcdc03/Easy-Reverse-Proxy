import {Proxy} from './util/model';

export let PORT = 370; // 端口

export let PROXY_CODE_SECRET = 'Easy-Reverse-Proxy'; // 代理码密钥
// 代理
export let PROXYS: Proxy[] = [
      {
        domain: "ussms.vercel.app",
        url: "http://sms222.us",
        enable: true
    }
];
