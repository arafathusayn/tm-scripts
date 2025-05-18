# tm-scripts

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)

A collection of Tampermonkey userscripts designed to enhance your experience with various web applications.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
  - [ClickUp Scripts](#clickup-scripts)
- [Contributing](#contributing)
- [Author](#author)
- [License](#license)

## Features

This repository currently includes scripts for **ClickUp**:

*   **ClickUp - Mark All Read**: Adds a convenient context menu option to mark all unread notifications as read within your ClickUp inbox.
*   **ClickUp - Undo Mark All Read**: Provides a context menu option to revert the "Mark All Read" action. This is particularly useful if you've accidentally cleared your notifications and want to bring back the most recently marked-as-read items. *Note: This functionality is session-based.*

## Prerequisites

To use these scripts, you'll need:

*   A modern web browser that supports userscripts (e.g., Chrome, Firefox, Edge, Safari).
*   A userscript manager extension. Popular choices include:
    *   [Tampermonkey](https://www.tampermonkey.net/)
    *   [Greasemonkey](https://www.greasespot.net/) (primarily for Firefox)

## Installation

1.  **Install a Userscript Manager**:
    If you haven't already, install a userscript manager extension suitable for your browser from the links above.

2.  **Install the Desired Script(s)**:
    *   Navigate to the specific script file you wish to install within this repository (e.g., `clickup/mark-all-read/script.js`).
    *   Click the **"Raw"** button to view the script's source code.
    *   Your userscript manager should automatically detect the `.user.js` file and prompt you for installation. Confirm to add the script.

    Alternatively, you can manually add the script:
    *   Copy the entire raw code of the script.
    *   Open your userscript manager's dashboard (usually accessible via its browser extension icon).
    *   Look for an option to create a new script (often a "+" or "Add new script" button).
    *   Paste the copied code into the editor provided.
    *   Save the script.

## Usage

### ClickUp Scripts

Once the ClickUp scripts are installed:

1.  Navigate to your ClickUp inbox page (typically something like `https://app.clickup.com/your-team/notifications/inbox`).
2.  **To mark all notifications as read**:
    *   Right-click anywhere on the page.
    *   In the context menu that appears, find the section for your userscript manager (e.g., "Tampermonkey").
    *   Select **"ClickUp - Mark All Read"** from the list of active scripts for that page.
3.  **To undo marking all notifications as read**:
    *   If you have just used the "Mark All Read" script, right-click again on the page.
    *   Select **"ClickUp - Undo Mark All Read"** from the context menu.
    *   *Important Note*: The undo functionality relies on data stored in the current browser session (`window.actionElements` array, which is populated by the "Mark All Read" script). If you refresh the page, navigate away and then return, or close the tab, this temporary data will be lost, and the undo script may not function as expected.

## Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check [issues page](https://github.com/arafathusayn/tm-scripts/issues) if you want to contribute.

## Author

*   **Arafat Husayn**

## License

This project is licensed under the GNU Affero General Public License v3.0. See the [LICENSE](LICENSE) file for full details. 