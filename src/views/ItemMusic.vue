<template>
  <ItemMusicTop :playlist="state.playlist"> </ItemMusicTop>
  <ItemMusicList
    :itemList="state.itemList"
    :subscribedCount="state.playlist.subscribedCount"
  ></ItemMusicList>
</template>
<script>
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import { getMusicItemList, getItemList } from "@/request/api/item.js";
import ItemMusicTop from "@/components/item/ItemMusicTop.vue";
import ItemMusicList from "@/components/item/ItemMusicList.vue";
export default {
  setup() {
    const state = reactive({
      playlist: {}, //歌单详情页的数据
      itemList: [], //歌单的歌曲
    });
    onMounted(async () => {
      let id = useRoute().query.id;
      console.log(id);
      let res = await getMusicItemList(id);
      console.log(res);
      state.playlist = res.data.playlist;

      let result = await getItemList(id);
      console.log(result);
      state.itemList = result.data.songs;
      // 防止页面刷新导致数据丢失
      //获取歌单的歌曲
      sessionStorage.setItem("itemDetail", JSON.stringify(state));
    });
    return { state };
  },
  components: {
    ItemMusicTop,
    ItemMusicList,
  },
};
</script>
