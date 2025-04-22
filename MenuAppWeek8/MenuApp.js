// This class describes the players variables, name and rank and returns a string
class Player {
    constructor(name, rank) {
        this.name = name;
        this.rank = rank;
    }
    describe() {
        return `${this.name} is a member of this team and is rank ${this.rank}.`
    }
}
// this class holds the team name and an array for the players added
// the addPlayer method checks if the player added matches the player class and adds the player if it does 
class Team {
    constructor(name) {
        this.name = name
        this.players = []
    }
    addPlayer(player) {
        if(player instanceof Player) {
            this.players.push(player)
        } else {
            throw new Error(`Not a player: ${player}`)
        }
    }
    describe() {
        return `${this.name} has ${this.players.length} team members.`
    }
}
// Creates menu, array of teams, and selections for main menu with four different options
class Menu {
    constructor() {
        this.teams = []
        this.selectedTeam = null
    }
    start() {
        let selection = this.showMainMenuOptions()
        while(selection != 0) {
            switch (selection) {
                case '1': 
                  this.createTeam()
                  break;
                case '2':
                  this.viewTeam()
                  break;
                case '3':
                  this.deleteTeam()
                  break;
                case '4':
                  this.displayTeams()
                  break;
                default:
                    selection = 0
            }
            selection = this.showMainMenuOptions()
        }
        alert('GoodBye!')
    }
// creates prompt with menu options
  showMainMenuOptions() {
    return prompt(`
       0) Exit
       1) Create team
       2) View team 
       3) Delete team
       4) Display all teams
        `)
  }
  
  showTeamMenuOptions(teamInfo) {
    return prompt(`
        0) back
        1) Create player
        2) Delete player
        -------------------------
        ${teamInfo}`

    )
  }
// creates blank string and displays teams on different lines after iterating through teams array using the for loop
  displayTeams() {
    let teamString = ''
    for(let i = 0; i < this.teams.length; i++) {
        teamString += i + ') ' + this.teams[i].name + '\n'
    }
    alert(teamString)
  }
// prompts user to enter new team name and pushes the new name to the teams array
  createTeam() {
    let name = prompt('Enter name for new team:')
    this.teams.push(new Team(name))
  }
// prompts user to enter index of team they want to view and checks to see if index number is assigned to a team 
  viewTeam() {
    let index = prompt('Enter index of team you would like to view:')
    if( index > -1 && index < this.teams.length) {
        this.selectedTeam = this.teams[index] 
        let description = 'Team Name:' + this.selectedTeam.name + '\n'

        // adds players description to team
        for(let i = 0; i < this.selectedTeam.players.length; i++) {
            description += i + ') ' + this.selectedTeam.players[i].name 
            + ' - ' + this.selectedTeam.players[i].rank + '\n'
        }

        let selection = this.showTeamMenuOptions(description)
        switch (selection) {
            case '1':
                this.createPlayer()
                break;
            case '2':
                this.deletePlayer()
        }
    }
  }
// creates new player letting user enter their name and rank
  createPlayer() {
    let name = prompt('Enter player name:')
    let rank = prompt('Enter player rank:')
    this.selectedTeam.player.push(new Player(name, rank))
  }
// user enters player's index they want to delete
  deletePlayer() {
    let index = prompt('Enter player index you want to delete:')
    if(index > -1 && index < this.selectedTeam.players.length) {
        this.selectedTeam.players.splice(index, 1)
    }

  }

  deleteTeam() {
    let index = prompt('Enter index of team you want to delete:')
    if(index > -1 && index < this.teams.length) {
        this.teams.splice(index, 1)
    }
  }
}

let menu = new Menu()
menu.start()