export interface IWifiScanResponse {
    bssid: string;
    signalLevel: number;
    frequency: number;
    ssid: string;
}
export interface IWifiItemResponse extends IWifiScanResponse {
    saved: boolean;
    active?: boolean;
    error?: string;
}
export interface IWifiNetworkResponse {
    id: number;
    ssid: string;
}
export interface IWifiCurrentNetworkResponse {
    ip_address: string;
    ssid: string;
}
export interface IWifiRequest {
    ssid: string;
    psk: string;
}
