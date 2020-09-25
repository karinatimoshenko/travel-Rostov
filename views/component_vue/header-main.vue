<template>
  <div class="header">
    <b-navbar type="dark" variant="dark" class="pb-0">
      <b-navbar-nav>
        <b-nav-item href="/" class="brand">
          <img src="/images/brand.svg" alt="logo"/>
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
            <button class="ml-3 mr-3" v-b-modal.modal-1>войти</button>
          </b-navbar-nav>
        </b-row>
        <b-row class="m-0 align-items-end">
          <div class="menu text-left">
            <a href="/showplaces">Достопримечательности</a>
            <a href="#">События</a>
            <a href="/routes">Маршруты</a>
            <a href="#" class="mr-3">Новости</a>
          </div>
        </b-row>
      </div>
    </b-navbar>

    <b-modal id="modal-1" hide-footer>
      <form action="/login" method="post">
            <h3>ВОЙТИ</h3>

            <p class="text-muted"> Введите данные</p>
            <div class="form-group">
              <input type="email" name="username" class="form-control"
                     placeholder="email">

              <input type="password" name="password" class="form-control" placeholder="Пароль">
            </div>
<!--            <img src="/images/brand.svg" class="logo" alt="logo"/>-->
            <b-check class="mt-3 mb-3"> запомнить меня</b-check>
            <div class="text-center">
              <a v-b-modal.modal-2> зарегистрироваться</a>
              <button type="submit" class="btn-login mt-3">ВОЙТИ</button>
            </div>
      </form>
    </b-modal>

    <b-modal id="modal-2" hide-backdrop hide-footer>
      <form action="/signup" method="post">
        <h3>Регистрация</h3>

        <p class="text-muted"> Введите данные</p>
        <div class="form-group">
          <input type="email" name="login" class="form-control"
                 placeholder="email">
          <input type="password" name="password" class="form-control" placeholder="Пароль">

          <input type="text" name="firstname" class="form-control"
                 placeholder="Ваше имя">

          <input type="text" name="lastname" class="form-control"
                 placeholder="Ваша фамилия">

          <input type="tel" name="tel" class="form-control"
                 placeholder="Номер телефона">
        </div>
        <div class="text-center">
          <button type="submit" class="btn-login mt-3">ЗАРЕГИСТРИРОВАТЬСЯ</button>
        </div>
      </form>
    </b-modal>

  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>