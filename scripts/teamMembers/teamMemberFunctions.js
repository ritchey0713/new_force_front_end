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