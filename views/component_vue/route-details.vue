<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item href="/">
        Главная
      </b-breadcrumb-item>
      <b-breadcrumb-item href="/routes">Маршруты</b-breadcrumb-item>
      <b-breadcrumb-item href="#">Музеи и памятники архитектуры</b-breadcrumb-item>
      <b-breadcrumb-item active>Архитектура Таганрога</b-breadcrumb-item>
    </b-breadcrumb>

    <div class="details">
      <h3 class="mb-4">Архитектура Таганрога</h3>
      <b-row class="m-0">
        <b-col cols="7">
          <img src="/images/showplace/dvorec-alferaki.jpg">
          <p class="mt-3">
            Маршрут берет начало в Доме музее Вересаева, который располагается в особняке, принадлежавшем родителям писателя Викентию Игнатьевичу и Елизавете Павловне Смидовичам. Здесь родился и провёл свои детские и юношеские годы будущий писатель, пушкинист, переводчик и литературный критик В.В. Вересаев (Смидович). Это единственная сохранившаяся в Туле городская усадьба. На данный момент восстановлены некоторые из ее элементов - посажена березовая аллея, культивируются фруктовые деревья, разбиты клумбы и цветники.
            Следующей точкой посещения станет Государственный мемориальный и природный заповедник "Музей-усадьба Л.Н. Толстого "Ясная Поляна". Сегодня Ясная Поляна - это крупный музейный комплекс; помимо самой усадьбы, в него входит целая сеть филиалов. Так что «география» музея по своему богатству вполне способна соперничать с его историей и многообразием деятельности.
          </p>
          <div class="area-blue p-3">
            <b-row>
              <b-col cols="1">
                <h1><i class="fas fa-route"></i></h1>
              </b-col>
              <b-col cols="11">
                <p class="mt-3">Продолжительность: 2 часа</p>
              </b-col>
            </b-row>
          </div>
          <b-row class="route-list p-3" v-for="n in 3"
                 :key="n.id">
            <b-col>
              <b-img src="/images/showplace/dvorec-alferaki.jpg"
                     rounded="circle"
                     alt="route image"></b-img>
            </b-col>
            <b-col class="pt-4">
                <b-row>
                    <h5>МУЗЕЙ</h5>
                </b-row>
                <b-row>
                  <span>Дом А.П. Чехова</span><br>
                  <span class="text-muted"> <i class="fas fa-map-marker-alt"></i> г.Таганрог ул.Чехова 5</span>
                </b-row>
            </b-col>
            <b-col class="pt-5">
              <div class="number-showplace">{{n}}</div>
            </b-col>
          </b-row>
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
      <h2 class="mb-2 border-bottom">Другие маршруты</h2>
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