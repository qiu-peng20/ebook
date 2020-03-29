<template>
  <div class="category-book">
    <title-view  @onClick="showBookCategory" :title="categoryText(data.category)" :btn="btn"></title-view>
    <div class="category-book-list">
      <div class="category-book-item" v-for="(item, index) in data.list" :key="index" @click="showBookDetail(item)">
        <div class="img-wrapper">
          <img class="img" :src="item.cover">
        </div>
        <div class="content-wrapper">
          <div class="title title-small" ref="title">{{item.title}}</div>
          <div class="num sub-title-tiny" ref="author">{{item.author}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import TitleView from './Title'
  import { categoryText} from './../../unit/store.js'
  import { storeHomeMixin } from './../../unit/mixin.js'

  export default {
    mixins: [storeHomeMixin],
    components: {
      TitleView
    },
    props: {
      data: Object
    },
	data(){
		return{
			btn:'查看全部'
		}
	},
    methods: {
      showBookCategory() {
        // this.$router.push({
        //   path: '/store/list',
        //   query: {
        //     category: getCategoryName(this.data.category),
        //     categoryText: this.categoryText(this.data.category)
        //   }
        // })
      },
      categoryText(category) {
        return categoryText(category)
      }
    }
  }
</script>

<style lang="scss"  scoped>
@import './../../assets/style/global.scss';	  

  .category-book {
    .category-book-list {
      width: 100%;
      @include top;
      padding: 0 px2rem(5);
      box-sizing: border-box;
      .category-book-item {
        flex: 0 0 25%;
        width: 25%;
        padding: 0 px2rem(5);
        box-sizing: border-box;
        .img-wrapper {
          @include center;
          .img {
            width: 100%;
          }
        }
        .content-wrapper {
          width: 100%;
          margin-top: px2rem(10);
		  .title{
			  font-size: px2rem(13);
			  @include  ellipsis2(2);
			  font-weight: 550;
		  }
          .num {
            margin-top: px2rem(5);
			font-size: px2rem(10);
			@include  ellipsis2(1);
			color:  #939393;
          }
        }
      }
    }
  }
</style>
