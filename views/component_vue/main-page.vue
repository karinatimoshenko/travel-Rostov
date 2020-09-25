<template>
  <div class="main m-0">
    <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
    >
      <b-carousel-slide img-src="/images/banner/8.jpg">
        <h1>Интересные места Ростовской области</h1>
        <b-button variant="danger" href="/showplace">ОТКРЫТЬ</b-button>
      </b-carousel-slide>

      <b-carousel-slide img-src="/images/banner/2.jpg">
        <h1>О Ростовской области</h1>
        <b-button variant="danger" href="/about">ОТКРЫТЬ</b-button>
      </b-carousel-slide>

      <b-carousel-slide img-src="/images/banner/7.jpg">
        <h1>События Ростовской области</h1>
        <b-button variant="danger">ОТКРЫТЬ</b-button>
      </b-carousel-slide>

      <b-carousel-slide img-src="/images/banner/1.jpg">
        <h1>Построение индивидуальных маршрутов</h1>
        <b-button variant="danger" href="/special-route">ОТКРЫТЬ</b-button>
      </b-carousel-slide>
    </b-carousel>
    <div class="main-background">
        <div class="text-about-rostov text-center">
            <i class="fas fa-caret-down pb-5" v-for="n in 5 " :key="n.id"></i> <br>
            <span>Ростовская область — край с богатой историей.
            Донские степи помнят не только казаков, но и скифов, сарматов, греков.
            Здесь протекает одна из крупнейших рек Европы — Дон, прославленный творчеством Михаила Шолохова,
            музей писателя можно посетить в станице Вешенской. В Таганроге, на родине Антона Чехова,
            открыт исторический музей-заповедник. Любителей древности ждет Танаис — развалины античного города,
              а исследователей тайн — катакомбы в Аксае, вырытые не одну тысячу лет назад.</span> <br>
            <i class="fas fa-caret-up pt-5" v-for="n in 5 "></i> <br>
        </div>
    </div>
    <div class="text-center pb-5">
      <h3 class="m-5"><a href="/showplaces">ДОСТОПРИМЕЧАТЕЛЬНОСТИ РОСТОВСКОЙ ОБЛАСТИ</a></h3>
      <div class="align-self-center">
        <div v-for="product in 6"
             :key="product.id"
             class="showplace-card border shadow"
        >
          <a href="#" class="card-link">
            <b-card
                overlay
                img-src="/images/showplace/kazak.jpg"
                img-alt="Card Image"
                text-variant="white"
                title="КАЗАЧЕСТВО"
            >
            </b-card>
          </a>
        </div>
      </div>
    </div>
    <div class="main-background text-center p-3">
      <h3 class="m-5"> <a href="/routes" class="title-main-routes">
        МАРШРУТЫ ДЛЯ ТУРИЗМА ПО РОСТОВСКОЙ ОБЛАСТИ</a>
      </h3>
      <b-row class="text-left m-0 mb-5">
        <b-col>
          <ul>
            <li>
              <a href="#"><i class="fas fa-bicycle"></i><strong>Активный отдых</strong></a>
            </li>
            <li>
              <a href="#"><i class="fas fa-pizza-slice"></i><strong>Гастрономический туризм</strong></a>
            </li>
            <li>
              <a href="#"><i class="fas fa-tree"></i><strong>Природа</strong></a>
            </li>
          </ul>
        </b-col>
        <b-col>
          <ul>
            <li>
              <a href="#"><i class="fas fa-child"></i><strong>Отдых с детьми</strong></a>
            </li>
            <li>
              <a href="#"><i class="fas fa-university"></i><strong>Музеи и памятники архитектуры</strong></a>
            </li>
            <li>
              <a href="#"><i class="fas fa-praying-hands"></i><strong>Святые места</strong></a>
            </li>
          </ul>
        </b-col>
        <b-col>
          <ul>
            <li>
              <a href="#"><i class="fas fa-ribbon"></i><strong>Воинская слава</strong></a>
            </li>
            <li>
              <a href="#"><i class="fas fa-mug-hot"></i><strong>Традиции</strong></a>
            </li>
            <li>
              <a href="/special-route"><i class="fas fa-campground"></i><strong>Индивидуальные маршруты</strong></a>
            </li>
          </ul>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
</script>
