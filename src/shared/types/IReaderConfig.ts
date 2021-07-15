export type BLFType = 'LINK250KHZ' | 'LINK640KHZ';
export type TariType = 'TARI6_25US' | 'TARI12_5US' | 'TARI25US';
export type TagEncodingType = 'FM0' | 'M2' | 'M4' | 'M8';
export type SessionType = 'S0' | 'S1' | 'S2' | 'S3';
export type TargetType = 'A' | 'B' | 'AB' | 'BA';
export type QType = 'DynamicQ' | 'StaticQ';

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
