import { User } from "../models/User"

export const selectAllUsers = async (req, res) => {

    res.json(await User.fetchAll());
}

export const getUserById = async (req, res) => {

    res.json(await User.where({id: req.params.id}).fetch());
}

export const getUserMessages = async (req, res) => {

    res.json(await User.where({id: req.params.id}).fetch());
}

export const getUserMedias = async (req, res) => {

    res.json(await User.where({id: req.params.id}).fetch());
}
