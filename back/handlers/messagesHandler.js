import { Message } from "../models/Message"
import {User} from "../models/User";

export const selectAllMessages = async (req, res) => {

    res.json(await Message.fetchAll());
}

export const getMessageById = async (req, res) => {

    res.json(await Message.where({id: req.params.id}).fetch({
        withRelated: ['receiverId'], require: true
    }));
}

export const countMessages = async (req, res) => {

    const messages = await Message.fetchAll()
    res.json(messages.length);
}