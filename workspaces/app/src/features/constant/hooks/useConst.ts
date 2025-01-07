import useSWR from 'swr';

import { constApiClient } from '../apiClient/constApiClient';

export function useConst(...[options]: Parameters<typeof constApiClient.fetch>) {
  return useSWR(constApiClient.fetch$$key(options), constApiClient.fetch, { suspense: true });
}
