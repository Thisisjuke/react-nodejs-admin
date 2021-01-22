import { Media } from "../models/Media"

export const selectAllMedias = async (req, res) => {

    res.json(await Media.fetchAll());
}