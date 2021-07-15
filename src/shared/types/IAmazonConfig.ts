export type PhotoDestination = 'amazon' | 'nas';

export interface IAmazonConfig {
    loadPhotos: boolean;
    debugLocation: boolean;
    photoDestination: PhotoDestination;
    deletePhotos: boolean;
    nasAddress: string;
}
