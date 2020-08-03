/* eslint-disable import/prefer-default-export */

/**
 * The function transform a duration in a human-readable label
 *
 * @param {number} duration
 * @returns {string}
 */
export function getLabelDuration(duration: number): string {
  const hours = Math.floor(((duration % 31536000) % 86400) / 3600);
  const minutes = Math.floor((((duration % 31536000) % 86400) % 3600) / 60);
  const seconds = (((duration % 31536000) % 86400) % 3600) % 60;
  const formattedSeconds =
    String(seconds).length === 1 ? `${seconds}0` : seconds;

  if (hours === 0) {
    return `${minutes}:${formattedSeconds}`;
  }

  return `${hours}h${minutes && ` ${minutes}m`}${seconds && ` ${seconds}s`}`;
}
