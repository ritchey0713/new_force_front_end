const createSeasons = (teamMember, seasons) => {
    seasons.forEach((season) => {
        let seasonObj = new Season(season)
        teamMember.seasons.push(seasonObj)
    })
}
