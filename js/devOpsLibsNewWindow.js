(async function () {
  const baseURL = window.location.origin + window.location.pathname.split('/').slice(0,3).join('/')
  
  const variableGroups = await (await fetch(`${baseURL}/_apis/distributedtask/variablegroups?continuationToken=0&queryOrder=0`, {
    "headers": {
      "accept": "application/json;api-version=7.2-preview.2;excludeUrls=true"
    }
  })).json()
  
  document.querySelectorAll('.lib-item-var-name').forEach(i => {
    i.addEventListener('click', (e) => {
      e.stopImmediatePropagation()
      const id = variableGroups.value.filter(j => {
        return j.name == i.innerText
      }).map(k => k.id)[0]
      //console.log(i.innerText, id);
      window.open('https://dev.azure.com/ddslogistics2/Saas_Factory/_library?view=VariableGroupView&variableGroupId=' + id)
    })
  })

  alert('You are god to go !!')
})()
