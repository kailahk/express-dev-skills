const skills = [
    {id: 171, skill: 'HTML', funLevel: 'Very fun'},
    {id: 983, skill: 'CSS', funLevel: 'Very fun'},
    {id: 407, skill: 'JavaScript', funLevel: 'Extremely fun'},
    {id: 041, skill: 'Node.js', funLevel: 'Eh, medium fun'},
    {id: 385, skill: 'Express.js', funLevel: 'Fun!'}
]

module.exports = {
    showAll,
    showOne
}

function showAll() {
    return skills; 
}

function showOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

