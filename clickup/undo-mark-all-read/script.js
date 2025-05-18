// ==UserScript==
// @name         ClickUp - Undo Mark All Read
// @namespace    http://tampermonkey.net/
// @version      2025-05-18
// @description  Undo mark all read notifications on ClickUp
// @author       Arafat Husayn <hello@arafat.dev>
// @match        https://*.clickup.com/*/inbox*
// @run-at       context-menu
// @icon         https://www.google.com/s2/favicons?sz=64&domain=clickup.com
// @grant        none
// @copyright    2025 Arafat Husayn, GNU Affero General Public License v3.0
// @source       https://raw.githubusercontent.com/arafathusayn/tm-scripts/refs/heads/main/clickup/undo-mark-all-read/script.js
// ==/UserScript==

(() => {
  "use strict";

  const UNREAD_SELECTOR = '[aria-label="Mark as unread"]';

  window.actionElements.forEach((bundle) => {
    const btn = bundle.querySelector(UNREAD_SELECTOR);
    btn?.click();
  });
})();
