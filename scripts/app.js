// global team members 
let allMembers = []

let main = document.querySelector("#main")


fetch("http://localhost:3000/team_members")
.then(resp => resp.json())
.then(json => createObjs(json))

const createObjs = (json) => {
    json.data.forEach((team_member) => {
        let teamMember = new TeamMember(team_member)
        let seasons = json.included.filter((season) => {
            return season.relationships.team_member.data.id === team_member.id
        })
        createSeasons(teamMember, seasons)
        // teamMember.seasons = seasons
        allMembers.push(teamMember)
    })
    generateTeamList(allMembers)
}

const createSeasons = (teamMember, seasons) => {
    seasons.forEach((season) => {
        let seasonObj = new Season(season)
        teamMember.seasons.push(seasonObj)
    })
}


const generateTeamList = (allMembers) => {
    const containerEl = document.createElement("div")
    const listEl = document.createElement("ul")
    

    containerEl.classList.add("all-members")
    listEl.classList.add("list")
    
    if (allMembers.length > 0){
        allMembers.forEach((member => {
            const itemEl = document.createElement("li")
            itemEl.classList.add(`team-member-${member.uplay}`)
            // renderTeam(member)
            itemEl.textContent = member.uplay
            listEl.appendChild(itemEl)
        }))

    } else {
        containerEl.textContent = "Oops try again later!"
    }

    containerEl.appendChild(listEl)
    main.append(containerEl)
    
}


