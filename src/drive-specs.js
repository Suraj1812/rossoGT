// Published maximum speeds. The M4 uses the optional M Driver's Package.
export const driveSpecs = {
  ferrari: {topKmh: 320, launchAcceleration: 9.3, redline: 9000, shiftSpeeds: [67, 106, 146, 186, 231, 277]},
  bmw: {topKmh: 290, launchAcceleration: 8.3, redline: 7200, shiftSpeeds: [47, 75, 105, 137, 175, 217, 255]},
  lamborghini: {topKmh: 350, launchAcceleration: 10.9, redline: 8500, shiftSpeeds: [74, 114, 158, 205, 250, 302]},
  bugatti: {topKmh: 420, launchAcceleration: 12.1, redline: 6700, shiftSpeeds: [88, 127, 177, 226, 279, 342]}
};

export function readPowertrain(speed, throttle, spec) {
  if (speed < -.1) return {gear: 'R', revs: Math.min(1, .17 + Math.abs(speed) / 8)};
  if (speed < .1 && !throttle) return {gear: 'N', revs: .12};
  const kmh = Math.max(0, speed * 3.6);
  const nextShift = spec.shiftSpeeds.findIndex(limit => kmh < limit);
  const gearIndex = nextShift < 0 ? spec.shiftSpeeds.length : nextShift;
  const previousShift = spec.shiftSpeeds[gearIndex - 1] ?? 0;
  const limit = spec.shiftSpeeds[gearIndex] ?? spec.topKmh;
  const progress = Math.min(1, (kmh - previousShift) / (limit - previousShift));
  return {gear: String(gearIndex + 1), revs: .15 + (gearIndex > 0 ? .33 : 0) + progress * (gearIndex > 0 ? .52 : .85)};
}
