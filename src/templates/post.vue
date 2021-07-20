<!--
 * @Author: XunL
 * @Date: 2021-07-17 12:48:19
 * @LastEditTime: 2021-07-21 02:37:57
 * @Description: file content
-->
<template>
  <Layout>
    <header
      class="masthead"
      :style="{
        backgroundImage: `url(http://localhost:1337${$page.strapiPost.cover.url})`,
      }"
    >
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="post-heading">
              <h1>{{ $page.strapiPost.title }}</h1>
              <!-- <h2 class="subheading">Problems look mighty small from 150 miles up</h2> -->
              <span class="meta">
                Posted by
                <a href="#!">
                  {{
                    $page.strapiPost.create_by.firstname +
                    $page.strapiPost.create_by.lastname
                  }}</a
                >
                on {{ $page.strapiPost.created_at }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Post Content-->
    <article class="mb-4">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div
            class="col-md-10 col-lg-8 col-xl-7"
            v-html="mdToHtml($page.strapiPost.content)"
          ></div>
        </div>
      </div>
    </article>
  </Layout>
</template>
<page-query>
query($id: ID!){
 strapiPost(id:$id){
    
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
</page-query>
<script>
import MarkdownIt from "markdown-it";
const md = new MarkdownIt();
export default {
  name: "post-page",
  methods: {
    mdToHtml(markdown) {
      return md.render(markdown);
    },
  },
};
</script>

<style></style>
