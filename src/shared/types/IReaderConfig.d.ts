export declare type BLFType = 'LINK250KHZ' | 'LINK640KHZ';
export declare type TariType = 'TARI6_25US' | 'TARI12_5US' | 'TARI25US';
export declare type TagEncodingType = 'FM0' | 'M2' | 'M4' | 'M8';
export declare type SessionType = 'S0' | 'S1' | 'S2' | 'S3';
export declare type TargetType = 'A' | 'B' | 'AB' | 'BA';
export declare type QType = 'DynamicQ' | 'StaticQ';
export interface IReaderConfig {
    autoStart: boolean;
    rfPower: number;
    BLF: BLFType;
    tari: TariType;
    tagEncoding: TagEncodingType;
    session: SessionType;
    target: TargetType;
    Q: QType;
    staticQ: number;
}
