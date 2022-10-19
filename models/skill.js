const skills = [
    {id: 171, skill: 'HTML', funLevel: 'Very fun'},
    {id: 983, skill: 'CSS', funLevel: 'Very fun'},
    {id: 407, skill: 'JavaScript', funLevel: 'Extremely fun'},
    {id: 041, skill: 'Node.js', funLevel: 'Eh, medium fun'},
    {id: 385, skill: 'Express.js', funLevel: 'Fun!'}
];

const funLevels = ['Very fun', 'Extremely fun', 'Eh, medium fun', 'Fun!', 'Not so fun.']

module.exports = {
    showAll,
    showOne,
    create,
    deleteOne,
};

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function create(skill) {
    skill.id = Date.now() % 1000;
    skill.funLevel = funLevels[Math.floor(Math.random()*4)];
    skills.push(skill);
};

function showAll() {
    return skills; 
};

function showOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
};

