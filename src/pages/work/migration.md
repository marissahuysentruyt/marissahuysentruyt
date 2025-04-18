---
title: "Project: Database and Framework Migration"
layout: project-details-page.njk
permalink: /work/migration.html
bodyClasses: cmp-body util-bg-light-peach
customBackground: util-bg-sbx-black
overview: |
  Sparkbox elected to migrate their website and articles from Webflow and ExpressionEngine, to Next.js and Contentful. This was a large undertaking, including hundreds of articles, quite a bit of legacy tech debt, and adding more testing coverage.
projectTitle: Site Migration
desktopImage: "sparkbox-desktop-interior.png"
desktopAltText: "Fire & Ice Homepage - Desktop"
mobileImage: "sparkbox-mobile.png"
mobileAltText: "Fire & Ice - Mobile"
contribution: |
  As part of the team who migrated Sparkbox.com, we had a lot of work to do. Initially, our data, such as article posts, team page photos, and even marketing page info, was stored in ExpressionEngine. Not only were we migrating that data from ExpressionEngine to Contentful, we also intended to rebuild the site with Next.js. I joined the migration during the last phase, and first focused on testing coverage. We created Cypress end-to-end tests to verify things like navigation items, theme switching, and metadata. I was also able to work on integrating GitHub Actions into our site's repo, so on each pull request, we could run visual regression testing with BackstopJS. This work set up our repo for future test-driven development approaches, and reliable site behavior.

  As my time on the project went on, I moved from testing coverage to refactoring and addressing technical debt. One larger undertaking was refactoring our site components to properly adapt the GraphQL data we would consume from Contentful. I was responsible for migrating many of our static case study work pages, which meant creating new Next.js pages, and creating new SCSS styles where necessary in order to achieve parity with the production site. Not only did I need to ensure the Next.js components were typed correctly, but in many cases, the GraphQL data had to be adapted and typed itself. I was grateful for the TypeScript and GraphQL experience, and I enjoyed pairing with the more senior developers to learn how to understand the content model and debug TypeScript errors better. The end product is a less complex but more sustainable approach. We already have plans for new features, too!

link: https://sparkbox.com/
linkText: sparkbox.com
languages:
  - image: "nextjs.svg"
    alt: "Next.js"
    className: "cmp-project-details__tech-list-item--image"
  - image: "sass.svg"
    alt: "SCSS"
    className: "cmp-project-details__tech-list-item--image"
  - image: "typescript.svg"
    alt: "TypeScript"
    className: "cmp-project-details__tech-list-item--image"
  - image: "cypress.svg"
    alt: "Cypress"
    className: "cmp-project-details__tech-list-item--image"
  - image: "lemurFace.png"
    alt: "Backstop"
    className: "cmp-project-details__tech-list-item--image"
  - image: "contentful.svg"
    alt: "Contentful"
    className: "cmp-project-details__tech-list-item--image"
  - image: "graphql.svg"
    alt: "GraphQL"
    className: "cmp-project-details__tech-list-item--image"


collabText:
  paragraph: Interested in working together or collaborating on a project?
  bold: Shoot me a message!
  linkText: Get in Touch
---
