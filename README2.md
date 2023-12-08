# Mileston 1 Project - Anthony Jones Handyman
###### By Gareth Llewelyn

[View website on GitHub Pages](https://llewbach.github.io/aj-builder/)

## Table of contents

> 1. Overview
> 2. UX
>> 1. Strategy
>> 2. Scope
>> 3. Structure
>> 4. Skeleton
>> 5. Surface
> 3. Features
> 4. Technologies Used
> 5. Testing
> 6. Deployment
> 7. Credits
> 8. Acknowledgements
> 9. Disclaimer

## Overview

[Back to top](#mileston-1-project---anthony-jones-handyman)

This website is for educational purposes only. I originally planned to make this site for a real builder, but due to poor responsiveness, I've made it for an imaginary handyman.

## UX

[Back to top](#mileston-1-project---anthony-jones-handyman)

### Strategy

[Back to top](#mileston-1-project---anthony-jones-handyman)

This website is for a builder/handyman, with the aim of functioning essentially as an extended business card.

Handyman's goals...
- wants to be found
- wants the platform to inspire sense of **trust** and reliability in potential clients
- wants a means of receiving quote requests. This could potentially save the handyman time driving to sites if potential clients can submit pictures along with a description

Buyer's goals...
- wants to find a good builder
- wants **assurance** as to handyman's quality and character
- wants a convenient means of contacting the handyman and of requesting quotes for jobs, with the possibility of fewer home visits if pictures can be sent as well

Target audience
- homeowners, the majority without subject expertise
- property managers, who will probably have a variety of tasks to do on a regular basis

Unique selling proposition
- Anthony Jones is an experienced builder who charges reasonable prices, as opposed to most other tradesmen whose prices still remain high after the demand of the COVID era

Considerations
- Unlike B2C interactions, which depend more on impulsive decision making on the part of customers, hiring a builder is more like a B2B consideration. This is because hiring a builder is more of a serious commitment, both financially and because one has to live with the result thereafter. For this reason, providing assurance is paramount.
- Unlike a B2B interaction however, most customers are not industry experts and don't fully understand the problem, the solution or best practice. It is well known that among builders there are many 'cowboys' and those who will try to overcharge as much as possible. For this reason, it is vital that the site instills a positive emotional response in potential customers that inspires trust.

Given that in today's age, business is advertised and found via websites, the creation of a website is fully justified to fulfil the requirements above, if not essential.

### Scope

[Back to top](#mileston-1-project---anthony-jones-handyman)

1) What the customer says they need - a builder
2) What the customer actually needs - a good value, trustworthy builder
3) What the customer doesn't know they need - a long term contact who can offer other home-improvements that may be more affordable than previously realised

#### User Stories

'As an old lady, I would like to be able to find a reputable builder that I can be sure will help me fix my problems. For me, integrity is important and I'd much prefer to get a sense of the person I'm dealing with before I have them in my home.'

'As a busy professional, I need a solid guy I can turn to when I'm trying to short all my stock in the middle of a market dive and suddenly s*** hits the fan at home, or floor should I say when the toilet starts overflowing. It would save me time making a decision about quotes if I could submit pictures and get an instant reply instead of having to wait for him to find time to drive over.'

#### Acceptance Critiera

- Users can successfully view information on all devices within the range 300px - 4000px width, 300px - 2200px height.
- Users can navigate between every page.
- Users can input information into the contact form and submit successfully.
- If users input information incorrectly into the contact form, they will not be able to submit and they will be notified of any errors. This will include required fields, syntax validation and user feedback.

#### Information and features scope

This site will act as an extended business card and will include information about

- Services offered
- Experience
- Character
- Contact details
- Job quote request form

As the handyman is based in South Wales, I wondered whether or not to make the site bilingual. However, as the client doesn't speak Welsh himself, I thought it would not offer sufficient benefit.

### Structure

[Back to top](#mileston-1-project---anthony-jones-handyman)

Information needs to convey what (services), who (experience and character), how (contact) and how much (quote request form). This order makes sense for our site's pages, as the customer needs to know that this site is firstly relevant, secondly desireable, then actionable.

Given that the customer getting in contact is the desired outcome, the contact information will always be visible in the footer, as will the 'Get Quote' call to action, one click away.

The information will be structured as follows:

#### Header 

1) Logo and name
2) Nav bar

#### Footer 

1) Phone and email
2) **Call to action** (Get Quote!)
3) Instagram
4) Checkatrade

#### Home page

1) Immediately understandable summary/hook.
2) Provided services (categories, examples, and pics)

#### About page

1) Background, history, experience
2) Ethos, customer care
3) Specialties
3) Testimonials

#### Contact

1) Get quote form (Job description, attach pics, customer details, submit button)
2) Contact details 
3) Map with base location

### Skeleton

[Back to top](#mileston-1-project---anthony-jones-handyman)

I drew up some wireframes (available to view in the assets folder) in order to help direct the building phase. Upon inspection, it will be apparent that the end result is quite different to these, but given that this is my first website, I added more features and made more changes as my knowledge and confidence developed.

[Header/footer wireframe](assets/wireframes/header-footer.png)

[Home wireframe 1](assets/wireframes/home-1.PNG)

[Home wireframe 2](assets/wireframes/home-2.PNG)

[Home wireframe 3](assets/wireframes/home-3.PNG)

[About wireframe 1](assets/wireframes/about-1.PNG)

[About wireframe 2](assets/wireframes/about-2.PNG)

[Contact wireframe](assets/wireframes/contact.PNG)

### Surface

[Back to top](#mileston-1-project---anthony-jones-handyman)

#### Logo

For the logo, I wanted something simple enough to be used as a favicon as well. To this end I put GPT-4 to the task, asking for a simple logo of a roof based on the letter 'A'. After a few goes I chose one I liked. 

![Logo](assets/images/logo.PNG)

I then compressed the image and put the logo through a logo to favicon converter.

https://favicon.io/favicon-converter/

I then added a border blur to the logo using box-shadow.

#### Colour Palette

I used Coolors.co to consider different colour palettes, but none were crowd-pleasers.

Probably due to my lack of familiarity with it, I liked Bootstrap's dark theme, so I decided to simply add 'yellow' as a 'highlight' colour. The yellow and black combination is also strongly associated with builders.

![Colour palette](assets/captures/capture-50.PNG)

#### Font

Using Google Fonts, I chose 'Stick No Bills' for header text, due to it's somewhat 'industrial' aesthetic. I chose 'Open Sans' for body text due to its readability and aesthetic simplicity.

#### Fixed images

I really like the parallax scroll effect using fixed images. It makes the page feel more interactive even though the user is only scrolling, making the content more engaging.

#### About page sticky titles and title covers

The About page contains a fair amount of text and I wanted to add effects in order to make it as engaging as possible. Having initially dabbled with ScrollMagic, I wanted to incorporate some fade in/out effects for my sticky titles using only CSS. To this end I used absolutely positioned covers with an opacity gradient to cover the title until it stuck in position, then appeared from beneath the cover.

## Features

[Back to top](#mileston-1-project---anthony-jones-handyman)

### Navbar

On the left of the navbar, I have the logo and company name, and the menu items on the right. The navbar is fixed to the top of every page for ease of navigation.

The structure of the navbar was taken from Bootstrap and the menu items collapse on smaller screens.

### Footer

The footer is also fixed to the bottom of every page except 'Contact' because everything on the footer is to be found on the Contact page. I fixed the footer so that the call to action and contact details are always visible, as this is the primary goal of the site.

On extra small screens, only the icons are to be seen and the call to action button text displays as 'Get Quote'. On small screens the call to action text becomes 'Get Free Quote' as more room is obtained. On medium screens, text appears next to the icons in a stacked format, and on extra large screens, the footer items horizontally align.

### Hero sections

Hero sections feature at the top of the 'Services' page (index.html) and 'About' page. For consistency, these both feature fixed background images and centered text above an overlay. 

### Services section

For this I used Bootstrap grid for responsive layouts. On small screens, each service items appears stacked, with alternating image/category button orders, with horizontal dividers. On medium screens, the service items become a 2 x 4 table with one vertical divider. On extra large screens, this becomes a 4 x 2 table with one horizontal divider.

The images use Bootstrap's .img-thumbnail which helped to size the images. Each category button is a dropdown menu of subcategories of the services offered.

### About page parallax sections

These were built with Bootstrap rows and columns. On small screens, these become vertically stacked, and on medium screens and above, these appear side by side. The images are fixed, and the text column features 'sticky' titles and covers that simulate a fade in/out effect. 

### Parallax '.spacer' rows

This refers to the horizontal bars that separate the sequential fixed parallax images in order to make a smoother transition between sections. This was especially true for the About page which has three fixed images one after the other, and each section has aesthetic effects of their own going on as well, in the form of 'sticky titles' and 'title covers' with opacity gradients. 

Originally these spacers were simple block colours, but I later had the idea to spice these up with transparent text and a fixed secondary background with a colour gradient that would simulate light passing through the transparent text as the .spacer moves up the page.

### Testimonial carousel

The structure for this was obtained from Bootstrap and modified for my use. By default the caption disappears on small screens, but given that the testimonials are the primary point of this feature, I enabled captions on every screen size. I also added a general overlay to the pictures then a smaller secondary overlay around the caption text to aid legibility. 

The default carousel transitions caused image flickering due to automatic resizing. This was deactivated using `transition: none !important;` in the CSS stylesheet.

### Contact form

This form was built using Bootstrap rows and columns for responsivity. On smaller screens, each field label and input appear vertially stacked. On medium screens these appear in two columns. On larger screens, these have a 4:8 width ratio, with the inputs requiring more input taking up more space.

The form requires all essential information except 'upload photos'. The form will validate input for correct syntax and informs the user of any errors. The user will not be able to submit an incorrectly filled form.

The form items are styled using Bootstrap classes and FontAwesome icons.

### Contact page 'info row'

This is a Bootstrap grid, featuring a Google Map iframe showing the base location of Anthony the Handyman in the first column. The next column features Anthony's contact details. The third column features a fun and friendly picture of a 'call me maybe' gesture, encouraging engagement and instilling a positive emotional response.

## Technologies Used

[Back to top](#mileston-1-project---anthony-jones-handyman)

- [Balsamiq](https://balsamiq.com/) was used to create the wireframes
- HTML5 and CSS3
- [VSC](https://code.visualstudio.com/) was my development environment
- Google Chrome Dev Tools helped elucidate building and debugging
- [Bootstrap](https://getbootstrap.com/) v5.3.2 frontend framework was used for elements such as the navbar, testimonial carousel, grid layouts and dark theme
- [GitHub](https://github.com/LlewBach/aj-builder) was used for my online repository
- [GitHub Pages](https://pages.github.com/) was used to deploy the site
- [GPT-4](https://openai.com/research/gpt-4)
  - Used to create the logo
  - Used to create images of 'Anthony'
  - Used for advice and discovering new options
  - Used for debugging and syntax checking
- [FontAwesome](https://fontawesome.com/) was used for all icons
- [Google Fonts](https://fonts.google.com/) was used for interesting fonts
- [Unsplash](https://unsplash.com/) was used to obtain all real images as they are free to use
- [Image Resizer.com](https://imageresizer.com/image-compressor) was used to compress images
- [Coolors.co](https://coolors.co/) was used to consider different colour palettes
- [The W3C Markup Validation Service](https://validator.w3.org/) was used to check HTML syntax
- [The W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) was used to check CSS syntax
- [WebAIM](https://wave.webaim.org/) was used to examine accessibility
- Chrome Dev Tools [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) was used to test performance, accessibility, SEO and best practices
- YouTube
  - [Clip an image to text with CSS](https://www.youtube.com/watch?v=9Kr3T4Ndl-o)
  - [Bootstrap 5 Crash Course Tutorial #14 - Working with Forms](https://www.youtube.com/watch?v=dKVX22GR7zQ)


## Testing

[Back to top](#mileston-1-project---anthony-jones-handyman)

### Acceptance Critiera Testing

#### Test that users can navigate between every page.

1) Open website in the test-specific browser.
2) From the 'Services' (main) page, use the menu to navigate to the other pages, returning back to the 'Services' page before each attempt. 
3) Repeat this for the About and Contact pages.
4) From each page, click the logo text to be taken to the 'Services' (main) page.
5) From the Services and About pages, press the 'Get (Free) Quote" button in the footer to be taken to the Contact page.
6) On the footer of each page, test that the links to Instagram and Checkatrade open in a new tab and display the correct sites.
7) On the Contact page, test that the link to Instagram opens in a new page and displays the correct site.
8) Using a mouse, test that each link turns yellow when hovering over it on every page.


#### Test that users can successfully view information on all devices within the range 350px - 4000px width, 475px - 2200px height.

For each test, I went about testing via the following steps:

1) Open website in the test-specific browser.
2) Right click and click inspect.
3) Click the toggle device toolbar.
4) From the device selector dropdown, choose 'Responsive'.
5) Set zoom to 50%.
6) Set view to test-specific dimensions.
7) Navbar
  - Check logo and text visible
  - Check menu is collapsed or expanded appropriately
  - Check menu opens and displays appropriately
  - Check menu closes
8) Footer
  - Check that footer items appear symetrically and fit within the view
  - Check that the call to action button is visible and centered
9) Page spacer(s)
  - Check that the .spacer text falls on one line and doesn't wrap
  - Check that the text is legible while scrolling
  - If unable to scroll, check that entire text is readable
10) Services Hero
  - Check that hero image takes up full screen width without distortion
  - Check that text is centered, and legible
11) Services Section
  - Check that the service items align in a symetrical and ordered fashion
  - Check that the dropdown menus work and all sub-category items are visible
12) About Hero
  - Check that hero image takes up full screen width without distortion
  - Check that text is centered, and legible
13) About parallax section
  - Ensure image is visible between the navbar and footer
  - Ensure image is aligned well, either centrally or left aligned
  - Ensure sticky titles are initially invisible and become fully visible upon scrolling
  - Ensure paragraph text does not reappear after disappearing below sticky title
  - Ensure sticky title disappears completely at the end of every section
14) About page testimonial carousel
  - Ensure text is readable and centrally aligned
  - Ensure that cycle forward and backward buttons work properly
15) Contact form
  - Ensure title is visible and central
  - Ensure form fields are arranged in an organized way, either stacked in one or two columns
  - Ensure Job Description, Name, Email, Phone, Post Code fields are required
  - Ensure email field requires correct email syntax
  - Given that this is a fictitious site, I'll not require that the submit button actually submits
16) Contact page 'info row'
  - Ensure map, contact info and 'call me' images are visible and ordered, either vertically or horizontally






#### Users can input information into the contact form and submit successfully.



#### If users input information incorrectly into the contact form, they will not be able to submit and they will be notified of any errors. This will include required fields, syntax validation and user feedback.



## Deployment

[Back to top](#mileston-1-project---anthony-jones-handyman)

### GitHub Pages

This site was deployed to GitHub Pages following the steps below:
1) Log into GitHub.
2) Select the [LlewBach/aj-builder](https://github.com/LlewBach/aj-builder) repository.
3) Click on the "Settings" tab.
4) Scroll down to the 'Pages' section.
5) Ensure 'Source' is set to 'Deploy from a branch'.
6) Ensure the branch chosen is 'Main', from its '/(root)'.
7) Click 'Save'.
8) Refresh the page and at the top there will appear the link to the website. This link may take a few minutes to appear. Here is the link (https://llewbach.github.io/aj-builder/).

### How to run this project locally

1. Download the IDE of your choice as well as Git.
1. Visit the GitHub repository for [AJHandyman](https://github.com/LlewBach/aj-builder).
2. Click on "Code" and copy the HTTPS link.
3. Create the folder where you would like to save the repository.
4. In your terminal, navigate to the folder and then input 'git clone ', then paste the HTTPS link and press enter.
5. Open the folder in your IDE. Use the Live Server extension to view the HTML pages.

## Credits

[Back to top](#mileston-1-project---anthony-jones-handyman)

### Media 

- All real photographs were obtained from Unsplash. 
- All pictures of 'Anthony' and the logo were made by GPT-4.

### Code



## Acknowledgements

[Back to top](#mileston-1-project---anthony-jones-handyman)

- I'd like to thank Ben Kavanagh for his great support, advice and feedback

## Disclaimer

[Back to top](#mileston-1-project---anthony-jones-handyman)

The contents of this site are fictitious and for educational purposes only.