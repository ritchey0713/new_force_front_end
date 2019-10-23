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