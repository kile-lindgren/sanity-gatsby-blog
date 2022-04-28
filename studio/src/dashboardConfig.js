export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "626a9f81f8acd41789237301",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-gtz1apj4",
                  apiId: "e8be14e3-32bc-4206-a4a6-9d492c6a087e",
                },
                {
                  buildHookId: "626a9f81b115e21662feec52",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-omcdytjh",
                  apiId: "68c0d02a-f96d-438c-bed5-2d20d688452f",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/kile-lindgren/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-omcdytjh.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
