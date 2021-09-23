import mongoose from 'mongoose'
import Bug from '../Model/BugModel.js'

export const getBugs = async (req, res) => {
    try {
        const bugs = await Bug.find();
        res.status(200).json(bugs)
    } catch(error) {
        res.status(400).json({ message : error.message })
    }
}

export const createBug = async (req, res) => {
    const {name, details, steps, version, priority, assigned, creator} = req.body
    const newBug = new Bug({name, details, steps, version, priority, assigned, creator})
    try {
        await newBug.save()
        res.status(201).json(newBug)
    } catch(error) {
        res.status(409).json({ message : error.message })
    }
}

export const updateBug = async (req, res) => {
    const { id: _id } = req.params
    const bug = req.body
    if(!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send("No BugIssue found!")
    const updatedBug = await Bug.findByIdAndUpdate(_id, bug, {new: true})
    res.json(updatedBug);
}

export const deleteBug = async (req, res) => {
    const {id: _id} = req.params
    if(!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send("No BugIssue found!")
    await Bug.findByIdAndRemove(_id);
    res.json({ message: "Bug Issue Deleted successfully"});
}

export const resolveBug = async (req, res) => {
    const {id: _id} = req.params
    if(!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send("No BugIssue found!")
    const bug = await Bug.findById(_id)
    const updatedBug = await Bug.findByIdAndUpdate(_id, { isResolved: !bug.isResolved }, { new: true })
    res.json(updatedBug)
}