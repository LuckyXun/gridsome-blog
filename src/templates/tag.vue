<!--
 * @Author: XunL
 * @Date: 2021-07-17 13:48:25
 * @LastEditTime: 2021-07-21 02:25:32
 * @Description: file content
-->
<template>
  <Layout>
    <header class="masthead" style="background-image: url('/img/home-bg.jpg')">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>{{ tag.name }}</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content-->
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <div class="post-preview" v-for="post in tag.posts" :key="post.id">
            <g-link :to="`/post/${post.id}`">
              <h2 class="post-title">
                {{ post.title }}
              </h2>
              <!-- <h3 class="post-subtitle">Problems look mighty small from 150 miles up</h3> -->
            </g-link>
            <p class="post-meta">
              Posted at

              {{ post.created_at }}
            </p>
            <p>
              <span v-for="tag in post.tags" :key="tag.id">
                <g-link :to="'/tag/' + tag">{{ tag.name }}</g-link
                >&nbsp;
              </span>
            </p>
            <hr class="my-4" />
          </div>
          <!-- Post preview-->
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query($id: ID!){
  	tag:strapiTag(id:$id){
    		id
    		name
       posts{
       title
       id
      
       content
     	 cover{
						url
          }
          created_at
        
    }
         
    }
}

</page-query>

<script>
export default {
  name: "index",

  metaInfo() {
    return {
      title: this.$page.tag.name,
    };
  },
  computed: {
    tag() {
      return this.$page.tag;
    },
  },
};
</script>

<style></style>
