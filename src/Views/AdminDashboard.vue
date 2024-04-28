<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-card-title>搜索</v-card-title>
              <v-card-text>
                <v-form>
                  <v-row>
                    <v-col cols="6">
                      <v-text-field label="出发城市" outlined></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field label="目的地" outlined></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6">
                      <v-menu
                      ref="menu1"
                        v-model="menu1"
                        :close-on-content-click="false"
                        :return-value.sync="date"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                      >
                        <template v-slot:activator="{props }">
                          <v-text-field
                            v-model="date"
                            label="选择日期"
                            readonly
                            v-bind="props"
                            outlined
                          ></v-text-field>
                        </template>
                        <v-date-picker v-model="date" no-title scrollable>
                          <v-spacer></v-spacer>
                          <v-btn text color="primary" @click="menu1 = false">
                            取消
                          </v-btn>
                          <v-btn text color="primary" @click="$refs.menu.save(date)">
                            确定
                          </v-btn>
                        </v-date-picker>
                      </v-menu>
                    </v-col>
                    <v-col cols="6">
                      <v-menu
                        v-model="menu2"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                      >
                        <template v-slot:activator="{ props}">
                          <v-text-field
                            v-model="date"
                            label="到达日期"
                            readonly
                            v-bind="props"
                            outlined
                          ></v-text-field>
                        </template>
                        <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
                      </v-menu>
                    </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="6">
                        <v-select
                          label="旅行类型"
                          outlined
                          :items="travelTypes"
                        ></v-select>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field label="人数" outlined></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" class="text-right">
                        <v-btn color="primary" @click="search">
                          搜索
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-card-title>搜索结果</v-card-title>
              <v-card-text>
                <v-data-table
                  :headers="headers"
                  :items="results"
                  :loading="loading"
                  :sort-desc.sync="sortDesc"
                  class="elevation-1"
                >
                  <template #[`item.price`]="{ item }">
                    {{ formatCurrency(item.price) }}
                  </template>
                  <template #[`item.rating`]="{ item }">
                    <v-rating :value="item.rating" color="amber" dense small readonly></v-rating>
                  </template>
                </v-data-table>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      menu1: false,
      menu2: false,
      travelTypes: ['机票', '酒店', '套餐'],
      date: new Date(),
      headers: [
        { text: '类型', value: 'type' },
        { text: '价格', value: 'price', align: 'right' },
        { text: '评分', value: 'rating', align: 'right' }
      ],
      results: [],
      loading: false,
      sortBy: 'price',
      sortDesc: false
    }
  },
  methods: {
    search() {
      // 这里调用GDS API获取搜索结果
      this.loading = true
      setTimeout(() => {
        this.results = [
          { type: '机票', price: 2999.99, rating: 4.8 },
          { type: '酒店', price: 799.99, rating: 4.2 },
          { type: '套餐', price: 3999.99, rating: 4.5 }
        ]
        this.loading = false
      }, 1000)
    },
    formatCurrency(value) {
      return `¥${value.toFixed(2)}`
    }
  }
})
</script>
