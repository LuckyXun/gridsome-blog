<!--
 * @Author: XunL
 * @Date: 2021-07-17 13:48:25
 * @LastEditTime: 2021-07-21 02:41:46
 * @Description: file content
-->
<template>
  <Layout>
    <header class="masthead"  :style="{
        backgroundImage: `url(http://localhost:1337${webInfo.cover.url})`,
      }">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>{{webInfo.title}}</h1>
              <span class="subheading">{{webInfo.subtitle}}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content-->
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <div class="post-preview" v-for="edge in $page.posts.edges" :key="edge.id">
            <g-link :to="`/post/${edge.node.id}`">
              <h2 class="post-title">
                {{ edge.node.title }}
              </h2>
              <!-- <h3 class="post-subtitle">Problems look mighty small from 150 miles up</h3> -->
            </g-link>
            <p class="post-meta">
              Posted by
              <a href="#!">
                {{ edge.node.create_by.firstname + edge.node.create_by.lastname }}</a
              >
              {{ edge.node.created_at }}
            </p>
            <p>
              <span v-for="tag in edge.node.tags" :key="tag.id">
                <g-link :to="'/tag/' + tag.id">{{ tag.name }}</g-link
                >&nbsp;
              </span>
            </p>
            <hr class="my-4" />
          </div>
          <!-- Post preview-->

          <!-- Pager-->
          <div class="d-flex justify-content-end mb-4">
            <Pager :info="$page.posts.pageInfo" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>



query($page:Int){
  general:allStrapiGeneral{
    	 edges{
        node{
          id
          title
          subtitle
          cover{
            url
          }
        }
      }
         
    }
  	posts:allStrapiPost(perPage:2,page:$page) @paginate{
       pageInfo {
      totalPages
      currentPage
    }
      edges{
        node{
          id
          content
          cover{
						url
          }
          created_at
          title
          create_by{
            firstname
            lastname
          }
          tags{
        		id
            name
        	}
        }
      }
    }
}

</page-query>

<script>
import { Pager } from "gridsome";

export default {
  name: "index",
  components: {
    Pager,
  },
  metaInfo: {
    title: "Hello, Xun!",
  },
  computed:{
    webInfo(){
      return this.$page.general.edges[0].node
    }
  }
};
</script>

<style></style>
