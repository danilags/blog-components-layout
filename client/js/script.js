// register nav
Vue.component('navigasi-awak', {
  template: `
    <div class="custom-nav">
    <nav class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item">
            <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
          </a>
          <a href="#" @click="changeView('home')" class="nav-item is-tab is-hidden-mobile is-active">Home</a>
          <a href="#" @click="changeView('post')" class="nav-item is-tab is-hidden-mobile" >Whats New</a>
        </div>
        <span class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div class="nav-right nav-menu">
          <a class="nav-item is-tab is-hidden-tablet is-active">Home</a>
          <a class="nav-item is-tab is-hidden-tablet">Features</a>
          <a class="nav-item is-tab is-hidden-tablet">Pricing</a>
          <a class="nav-item is-tab is-hidden-tablet">About</a>
          <a class="nav-item is-tab">
            <figure class="image is-16x16" style="margin-right: 8px;">
              <i class="fa fa-plus" aria-hidden="true"></i>
            </figure>
            Add Article
          </a>
          <a class="nav-item is-tab">Log out</a>
        </div>
      </div>
      </nav>
    </div>
  `,
  methods: {
    changeView: function(comp) {
      this.$emit('change-view', comp)
    }
  }
})

// register content-left

Vue.component('home', {
  template: '#home-template'
})

Vue.component('post', {
  template: '#list-post',
  props: ['postingan']
})

Vue.component('nav-kanan', {
  template: '#custom-nav',
  props: ['postingan'],
  methods: {
    ubahNav: function(data) {
      console.log("-------- ", data);
      this.$emit('ubah-nav', data)
    }
  }
})

Vue.component('content-awal', {
  // template: '#konten-kiri',

  props: ['postinganawal'],
  template: '#left-content'
})


var app = new Vue({
  // router,
  el: '#myapp',
  data : {
    currentView: 'home',
    posts: [],
    data1: null

  },
  methods: {
    setCurrentView: function(comp) {
      console.log('ini comp ', comp);
      this.currentView=comp;
    },
    getPosts: function() {

      axios.get('http://localhost:3000/api/article')
           .then(function(response) {
             response.data.forEach(function(post) {
               app.posts.push(post)
             })
             app.data1 = response.data[0]
             console.log(response.data);
           })
           .catch(function(error) {
             console.log(error);
           })
    },
    setData1: function(post) {
      console.log("ini post --------- ", post);
      this.data1 = post
    }
  },
  mounted : function() {
    this.getPosts()
  }
})
// .$mount('#myapp')


// var home = {
//   template: '#home-template'
// }
//
// var post = {
//   template: '#list-post'
// }

// const routes = [
//   { path: '/', component: home },
//   { path: '/posts', component: post, props: (route) => ({posts: posts})}
// ]
//
// const router = new VueRouter({
//   routes
// })
