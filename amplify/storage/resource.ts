import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'spresser-family-videos',
  access: (allow) => ({
    'demo/*': [
      allow.guest.to(['read']),
      allow.authenticated.to(['read']),
    ],
    'public/*': [
      allow.guest.to(['read']),
      allow.authenticated.to(['read', 'write', 'delete']),
    ],
    'protected/{entity_id}/*': [
      allow.authenticated.to(['read']),
      allow.entity('identity').to(['read', 'write', 'delete'])
    ],
    'private/{entity_id}/*': [
      allow.entity('identity').to(['read', 'write', 'delete'])
    ]
  })
}); 