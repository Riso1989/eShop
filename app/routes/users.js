import Route from '@ember/routing/route';

export default class UsersRoute extends Route {
    async model() {
        let response = await fetch('https://api.github.com/users');
        return await response.json();
    }
}
