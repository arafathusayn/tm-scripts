// ==UserScript==
// @name         ClickUp - Mark All Read
// @namespace    http://tampermonkey.net/
// @version      2025-05-18
// @description  Mark all unread notifications read on ClickUp
// @author       Arafat Husayn <hello@arafat.dev>
// @match        https://*.clickup.com/*/inbox*
// @run-at       context-menu
// @icon         https://www.google.com/s2/favicons?sz=64&domain=clickup.com
// @grant        none
// @copyright    2025 Arafat Husayn, GNU Affero General Public License v3.0
// @source       https://raw.githubusercontent.com/arafathusayn/tm-scripts/refs/heads/main/clickup/mark-all-read/script.js
// ==/UserScript==

(() => {
  "use strict";

  const READ_SELECTOR = '[aria-label="Mark as read"]';
  const BUNDLE_SELECTOR = "cu3-notification-bundle-actions";

  window.actionElements = [];

  document.querySelectorAll(READ_SELECTOR).forEach((button) => {
    const bundle = button.closest(BUNDLE_SELECTOR);
    if (bundle) window.actionElements.push(bundle);
    button.click();
  });
})();
