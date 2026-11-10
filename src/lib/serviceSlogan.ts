import type { ServiceId } from './services';

export function serviceSlogan(service: ServiceId, trip: 'One Way' | 'Round Trip' = 'One Way'): readonly [string, string] {
  switch (service) {
    case 'airport': return ['Airport transfers.', 'For arrivals & departures.'];
    case 'multicity': return ['Many destinations.', 'One planned journey.'];
    case 'local':
    case 'pickup': return ['', ''];
    case 'rental': return ['', ''];
    default: return trip === 'Round Trip'
      ? ['There and back.', 'One comfortable journey.']
      : ['Another city.', 'A simple one-way ride.'];
  }
}
