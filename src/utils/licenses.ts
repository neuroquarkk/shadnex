import type { License } from "../types";

export function getLicenseText(license: License) {
  try {
    const licenseData = require(`spdx-license-list/licenses/${license}`);
    const text = licenseData.licenseText;
    return text.trim();
  } catch (error) {
    console.warn(`Could not get text for license: ${license}`);
    return '';
  }
}
