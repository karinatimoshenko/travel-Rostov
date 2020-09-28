<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item href="/">
        Главная
      </b-breadcrumb-item>
      <b-breadcrumb-item href="/events">События</b-breadcrumb-item>
      <b-breadcrumb-item active>Фестиваль уличной музыки</b-breadcrumb-item>
    </b-breadcrumb>

    <div class="details">
      <h3 class="mb-4">Фестиваль уличной музыки</h3>
      <b-row class="m-0">
        <b-col cols="7" class="events-date">
          <b-row class="ml-4">
            <b-col cols="1"> <h1><strong>|</strong>28</h1></b-col>
            <b-col>
              <b-row><h5 class="text-muted">Понедельник</h5></b-row>
              <b-row><h5>сентября</h5></b-row></b-col>
          </b-row>
          <img src="/images/showplace/kazaki.jpg">
          <p class="mt-3">
            До 30 марта 2021 года в Российском этнографическом музее работает выставка «Арктика – земля обитаемая». Экспозиция предлагает совершить путешествие по российским полярным просторам.

            Вниманию посетителей представлено более пятисот экспонатов из собрания Российского этнографического музея, характеризующих культурные традиции арктических народов. Посетитель здесь сможет увидеть поморский карбас и чукотские нарты, интерьер рыбацкого стана и ненецкое святилище, карельского рунопевца и селькупского шамана. На выставке представлены вещи, характеризующие бытовую культуру староверов и русского старожильческого населения: марковцев, чуванцев.

          </p>
          <div class="area-blue p-3">
            <b-row>
              <b-col cols="1">
                <h1><i class="far fa-clock"></i></h1>
              </b-col>
              <b-col cols="11">
                <p class="mt-2">Продолжительность: 2 часа</p>
              </b-col>
            </b-row>
          </div>
        </b-col>
        <b-col>
          <yandex-map
              :coords="coords"
              :zoom="10"
              @click="onClick"
          >
            <ymap-marker
                :coords="coords"
                :icon="{color: 'red'}"
            />
          </yandex-map>
        </b-col>
      </b-row>
    </div>

    <div class="mt-5 p-3 text-center place-beside">
      <h2 class="mb-2 border-bottom">Другие события</h2>
      <div v-for="product in 3"
           :key="product.id"
           class="showplace-card m-2">
        <a href="/showplace-details" class="card-link">
          <b-card
              overlay
              img-src="/images/showplace/3.jpg"
              img-alt="showplace-img"
              text-variant="white"
              title="История казачества">
          </b-card>
        </a>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      coords: [
        54.82896654088406,
        39.831893822753904,
      ],
    }
  },
  methods: {
    onClick(e) {
      this.coords = e.get('coords');
    }
  }
}
</script>