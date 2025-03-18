import { ITrack } from '../../typings';
export default class TrackDetails implements ITrack {
    id: string;
    url: string;
    name: string;
    artists: string[];
    album_name: string;
    release_date: string;
    cover_url: string;
    constructor(id?: string, url?: string, name?: string, artists?: string[], album_name?: string, release_date?: string, cover_url?: string);
}
