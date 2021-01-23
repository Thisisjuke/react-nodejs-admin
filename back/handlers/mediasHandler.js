import { Media } from "../models/Media"
import {Message} from "../models/Message";

export const selectAllMedias = async (req, res) => {

    res.json(await Media.fetchAll());
}

export const countMedia = async (req, res) => {

    const media = await Media.fetchAll()
    res.json(media.length);
}