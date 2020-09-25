<template>
  <div>

    <b-breadcrumb>
      <b-breadcrumb-item href="/">
        Главная
      </b-breadcrumb-item>
      <b-breadcrumb-item href="/showplaces">Достопримечательности</b-breadcrumb-item>
      <b-breadcrumb-item href="#">Соборы</b-breadcrumb-item>
      <b-breadcrumb-item active>Вознесенский собор</b-breadcrumb-item>
    </b-breadcrumb>

    <div class="details">
      <h3 class="mb-4">Патриарший Вознесенский войсковой всеказачий собор</h3>
      <b-row class="m-0">
        <b-col cols="7">
          <img src="/images/showplace/vosnesensky2.jpg">
          <b-card no-body>
            <b-tabs pills card>

              <b-tab title="Описание" active><b-card-text>
                <p>
                  Несомненно, главной достопримечательностью Новочеркасска является «второе солнце Дона» Патриарший Вознесенский войсковой всеказачий собор, заложенный и освященный еще при основании города в 1805 г. в святой праздник Вознесения Христова. Однако строительство собора по проекту архитектора Алоизия Руска началось только 1 октября 1811 г. Строил собор брат архитектора Иероним Руска. В 1818 г. братья Руска покинули Россию, и строительство собора продолжил архитектор Амвросимов (по 1825 г.). В 1846 г. при сведении главного купола собора неожиданно обрушилась часть храма. Та же участь постигла и второй вариант собора, строившийся по проекту архитектора  И.О. Вальпреда.

                  В 1891 г. казаки было решено приступить к строительству третьего варианта собора по проекту академика А.А.Ященко. В 1900 г. собор вчерне построили, в 1902 г. начались художественные и деревянные работам. Летом 1904 года «второе солнце Дона» должно было быть открыто, но из-за того, что не приехал почетный гость, Император Николай II, была открыта только Покровская церковь в верхнем подвале. Здание же в целом освятили и открыли только 6 мая 1905 г.
                </p>
                <p>
                  Стоимость билетов — 800 рублей
                </p>
                <p>
                  Граждане Российской Федерации и Республики Беларусь – 400 рублей
                </p>
                <p>
                  Дети, студенты, пенсионеры РФ – бесплатно
                </p>
              </b-card-text></b-tab>

              <b-tab title="Галерея" class="gallery"><b-card-text>
                  <a href="/images/showplace/vosnesensky.jpg"
                     data-fancybox="gallery">
                    <img src="/images/showplace/vosnesensky.jpg" alt="img-showplace" v-b-modal.modal-img/>
                  </a>
                  <a data-fancybox="gallery" href="/images/showplace/vosnesensky2.jpg">
                    <img src="/images/showplace/vosnesensky2.jpg"
                         alt="img-showplace" v-b-modal.modal-img/>
                  </a>
              </b-card-text></b-tab>

              <b-tab title="Аудиогид"><b-card-text>
                <b-row>
                  <b-col cols="2">
                    <p>1. RUS:</p>
                  </b-col>
                  <b-col cols="10">
                      <audio controls>
                        <source src="/audio/1.ogg" type="audio/ogg; codecs=vorbis">
                        <source src="/audio/1.mp3" type="audio/mpeg">
                        <p>Ваш браузер не поддерживает HTML5 аудио. Вот взамен
                          <a href="/audio/1.mp3">ссылка на аудио</a></p>
                      </audio>
                  </b-col>
                </b-row>
                <b-row class="mt-2">
                  <b-col cols="2">
                    <p>2. ENG:</p>
                  </b-col>
                  <b-col cols="10">
                    <audio controls>
                      <source src="/audio/1.ogg" type="audio/ogg; codecs=vorbis">
                      <source src="/audio/1.mp3" type="audio/mpeg">
                      <p>Ваш браузер не поддерживает HTML5 аудио. Вот взамен
                        <a href="/audio/1.mp3">ссылка на аудио</a></p>
                    </audio>
                  </b-col>
                </b-row>
              </b-card-text></b-tab>

              <b-tab title="Контакты "><b-card-text>
                <p><i class="fas fa-globe mr-2"></i> www.hermitagemuseum.org</p>
                <p><i class="fas fa-phone-alt mr-2"></i> 79797979  </p>
                <p><i class="far fa-calendar-alt mr-2"></i> Вт, Ср, Чт, Вcк 10:00 - 18:00 Пт, Суб 10:00 - 20:00  </p>
              </b-card-text></b-tab>
            </b-tabs>
          </b-card>
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
      <h2 class="mb-2 border-bottom">Интересные места рядом</h2>
      <b-card no-body class="mt-2">
        <b-tabs pills card vertical end>
          <b-tab title="Места" active>
            <b-card-text>
              <div v-for="product in 3"
                   :key="product.id"
                   class="showplace-card m-2">
                <a href="/showplace-details" class="card-link">
                  <b-card
                      overlay
                      img-src="/images/showplace/3.jpg"
                      img-alt="showplace-img"
                      text-variant="white"
                      title="Вознесенский собор">
                  </b-card>
                </a>
              </div>
            </b-card-text>
          </b-tab>

          <b-tab title="Гастрономия">
            <b-card-text>
              <div v-for="product in 3"
                   :key="product.id"
                   class="showplace-card m-2">
                <a href="/showplace-details" class="card-link">
                  <b-card
                      overlay
                      img-src="/images/showplace/16.jpg"
                      img-alt="showplace-img"
                      text-variant="white"
                      title="Кухня на районе">
                  </b-card>
                </a>
              </div>
            </b-card-text>
          </b-tab>

          <b-tab title="Размещение">
            <b-card-text>
              <div v-for="product in 3"
                   :key="product.id"
                   class="showplace-card m-2">
                <a href="/showplace-details" class="card-link">
                  <b-card
                      overlay
                      img-src="/images/showplace/hutor.jpg"
                      img-alt="showplace-img"
                      text-variant="white"
                      title="Отель №1">
                  </b-card>
                </a>
              </div>
            </b-card-text>
          </b-tab>

          <b-tab title="Досуг">
            <b-card-text>
              <div v-for="product in 3"
                   :key="product.id"
                   class="showplace-card m-2">
                <a href="/showplace-details" class="card-link">
                  <b-card
                      overlay
                      img-src="/images/showplace/hutor.jpg"
                      img-alt="showplace-img"
                      text-variant="white"
                      title="Отель №1">
                  </b-card>
                </a>
              </div>
            </b-card-text>
          </b-tab>

        </b-tabs>
      </b-card>

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