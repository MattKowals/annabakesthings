<template>

  <div class="page-container">
    
    <div class="logo">
      <RouterLink to="/">
        <img alt="ABT logo" class="logo" src="@/assets/ABT_logo.jpg" width="210" height="210" />
      </RouterLink>
    </div> 

    <div class="title">
      <h1 class="title-text">Anna Bakes Things</h1>
    </div>

    <header class="header">
      <RouterLink to="/">Home</RouterLink> | 
      <RouterLink to="/bread">Breads</RouterLink> | 
      <RouterLink to="/about">About</RouterLink> 
    </header>

    <main class="main">
      <div>
          <RouterView />
      </div>
    </main>


    <div class="footer">
      <footer class="footer">
        <h3>AnnaBakesThings Links</h3>

          <i class="bi bi-facebook"><a href="https://www.facebook.com/annabakesthings/" target="_blank" rel="noopener">Facebook</a></i>
          <i class="bi bi-instagram"><a href="https://www.instagram.com/annabakesthings614/?img_index=1" target="_blank" rel="noopener">Instagram</a></i>

      </footer>
    </div>

    <div class="designer">
      <h3>KowalskiKodes Designs</h3>
    </div>


  </div>



</template>

<style >

.page-container {
  padding: 0%;
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr 3fr;
  grid-template-rows: 200px 1fr 100px;
  grid-template-areas: 
      "logo title header"
      "main main main"
      "footer footer designer";
}

.title {
  grid-area: title;
  max-height: 100vh;
  align-content: center;
}

.title-text {
  font-size: 70px;
  color: teal;
}


header {
  grid-area: header;
  line-height: 1.5;
  max-height: 100vh;
  font-size: 30px;
  justify-content: right;
  display: flex;
  place-items: center;
  padding-right: 5%;
}

header a {
  color: teal;
}

footer a {
  color: blue;
}

.logo {
  grid-area: logo;
}

main {
  grid-area: main;
  background-color: azure;
}

.footer {
  grid-area: footer;
  background-color: rgb(162, 216, 216);
  font-size: 17px;
  font-style: italic;
  text-indent: 30px;
  align-content: center;
}

.designer {
  grid-area: designer;
  background-color: rgb(162, 216, 216);
  align-content: center;
  font-size: 12px;
  text-align: right;
  padding-right: 12px;
}

.router {
  color: blue;
}


</style>
