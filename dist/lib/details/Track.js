"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TrackDetails = /** @class */ (function () {
    function TrackDetails(id, url, name, artists, album_name, release_date, cover_url) {
        if (id === void 0) { id = ''; }
        if (url === void 0) { url = ''; }
        if (name === void 0) { name = ''; }
        if (artists === void 0) { artists = []; }
        if (album_name === void 0) { album_name = ''; }
        if (release_date === void 0) { release_date = ''; }
        if (cover_url === void 0) { cover_url = ''; }
        this.id = id;
        this.url = url;
        this.name = name;
        this.artists = artists;
        this.album_name = album_name;
        this.release_date = release_date;
        this.cover_url = cover_url;
    }
    return TrackDetails;
}());
exports.default = TrackDetails;
