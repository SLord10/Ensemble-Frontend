import {InjectionToken} from "@angular/core";

const API_URL = "http://localhost:8083"

export const API_TOKEN = new InjectionToken("API_URL", {
    providedIn: 'root',
    factory: () => API_URL
})
