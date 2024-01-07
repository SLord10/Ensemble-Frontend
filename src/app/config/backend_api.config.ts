import {InjectionToken} from "@angular/core";

const API_URL = "http://localhost"

export const API_TOKEN = new InjectionToken("API_URL", {
    providedIn: 'root',
    factory: () => API_URL
})
