import {countMedia, selectAllMedias} from "../handlers/mediasHandler";

export default [
    {
        url: '/api/medias',
        handler: selectAllMedias
    },
    {
        url: '/api/count/media',
        handler: countMedia
    }
]