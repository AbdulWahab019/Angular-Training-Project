import { createServer } from 'miragejs';
import { User } from './user/user';

let users: User[] = [
  {
    id: 1,
    email: 'a@b.com',
    name: 'Roger',
    phone: 123123,
    address: '221-B Baker Street',
    zip: 43200,
    company: 'Angular'
  },
  {
    id: 2,
    email: 'b@bet.com',
    name: 'Angela',
    phone: 321233,
    address: 'That Street',
    zip: 21200,
    company: 'Beta'
  },
  {
    id: 3,
    email: 'a@alpha.com',
    name: 'Ford',
    phone: 321233,
    address: 'This Street, That Block',
    zip: 12311,
    company: 'Alpha'
  },
  {
    id: 4,
    email: 'bryan@angular.com',
    name: 'Bryan Steve',
    phone: 924717,
    address: 'Bradman Block, 724',
    zip: 318288,
    company: 'Angular'
  }
];

export function server(): any {
createServer({
  routes(): any {
    this.namespace = 'api';

    this.get('/login', () => {
      return {token: 'tr1qtuokjsdh332abireldji43'};
    });

    this.get('/users', (schema, request) => {
      return users;
    });

    this.post('/users', (schema, request) => {
      const attrs = JSON.parse(request.requestBody);
      users.push(attrs);

      return users;
    });

    this.delete('/users/:id', (schema, request) => {
      const id = +request.params.id;
      users = users.filter(user => user.id !== id);

      return users;
    });

    this.put('/users', (schema, request) => {
      const attrs = JSON.parse(request.requestBody);
      const index = users.findIndex(user => user.id === attrs.id);
      users[index] = attrs;
      return users;
    });
  },
});
}
