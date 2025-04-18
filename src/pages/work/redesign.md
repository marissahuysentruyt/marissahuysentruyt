---
title: "Project: NCSBN"
layout: project-details-page.njk
permalink: /work/redesign.html
bodyClasses: cmp-body util-bg-light-peach
customBackground: util-bg-ncsbn-blue
overview: |
  The National Council of State Boards of Nursing (NCSBN) has been a longtime Sparkbox client. Over several engagements, NCSBN has added projects to their monorepo, undergone a major redesign of their corporate site, and even addressed their technical debt. Our team assisted in delivering refreshed Figma designs, updated Handlebars patterns in their monorepo, tackled their tech debt, and even created tools to help them understand their Google Analytics better.
projectTitle: NSCBN
desktopImage: "ncsbn-desktop-interior.png"
desktopAltText: "NCSBN homepage - Desktop"
mobileImage: "ncsbn-mobile.png"
mobileAltText: "NCSBN About page - Mobile"
contribution: |
  In my first engagement with NCSBN, I was the main developer delivering code. Under the guidance of tech lead, I added a brand new project, called Global Regulatory Atlas, into NCSBN's monorepo. I worked with a designer to create Handlebars components and demo pages in their pattern library. In doing so, we introduced a new design language to the Atlas tool, modernizing the UI and clarifying the functionality in the search tools.
  <br><br>
  NCSBN's engagement built off of what the Atlas project introduced. The clients wanted to update their corporate site design to align more with the design language we introduced in the Atlas project, and simplify some of their navigation. This was a major update for them, and we worked hard to deliver a brand new site in a very short three-month timeline. Because I was the contributor who had most recently been on an NCSBN project, I was able to contribute to the technical discussions quite heavily. I made suggestions regarding the reusable components that best matched the designs, and assisted the team in navigating the repository, getting them onboarded much more quickly. That knowledge proved valuable as our deadline for delivering the updated pattern library was only three months, so we were able to cruise through much of the work with blockers!
  <br><br>
  As with any long-time project, technical debt is bound to pile up. As part of another project with NCSBN, we entered maintenance mode with them and were able to address that tech debt. In this engagement, we tackled the SCSS architecture. Because the monorepo includes several microsites, the style architecture includes some shared styles, across all microsites, and project-specific styles. Over six weeks, we consolidated share styles into a single entry point directory, and standardized how we imported the project-specific styles. We were able to update NCSBN's use of <code>@use</code> and <code>@forward</code>, modernizing the style in which their SCSS is written. The NCSBN data engineers were also migrating from Universal Analytics to Google Analytics. I helped create a Node script that would gather all of the Google Analytics data, and compile it into an exportable CSV file with all sorts of data points.

secondaryDesktopImage: "gra-desktop-interior.png"
secondaryDesktopAltText: Global Regulatory Atlas homepage, featuring a dropdown tool to view a country's nursing regulations and a grid of icons with corresponding descriptions and details of data users can find within the Atlas.
secondaryMobileImage: "gra-mobile.png"
secondaryMobileAltText: Global Regulatory Atlas search page, showcasing the search results for Mexico and contact information for Mexico's Ministry of Health.

link: https://ncsbn.org/
linkText: NCSBN.org
secondaryLink: https://regulatoryatlas.com/
secondaryLinkText: Atlas
languages:
  - image: "html.svg"
    alt: "HTML"
    className: "cmp-project-details__tech-list-item--image"
  - image: "handlebars.svg"
    alt: "Handlebars templating"
    className: "cmp-project-details__tech-list-item--image"
  - image: "sass.svg"
    alt: "SCSS"
    className: "cmp-project-details__tech-list-item--image"
  - image: "javascript.svg"
    alt: "Vanilla JavaScript"
    className: "cmp-project-details__tech-list-item--image"
  - image: "figma.svg"
    alt: "Figma"
    className: "cmp-project-details__tech-list-item--image"
  - image: "node-js.svg"
    alt: "Node.js"
    className: "cmp-project-details__tech-list-item--image"

collabText:
  paragraph: Interested in working together or collaborating on a project?
  bold: Shoot me a message!
  linkText: Get in Touch
---
