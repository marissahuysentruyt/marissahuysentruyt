---
title: "Project: Adobe Spectrum CSS"
layout: project-details-page.njk
permalink: /work/open-source.html
bodyClasses: cmp-body util-bg-light-peach
customBackground: util-bg-adobe-red
projectTitle: Adobe Spectrum CSS
overview: |
  The Adobe Spectrum organization recently embarked in updating their design system from Spectrum 1 to Spectrum 2. I was part of the contracting team assisting the Adobe Spectrum CSS engineers. We helped introduced major changes by deprecating an older, static documentation site in favor of documentation in the CSS team's Storybook instance. We also were a major part of migrating CSS components from the S1 design language to the new S2 language.
desktopImage: "spectrumcss-desktop-interior.png"
desktopAltText: "Adobe Spectrum CSS desktop, featuring the Chromatic visual testing grid with the tabs components"
mobileImage: "spectrumcss-mobile.png"
mobileAltText: "Adobe Spectrum CSS mobile page, featuring the swatch component documentation."
contribution: |
  The Adobe Spectrum organization is made up of several concentrated teams, and I contributed in several ways to the Spectrum CSS project and Spectrum Web Components project. My first role was migrating documentation from a separate static site into Spectrum CSS's Storybook. We wanted to capture all variants and code examples from the static site, and utilize Adobe's refreshed build system for Storybook to showcase everything in one place. This reduced the amount of documentation and places consumers had to go for the information they may be looking for. I even got to create the 404 page from scratch when we finalized Storybook as our documentation site.
  <br><br>
  The Spectrum organization began work on their migration from Spectrum 1 to Spectrum 2 even before I was part of the CSS team. Spectrum 2 introduced breaking changes in almost every component, but not just for the CSS team. The major consumer of our CSS is Spectrum Web Components (SWC), so any breaking changes we introduced also meant breaking changes for that team. Based on this, Adobe elected to unify the teams, meaning the CSS and SWC engineering teams would combine scrum ceremonies, meetings, and start contributing in both repositories. This really fostered collaboration between our engineering teams, and allowed all of us to expand our knowledge in both open-source projects. I was considered a "point-person" for the initial "S2 foundations" release of SWC, so I was got first-hand experience within the web components code base, picking up fast-follow work, reviewing visual regression diffs, and addressing design feedback. After the S2 foundations work was completed, I continued to be a link between the CSS and SWC teams, regularly reviewing SWC pull requests or pairing through SWC bugs to further encourage the "unification" of our teams.
  <br><br>
  For some time, the contractors, like myself, leveraged the expertise of the full-time Adobe team members, allowing them to float over to the web components team and begin major restructuring of our CSS build systems in order to make it more immediately consumable to SWC. While I remained on the CSS side of the migration to Spectrum 2, I contributed by creating React-based resource links, linking to Figma design assets, expanding on our custom token mapping plugin, and most importantly, migrating CSS components to use the new Spectrum 2 language. The Spectrum 2 component migrations were complex, including updates to design system tokens, markup changes, increases in our visual regression test coverage, accessibility improvements, pairing with design, and more coordination between CSS and SWC. Although we knew breaking changes were inevitable, detailed changelogs geared towards SWC developers helped make those changes understandable.
  <br><br>
  The team moves fast, we had varying priorities to juggle, and at the same time, Adobe onboarded six new employees. I really enjoyed getting to work with the newer employees, sharing what I had learned from my time, and finding ways to allow them the space to share their knowledge with me. It was really great to build relationships with the new teammates, giving them space to ask questions, experiment and try stuff, and overall get to know them as people!

link: https://opensource.adobe.com/spectrum-css/
linkText: Spectrum CSS
secondaryLink: https://github.com/adobe/spectrum-css/
secondaryLinkText: Spectrum CSS repo
languages:
  - image: "lit.svg"
    alt: "Lit"
    className: "cmp-project-details__tech-list-item--image"
  - image: "css.svg"
    alt: "Vanilla CSS"
    className: "cmp-project-details__tech-list-item--image"
  - image: "javascript.svg"
    alt: "Vanilla JavaScript"
    className: "cmp-project-details__tech-list-item--image"
  - image: "figma.svg"
    alt: "Figma"
    className: "cmp-project-details__tech-list-item--image"
  - image: "storybook.svg"
    alt: "Storybook"
    className: "cmp-project-details__tech-list-item--image"
  - image: "chromatic.svg"
    alt: "Chromatic"
    className: "cmp-project-details__tech-list-item--image"
  - image: "node-js.svg"
    alt: "Node.js"
    className: "cmp-project-details__tech-list-item--image"
  - image: "react.svg"
    alt: "React"
    className: "cmp-project-details__tech-list-item--image"

collabText:
  paragraph: Interested in working together or collaborating on a project?
  bold: Shoot me a message!
  linkText: Get in Touch
---
