<template>
  <div class="d-flex justify-content-center">
    <b-card img-top tag="article" style="max-width: 30rem" class="m-2 shadow">
      <b-card-img src="https://picsum.photos/600/300" alt="Image" bottom>
      </b-card-img>
      <b-card-body>
        <b-card-title>
          <p class="text"><strong>Title :</strong> {{ item.title }}</p>
          <hr />
          <small>{{ item.body }}</small>
          <p class="little-text"><strong>N° of the item</strong> {{ id }}</p>
        </b-card-title>
      </b-card-body>
      <router-link to="/liste"
        ><b-button class="btn btn-info mt-4">
          back to the list
        </b-button></router-link
      >
    </b-card>
  </div>
</template>

<script>
import itemsService from "@/itemsService";

export default {
  name: "item",
  data() {
    return {
      id: this.$route.params.id,
      item: []
    };
  },
  methods: {
    getArticle() {
      itemsService
        .getItem(this.id)
        .then(res => {
          this.item = res.data;
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  created() {
    this.getArticle();
  }
};
</script>

<style scoped>
</style>