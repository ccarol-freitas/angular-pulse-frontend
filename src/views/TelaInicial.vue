<template>
  <div id="products">
    <div class="product-count">
    <!--{{ product.counter }}-->
      <p>registros encontrados</p>
    </div>
    <div class="content">
      <div class="card">
        <router-link
          class="redirect"
          :to="{ name: 'Teladetalhamento', params: { id: product.id } }"
        >
          <img src="https://loremflickr.com/250/250" class="card-img-top" />
          <!-- <span class="badge badge-dark">{{ product.categories }}</span> -->

          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <h4 class="currency">R$ {{ product.price }}</h4>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "products",
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
        .get("https://gorest.co.in/public-api/products")
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
.product-count {
  display: flex;
  justify-content: center;

  width: 100%;
  height: 40px;
  margin: 0;
  padding: 0;

  background: #ccc;

  color: #262626;
}

.content {
  margin: 0 auto;
  max-width: 100%;
  width: 1080px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.redirect {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-decoration: none;
  color: #262626;
}

.card {
  flex: 1 1 250px;
  width: 300px;
  height: auto;
  box-shadow: 0px 4px 42px rgba(0, 0, 0, 0.25);
  margin: 10px;
  border-radius: 10px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.card img {
  width: 100%;
}

.card-body {
  padding: 10px;
}

.card-title {
  text-align: left;
  margin-bottom: 0;
  color: #4b515c;
}

.card-text {
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: "…";
  color: #4b515c;
}

.currency {
  color: #636560;
  font-size: 18px;
}

a {
  text-decoration: none !important;
}

a:hover {
  color: #005579;
}
</style>
