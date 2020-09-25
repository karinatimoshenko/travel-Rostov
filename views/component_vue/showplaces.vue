<template>
  <div>
    <img src="/images/showplace/platov2.jpg" alt="Аэропорт Платов" class="banner"/>
    <div class="showplace">
      <b-row class="filter pb-5 pt-5 border-bottom m-0">
        <b-col class="text-center">
            <input type="search" class="pl-3" placeholder="поиск">
            <button><i class="fas fa-search"></i></button>
        </b-col>
        <b-col class="p-3">
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
      </b-row>
      <div class="text-center mt-5 pb-5">
        <div v-for="product in 6"
             :key="product.id"
             class="showplace-card m-2"
        >
          <a href="/showplace-details" class="card-link">
            <b-card
                overlay
                img-src="/images/showplace/vosnesensky.jpg"
                img-alt="showplace-img"
                text-variant="white"
            >
              <div class="description p-1">
                <h5>Вознесенский собор</h5>
                <p>
                  <i class="fas fa-map-marker-alt"></i> г. Новочеркасск ул.Соборная 1
                </p>
              </div>
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
        options: ['Соборы', 'Казачество', 'Воинская слава']
      }
    }
  }
</script>