<template>
  <div class="special-route">
    <h2>Заявка на индивидуальный туристический маршрут, <br> с учетом выбранных критериев</h2>

    <b-row class="border-bottom">
      <b-col>
        <p> 1. Ваше местоположение: </p>
      </b-col>
      <b-col>
        <div class="suggestion-city float-left mr-3">
          г. Ростов-на-Дону <i class="fas fa-times"></i>
        </div>
        <i class="fas fa-plus-circle"></i>
      </b-col>
    </b-row>

    <b-row class="border-bottom mt-3">
      <b-col>
        <p> 2. Сколько времени Вы готовы посвятить путешествию? </p>
      </b-col>
      <b-col>
        <b-form-input type="range" min="1" step="0.5" v-model="value"></b-form-input>
        {{value}} ч.
      </b-col>
    </b-row>

    <b-row class="border-bottom mt-3">
      <b-col>
        <p> 3. Удобный способ передвижения: </p>
      </b-col>
      <b-col>
        <b-form-group>
          <b-form-checkbox-group
              id="checkbox-group-1"
              v-model="selected"
              :options="options"
              stacked
          ></b-form-checkbox-group>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row class="border-bottom mt-3">
      <b-col>
        <p> 4. Что Вам интересно увидеть? </p>
      </b-col>
      <b-col>
        <div>
          <b-form-group>
            <b-form-checkbox-group
                id="checkbox-group-1"
                :options="showplace"
                stacked
            ></b-form-checkbox-group>
          </b-form-group>
        </div>
      </b-col>
    </b-row>

    <b-row class="border-bottom mt-3">
      <b-col>
        <p> 5. Вариант тура: </p>
      </b-col>
      <b-col>
        <b-form-radio-group
            id="radio-group-2"
            :options="prices"
        ></b-form-radio-group>
      </b-col>
    </b-row>

    <b-row class="border-bottom mt-3">
      <b-col>
        <p> 6. Сколько человек отправляется в путешествие? </p>
      </b-col>
      <b-col>
        <b-button-group>
          <b-form-input type="number" min="1" value="1" class="count-people"></b-form-input>
        </b-button-group>
      </b-col>
    </b-row>
    <b-row class="mt-3">
      <b-col>
        <p> Комментарии:  </p>
      </b-col>
      <b-col>
        <b-form-textarea
            id="textarea"
            placeholder="Напишите сюда ваши пожелания, если они имеются"
            rows="3"
            max-rows="6"
        ></b-form-textarea>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: '8',
        selected: [],
        options: [
          { text: 'автомобиль', value: 'автомобиль' },
          { text: 'велосипед', value: 'велосипед' },
          { text: 'пешком', value: 'пешком' },
          { text: 'ж/д', value: 'ж/д' },
          { text: 'автобус', value: 'автобус' },
        ],
        showplace: [
          { text: 'Соборы и памятники архитектуры', value: 'Соборы и памятники архитектуры' },
          { text: 'Природа', value: 'велосипед' }
          ],
        prices: [
          { text: 'эконом', value: 'эконом' },
          { text: 'стандарт', value: 'стандарт' },
          { text: 'премиум', value: 'премиум' },
        ]
      }
    }
  }
</script>