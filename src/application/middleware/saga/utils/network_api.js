// ==========================================================================
// Authors:   Chad Eubanks
// ==========================================================================

export default class NetworkApi {

    static ENVIRONMENT() {
        return 'local'; // local, staging, production //
    }

    static BASE_URL() {
        return this._configureEnvironment();
    }

    static QUESTIONS_URL() {
        return `${this.BASE_URL()}/questions`;
    }

    static ANSWERS_URL() {
        return `${this.BASE_URL()}/answers`;
    }

    // private methods
    static _configureEnvironment() {
        const environment = this.ENVIRONMENT();

        if (environment === 'local') {
            return 'http://localhost:8080';
        } else if (environment === 'staging') {
            return '';
        } else if (environment === 'production') {
            return '';
        }
        throw new Error(`Invalid environment: ${environment}.  Valid options are one of the following [local, staging, production]`);
    }

};