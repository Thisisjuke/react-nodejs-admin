import { User } from "../models/User"
import { Media } from "../models/Media"
import { Message } from "../models/Message"

export const selectAllUsers = async (req, res) => {

    res.json(await User.fetchAll());
}

export const getUserById = async (req, res) => {
    const user = await User.where({id: req.params.id}).fetch()
    const messagesSent = await Message.where({senderId: req.params.id}).fetchAll()
    const messagesReceived = await Message.where({receiverId: req.params.id}).fetchAll()
    const media = await Media.where({userId: req.params.id}).fetchAll()

    res.json({user, messagesSent, messagesReceived, media});
}

export const getUserMessages = async (req, res) => {

    res.json(await Message.where({senderId: req.params.id}).fetch());
}

export const countUsers = async (req, res) => {

    const users = await User.fetchAll()
    res.json(users.length);
}

export const getUserMedias = async (req, res) => {

    res.json(await Media.where({userId: req.params.id}).fetch());
}

export const disableUser = async (req, res) => {
    const user = await User.where({id: req.params.id}).fetch()
    user.set('isDeleted', new Date())
    user.save()

    res.json(user);
}

export const enableUser = async (req, res) => {
    const user = await User.where({id: req.params.id}).fetch()
    user.set('isDeleted', null)
    user.save()

    res.json(user);
}