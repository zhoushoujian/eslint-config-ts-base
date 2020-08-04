<script>
export default {
  props: ["applePic", "apple", "changeWeight", "eatApple"]
};
</script>

<template>
  <div>
    <div class="apple">
      <img :src="applePic" alt="apple" />
    </div>
    <div class="info">
      <div class="name">abc - 222号</div>
      <div class="weight">{{apple.currentWeight}}克</div>
    </div>
    <div class="btn-div">
      <button @click="eatApple(apple)">吃掉</button>
      <button @click="changeWeight(apple.appleIndex)">重量改变</button>
    </div>
  </div>
</template>

