// ==UserScript==
// @name         绕过 QQ 已停止访问
// @version      1.0
// @description  自动跳过QQ中间页面直接访问原始链接
// @author       Luke Zhang
// @license      GPL-3.0-or-later
// @homepage     https://github.com/win-lukezhang/cpcqqcombypass
// @updateURL    https://github.com/win-lukezhang/cpcqqcombypass/raw/refs/heads/main/src/bypass-c-pc-qq-com.user.js
// @downloadURL  https://github.com/win-lukezhang/cpcqqcombypass/raw/refs/heads/main/src/bypass-c-pc-qq-com.user.js
// @match        *://c.pc.qq.com/*
// @match        *://c.pc.qq.com/ios.html*
// @match        *://c.pc.qq.com/android.html*
// @match        *://c.pc.qq.com/pc.html*
// @icon         https://www.qq.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 获取URL参数函数
    function getQueryParam(name) {
        const params = new URLSearchParams(window.location.search);
        return params.get(name);
    }

    // 主处理函数
    function processRedirect() {
        const targetUrl = getQueryParam('url');

        if (targetUrl) {
            // 解码可能被编码的URL
            const decodedUrl = decodeURIComponent(targetUrl);
            // 立即跳转（使用replace避免历史记录）
            window.location.replace(decodedUrl);
        }
    }

    // 执行处理
    processRedirect();
})();
