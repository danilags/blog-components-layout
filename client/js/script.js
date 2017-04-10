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
Vue.component('content-left', {
  template: `
  <div class="side-left col-md-6">
    <div class="row">
      <div class="image col-md-6">
          <img src="http://media.istockphoto.com/vectors/green-city-vector-id534213886?s=2048x2048" alt="">
      </div>
      <div class="content-post col-md-6">
          <h3>October 16, 2016</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus aliquam mattis dictum. Maecenas consequat nec nunc quis
          volutpat. Proin tincidunt nibh vel diam facilisis rhoncus.</p>
      </div>
    </div>
  </div>
  `
})

Vue.component('content-center', {
  template: `
  <div class="side-center col-md-3">
    <div clas="news-post">
      <h2>SMART NEWS</h2>
      <h4>Keeping your current</h4>
      <p>April 19, 2016</p>
    </div>
    <div class="image-news">
      <img src="http://media.istockphoto.com/vectors/young-man-giving-flowers-to-his-lover-vector-id527211614?s=2048x2048" alt="">
    </div>
  </div>
  `
})

Vue.component('content-right', {
  template: `
  <div class="side-right col-md-3">
    <div clas="title-post-related">
      <h4>SMART NEWS</h4>
    </div>
    <div class="image-related">
      <img src="http://media.istockphoto.com/vectors/man-with-laptop-vector-id509560518?s=2048x2048" alt="">
    </div>
  </div>

  `
})

Vue.component('footer-left', {
  template: `
  <div class="col-md-4 col-sm-6 footerleft ">
    <div class="logofooter">Daniel Sidabutar</div>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley.</p>
    <p><i class="fa fa-map-pin"></i>Kebon Jeruk, Jakarta - 21151, Indonesia</p>
    <p><i class="fa fa-phone"></i> Phone (India) : +91 9999 878 398</p>
    <p><i class="fa fa-envelope"></i> E-mail : info@daniel.com</p>
  </div>
  `
})

Vue.component('footer-center-satu', {
  template: `
  <div class="col-md-2 col-sm-6 paddingtop-bottom">
    <h6 class="heading7">GENERAL LINKS</h6>
    <ul class="footer-ul">
      <li><a href="#"> Career</a></li>
      <li><a href="#"> Privacy Policy</a></li>
      <li><a href="#"> Terms & Conditions</a></li>
      <li><a href="#"> Client Gateway</a></li>
      <li><a href="#"> Ranking</a></li>
      <li><a href="#"> Case Studies</a></li>
      <li><a href="#"> Frequently Ask Questions</a></li>
    </ul>
  </div>
  `
})

Vue.component('footer-center-dua', {
  template: `
  <div class="col-md-3 col-sm-6 paddingtop-bottom">
    <h6 class="heading7">LATEST POST</h6>
    <div class="post">
      <p>Cara Belanja</p>
      <p>Pembayaran</p>
      <p>Jaminan Aman</p>
      <p>Tips Berbelanja</p>
      <p>Beli Produk Trending</p>
      <p>Produk Terkini</p>
    </div>
  </div>
  `
})

Vue.component('footer-right', {
  template: `
  <div class="col-md-3 col-sm-6 paddingtop-bottom">
    <div class="fb-page" data-href="https://www.facebook.com/danilags94" data-tabs="timeline" data-height="300" data-small-header="false" style="margin-bottom:15px;" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
      <div class="fb-xfbml-parse-ignore">
        <blockquote cite="https://www.facebook.com/facebook"><a href="https://www.facebook.com/facebook">Facebook</a></blockquote>
      </div>
    </div>
  </div>
  `
})

Vue.component('home', {
  template: '#home-template'
})

Vue.component('post', {
  template: '#list-post',
  props: ['postingan']

})

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

var app = new Vue({
  // router,
  el: '#myapp',
  data : {
    currentView: 'home',
    posts: []

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
             console.log(response.data);
           })
           .catch(function(error) {
             console.log(error);
           })
    }
  },
  mounted : function() {
    this.getPosts()
  }
})
// .$mount('#myapp')
