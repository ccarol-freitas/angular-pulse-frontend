<template>
  <div id="teladetalhamento">
    <router-link :to="{ name: 'TelaInicial' }">
      <div class="come-back">
        <p><i class="fa fa-angle-left"></i><span>Voltar</span> Detalhes do item</p>
      </div>
    </router-link>

    <div class="content">
      <div class="card-detail" v-for="product in products" :key="product.id">
        <figure>
          <img src="https://loremflickr.com/250/250" class="card-img-top img-card" />
        </figure>
        <!-- <span class="badge badge-dark">{{ product.categories }}</span> -->
        <div class="card-body-detail">
          <h5 class="card-title-detail">
            {{ product.name }}
          </h5>
          <p class="card-text-detail">
            {{ product.description }}
          </p>
          <h4 class="currency">R$ {{ product.price }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "teladetalhamento",
  props: {
    id: {
      type: Number,
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: String,
    },
    categories: [
      {
        id: Number,
        name: String,
      },
    ],
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    console.log("Produtos");
    this.getProducts();
  },

  methods: {
    getProducts() {
      console.log("teste");
      axios
        .get("https://gorest.co.in/public-api/products?id=" + this.$route.params.id)
        .then((response) => {
          console.log(response);
          this.products = response.data.data;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
};
</script>

<style>
#teladetalhamento {
  background: #f2f2f2;
}

.product-count {
  display: flex;
  justify-content: center;

  width: 100%;
  height: 40px;
  padding: 10px 0;

  background: #ccc;

  color: #262626;
}

.card-detail {
  width: 100%;
  height: auto;
  margin: 10px;
}

.card-body-detail {
  padding: 10px;
}

.card-title-detail {
  text-align: left;
  font-family: -webkit-pictograph;
  color: #636560;

  padding-bottom: 10px;
  margin-bottom: 0;
}
.come-back {
  justify-content: left;
  display: flex;

  width: 100%;
  height: 50px;

  padding: 10px 0;
  background: #ccc;

  font-weight: 400;
  color: #262626;
}

.come-back p {
  margin: 0;
}

.come-back span {
  border-right: 1px solid #111111;
  padding: 0px 10px 0px 10px;
  height: 20px;
}

.come-back i {
  padding: 0px 0px 0px 10px;
  font-size: 24px;
}
.currency {
  color: #262626;
  font-size: 2rem;
}

figure {
  float: left;
  margin: 0 10px 10px 0;
  border-radius: 16px;
}

.img-card {
  width: 200px;
  padding-right: 30px;
}

a {
  text-decoration: none !important;
}
a:hover {
  color: #005579;
}
</style>
