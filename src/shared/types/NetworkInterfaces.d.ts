export interface NetworkAddress {
    address: string;
    netmask: string;
    mac: string;
}
export interface NetworkInterfaces {
    name: string;
    address: NetworkAddress[];
}
