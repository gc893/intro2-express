const skills = [
    {skill: 'MogoDB', covered: false},
    {skill: 'Express', covered: true},
    {skill: 'React', covered: false},
    {skill: 'Node', covered: true}
  ];

  function getAll() {
      return skills;
  }

  module.exports = {getAll};