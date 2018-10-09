class fsHelper {
    static baseURL() {
        return "https://api.foursquare.com/v2";
    }
    static auth() {
        const keys = {
            client_id: "F1BIU3KU3RZFBQKCLKJ2MX1AT2ZRZFYRUXTJUMFGA1YUS5ZF",
            client_secret: "N1HLP0MSWYJJATAS3CBQTTSZ2WLME5RB2TAUWHGE2UXZ5A1E",
            query: "food",
            ll: "40.448506, -80.00250",
            limit: 10,
            v: "20181008"
    };
    return Object.keys(keys)
        .map(key => `${key}=${keys[key]}`)
        .join("&");
    }
    static urlBuilder(urlParams) {
        if (!urlParams) {
            return "";
    }
    return Object.keys(urlParams)
        .map(key => `${key}=${urlParams[key]}`)
        .join("&");
    }
    static headers() {
        return {
            Accept: "application/json"
        };
    }
    static simplefetch(endpoint, method, urlParams) {
        let requestData = {
            method,
            headers: fsHelper.headers()
        };
        return fetch(
            `${fsHelper.baseURL()}${endpoint}?${fsHelper.auth()}&${fsHelper.urlBuilder(urlParams)}`,
            requestData
        ).then(res => res.json());
        }
    }    
    export default class SquareAPI{
        static search(urlParams) {
            return fsHelper.simplefetch("/venues/search", "GET", urlParams);
        }
        static getVenueDetails(VENUE_ID){
            return fsHelper.simplefetch(`/venues/${VENUE_ID}`, "GET");
        }
        static getVenuePhotos(VENUE_ID) {
            return fsHelper.simplefetch(`/venues${VENUE_ID}/photos`, "GET")
        }
    }