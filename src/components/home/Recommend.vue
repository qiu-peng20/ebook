<template>
  <div class="recommend">
    <title-view :title="title" :btn="btn"></title-view>
    <div class="recommend-list">
      <div class="recommend-item" v-for="(item, index) in data" :key="index" @click="showBookDetail(item)">
        <div class="img-wrapper">
          <img class="img" :src="item.cover">
        </div>
        <div class="content-wrapper">
          <div class="title title-medium" ref="title">{{item.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
  import TitleView from './Title'
  import { storeHomeMixin } from './../../unit/mixin.js'

  export default {
    mixins: [storeHomeMixin],
    components: {
      TitleView
    },
	data(){
		return{
			title:'热门推荐',
			btn:'查看全部'
		}
	},
    props: {
      data: Array
    },
  }
</script>

<style lang="scss"  scoped>
@import './../../assets/style/global.scss';	

  .recommend {
    .recommend-list {
      width: 100%;
      @include top;
      padding: 0 px2rem(5);
      box-sizing: border-box;
      .recommend-item {
        flex: 0 0 33.33%;
        width: 33.33%;
        padding: 0 px2rem(5);
        box-sizing: border-box;
        .img-wrapper {
          @include center;
          .img {
            width: 80%;
          }
        }
        .content-wrapper {
          width: 100%;
          margin-top: px2rem(10);
          @include columnCenter;
          .title {
			font-size: px2rem(16);
            text-align: center;
			@include  ellipsis2(2);
			font-weight: 550;
          }
        }
      }
    }
  }
</style>
