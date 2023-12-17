import ApiClient from './api.client';

export class UserHubApi extends ApiClient {
    private static INSTANCE: UserHubApi;

    private static BASE_URL = 'https://dev.carmind.com.ar/api/user-hub';
    
    private constructor() {
        super(UserHubApi.BASE_URL);
    }

    static GET(): UserHubApi {
        if (!UserHubApi.INSTANCE) {
            UserHubApi.INSTANCE = new UserHubApi();
        }
        return UserHubApi.INSTANCE;
    }

    login(credentials: { username: string; password: string }) {
        return this.client.post('/login', credentials);
    }

    validateCookie() {
        return this.client.post('/validate');
    }
}


