import { User } from "../models/User"
import { Media } from "../models/Media"
import { Message } from "../models/Message"

export const selectAllUsers = async (req, res) => {

    res.json(await User.fetchAll());
}

export const getUserById = async (req, res) => {
    const user = await User.where({id: req.params.id}).fetch()
    const messages = await Message.where({senderId: req.params.id}).fetch()
    const messagesR = await Message.where({receiverId: req.params.id}).fetch()
    const media = await Media.where({userId: req.params.id}).fetch()

    res.json({user, messages, messagesR, media});
}

export const getUserMessages = async (req, res) => {

    res.json(await Message.where({senderId: req.params.id}).fetch());
}

export const getUserMedias = async (req, res) => {

    res.json(await Media.where({userId: req.params.id}).fetch());
}

export const disableUser = async (req, res) => {
    const user = await User.where({id: req.params.id}).fetch()
    user.set('isDeleted', new Date())
    user.save(user, {
        method: 'update',
        patch: true
    })

    res.json(user);
}

export const enableUser = async (req, res) => {
    const user = await User.where({id: req.params.id}).fetch()
    user.set('isDeleted', null)
    user.save(user, {
        method: 'update',
        patch: true
    })

    res.json(user);
}