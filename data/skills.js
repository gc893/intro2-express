const skills = [
    {skill: 'MogoDB', covered: false},
    {skill: 'Express', covered: true},
    {skill: 'React', covered: false},
    {skill: 'Node', covered: true}
  ];

  function getAll() {
      return skills;
  }

  function findSkill(identifier) {
    return skills.find(el => el.skill === identifier);
}

module.exports = {getAll, findSkill};