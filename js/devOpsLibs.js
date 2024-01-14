const baseURL = window.location.origin + window.location.pathname.split('/').slice(0,3).join('/')
// 'https://dev.azure.com/ddslogistics2/Saas_Factory'

//var projectID = (await (await fetch(`${baseURL}/_build?__rt=fps&__ver=2`)).json()).fps.dataProviders.data["ms.vss-tfs-web.page-data"].project.id
// 'ef240edc-287a-4888-8b46-abea9c87c3e3'

const variableGroups = await (await fetch(`${baseURL}/_apis/distributedtask/variablegroups?continuationToken=0&queryOrder=0`, {
  "headers": {
    "accept": "application/json;api-version=7.2-preview.2;excludeUrls=true"
  }
})).json()

//const definitionId = 71
const definitionId = (new URL(document.location)).searchParams.get("definitionId")

const definition = await (await fetch(`${baseURL}//_releaseDefinition?definitionId=${definitionId}&_a=environments-editor-preview&__rt=fps&__ver=2`, {
  "headers": {
    "accept": "*/*"
  },
})).json()

const definitionName = definition.fps.dataProviders.data["ms.vss-releaseManagement-web.cdworkflow.webpage.data-provider"].releaseDefinition.name

const stages = definition.fps.dataProviders.data["ms.vss-releaseManagement-web.cdworkflow.webpage.data-provider"].releaseDefinition.environments.map(i => { return { name: i.name, variablesGroupes: i.variableGroups} })

const groupIDs = [...new Set (stages.reduce((prev, i) => { return prev.concat(i.variablesGroupes) }, []))]

const usedVariables = variableGroups.value.filter(i => { return groupIDs.includes(i.id) }).map(i => { return {
    id: i.id,
    name: i.name,
    variables: Object.keys(i.variables).reduce((prev, j) => {
      const val = (i.variables[j].isSecret) ? '*****' : i.variables[j].value
      prev[j] = val
      return prev
    }, {})
  }
})


var table = []

usedVariables.forEach(i => {
  Object.keys(i.variables).forEach((j) => {
    table.push({
      definitionName: '"' + definitionName +'"',
      //definitionId: definitionId * 1,
      libName: '"' + i.name +'"',
      //libId: i.id,
      key: j,
      val: '"' + i.variables[j].replace(/"/g, '""') + '"',
      scopedInStages: '"' + stages.reduce((prev, k) => {
        if (k.variablesGroupes.includes(i.id))
          prev.push(k.name)
        return prev
      }, []).join(',') +'"'
    })
  })
})

//console.table(table)

const exportData = (data) => {
  const blob = new Blob([data], { type: 'text/csv;charset=utf-8;' });
  saveFile(blob);
}

const saveFile = (blob) => {
  const filename = definitionName + '_' + new Date().toISOString() + '.csv'
  console.info(`Starting call for html5 download`);
  const link = document.createElement("a");
  if (link.download !== undefined) { // feature detection
    // Browsers that support HTML5 download attribute
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

var header = Object.keys(table[0]).join(',')
var body   = table.map(i => Object.values(i).join(',')).join('\n')
var csv    = header + '\n' + body

exportData(csv)
