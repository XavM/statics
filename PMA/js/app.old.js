var app = new Framework7({
  // App root element
  el: '#app',
  name: 'My App',
  theme: 'ios',
  panel: {
    swipe: true,
  },
  routes: [
    {
      name: 'home',
      path: '/home/',
      url:'./pages/home.html'
    },
    {
      name: 'about',
      path: '/about/',
      url: './pages/about.html',
    },
    {
      path: '(.*)',
      url: './pages/404.html',
    }
  ]
});

var mainView = app.views.create('.view-main');

const signIn = () => {
  var username = $('input#demo-username-1').val();
  var password = $('input#demo-password-1').val();

  console.log({username, password})
}
