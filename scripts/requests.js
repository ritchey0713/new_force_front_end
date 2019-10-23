const fetchAllMembers = (teamIndexUrl) => {
    fetch(teamIndexUrl)
    .then(resp => resp.json())
    .then(json => createObjs(json))
}