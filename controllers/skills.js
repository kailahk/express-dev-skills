const Skill = require('../models/skill');

module.exports = {
    index,
    show
};

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.showOne(req.params.id),
        title: 'Skill Details'
    });
};

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.showAll(),
        title: 'All Skills'
    });
};