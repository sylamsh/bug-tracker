import Bug from '../Model/BugModel.js'

export const getBugs = async (req, res) => {
    try {
        const bugs = await Bug.find();
        console.log(bugs)
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