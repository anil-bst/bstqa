This contains all templates. 
Templates are essentially .html files with placeholder variables.
The templating engine being used is "handlebars" 

They can be divided into: 
  - layouts: This are top level templates that wrap other templates, ideally there should be a single layout "main.html" for an application, but in cases where there are certain pages that are a lot different from a templatem then they should have a separate layout
  - partials: These are reusable components, that can be used by multiple views. Usually these are self-contained widgets or snippets that are used all across the application with only variation in data.
  - views: These are final html pages that are to be rendered to a user, each controller must have an individual view defined for it, in the format `controller-name/index.html`