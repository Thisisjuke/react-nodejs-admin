import { Message } from "../models/Message"

export const selectAllMessages = async (req, res) => {

    res.json(await Message.fetchAll());
}

export const getMessageById = async (req, res) => {

    res.json(await Message.where({id: req.params.id}).fetch({
        withRelated: ['receiverId'], require: true
    }));
}