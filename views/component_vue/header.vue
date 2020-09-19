<template>
  <div class="header">
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item href="/" class="brand">
          <img src="/images/brand.svg" />
        </b-nav-item>
      </b-navbar-nav>
      <div class="header-right-items align-items-end">
        <b-row class="m-0">
          <b-navbar-nav class="ml-auto pt-3">
            <b-nav-item href="#" class="mr-3"
                        v-b-tooltip.hover title="Мои заказы">
              <i class="fas fa-suitcase-rolling"></i>
            </b-nav-item>
            <div class="form-group has-search mr-3 ml-3">
              <span class="fa fa-search form-control-feedback"></span>
              <input type="text" class="form-control" placeholder="поиск">
            </div>
            <button class="ml-3 mr-3">войти</button>
          </b-navbar-nav>
        </b-row>
        <b-row class="m-0 align-items-end">
          <div class="menu text-left">
            <a href="/showplace">Достопримечательности</a>
            <a href="#">События</a>
            <a href="#">Маршруты</a>
            <a href="#" class="mr-3">Новости</a>
          </div>
        </b-row>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {

}
</script>
