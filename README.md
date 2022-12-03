# Starter Kit v4 - Eleventy Blog + Netlify CMS

This kit has everything you need to use the netlify custom CMS to create a blog that can be edited by clients in a nice user-friendly interface from Netlify. We already have all the scripts and configurations to make it work, all you need to do is add it to a site on Netlify, enable Identity, click the button to enable Git Gateway so when the client submits a blog it can push to the repo, and you're done. You can also set the registration to be invite only and add a "sign in with google" button in the options.

Here's a live demo link of this kit live on Netlify:
https://starterkit-v4-eleventy.netlify.app/

Don’t touch the /public folder! When making edits or adding new pages, you do it in the /src folder. Not the /public. /public is where all your files compile to and gets read by netlify to load your website. Make all edits on the files in the /src folder.

## Overview Video

Here's a little introduction to the new kit to see what’s new:
<br>
https://youtu.be/JvEXfQGFKu4

## How to convert a static HTML and CSS site into the new system:

https://youtu.be/v6LaVds4yeU
<br>
In this video above, I show you how to take a real life project of mine that needs to move the blog over to the Eleventy + Netlify CMS blog system. I go over how to transfer static html and css files into the Eleventy Static Site Generator, break up the header and footer into reusable components to add on all pages, creating a base file, adding the old pages, and adding the old blog entries.

Then I show you how to connect it to netlify and enable the CMS in a few clicks and push everything live and use it. Once you do this a few times for clients, it starts to become muscle memory and it flies by. Originally this took me two hours to do, and it dropped to 40 minutes in this video. This could probably be done in less than 30 minutes with a simple site and getting used to the process.

# Getting Started

1. Clone the repository and save it to your computer and open it up in your code editor. We recommend Visual Studio.
2. Once you open the project in your code editor, open up the terminal in your editor. On PC it's (CTRL + ~). Then on the line in the terminal window, type "npm install" to install all the node modules needed for it to work.
3. once npm finished installing, type "npm start" to "turn on" the project and run the local server. A lot of text will show up and at the bottom there will be "Local: http://localhost:8080". Hold CTRL (on PC at least) and click on the "http://localhost:8080" to open the project in your browser. Any changes saved will update live on that link.
4. Now you're ready to start editing the kit to your needs. You can use the prebuilt template or add your own files to it, or delete them all and start fresh inside the kit.

If you close the project and open it back up at a later date, you will need to open the terminal and run "npm start" again to start the server and compile your code for you. Then click the localhost link to open it in a new tab again like before. You have to do this every time you close and reopen a project built with this kit. If there's any errors, it will show up here too and point you in the direction to fix.

If there's an error pointing to your description variable in your page's front matter, it's because of some quotes inside the description. Make sure your description variable is in double quotes:

```
description: "Meta description for the page"
```

If it has single quotes and there’s an apostrophe in a word, it thinks that apostrophe closes the string and considers everything after it a second line and throws up an error. So make sure you have the double quotes around description so the single quote apostrophes don't break the string.

# Move over all assets

Open the /assets folder and there will be 4 folders: /favicons, /fonts, /images/ and /js. Move over all content to their respective folders.

# Separating the header and footer sections

If you're trying to move over a current website to this kit, go in the \_includes folder and there is a header.html and a footer.html, and all you have to do is copy and paste all the html needed for your header into the header.html file and add all the footer code to the footer.html file.

However, how do we set dynamic active states to show which page you're on? Here's the code

```
<!--Main Nav-->
<nav id="navbar-menu">
    <ul>
        <li><a class="{{ 'active' if '' == page.fileSlug }}" href="/">Home</a></li>
        <li><a class="{{ 'active' if 'about' == page.fileSlug }}" href="/about">About Us</a></li>
        <li><a class="{{ 'active' if 'projects' == page.fileSlug }}" href="/projects">Projects</a></li>
        <li><a class="{{ 'active' if 'reviews' == page.fileSlug }}" href="/reviews">Reviews</a></li>
        <li><a class="{{ 'active' if 'blog' == page.fileSlug }}" href="/blog">Blog</a></li>
        <li><a class="{{ 'active' if 'contact' == page.fileSlug }}" href="/contact">Contact</a></li>
    </ul>
</nav>
```

We add this code `{{ 'active' if '' == page.fileSlug }}` to each link tag and fill in the empty quotes after the "if" with the page slug. For example, on the about page link, it's saying "add a class of "active" to this a tag if the text between these quotes is an exact match for the page slug name." In this case the slugs name is /about. So when you're on the about page, page.fileSlug = about, which matches exactly with the "about" string it's being matched to. This evaluates to true, so a class of .active gets added to the a tag and the styles associated with that tag having that class will be rendered. When you copy and paste your header into this file to override the default one we have in there, copy and paste that code in a seperate file and grab it once you added your header file and paste it inside the class="" quotes where you want the active class to be added when we're on that page.

On the home page we leave the string empty. Because when we're on the home page, there is no /fileSlug. It's just /. There's nothing. So on that home link, we're saying "if there's no file slug, add the active class to this tag".

Once you do this, you never have to touch them again unless you need to make an edit. They will be rendered on all pages. So on your about.html document, you don't need to add them in there. Just write your html for that page under the line that says "`<!-- Enter html code below -->`". Eleventy will handle everything else. It will build the page for you with the header and footer.

# Adding a new page

All new pages need to be added to the /pages folder. If you are moving an existing website to this kit, all your website's old pages need to be added to this folder. All of them!

In the \_includes folder there’s a .txt document labeled "new-page-template". It has the following code inside of it:

```
---
layout: 'base.html'
canonical: 'Official link for that page (https://www.site.com)'
description: "Meta description for the page"
metaTitle: 'Title that shows up on social OG Tags'
tagTitle: 'Company Name | What They Do | Town and State'
permalink: 'pageName/'
---

{% block preload %}
<link rel="preload" as="image" href="/assets/images/landing.jpg">
{% endblock %}

{% block pageCSS %}
<link rel="stylesheet" href="/css/page.css">
{% endblock %}

<!-- Enter html code below -->
```

We laid out all the front matter and its variables for you and labeled them for you so you know what goes where and what to edit. Below the "Enter html code here" comment is where you start writing the html for that page. We don't need to include the header or footer, just the unique html for this page and we can add the link to this page's css in the template blocks above where you see the page.css link. Change that to this page’s css link.

If you are adding an existing page to this kit, all you do is create a new html file and paste the content of the new-page-template.txt to the top of that file, and copy all the content between the `<main></main>` tags of your site below the line that says "<!-- Enter html code below -->". If for some reason you didn't use a `<main></main>` tag in your site, just copy and paste everything of that page between the navigation and the footer and paste it below the comment line.

Also, DON'T include the `<main></main>` tags on the page. They are already on the base.html file in the /includes folder. The system will insert the contents of the page inside the `<main></main>` tags on that page. So they are not needed on your new page files.

## Converting old file paths to the new ones, remove .html extension from all links

If you copy and pasted a previous site's html over to a new page in the kit, do a CTRL + F and find all instances of your image file path and replace it with /assets/images/. For example, when I moved over an old site to the kit, all my image tag source paths were /images/image.jpg. In this new kit, all images are inside the /assets/images file path. So I copy and paste "/images and replace it with "/assets/images - and yes that quote is supposed to be there. It makes sure I'm grabbing only the file paths that start with /images because all file path that start with /images happen to be right next to the open quote of the source quotes. like src="/images/image.jpg". If I only did a find a replace for /images I could potentially grab a file path I don't want to replace. Like if I already had a /assets/images/image.jpg on the page, if I did a find a replace for /images and replace it with /assets/images, it'd replace the /images in the middle of that path and it'd turn into /assets/assets/images/image.jpg - not what I wanted. So it's a little more strategic find and replace method.

You may ask - what is the reason why we use "/assets/images" when referencing images? Well, remember at the top of the README it's mentioned that /public is where your code is built to, and is where Netlify loads the website from. The leading / at the start tells Netlify to ALWAYS look from the root of the project. Not using that first / will cause Netlify to look at the folder the page is in, and not the root.

Then make sure ALL the links in the html have the .html extension removed. Eleventy doesn't recognize it. /contact.html should be changed to /contact. I also do a find and replace for .html, but make sure you check the top of your page front matter and double check the base.html still has its extension. If it got removed from the find and replace, put it back!

If you're ever unsure about file paths, it won't hurt to look in the public folder, and work your way through the folder tree in there (just don't accidently change anything in there - you'll lose all changes on the next build!). 11ty works on a folder-based file system. /contact points to the contact folder, and Netlify will load the index.html in there when you go to www.website.com/contact. This is why we don't use .html in the folders. There is one exception though...

## .html Extention EXCEPTION!

On the flip side, when you are writing a blog or importing an old blog to the new kit, when you link to another blog post in your post, it needs the .html extension. So if you're moving over a blog post that has a link to another blog post /other-blog-post.html, leave the .html. Otherwise the link won't work. But if you're linking to a regular page in your site, like /contact, it does NOT get an extension. Weird rule, but for some reason that's what it wants. So we obey it blindly.

# How it works under the hood:

https://youtu.be/UDU38awKQeg

We have a base.html file that has all the code that will be repeated on every page, like the head tag and its meta data, navigation, footer, etc and we use template blocks (like little variables) to insert the content for each page's info into that base file. It loads the content, meta tag info, inserts any extra link tags or other tags that are unique to that page needed to display it properly (like individual page css files), and basically fills in the blanks on the base.html page template.

# What is front matter? (that weird code at the top of every HTML page)

Every website page, including the index.html, will all have this front matter (as its called in Eleventy) code at the top which has all the variables that will fill in the blanks on the base.html page. Notice the option that says "layout: 'base.html". Thats telling Eleventy to use the base.html file as the HTML layout for this page, and fill in the variables with the rest of the info we have for it like the meta description, title tag etc.

The weird % blocks below the front matter variables are template blocks. We discuss those down the page just a little more.

```
---
layout: 'base.html'
description: "Meta description for the page"
metaTitle: 'Title that shows up on social OG Tags'
tagTitle: 'Company Name | What They Do | Town and State'
permalink: 'pageName/'
---

{% block preload %}
<link rel="preload" as="image" href="/assets/images/landing.jpg">
{% endblock %}

{% block pageCSS %}
<link rel="stylesheet" href="/css/page.css">
{% endblock %}

<!-- Enter html code below -->
```

The permalink is the actual slug name of the page that will show up in the URL. This will be www.website/about for example.

# Keeping the same file paths:

If you have file paths you don't want to change to maintain SEO, for example /pearland/pearland-piano-lessons, simply change the permalink for that page to that file path in the front matter of that page.

```
---
layout: 'base.html'
description: "Meta description for the page"
metaTitle: 'Title that shows up on social OG Tags'
tagTitle: 'Company Name | What They Do | Town and State'
permalink: 'folder/pageName/'
---

{% block preload %}
   <link rel="preload" as="image" href="/assets/images/landing.jpg">
{% endblock %}

{% block pageCSS %}
   <link rel="stylesheet" href="/css/page.css">
{% endblock %}

<!-- Enter html code below -->
```

Normally, we set our permalink to be the page slug (pearland-piano-lessons/) but if they have a unique file path all you have to do is include it in the permalink. No slashes before the slug name, only 1 slash after as seen in the example above.

# Using Blocks

If we have content that we want inserted into the base.html file that’s not able to be a variable in the front matter, we use blocks. Here's an example that lets us add a unique link tag for page specific css and preloading the image that is displayed on it:

```
{% block preload %}
	<link rel="preload" as="image" href="/assets/images/about-page.jpg">
{% endblock %}

{% block pageCSS %}
	<link rel="stylesheet" href="/css/root.css">
	<link rel="stylesheet" href="/css/flute-lessons.css">
	<link rel="stylesheet" href="/css/dark.css">
{% endblock %}
```

The "preload" and "pageCSS" are variables I chose to represent that block. We use them to call them on the base.html file like so:

```
<!-- Preload -->
{{ preload | safe }}
<link rel="preload" as="image" href="assets/images/logo-light.png">
<link rel="preload" as="font" type="font/woff2" href="assets/fonts/roboto-v29-latin-regular.woff2" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="assets/fonts/roboto-v29-latin-700.woff2" crossorigin>

<link rel="stylesheet" href="/css/root.css">
<link rel="stylesheet" href="/css/dark.css">

<!-- Loading in page specific CSS sheets from css block -->
{{ pageCSS | safe }}
```

We add this in the base.html where the css links go and when the about page loads, it will see it has a block that is calling for a file in the about.html page and inserts it. So when we use this block on the /contact page, we still use the exact same block code we did on the about page, except it has the contact page's css file path. The base.html knows it needs to check for a pageCSS block on every page. When it sees it on the page, it checks to see what content it has and loads it in for that page only. That's how we can add page specific css files when we're using the same base template for every page. You don't want your about.css to be on every page. That's why we don't include it on the base.html head tag. It's just a waste of space. And we can't load it in as front matter variables because then we'd have to add a bunch of empty source paths for link tags to accommodate as many stylesheets as possible

# Adding a new blog post or adding an old one to the new kit

In the /blog folder there is a markdown file called "blog-template.md". This is what you'll use to create new blogs. It has its own blog specific front matter:

```
---
pageName: blog-template
blogTitle: Should I do Performing Arts or A Real Job?
titleTag: 'Performing Arts High Schools in Houston: a Guide | Some Music Studio'
blogDescription: Something about the performing arts.
author: Joe M
date: 2022-07-18T15:46:45.249Z
tags:
  - post
  - featured
image: /assets/images/cabinets2-m.jpg
imageAlt: Cabinets
---
```

All of these are attached to a corresponding config.yml file in the /admin folder where we configure the inputs for the CMS that the client has access to when creating a blog.

```
collections:
  - name: 'blog'
    label: 'Blog'
    folder: 'src/blog'
    create: true
    slug: '{{pageName}}'
    fields:
      - { label: 'Page-Name-with-dashes-only', name: 'pageName', widget: 'string' }
      - { label: 'Blog Title', name: 'blogTitle', widget: 'string' }
      - { label: 'Title Tag', name: 'titleTag', widget: 'string' }
      - { label: 'Description', name: 'blogDescription', widget: 'string' }
      - { label: 'Author', name: 'author', widget: 'string' }
      - { label: 'Date', name: 'date', widget: 'datetime' }
      - { label: 'Tags', name: 'tags', widget: 'list', default: ['post'] }
      - { label: 'Featured Image', name: 'image', widget: 'image' }
      - { label: 'Image Caption', name: 'imageAlt', widget: 'string' }
      - { label: 'Body', name: 'body', widget: 'markdown' }
```

Notice how to front matter variable names matches the "name:" value for each label. This is where we configured all the input options for the client when they create a new blog.

Those front matter variables in the blog-template.md connect to this configuration. So if you need to add a new blog post manually, you can copy and paste this page and create a new one, fill in the new info and right underneath it you can copy and paste the blog content in markdown format or write a new one in markdown format.

We added a 'Page-Name-with-dashes-only' input field because many SEO and marketing agencies like to choose their file slugs as well as the meta tags for description and title tag. So we made it so they have control over every aspect of the blog's meta data.

## Moving over an old blog post to the new blog

All you have to do is duplicate the blog-template.md and create a new markdown file that is titled with the same title as the current blog's slug name. So if your blog page file slug is "how-to-do-something.html" you just save the new markdown file in the /blog folder as "how-to-do-something.md". Then fill in the info for the front matter variables. I just copy and paste the info from the old site. The pageName variable will be whatever the file path should be. So if your blog post was /blog/how-to-do-something you should make the pageName "blog/how-to-do-something". This preserves the SEO of that link and doesn't create a 404 for the old one if you just had it as "how-to-do-something".

Also, no slashes after the name either. It's not the same variable as the permalink variable in the new-page-template.txt. It's just text and dashes.

Once you filled in all the fields, you can start transferring your content to the new page. If you have the HTML for the page, you can just copy everything and run it through an html to markdown converter here: https://www.browserling.com/tools/html-to-markdown and then just copy and paste that markdown below the variables code block. Otherwise you'll just have to copy and paste the actual rich text and manually change everything to markdown format. Personally I just grab the HTML and run it through the markdown converter. Can't have divs or anything. Just straight text tags. If you have content wrapped in divs or images in divs, it won't work. You need to remove them, convert, and paste that markdown into the new blog post file. Then save and you're done. In our blog.css we have everything styled for you. So if you add an image or any heading tags or lists, they all will be styled by our css. We did everything for you!

Once pushed to the server, the client will also have edit access to these manually entered blog posts.

## Adding featured blog posts

Adding and swapping out featured blog posts is easy. In the markdown variables, there's a variable for tags.

```
---
pageName: blog-template
blogTitle: Should I do Performing Arts or Get a Real Job?
titleTag: 'Performing Arts High Schools in Houston: a Guide | Some Music Studio'
blogDescription: Something about performing arts.
author: Joe M
date: 2022-07-18T15:46:45.249Z
tags:
  - post
  - featured
image: /assets/images/cabinets2-m.jpg
imageAlt: Solar Panels
---
His etudes and concertos are performed by the world’s leading pianists, and they are famed for their difficulty. Not to mention the International Chopin Piano Competition, an annual affair in Warsaw that springboards the careers of many famous pianists.
```

The "-featured" is the tag a blog post needs to be filtered into the featured section. If you're adding blog posts from a previous site and wanted that one to be featured, you'd just drop to a second line under "-post" and add "-featured". Done. When the client wants to swap them out, in their CMS they have a "tags" input box. All they have to do is remove the "featured" tag to remove it, and go into the blog post they want to feature and after the "post" they add a comma and type "featured". No space. The CMS adds a space for them. So they literally just hit the comma and type "featured" and save. It's now in the featured spot and they didn't have to do any coding.

## Remove blog-template.md after you're finished and are ready to push all your changes.

If you don't it will show up as a blog post in the CMS and website. Once the blog is done and everything is moved over ou can delete the template file. You won't need it anymore since the client will now be adding blog posts themselves in the CMS.

If you are not moving over old blog posts, you can delete it as well before it goes live. We have default text that shows up saying theres no blog posts yet on the site. Once the client adds a blog they are removed and load the new blog post.

# Testing the CMS

Once all blog posts (if needed) have been added or transferred over, it's worth a quick test to make sure it is ready to go live. In the top right of the terminal, there should be an icon that looks like two rectangles joined. This is the split terminal button. Click that, and you should get a side-by-side of two terminal views. In one, your dev server should be running off `npm start`. In the other, run the command `npx netlify-cms-proxy-server`. This runs a dev server for the Netlify CMS, allowing you to access it by going to localhost:8080/admin - much like you would if the website was live.

If you get any errors, the most common reason is because the port 8081 is used. The CMS server runs off this port (although you can only access it with localhost:8080/admin), and won't try another port if that is taken. Make sure that port isn't taken by another server running and try again.

# Things that need to be renamed before you launch

1. In the \_includes folder open base.html, and at top of the base.html you'll see the <link rel="canonical" href="https://www.website.com/{{ page.fileSlug }}". This is the canonical link for your page for Google to know the exact link that it should associate for your ranking. Change the https://www.website.com to your clients actual website address. The page.fileSlug will update this automatically based on the permalink value you set for the individual page. So you only need to set the canonical tag once in base.html and it correctly creates the canonical link for you

2. In the blog-post-template.html page in the \_includes folder, there's another canonical tag you need to be aware of, this one if specific for your blog posts. Its canonical: 'https://www.yourwebsite.com/{{ pageName }}'. Again, change the https://www.yourwebsite.com to your client’s actual domain for your blog posts to also have the correct generated canonical tag.

3. Also, on the blog-post-template, in the LANDING section you'll see a picture element with images. You change those to load the image you want on the top banner of all your blog posts. Just swap this image and it will change on all blog posts.

4. In the /admin folder there is a config.yml file. Open that and find the following code:

```
local_backend: true
# change url to a link to the image you want to use, no file paths, must be a URL
logo_url: https://d33wubrfki0l68.cloudfront.net/c89899bad974606ce0e0f5d5a95842dc787dcb56/7fe98/assets/images/logo-blue.png
```

Change the logo URL to the URL of your clients logo. It won't take an image file path. Open your client's website and inspect the code, click on the logo, hover over it's link in the html in the dev tools, and click the live link to open the image in a new tab. Copy and paste that link and replace the one that's in front of the "logo_url:". When the client logs into the Netlify CMS it will show up above the login button.

# Adding the sitemap

If you need to create a sitemap, use this tool to do so and download the file: https://www.xml-sitemaps.com/

To add this sitemap to the Eleventy system, you need to create a sitemap.njk file in the /src directory.  At the top of the file, add the permalink front matter to tell it the URL for this page:

```
---
permalink: /sitemap.xml
eleventyExcludeFromCollections: true
---
```

Then copy and paste the sitemap code below the front matter. NO SPACE BETWEEN THE FRONT MATTER AND STEMAP CODE. This will throw up an error "errors: error on line 2 at column 6: XML declaration allowed only at the start of the document". There can be no spaces at the top of a sitemap.xml file.  The front matter is removed when compiled and the sitemap code moves up to the top where it's supposed to be.  So when you copy and paste your sitemap code below the front matter, make sure there's no gap between it and the "---" bottom line. Like so:

```
---
permalink: '/sitemap.xml'
eleventyExcludeFromCollections: true
---
<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<url>
```

# Adding robots.txt

We added a passthrough in the eleventy.js file that makes the robots.txt file usable inside the /src folder.  So when you need to create a new one or move an old one over, place it in the /src folder and it will work.

Make sure you add ```Disallow: /admin/``` in your robots.txt just below the ```User-agent: *``` at the top.  This will keep the /admin folder from being indexed on google. We don't want it indexed, it has no SEO value and will probably hurt your sites ranking because of it.  We've included a robots.txt file with this anyway as default. So all you have to do is add any other data that needs to be added. 

Also **Add your sitemap URL to the robots.txt file**.  In the robots.txt file, theres a line that says ```Sitemap: https://www.yourwebsite/sitemap.xml```. Change the "https://www.yourwebsite" to the URL of your client's site and save and you're done. 

# Adding a _redirects file with Netlify

If you need to add a redirects file, the way it works for Netlify is you create a _redirects file with no file extension.  When you save it, you have the option to select the file type, just scroll all the way down and "no extension" will be at the bottom usually.  Save it to your /src directory. We included a blank _redirects file in the kit for you.  We also added a passthough in the eleventy.js file so it gets picked up by the system.  

To add a redirect, add the file slug of the old domain on the left and the file slug of the new one to the right of that. Like this:

```
/old-page /new-page
```

And now that /old-page link will redirect to the /new-page.

# Adding the github to Netlify **IMPORTANT**

Normally, this is pretty straightforward. But there's a slight difference when using this kit. Once you get to step 3 of "Import an existing project from a Git repository", at the bottom there’s a box for "publish directory". Sometimes it populates with "\_site", sometimes it has nothing. Make sure you change it to "public". If you don't do this it won't work.
https://youtu.be/v6LaVds4yeU?t=3181

# Connecting the blog to Netlify

Video showing how to do it:
https://youtu.be/v6LaVds4yeU?t=3361

Setup up is easy.

1. Once you connected the github for your site to Netlify and add any custom domains, in the top nav you click on "Identity".
2. Click "Enable Identity"
3. Invite yourself and your client to the site
4. While in the Identity tab, click the "Settings and usage" button to open the settings options
5. Find "registration preferences" and click "edit settings" and set registration from public to invite only
6. Find "enable providers" and add a provider. I choose Google so the client can login with google in 1 click.
7. Find "Git Gateway" and enable it
