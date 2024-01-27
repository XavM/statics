const cache = {
  "isCordovaApp": !!window.cordova
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


        <!-- Tabs -->
        <a href="#tab-1" class="spec tab-link tab-link-active">
          <div class="spec card">
          <div class="card-header">18</div>
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
            <div class="card-header">214</div>
              <div class="card-content card-content-padding">
                Turns Played
              </div>
          </div>
        </a>
        <a href="#tab-3" class="spec tab-link">
          <div class="spec card">
            <div class="card-header">53%</div>
              <div class="card-content card-content-padding">
                Win Rate
              </div>
          </div>
        </a>
        <a href="#tab-4" class="spec tab-link">
          <div class="spec card">
            <div class="card-header">5</div>
              <div class="card-content card-content-padding">
                Decks Used
              </div>
              <!-- 
              <div class="card-footer">Footer</div>
              -->
          </div>
        </a>


        <!-- Tabs -->
        <div class="tabs">
          <div id="tab-1" class="page-content tab tab-active">
            <div class="block">
              <div class="chart-container" style="position: relative; height:200px; width:100%">
                <canvas id="chart_games"></canvas>
              </div>
              <div class="data-table">
                <table>
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
                <table>
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
                <table>
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
                <table>
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
                </table>
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
  theme: 'auto'
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

  new Chart(ctx, {
    data: {
      datasets: datasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
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
          position: 'left',
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

async function main() {

  const sampleData = await (await fetch('https://xavm.github.io/statics/PMA/data/games.json')).json()

  // Sort chronologically asc
  sampleData.matches_data.sort((a, b) => {
    return new Date(a.game_start_time_utc).getTime() - new Date(b.game_start_time_utc).getTime()
  })

  const data = Object.values(sampleData.matches_data.reduce((prev, i) => {
      
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
    
    return prev;
  }, {total: {win: 0, loss: 0, decks: {}}} ))


  /*
  drawChart('chart_games',
    [{ 
       label: "games",
       type: 'bar',
       data: data.map(i => {
        return {x: i.x, y: i.games}
      })
    }]
  )
  */

  drawChart('chart_games',
    [
      { 
        label: "games",
        type: 'bar',
        yAxisID: 'y1',
        data: data.map(i => {
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



  drawChart('chart_turns',
    [
      { 
         label: "turns",
         type: 'bar',
         yAxisID: 'y1',
         data: data.map(i => {
          return {x: i.x, y: i.turns}
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

  /*
  drawChart('chart_decks',
    [
      { 
        label: "winRate",
        type: 'pie',
        yAxisID: 'y1',
        data: data[0].decks
      }
    ]
  )
  */

  //drawChart('chart_decks', [{ data: [10, 20, 30] }] )

  /*
  drawChart('chart_decks',
    [
      { 
        label: "winRate",
        type: 'pie',
        yAxisID: 'y1',
        data:   [
          {x: '1', y: 10},
          {x: '2', y: 20},
          {x: '3', y: 30}
        ]
      }
    ]
  )
  */

  /*
  drawChart('chart_decks',
    [{
      label: 'My First Dataset',
      data: [
        {x: '1', y: 10},
        {x: '2', y: 20},
        {x: '3', y: 30}
      ],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  )
  */

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
          display: false
        }
      }
    },
    animation: {
      duration: 0
    }
  }

  new Chart(document.getElementById('chart_decks'), config)
}

main()


/*

# Games Played

Le tableau donne betement  la liste de tous les match en date desc 

# Win rate 

Calculer pour chaque op_faction sur toute la durée de date range le nbr de match joué et le winrate associé 

# Turns Players 

Faires de buckets de 10 en 10 ;
Ex: match de 0 à 10 turns 
    <- Combien de match en 0 à 10 
      <- Quel winrate associé 

Le tableau donne betement  la liste de tous les match en turns desc 

# Ecran 1 : Deck used avec 1 seul deck 

La liste de chaque carte unique avec le nbr associé + cost + type 
<- manque la data pour l'instant 

# Ecran 2 : Deck used avec 1 seul deck 

La liste de chaque ability unique avec le nbr associé 
<- manque la data pour l'instant 

*/
