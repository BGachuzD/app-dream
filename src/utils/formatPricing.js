/**
 * Format pricing to display in the UI
 * @param {number} price
 * @returns {string}
 * @example
 * formatPricing(1000) // 1,000.00
 */

export const formatPricing = (price) => {
  return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}