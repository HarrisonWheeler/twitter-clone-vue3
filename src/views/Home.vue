<template>
  <div class="home container-fluid bg-primary">
    <div class="row bg-full p-2">
      <div class="col-2 text-light d-flex align-items-end flex-column p-2">
        <i class="fab fa-2x fa-twitter"></i>
        <br />
        <i class="fas fa-2x fa-home"></i>
        <br />
        <i class="fas fa-2x fa-hashtag"></i>
        <br />
        <i class="far fa-2x fa-bell"></i>
        <br />
        <i class="far fa-2x fa-envelope"></i>
        <br />
        <i class="far fa-2x fa-bookmark"></i>
        <br />
        <i class="fas fa-2x fa-inbox"></i>
        <br />
        <i class="far fa-2x fa-user"></i>
        <br />
        <i class="fas fa-2x fa-ellipsis-h"></i>
        <br />
      </div>
      <div class="col-6">
        <div class="card text-white bg-primary mb-3" style="max-width: 37rem">
          <div class="card-header">
            <h4><strong>Home</strong></h4>
          </div>
          <div class="card-body">
            <div class="form-group">
              <i class="far fa-2x fa-user"></i>
              <input
                class="form-control form-control-lg bg-primary border-0"
                type="text"
                placeholder="What's happening?"
                id="inputLarge"
              />
            </div>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="form-group p-2 pb-5">
          <input
            type="text"
            class="form-control search-bar bg-primary"
            placeholder="Search Twitter Clone"
            id="inputDefault"
          />
        </div>
        <div class="card mb-3 bg-primary border-radius text-light">
          <h4 class="card-header">What's Happening</h4>
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NewsFeed from "@/components/NewsFeed.vue";
export default {
  name: "Home",
  components: {
    NewsFeed,
  },
};
</script>
<style scoped>
.bg-full {
  min-height: 100vh;
}
.search-bar {
  border-radius: 20px 20px 20px 20px;
}
.border-radius {
  border-radius: 15px 15px 15px 15px;
}
.cursor {
  cursor: pointer;
}
</style>
