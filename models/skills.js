const skills = [
    {id: 171, skill: 'HTML', funLevel: 'very fun'},
    {id: 983, skill: 'CSS', funLevel: 'very fun'},
    {id: 407, skill: 'JavaScript', funLevel: 'extremely fun'},
    {id: 041, skill: 'Node.js', funLevel: 'medium fun'},
    {id: 385, skill: 'Express.js', funLevel: 'fun!'}
]

module.exports = {
    showAll,
}

function showAll() {
    return skills; 
}

