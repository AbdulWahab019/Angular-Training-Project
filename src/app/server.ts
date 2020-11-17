import { createServer } from 'miragejs';

export function server(): any {
createServer({
  routes(): any {
    this.namespace = 'api';

    this.get('/login', () => {
      return {token: 'tr1qtuokjsdh332abireldji43'};
    });
  },
});
}
