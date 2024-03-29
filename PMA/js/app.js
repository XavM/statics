const cache = {
  "isCordovaApp": !!window.cordova,
  data: {
    selectedDeck: "ALL",
    selectedTime: 7
  }
}

const $$ = Dom7;

const appHTML = `
  <!-- Your main view, should have "view-main" class -->
  <div class="view view-main">
    <!-- Initial Page, "data-name" contains page name -->
    <div data-name="home" class="page">

      <!-- Top Navbar -->
      <!--
      <div class="navbar">
        <div class="navbar-bg"></div>
        <div class="navbar-inner">
          <div class="title">Awesome App</div>
        </div>
      </div>
      -->

      <!-- Bottom Toolbar -->
      <!--
      <div class="toolbar toolbar-bottom">
        <div class="toolbar-inner">
          <a href="#" class="link">Link 1</a>
          <a href="#" class="link">Link 2</a>
        </div>
      </div>
      -->

      <!-- Scrollable page content -->
      <div class="page-content">
        <p />

        <select id="deckSelector" placeholder="Please choose..."
          style="width: 95%; border: 1px solid black; padding: 5px; appearance: auto;  margin: 0 auto;"
        >
        </select>

        <p />

        <select id="timeSelector" placeholder="Please choose..."
          style="width: 95%; border: 1px solid black; padding: 5px; appearance: auto;  margin: 0 auto;"
        >
          <option value=1 >Last 1 days</option>
          <option value=2 >Last 2 days</option>
          <option value=3 >Last 3 days</option>
          <option value=4 >Last 4 days</option>
          <option value=7 selected>Last 7 days</option>
          <option value=15 >Last 15 days</option>
          <option value=30 >Last 30 days</option>
          <option value=Infinity >As far as you can</option>
        </select>

        <p />

        <!-- Tabs -->
        <a href="#tab-1" class="spec tab-link tab-link-active">
          <div class="spec card">
          <div id="metric_games" class="card-header"></div>
            <div class="card-content card-content-padding">
              Games Played
            </div>
            <!-- 
            <div class="card-footer">Footer</div>
            -->
          </div>
        </a>
        <a href="#tab-2" class="spec tab-link">
          <div class="spec card">
            <div id="metric_turns" class="card-header"></div>
              <div class="card-content card-content-padding">
                Turns Played
              </div>
          </div>
        </a>
        <a href="#tab-3" class="spec tab-link">
          <div class="spec card">
            <div id="metric_winRate" class="card-header"></div>
              <div class="card-content card-content-padding">
                Win Rate
              </div>
          </div>
        </a>
        <a href="#tab-4" class="spec tab-link">
          <div class="spec card">
            <div id="metric_decks" class="card-header"></div>
              <div class="card-content card-content-padding">
                Decks Used
              </div>
              <!-- 
              <div class="card-footer">Footer</div>
              -->
          </div>
        </a>


        <!-- Tabs -->
        <div class="tabs-animated-wrap">
          <div class="tabs">
            <div id="tab-1" class="page-content tab tab-active">
              <div class="block">
                <div class="chart-container" style="position: relative; height:200px; width:100%">
                  <canvas id="chart_games"></canvas>
                </div>
                <div class="data-table">
                  <table id="table_games">
                    <!-- 
                    <thead>
                      <tr>
                        <th class="label-cell">Date</th>
                        <th class="numeric-cell">Outcome</th>
                        <th class="numeric-cell">Turns</th>
                        <th class="numeric-cell">Versus</th>
                        <th class="numeric-cell">Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="label-cell">21-JAN</td>
                        <td class="numeric-cell">WIN</td>
                        <td class="numeric-cell">63</td>
                        <td class="numeric-cell">FRE+NOX</td>
                        <td class="numeric-cell">24000</td>
                      </tr>
                      <tr>
                        <td class="label-cell">20-JAN</td>
                        <td class="numeric-cell">LOSS</td>
                        <td class="numeric-cell">24</td>
                        <td class="numeric-cell">SI+DEM</td>
                        <td class="numeric-cell">36200</td>
                      </tr>
                    </tbody>
                    -->
                  </table>
                </div>
              </div>
            </div>
            <div id="tab-2" class="page-content tab">
              <div class="block">
                <div class="chart-container" style="position: relative; height:200px; width:100%">
                  <canvas id="chart_turns"></canvas>
                </div>
                <div class="data-table">
                  <table id="table_turns">
                    <!--
                    <thead>
                      <tr>
                        <th class="label-cell">Faction</th>
                        <th class="numeric-cell">Played</th>
                        <th class="numeric-cell">Win Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="label-cell">Frejlord</td>
                        <td class="numeric-cell">24</td>
                        <td class="numeric-cell">33%</td>
                      </tr>
                      <tr>
                        <td class="label-cell">Demacia</td>
                        <td class="numeric-cell">12</td>
                        <td class="numeric-cell">55%</td>
                      </tr>
                      <tr>
                        <td class="label-cell">Shadow</td>
                        <td class="numeric-cell">5</td>
                        <td class="numeric-cell">12%</td>
                      </tr>
                    </tbody>
                    -->
                  </table>
                </div>
              </div>
            </div>
            <div id="tab-3" class="page-content tab">
              <div class="block">
                <div class="chart-container" style="position: relative; height:200px; width:100%">
                  <canvas id="chart_winRate"></canvas>
                </div>
                <div class="data-table">
                  <table id="table_winRate">
                    <!--
                    <thead>
                      <tr>
                        <th class="label-cell">Date</th>
                        <th class="numeric-cell">Outcome</th>
                        <th class="numeric-cell">Turns</th>
                        <th class="numeric-cell">Factions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="label-cell">21-JAN</td>
                        <td class="numeric-cell">WIN</td>
                        <td class="numeric-cell">63</td>
                        <td class="numeric-cell">FRE+NOX</td>
                      </tr>
                      <tr>
                        <td class="label-cell">20-JAN</td>
                        <td class="numeric-cell">LOSS</td>
                        <td class="numeric-cell">24</td>
                        <td class="numeric-cell">SI+DEM</td>
                      </tr>
                    </tbody>
                    -->
                  </table>
                </div>
              </div>
            </div>
            <div id="tab-4" class="page-content tab">
              <div class="block">
                <div>
                  <canvas id="chart_decks"></canvas>
                </div>
                <div class="data-table">
                  <table id="table_winRate">
                    <!--
                    <thead>
                      <tr>
                        <th class="label-cell">Date</th>
                        <th class="numeric-cell">Outcome</th>
                        <th class="numeric-cell">Turns</th>
                        <th class="numeric-cell">Versus</th>
                        <th class="numeric-cell">Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="label-cell">21-JAN</td>
                        <td class="numeric-cell">WIN</td>
                        <td class="numeric-cell">63</td>
                        <td class="numeric-cell">FRE+NOX</td>
                        <td class="numeric-cell">24000</td>
                      </tr>
                      <tr>
                        <td class="label-cell">20-JAN</td>
                        <td class="numeric-cell">LOSS</td>
                        <td class="numeric-cell">24</td>
                        <td class="numeric-cell">SI+DEM</td>
                        <td class="numeric-cell">36200</td>
                      </tr>
                    </tbody>
                    -->
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Cards -->
        <!--
        <div class="demo-expandable-cards">
          <div class="card card-expandable">
            <div class="card-content">
              <div class="bg-color-red" style="height: 300px">
                <div class="card-header text-color-white display-block">
                  Framework7
                  <br />
                  <div><small style="opacity: 0.7">Build Mobile Apps</small></div>
                  <div><small style="opacity: 0.7">Build Mobile Apps</small></div>
                  <div><small style="opacity: 0.7">Build Mobile Apps</small></div>
                  <div><small style="opacity: 0.7">Build Mobile Apps</small></div>
                  <div><small style="opacity: 0.7">Build Mobile Apps</small></div>
                  <div><small style="opacity: 0.7">Build Mobile Apps</small></div>
                </div>
                <a class="link card-close card-opened-fade-in color-white"
                  style="position: absolute; right: 15px; top: 15px">
                  <i class="icon f7-icons">xmark_circle_fill</i>
                </a>
              </div>
              <div class="card-content-padding">
                <p>Framework7 - is a free and open source HTML mobile framework to develop hybrid mobile apps or web apps
                  with iOS or Android (Material) native look and feel. It is also an indispensable prototyping apps tool to
                  show working app prototype as soon as possible in case you need to. Framework7 is created by Vladimir
                  Kharlampidi (iDangero.us).</p>
                <p>The main approach of the Framework7 is to give you an opportunity to create iOS and Android (Material)
                  apps with HTML, CSS and JavaScript easily and clear. Framework7 is full of freedom. It doesn't limit your
                  imagination or offer ways of any solutions somehow. Framework7 gives you freedom!</p>
                <p>Framework7 is not compatible with all platforms. It is focused only on iOS and Android (Material) to
                  bring the best experience and simplicity.</p>
                <p>Framework7 is definitely for you if you decide to build iOS and Android hybrid app (Cordova or Capacitor)
                  or web app that looks like and feels as great native iOS or Android (Material) apps.</p>
                <p>
                  <a class="button button-fill button-round button-large card-close color-red">Close</a>
                </p>
              </div>
            </div>
          </div>
         -->

        <!-- Link to another page -->
        <!--
        <a href="/about/">About app</a>
        -->

      </div>
    </div>
  </div>
`

$$('#app').html(appHTML)

var app = new Framework7({
  el: '#app',
  name: 'My App',
  theme: 'auto', 
});

if (cache.isCordovaApp)
  document.addEventListener("deviceready", onDeviceReady, false);
else 
  onDeviceReady()

async function onDeviceReady() {
  //console.log('onDeviceReady')
}  

function drawChart(elName, datasets) {

  const ctx = document.getElementById(elName);
  
  Chart.getChart(elName)?.destroy()

  new Chart(ctx, {
    data: {
      datasets: datasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index'
      },
      plugins: {
        legend: {
          //display: false
          labels: {
            filter: function(item, chart) {
              // Logic to remove a particular legend item goes here
              //console.log(item, chart)
              return chart.datasets.length > 1 ; //!item.text.includes('Legend 1');
            }
          }
        }
      },
      scales: {
        y1: {
          type: 'linear',
          display: 'auto',
          position: 'left'
        },
        y2: {
          type: 'linear',
          display: 'auto',
          position: 'right',
          // grid line settings
          grid: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
        },
      },
      xxxscales: {
        x: {
          ticks: {
            //display: false
          }
        }
      },
      animation: {
        duration: 0
      }
    }
  })
}

/*
['chart1', 'chart2', 'chart3', 'chart4'].forEach(i => {
  const data = ['1', '2', '3', '4', '5', '6'].map(j => {
    return {
      x: j,
      y: Math.floor(Math.random() * 30) + 1
    }
  })
  drawChart(i, data)
})
*/

function fillUpDeckSelector() {

  const decks = sampleData.matches.reduce((prev, i) => {

    const diff = Date.now() - new Date(i.game_start_time_utc).getTime(),
          selectedTime = cache.data.selectedTime * 1000 * 60 * 60 * 24

    if (diff < selectedTime) {

      prev[i.deck_code] = prev[i.deck_code] || {count: 0, win: 0}
      prev[i.deck_code].count++

      if (i.outcome == "win")
        prev[i.deck_code].win++
    }

    return prev
  }, {})

  const sortedDecks = Object.keys(decks).sort((a, b) => {
    //return decks[b].win - decks[a].win
    return decks[b].count - decks[a].count
  })

  const deckSelector = document.querySelector('#deckSelector')

  deckSelector.innerHTML = sortedDecks.map((i, idx) => {
    let val = (idx == 0) ? `<option value="ALL" ${ (cache.data.selectedDeck == i) && "selected" }>All Deks</option>` : ''
    val += `<option value="${i}" ${ (cache.data.selectedDeck == i) && "selected" }>${i}</option>`
    return val
  }).join('')

  deckSelector.onchange = function (e) {
    cache.data.selectedDeck = this.value
    fillApp()
  }
}

async function main() {

  window.sampleData = await (await fetch('data/games.json')).json()
  //window.sampleData = await (await fetch('https://xavm.github.io/statics/PMA/data/games.json')).json()
  //const sampleData = await (await fetch('http://www.villalala.fr:12345/sample.json')).json()

  // Sort chronologically asc
  sampleData.matches.sort((a, b) => {
    return new Date(a.game_start_time_utc).getTime() - new Date(b.game_start_time_utc).getTime()
  })

/*
    // All known Decks (for player ?)
    [...new Set(sampleData.decksummaries.map(i => i.deck_code))],
    // All played Decks for player
    [...new Set(sampleData.matches.map(i => i.deck_code))]
*/

  fillUpDeckSelector() 

  const timeSelector = document.querySelector('#timeSelector')
  timeSelector.onchange = function (e) {
    cache.data.selectedTime = this.value
    fillApp()
  }

  fillApp()
}

function fillApp() {

  fillUpDeckSelector()

  window.data = Object.values(
    sampleData.matches
    .filter(i => {
      if (cache.data.selectedDeck == "ALL")
        return true
      else 
        return i.deck_code == cache.data.selectedDeck
    })
    .filter(i => {
      const diff = Date.now() - new Date(i.game_start_time_utc).getTime()
      return diff < ( cache.data.selectedTime * 1000 * 60 * 60 * 24 )
    })
    .reduce((prev, i) => {
      
      const day = new Date(i.game_start_time_utc).toISOString().slice(0,10)

      prev[day] = prev[day] || {x: day, games: 0, turns: 0, win: 0, loss: 0, winRate: 0, cum_winRate: 0}
      // Nbr of games
      prev[day].games++
      // Nbr of turns
      prev[day].turns += i.total_turn_count
      // Nbr of win / loss
      prev[day][i.outcome]++
      // Daily winRate
      prev[day].winRate = prev[day].win / (prev[day].win + prev[day].loss) * 100
      // Cumulative winRate
      prev.total[i.outcome]++
      prev[day].cum_winRate = prev.total.win / (prev.total.win + prev.total.loss) * 100

      prev.total.decks[i.deck_code] = prev.total.decks[i.deck_code] || 0
      prev.total.decks[i.deck_code]++

      prev.total.games++
      prev.total.turns += i.total_turn_count
      
      return prev;
    }, {total: {games: 0, turns: 0, win: 0, loss: 0, decks: {}}} )
  )

  document.getElementById('metric_games').innerHTML = data[0].games
  document.getElementById('metric_turns').innerHTML = data[0].turns
  document.getElementById('metric_winRate').innerHTML = Math.round(data.slice(-1)[0].cum_winRate || 0) + '%'
  document.getElementById('metric_decks').innerHTML = Object.keys(data[0].decks).length

  drawChart('chart_games',
    [
      { 
        label: "games",
        type: 'bar',
        yAxisID: 'y1',
        data: data.filter(i => i.x).map(i => {
          return {x: i.x, y: i.games}
        })
      },
      { 
        label: "winRate",
        type: 'line',
        yAxisID: 'y2',
        data: data.map(i => {
          return {x: i.x, y: i.winRate}
        })
      }
    ]
  )

  const turn_buckets = sampleData.matches
    .filter(i => {
      if (cache.data.selectedDeck == "ALL")
        return true
      else 
        return i.deck_code == cache.data.selectedDeck
    })
    .filter(i => {
      const diff = Date.now() - new Date(i.game_start_time_utc).getTime()
      return diff < ( cache.data.selectedTime * 1000 * 60 * 60 * 24 )
    })  
    .reduce((prev, i) => {
      const bucket = i.total_turn_count - i.total_turn_count % 10;
      prev[bucket] = prev[bucket] || {count: 0, win: 0, loss: 0, winRate: 0}
      prev[bucket].count++
      prev[bucket][i.outcome]++
      prev[bucket].winRate = prev[bucket].win / (prev[bucket].win + prev[bucket].loss) * 100
      return prev
    }, {})

  const turn_buckets_count = Object.keys(turn_buckets).reduce((prev, i) => {
    prev.push({ x: i + '-' + (i*1 + 9), y: turn_buckets[i].count }) 
    return prev
  }, [])

  const turn_buckets_winRate = Object.keys(turn_buckets).reduce((prev, i) => {
    prev.push({ x: i + '-' + (i*1 + 9), y: turn_buckets[i].winRate }) 
    return prev
  }, [])

  drawChart('chart_turns',
    [
      { 
         label: "turns",
         type: 'bar',
         yAxisID: 'y1',
         data: turn_buckets_count
      },
      { 
        label: "winRate",
        type: 'line',
        yAxisID: 'y2',
        data: turn_buckets_winRate
      }
    ]
  )

  drawChart('chart_winRate',
    [
      { 
        label: "winRate",
        type: 'line',
        yAxisID: 'y1',
        data: data.map(i => {
          return {x: i.x, y: i.winRate}
        })
      },
      { 
        label: "cum_winRate",
        type: 'line',
        yAxisID: 'y1',
        data: data.map(i => {
          return {x: i.x, y: i.cum_winRate}
        })
      }
    ]
  )

  const config = {
    type: 'pie',
    data: {
      labels: Object.keys(data[0].decks).map((i, idx) => 'decks '+(idx+1)),
      datasets: [{
        data: Object.values(data[0].decks),
      }]
    },
    options: {
      plugins: {
        legend: {
          display: true
        }
      }
    },
    animation: {
      duration: 0
    }
  }

  Chart.getChart('chart_decks')?.destroy()

  new Chart(document.getElementById('chart_decks'), config)

  // Table Games
  const table_games = sampleData.matches
    .filter(i => {
      if (cache.data.selectedDeck == "ALL")
        return true
      else 
        return i.deck_code == cache.data.selectedDeck
    })
    .filter(i => {
      const diff = Date.now() - new Date(i.game_start_time_utc).getTime()
      return diff < ( cache.data.selectedTime * 1000 * 60 * 60 * 24 )
    })
    .map(i => {

      const dateArr = new Date(i.game_start_time_utc).toString().split(' '),
            date    = [dateArr[2], dateArr[1]].join('-')

      return {
        "Date": date,
        "Out": i.outcome,
        "Turns": i.total_turn_count,
        "Factions": [i.op_faction1, i.op_faction2].map(i => {
           return `<img src="img/${i}.png" alt="${i}" style="width: 30px;"/>`
          }).join(' '),
        "Cost": 0 // TODO : Missing value -> i.op_shard_cost.toLocaleString()
      }

  })

  const html_games = `
    <thead>
      <tr>
        ${
          Object.keys(table_games[0] || []).map(i => {
            return '<th class="label-cell">' + i + '</th>'
          }).join('\n')
        }
      </tr>
      <tbody>
        ${
          Object.values(table_games)
            ?.sort((a, b) => {
              //return new Date(b.Date).getTime() - new Date(a.Date).getTime()
              return new Date(b.Date + ' ' + new Date().getFullYear()).getTime() - new Date(a.Date + ' ' + new Date().getFullYear()).getTime()
            }) 
            ?.map(i => {
              return '<tr>' + Object.values(i).map(j => '<td class="label-cell">' +  j + '</td>').join('\n') + '</tr>'              
            }).join('\n')
        }
      </tbody>          
    </thead>
  `

  document.querySelector('#table_games').innerHTML = html_games

  // Table turns
  const html_turns = `
    <thead>
      <tr>
        ${
          Object.keys(table_games[0] || [])
            .slice(0, -1)
            .map(i => {
              return '<th class="label-cell">' + i + '</th>'
            }).join('\n')
        }
      </tr>
      <tbody>
        ${
          Object.values(table_games)            
            .sort((a, b) => {
              return b.Turns - a.Turns
            }) 
            .map(i => {
              return '<tr>' + Object.values(i).slice(0, -1).map(j => '<td class="label-cell">' +  j + '</td>').join('\n') + '</tr>'              
            }).join('\n')
        }
      </tbody>          
    </thead>
  `

  document.querySelector('#table_turns').innerHTML = html_turns

  // Table winRate 
  window.table_winRate_temp = sampleData.matches
    .filter(i => {
      if (cache.data.selectedDeck == "ALL")
        return true
      else 
        return i.deck_code == cache.data.selectedDeck
    })
    .filter(i => {
      const diff = Date.now() - new Date(i.game_start_time_utc).getTime()
      return diff < ( cache.data.selectedTime * 1000 * 60 * 60 * 24 )
    })
    .reduce((prev, i) => {
      [i.op_faction1, i.op_faction2].forEach(faction => {
        prev[faction] = prev[faction] || {Faction: faction, count: 0, win: 0, loss: 0, winRate: 0}
        prev[faction].count++
        prev[faction][i.outcome]++
        prev[faction].winRate = Math.round(prev[faction].win / (prev[faction].win + prev[faction].loss) * 100)
      })
      return prev
    }, {})

  window.table_winRate = Object.values(window.table_winRate_temp)
    .sort((a, b) => {
      return b.winRate - a.winRate
    })

  const html_winRate = `
    <thead>
      <tr>
        ${
          Object.keys(table_winRate[0] || []).map(i => {
            return '<th class="label-cell">' + i + '</th>'
          }).join('\n')
        }
      </tr>
      <tbody>
        ${
          table_winRate.map(i => {
            return '<tr>' + Object.values(i).map((j, idx) => { 
              const html = (idx == 0) ? '<img src="img/' + j + '.png" alt="' + j + '" style="width: 30px;"/>' : j
              return '<td class="label-cell">' + html + '</td>'
            }).join('\n') + '</tr>'              
          }).join('\n')
        }
      </tbody>          
    </thead>
  `

  document.querySelector('#table_winRate').innerHTML = html_winRate

}

main()


/*

# Games Played

DONE : Le tableau donne betement  la liste de tous les match en date desc 

# Turns Players 

DONE : Faires de buckets de 10 en 10 ;
  Ex: match de 0 à 10 turns 
      <- Combien de match en 0 à 10 
      <- Quel winrate associé 

DONE : Le tableau donne betement  la liste de tous les match en turns desc 

# Win rate 

Tableau -> Calculer pour chaque op_faction sur toute la durée de date range le nbr de match joué et le winrate associé 

# Ecran 1 : Deck used avec 1 seul deck 

La liste de chaque carte unique avec le nbr associé + cost + type 
<- manque la data pour l'instant 

# Ecran 2 : Deck used avec 1 seul deck 

La liste de chaque ability unique avec le nbr associé 
<- manque la data pour l'instant 

*/
