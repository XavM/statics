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

const sampleData = {
    "matches_data": [
        {
            "game_start_time_utc": "2024-01-22T17:43:02.650Z",
            "total_turn_count": 30,
            "outcome": "loss",
            "playorder": 0,
            "deck_code": "CEBQEAIDD4QQEBADAQHQMAIBAQLB4JRJGABQCAIDGUAQIAYIAIAQCCZKAIAQCAIBAEBACCQ",
            "factions": [
                "Freljord",
                "Noxus"
            ],
            "champions": [
                "LeBlanc",
                "Ashe"
            ],
            "op_factions": [
                "Bard",
                "ShadowIsles"
            ],
            "op_champions": [
                "Bard",
                "Mordekaiser"
            ]
        },
        {
            "game_start_time_utc": "2024-01-22T17:32:56.354Z",
            "total_turn_count": 28,
            "outcome": "loss",
            "playorder": 1,
            "deck_code": "CEBQEAIDD4QQEBADAQHQMAIBAQLB4JRJGABQCAIDGUAQIAYIAIAQCCZKAIAQCAIBAEBACCQ",
            "factions": [
                "Freljord",
                "Noxus"
            ],
            "champions": [
                "LeBlanc",
                "Ashe"
            ],
            "op_factions": [
                "Runeterra",
                "ShadowIsles"
            ],
            "op_champions": [
                "Viego",
                "Mordekaiser",
                "Elder Dragon"
            ]
        },
        {
            "game_start_time_utc": "2024-01-22T17:21:45.755Z",
            "total_turn_count": 30,
            "outcome": "loss",
            "playorder": 1,
            "deck_code": "CEBQEAIDD4QQEBADAQHQMAIBAQLB4JRJGABQCAIDGUAQIAYIAIAQCCZKAIAQCAIBAEBACCQ",
            "factions": [
                "Freljord",
                "Noxus"
            ],
            "champions": [
                "LeBlanc",
                "Ashe"
            ],
            "op_factions": [
                "Shurima",
                null
            ],
            "op_champions": [
                "Azir",
                "Renekton"
            ]
        },
        {
            "game_start_time_utc": "2024-01-22T17:11:35.801Z",
            "total_turn_count": 14,
            "outcome": "win",
            "playorder": 1,
            "deck_code": "CEBQEAIDD4QQEBADAQHQMAIBAQLB4JRJGABQCAIDGUAQIAYIAIAQCCZKAIAQCAIBAEBACCQ",
            "factions": [
                "Freljord",
                "Noxus"
            ],
            "champions": [
                "LeBlanc",
                "Ashe"
            ],
            "op_factions": [
                "Aatrox",
                "Kayn"
            ],
            "op_champions": [
                "Aatrox",
                "Kayn"
            ]
        },
        {
            "game_start_time_utc": "2024-01-21T21:04:22.342Z",
            "total_turn_count": 24,
            "outcome": "loss",
            "playorder": 1,
            "deck_code": "CEBQEAIDD4QQEBADAQHQMAIBAQLB4JRJGABQCAIDGUAQIAYIAIAQCCZKAIAQCAIBAEBACCQ",
            "factions": [
                "Freljord",
                "Noxus"
            ],
            "champions": [
                "LeBlanc",
                "Ashe"
            ],
            "op_factions": [
                "Freljord",
                "Shurima"
            ],
            "op_champions": [
                "Taliyah",
                "Lissandra",
                "Volibear"
            ]
        },
        {
            "game_start_time_utc": "2024-01-21T20:54:36.138Z",
            "total_turn_count": 26,
            "outcome": "loss",
            "playorder": 1,
            "deck_code": "CEBQEAIDD4QQEBADAQHQMAIBAQLB4JRJGABQCAIDGUAQIAYIAIAQCCZKAIAQCAIBAEBACCQ",
            "factions": [
                "Freljord",
                "Noxus"
            ],
            "champions": [
                "LeBlanc",
                "Ashe"
            ],
            "op_factions": [
                "Bilgewater",
                "ShadowIsles"
            ],
            "op_champions": [
                "Maokai",
                "Nautilus"
            ]
        },
        {
            "game_start_time_utc": "2024-01-21T20:44:48.370Z",
            "total_turn_count": 21,
            "outcome": "loss",
            "playorder": 1,
            "deck_code": "CQEQCAIBCYAQCAYLAEBACBQBAIBQKAIFBKQQCAIFAEDACBYBCAAQQAYTAIEACEYYAIAQCAIEAIAQGDJGAQAQCAIFAEAQGGIBAIBQGAIEAEFA",
            "factions": [
                "Freljord",
                "Noxus"
            ],
            "champions": [
                "Gnar",
                "Darius"
            ],
            "op_factions": [
                "Runeterra",
                "Freljord"
            ],
            "op_champions": [
                "Volibear",
                "Elder Dragon"
            ]
        },
        {
            "game_start_time_utc": "2024-01-21T15:07:25.034Z",
            "total_turn_count": 28,
            "outcome": "loss",
            "playorder": 0,
            "deck_code": "CQEQCAIBCYAQCAYLAEBACBQBAIBQKAIFBKQQCAIFAEDACBYBCAAQQAYTAIEACEYYAIAQCAIEAIAQGDJGAQAQCAIFAEAQGGIBAIBQGAIEAEFA",
            "factions": [
                "Freljord",
                "Noxus"
            ],
            "champions": [
                "Gnar",
                "Darius"
            ],
            "op_factions": [
                "Runeterra",
                "Demacia"
            ],
            "op_champions": [
                "Morgana",
                "Galio",
                "Elder Dragon"
            ]
        },
        {
            "game_start_time_utc": "2024-01-21T07:39:44.547Z",
            "total_turn_count": 63,
            "outcome": "win",
            "playorder": 1,
            "deck_code": "CEBQEAIDD4QQEBADAQHQMAIBAQLB4JRJGABQCAIDGUAQIAYIAIAQCCZKAIAQCAIBAEBACCQ",
            "factions": [
                "Freljord",
                "Noxus"
            ],
            "champions": [
                "LeBlanc",
                "Ashe"
            ],
            "op_factions": [
                "Runeterra",
                "Demacia"
            ],
            "op_champions": [
                "Morgana",
                "Garen",
                "Galio",
                "Elder Dragon"
            ]
        },
        {
            "game_start_time_utc": "2024-01-20T18:48:25.200Z",
            "total_turn_count": 40,
            "outcome": "loss",
            "playorder": 0,
            "deck_code": "CEDACAIFCUAQGAQUAECAEDQBAYBASAQBAIDASBAGAUIBIJRJAMAQCBI6AEDAEDIDAYCQODQ6AA",
            "factions": [
                "Ionia",
                "ShadowIsles"
            ],
            "champions": [
                "Zed",
                "Kalista"
            ],
            "op_factions": [
                "Runeterra",
                "Demacia"
            ],
            "op_champions": [
                "Elder Dragon",
                "Shyvana"
            ]
        },
        {
            "game_start_time_utc": "2024-01-20T18:44:58.104Z",
            "total_turn_count": 4,
            "outcome": "win",
            "playorder": 1,
            "deck_code": "CEDACAIFCUAQGAQUAECAEDQBAYBASAQBAIDASBAGAUIBIJRJAMAQCBI6AEDAEDIDAYCQODQ6AA",
            "factions": [
                "Ionia",
                "ShadowIsles"
            ],
            "champions": [
                "Zed",
                "Kalista"
            ],
            "op_factions": [
                "ShadowIsles",
                "Shurima"
            ],
            "op_champions": [
                "Senna",
                "Nasus"
            ]
        },
        {
            "game_start_time_utc": "2024-01-20T17:44:20.307Z",
            "total_turn_count": 33,
            "outcome": "loss",
            "playorder": 1,
            "deck_code": "CEDACAIFCUAQGAQUAECAEDQBAYBASAQBAIDASBAGAUIBIJRJAMAQCBI6AEDAEDIDAYCQODQ6AA",
            "factions": [
                "Ionia",
                "ShadowIsles"
            ],
            "champions": [
                "Zed",
                "Kalista"
            ],
            "op_factions": [
                "Bilgewater",
                "Shurima"
            ],
            "op_champions": [
                "Pyke",
                "Rek'Sai"
            ]
        },
        {
            "game_start_time_utc": "2024-01-20T14:36:28.049Z",
            "total_turn_count": 36,
            "outcome": "loss",
            "playorder": 1,
            "deck_code": "CEDACAIFCUAQGAQUAECAEDQBAYBASAQBAIDASBAGAUIBIJRJAMAQCBI6AEDAEDIDAYCQODQ6AA",
            "factions": [
                "Ionia",
                "ShadowIsles"
            ],
            "champions": [
                "Zed",
                "Kalista"
            ],
            "op_factions": [
                "Freljord",
                "Jax"
            ],
            "op_champions": [
                "Jax",
                "Ornn"
            ]
        },
        {
            "game_start_time_utc": "2024-01-19T15:23:14.276Z",
            "total_turn_count": 31,
            "outcome": "win",
            "playorder": 0,
            "deck_code": "CEDACAIFCUAQGAQUAECAEDQBAYBASAQBAIDASBAGAUIBIJRJAMAQCBI6AEDAEDIDAYCQODQ6AA",
            "factions": [
                "Ionia",
                "ShadowIsles"
            ],
            "champions": [
                "Zed",
                "Kalista"
            ],
            "op_factions": [
                "Piltover",
                "Ryze"
            ],
            "op_champions": [
                "Ryze",
                "Janna"
            ]
        },
        {
            "game_start_time_utc": "2024-01-19T14:43:59.631Z",
            "total_turn_count": 20,
            "outcome": "win",
            "playorder": 0,
            "deck_code": "CEDACAIFCUAQGAQUAECAEDQBAYBASAQBAIDASBAGAUIBIJRJAMAQCBI6AEDAEDIDAYCQODQ6AA",
            "factions": [
                "Ionia",
                "ShadowIsles"
            ],
            "champions": [
                "Zed",
                "Kalista"
            ],
            "op_factions": [
                "Bilgewater",
                "ShadowIsles"
            ],
            "op_champions": [
                "Maokai",
                "Nautilus"
            ]
        },
        {
            "game_start_time_utc": "2024-01-19T14:27:00.682Z",
            "total_turn_count": 34,
            "outcome": "loss",
            "playorder": 0,
            "deck_code": "CEBQEAIDD4QQEBADAQHQMAIBAQLB4JRJGABQCAIDGUAQIAYIAIAQCCZKAIAQCAIBAEBACCQ",
            "factions": [
                "Freljord",
                "Noxus"
            ],
            "champions": [
                "LeBlanc",
                "Ashe"
            ],
            "op_factions": [
                "Runeterra",
                "Demacia"
            ],
            "op_champions": [
                "Morgana",
                "Galio",
                "Elder Dragon"
            ]
        },
        {
            "game_start_time_utc": "2024-01-19T14:20:20.648Z",
            "total_turn_count": 16,
            "outcome": "loss",
            "playorder": 1,
            "deck_code": "CEDACAIFCUAQGAQUAECAEDQBAYBASAQBAIDASBAGAUIBIJRJAMAQCBI6AEDAEDIDAYCQODQ6AA",
            "factions": [
                "Ionia",
                "ShadowIsles"
            ],
            "champions": [
                "Zed",
                "Kalista"
            ],
            "op_factions": [
                "Jhin",
                "Noxus"
            ],
            "op_champions": [
                "Jhin",
                "Annie"
            ]
        },
        {
            "game_start_time_utc": "2024-01-19T12:57:34.765Z",
            "total_turn_count": 26,
            "outcome": "loss",
            "playorder": 0,
            "deck_code": "CEDACAIFCUAQGAQUAECAEDQBAYBASAQBAIDASBAGAUIBIJRJAMAQCBI6AEDAEDIDAYCQODQ6AA",
            "factions": [
                "Ionia",
                "ShadowIsles"
            ],
            "champions": [
                "Zed",
                "Kalista"
            ],
            "op_factions": [
                "Runeterra",
                "Demacia"
            ],
            "op_champions": [
                "Shyvana",
                "Morgana",
                "Elder Dragon"
            ]
        },
        {
            "game_start_time_utc": "2024-01-18T06:24:24.667Z",
            "total_turn_count": 29,
            "outcome": "loss",
            "playorder": 1,
            "deck_code": "CEDACAYCCQAQIAQOAIAQEBQJAIAQKFIWAIDAEAYJAQDAKEAUEYUQEAIBAUPACBQFBYAA",
            "factions": [
                "Ionia",
                "ShadowIsles"
            ],
            "champions": [
                "Zed",
                "Kalista"
            ],
            "op_factions": [
                "Runeterra",
                "BandleCity"
            ],
            "op_champions": [
                "Norra",
                "Elder Dragon"
            ]
        },
        {
            "game_start_time_utc": "2024-01-17T18:46:38.232Z",
            "total_turn_count": 33,
            "outcome": "loss",
            "playorder": 0,
            "deck_code": "CEDACAYCCQAQIAQOAIAQEBQJAIAQKFIWAIDAEAYJAQDAKEAUEYUQEAIBAUPACBQFBYAA",
            "factions": [
                "Ionia",
                "ShadowIsles"
            ],
            "champions": [
                "Zed",
                "Kalista"
            ],
            "op_factions": [
                "Runeterra",
                "Piltover"
            ],
            "op_champions": [
                "Seraphine",
                "Janna",
                "Elder Dragon"
            ]
        },
        {
            "game_start_time_utc": "2024-01-17T17:48:41.590Z",
            "total_turn_count": 31,
            "outcome": "loss",
            "playorder": 0,
            "deck_code": "CEDACAYCCQAQIAQOAIAQEBQJAIAQKFIWAIDAEAYJAQDAKEAUEYUQEAIBAUPACBQFBYAA",
            "factions": [
                "Ionia",
                "ShadowIsles"
            ],
            "champions": [
                "Zed",
                "Kalista"
            ],
            "op_factions": [
                "Demacia",
                "ShadowIsles"
            ],
            "op_champions": [
                "Morgana",
                "Mordekaiser"
            ]
        },
        {
            "game_start_time_utc": "2024-01-17T17:08:49.109Z",
            "total_turn_count": 21,
            "outcome": "win",
            "playorder": 1,
            "deck_code": "CEDACAYCCQAQIAQOAIAQEBQJAIAQKFIWAIDAEAYJAQDAKEAUEYUQEAIBAUPACBQFBYAA",
            "factions": [
                "Ionia",
                "ShadowIsles"
            ],
            "champions": [
                "Zed",
                "Kalista"
            ],
            "op_factions": [
                "Runeterra",
                "Ionia"
            ],
            "op_champions": [
                "Kennen",
                "Ahri",
                "Elder Dragon"
            ]
        },
        {
            "game_start_time_utc": "2024-01-17T16:54:36.026Z",
            "total_turn_count": 39,
            "outcome": "loss",
            "playorder": 0,
            "deck_code": "CEDACAYCCQAQIAQOAIAQEBQJAIAQKFIWAIDAEAYJAQDAKEAUEYUQEAIBAUPACBQFBYAA",
            "factions": [
                "Ionia",
                "ShadowIsles"
            ],
            "champions": [
                "Zed",
                "Kalista"
            ],
            "op_factions": [
                "BandleCity",
                "Piltover"
            ],
            "op_champions": [
                "Seraphine",
                "Caitlyn"
            ]
        },
        {
            "game_start_time_utc": "2024-01-17T06:20:05.551Z",
            "total_turn_count": 24,
            "outcome": "win",
            "playorder": 0,
            "deck_code": "CEDACAYCCQAQIAQOAIAQEBQJAIAQKFIWAIDAEAYJAQDAKEAUEYUQEAIBAUPACBQFBYAA",
            "factions": [
                "Ionia",
                "ShadowIsles"
            ],
            "champions": [
                "Zed",
                "Kalista"
            ],
            "op_factions": [
                "Ionia",
                "Piltover"
            ],
            "op_champions": [
                "Teemo"
            ]
        },
        {
            "game_start_time_utc": "2024-01-16T17:50:11.135Z",
            "total_turn_count": 20,
            "outcome": "win",
            "playorder": 1,
            "deck_code": "CEDACAYCCQAQIAQOAIAQEBQJAIAQKFIWAIDAEAYJAQDAKEAUEYUQEAIBAUPACBQFBYAA",
            "factions": [
                "Ionia",
                "ShadowIsles"
            ],
            "champions": [
                "Zed",
                "Kalista"
            ],
            "op_factions": [
                "MtTargon",
                "ShadowIsles"
            ],
            "op_champions": [
                "Viego",
                "Kalista"
            ]
        },
        {
            "game_start_time_utc": "2024-01-16T11:55:08.962Z",
            "total_turn_count": 18,
            "outcome": "win",
            "playorder": 1,
            "deck_code": "CEDACAYCCQAQIAQOAIAQEBQJAIAQKFIWAIDAEAYJAQDAKEAUEYUQEAIBAUPACBQFBYAA",
            "factions": [
                "Ionia",
                "ShadowIsles"
            ],
            "champions": [
                "Zed",
                "Kalista"
            ],
            "op_factions": [
                "MtTargon",
                "Noxus"
            ],
            "op_champions": [
                "Darius",
                "Kayle",
                "LeBlanc"
            ]
        },
        {
            "game_start_time_utc": "2024-01-16T11:38:36.027Z",
            "total_turn_count": 33,
            "outcome": "loss",
            "playorder": 1,
            "deck_code": "CEDACAYCCQAQIAQOAIAQEBQJAIAQKFIWAIDAEAYJAQDAKEAUEYUQEAIBAUPACBQFBYAA",
            "factions": [
                "Ionia",
                "ShadowIsles"
            ],
            "champions": [
                "Zed",
                "Kalista"
            ],
            "op_factions": [
                "Runeterra",
                "BandleCity"
            ],
            "op_champions": [
                "Norra",
                "Elder Dragon"
            ]
        }
    ]
}

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
