export interface Cafe {
    name: string;
    address: string;
    rating: number;
    user_ratings_total: number;
    website: string;
    price_level: string;
    google_maps_url: string;
    lat: number;
    lng: number;
    accessibility_options: {
        wheelchairAccessibleParking: boolean; // Ensure this property is included
        wheelchairAccessibleEntrance: boolean; // Ensure this property is included
        wheelchairAccessibleRestroom?: boolean;
        wheelchairAccessibleSeating?: boolean;
    };
    reviews: any[]; // Adjust as necessary
    photoUri: string;
}
  
  export interface City {
    city: string;
    city_ascii: string;
    state_id: string;
    state_name: string;
    lat: number;
    lng: number;
    cafes: Cafe[];
  }
  
  export interface StateData {
    [cityName: string]: City; // Keyed by city name
  }