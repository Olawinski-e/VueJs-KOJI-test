<template>
  <div class="grid">
    <div v-for="(item, index) of items" :key="index" :item="item" class="item">
      <a :href="'/liste/' + item.id">
        <b-card
          img-top
          tag="article"
          style="max-width: 15rem; height: 280px"
          class="m-2 shadow"
        >
          <b-card-img
            src="https://picsum.photos/600/300"
            alt="Image"
            bottom
          ></b-card-img>
          <b-card-body>
            <b-card-title>
              <p class="text">{{ item.title }}</p>
            </b-card-title>
          </b-card-body>
        </b-card>
      </a>
    </div>
  </div>
</template>

<script>
import itemsService from "@/itemsService";

export default {
  name: "itemList",
  data() {
    return {
      items: [],
      article: null
    };
  },
  methods: {
    getAllItems() {
      itemsService
        .getAll()
        .then(response => {
          this.items = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.getAllItems();
  }
};
</script>

<style scoped>
</style>