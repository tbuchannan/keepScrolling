## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**DashboardContainer**
 - FeedContainer
  - Posts
 - SidebarContainer
 - NavBarButtonContainer

**SidebarContainer**
  - RecommendedBlogContainer
    * RecommendedBlogItem
  - RadarComponent

**NavBarContainer**
  - Search  
  - NavBarButtonContainer

**NavBarButtonContainer**
  - NewPostComponent
  - ProfileComponent
  - DashboardComponent

**SearchResultsContainer**
 - ResultItems

**NewBlog**
 - NewBlog


## Routes
|Path                | Component            |
|--------------------|----------------------|
| "/dashboard"       | "DashboardContainer" |
| "/new/:type"       | "NewPost"            |
| "/search"          | "Search"             |
| "/new/blog"        | "NewBlog"            |


<!--
Bonus, similar to a blog show page but within the app
|Path                | Component            |
|--------------------|----------------------|
| "/blog/:blog_title | "BlogContainer"      |
-->
