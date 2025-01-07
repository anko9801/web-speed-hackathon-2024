import { inject } from 'regexparam';

import type { DomainSpecificApiClientInterface } from '../../../lib/api/DomainSpecificApiClientInterface';
import { apiClient } from '../../../lib/api/apiClient';

type ConstApiClient = DomainSpecificApiClientInterface<{
  fetch: [{ params: { id: 'company' | 'contact' | 'overview' | 'question' | 'term' } }, string];
}>;

export const constApiClient: ConstApiClient = {
  fetch: async ({ params }) => {
    const response = await apiClient.get<string>(inject('/api/v1/consts/:id', params));
    return response.data;
  },
  fetch$$key: (options) => ({
    requestUrl: `/api/v1/consts/:id`,
    ...options,
  }),
};
