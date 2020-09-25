<template>
  <div>
    <img src="/images/cyclist.jpg" alt="" class="banner"/>
    <div class="routes">
      <b-row class="filter pb-5 pt-5 border-bottom m-0">
        <b-col class="text-center pt-3">
            <input type="search" class="pl-3" placeholder="поиск">
            <button><i class="fas fa-search"></i></button>
        </b-col>
        <b-col>
          <div class="box">
            <select>
              <option selected disabled>Выберите категорию:</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
              <option>Option 5</option>
            </select>
          </div>
        </b-col>
        <b-col class="text-center text-white">
          <span>Продолжительность:</span>
          <strong>{{value}} ч. </strong>
          <b-form-input type="range" min="1" step="0.5" v-model="value"></b-form-input>

        </b-col>
      </b-row>

      <div class="text-center mt-5 pb-5">
        <div v-for="product in 6"
             :key="product.id"
             class="routes-card m-2"
        >
          <a href="/route-details" class="card-link">
            <b-card
                overlay
                img-src="/images/showplace/dvorec-alferaki.jpg"
                img-alt="showplace-img"
                text-variant="white"
            >
              <div class="description p-1">
                <h4>Архитектура Таганрога</h4>
                <small>
                  <i class="fas fa-clock"></i> Продолжительность: 6 ч.
                </small>
              </div>
              <b-card-text>

              </b-card-text>
            </b-card>

          </a>
        </div>
      </div>
      <div class="filter p-5"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: '8',
      }
    }
  }
</script>