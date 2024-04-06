const team = {
    _players :[{
      firstName: 'Pete', lastName: 'Wheeler', age: 54},
    {firstName: 'Grone', lastName: 'Wacan', age: 53},
    {firstName: 'Bakey', lastName: 'Woven', age: 52} ],
    _games:[
      {opponent:'Red team', teamPoints: 8, opponentPoints:7},
      {opponent:'Green team', teamPoints:10, opponentPoints:14},
      {opponent:'Blue team', teamPoints:13, opponentPoints:11}
    ],
    get players(){
      return this._players;
    },
    get games(){
      return this._games;
    },
    addPlayer(newFirstName,newLastName,newAge){
      let player={
      firstName:newFirstName,
      lastName:newLastName,
      age : newAge
    };
    
    this.players.push(player);
  
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints){
      let game={
        opponent:newOpponent, 
        teamPoints:newTeamPoints,
        opponentPoints:newOpponentPoints
      };
      this.games.push(game);
    }
  };
  team.addPlayer('Bugs','Bunny',76);
  console.log(team.players); 
  team.addGame('Brown Bear',40,50);
  team.addGame('Titans',100,98);
  console.log(team.games); 