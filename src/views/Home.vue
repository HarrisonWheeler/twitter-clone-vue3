<template>
  <div class="home container-fluid bg-primary bg-full">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-6"></div>
      <div class="col-4">
        <div class="form-group p-2">
          <input
            type="text"
            class="form-control search-bar"
            placeholder="Search Twitter Clone"
            id="inputDefault"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {},
};
</script>
<style scoped>
.bg-full {
  min-height: 101%;
}
.search-bar {
  border-radius: 20px 20px 20px 20px;
}
</style>
