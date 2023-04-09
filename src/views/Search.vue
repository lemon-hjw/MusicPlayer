<template>
  <div class="searchTop">
    <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
      <use xlink:href="#icon-zuojiantou"></use>
    </svg>
    <input
      type="text"
      placeholder="防弹少年团"
      @keydown.enter="enterKey"
      v-model="searchKey"
    />
  </div>
  <div class="searchHistory">
    <span class="searchSpan">历史</span>
    <span
      v-for="item in keyWordList"
      :key="item"
      class="spanKey"
      @click="searchHistory(item)"
      >{{ item }}</span
    >
    <svg class="icon" aria-hidden="true" @click="del">
      <use xlink:href="#icon-shanchu"></use>
    </svg>
  </div>
  <div class="itemList">
    <div class="item" v-for="(item, i) in searchList" :key="i">
      <div class="itemLeft" @click="updateIndex(item)">
        <span class="leftSpan">{{ i + 1 }}</span>
        <div>
          <p>{{ item.name }}</p>
          <span v-for="(item1, index) in item.ar" :key="index">{{
            item1.name
          }}</span>
        </div>
      </div>
      <div class="itemRight">
        <svg class="icon bofang" aria-hidden="true" v-if="item.mv != 0">
          <use xlink:href="#icon-shipinbofang"></use>
        </svg>
        <svg class="icon liebiao" aria-hidden="true">
          <use xlink:href="#icon-31liebiao"></use>
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
import { getSearchMusic } from "@/request/api/home.js";
export default {
  data() {
    return {
      keyWordList: [],
      searchKey: "",
      searchList: [],
    };
  },
  mounted() {
    this.keyWordList = JSON.parse(localStorage.getItem("keyWordList")) || [];
  },
  methods: {
    enterKey: async function () {
      if (this.searchKey !== "") {
        this.keyWordList.unshift(this.searchKey);
        this.keyWordList = [...new Set(this.keyWordList)];
        if (this.keyWordList.length > 10) {
          this.keyWordList.pop(this.keyWordList.length - 1);
        }
        localStorage.setItem("keyWordList", JSON.stringify(this.keyWordList));
        let res = await getSearchMusic(this.searchKey);
        console.log(res);
        this.searchList = res.data.result.songs;
        this.searchKey = "";
      }
    },
    del: function () {
      localStorage.removeItem("keyWordList");
      this.keyWordList = [];
    },
    searchHistory: async function (item) {
      let res = await getSearchMusic(item);
      console.log(res);
      this.searchList = res.data.result.songs;
    },
    updateIndex: function (item) {
      // item.al = item.album;
      // item.al.picUrl = item.al.img1v1Url;

      this.$store.commit("pushPlayList", item);
      this.$store.commit(
        "updatePlayListIndex",
        this.$store.state.playList.length - 1
      );
    },
  },
};
</script>
<style lang="less" scoped>
.searchTop {
  width: 100%;
  height: 1rem;
  padding: 0 0.2rem;
  display: flex;
  align-items: center;
  input {
    margin-left: 0.2rem;
    border: none;
    border-bottom: 0.02rem solid #999;
    width: 90%;
    padding: 0.01rem;
  }
}
.searchHistory {
  width: 100%;
  padding: 0.2rem;
  position: relative;
  .searchSpan {
    font-size: 0.4rem;
    font-weight: 700;
  }
  .spanKey {
    background-color: rgb(218, 213, 213);
    padding: 0.1rem 0.2rem;
    border-radius: 0.4rem;
    margin: 0.1rem 0.2rem;
    display: inline-block;
  }
  .icon {
    width: 0.5rem;
    height: 0.5rem;
    position: absolute;
    right: 0.2rem;
    top: 0.3rem;
  }
}
.itemList {
  width: 100%;
  padding: 0.2rem;
  .item {
    width: 100%;
    height: 1.1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .itemLeft {
      width: 85%;
      height: 100%;
      display: flex;
      align-items: center;
      .leftSpan {
        display: inline-block;
        width: 0.2rem;
        text-align: center;
      }
      div {
        p {
          width: 4.54rem;
          height: 0.4rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-weight: 500;
        }
        span {
          font-weight: 400;
          font-size: 0.26rem;
          color: #999;
        }
        margin-left: 0.3rem;
      }
    }
    .itemRight {
      width: 20%;
      height: 100%;
      display: flex;
      // justify-content: space-between;
      align-items: center;
      position: relative;
      .icon {
        fill: #999;
      }
      .bofang {
        position: absolute;
        left: 0;
      }
      .liebiao {
        position: absolute;
        right: 0;
      }
    }
  }
}
</style>
