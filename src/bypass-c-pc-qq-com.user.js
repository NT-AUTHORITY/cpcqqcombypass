// ==UserScript==
// @name         绕过 QQ 已停止访问
// @namespace    cpcqqcombypass
// @version      1.2
// @description  自动跳过QQ中间页面直接访问原始链接
// @author       Luke Zhang
// @license      GPL-3.0-or-later
// @homepage     https://github.com/NT-AUTHORITY/cpcqqcombypass
// @updateURL    https://github.com/NT-AUTHORITY/cpcqqcombypass/raw/refs/heads/main/src/bypass-c-pc-qq-com.user.js
// @downloadURL  https://github.com/NT-AUTHORITY/cpcqqcombypass/raw/refs/heads/main/src/bypass-c-pc-qq-com.user.js
// @match        *://c.pc.qq.com/*
// @match        *://c.pc.qq.com/ios.html*
// @match        *://c.pc.qq.com/android.html*
// @match        *://c.pc.qq.com/pc.html*
// @match        *://c.pc.qq.com/middlem.html*
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

        const pfTargetURL = getQueryParam('pfurl');
        if (pfTargetURL) {
            // 解码
            const decodedPfURL = decodeURLComponent(pfTargetURL);
            // 跳转
            window.location.replace(decodedPfURL);
        }
    }

    // 执行处理
    processRedirect();
})();
