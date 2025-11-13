import { createRequire } from 'module';
import type { License } from "../types";

const require = createRequire(import.meta.url);

export function getLicenseText(license: License) {
  try {
    const licenseData = require(`spdx-license-list/licenses/${license}.json`);
    const text = licenseData.licenseText || (licenseData.default && licenseData.default.licenseText);
    return text ? text.trim() : '';
  } catch (error) {
    console.warn(`Could not get text for license: ${license}`);
    throw error;
  }
}
