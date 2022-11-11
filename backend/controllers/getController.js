// @desc Get Goals
// @route GET /api/goals
// @access Private
function getGoals(req, res) {
    res.status(200).json({ message: 'get goals' })
}

// @desc Set Goal
// @route POST /api/goals
// @access Private
function setGoal(req, res) {

    // console.log(`req to body: ${Object.keys(req.body.message)}`)
    console.log(`req to body: ${req.body}`)

    if(!req.body.text){
        res.status(400)
        throw new Error('Plese add a text field')
    }

    res.status(200).json({message:'Set goal'})

}


// @desc Update Goals
// @route PUT /api/goals/:id
// @access Private
function updateGoal(req, res) {
    res.status(200).json({message:`Update goal ${req.params.id}`})
}


// @desc Delete Goal
// @route DELETE /api/goals/:id
// @access Private
function deleteGoal(req, res) {
    res.status(200).json({ message: `delete goal ${req.params.id}` })
}


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}