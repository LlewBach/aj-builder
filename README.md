# Mileston 1 Project - Anthony Jones Builder
###### By Gareth Llewelyn

## Strategy Plane

This website is for a real builder/handyman, with the aim of functioning essentially as an extended business card.

Handyman's goals...
- wants to be found
- wants the platform to inspire sense of **trust** and reliability in potential clients
- wants a means of receiving quote requests. This could potentially save the handyman time driving to site if potential clients can submit pictures along with a description

Buyer's goals...
- wants to find a good builder
- wants **assurance** as to handyman's quality and character
- wants a convenient means of contacting the handyman and of requesting quotes for jobs

Target audience
- homeowners, the majority without subject expertise
- property managers, who will probably have a variety of tasks to do on a regular basis

Unique selling proposition
- Anthony Jones is an experienced builder who charges reasonable prices, as opposed to most other tradesmen whose prices still remain high after the demand of the COVID era

Considerations
- Unlike B2C interactions, which depend more on impulsive decision making on the part of customers, hiring a builder is more like a B2B consideration. This is because hiring a builder is more of a serious commitment, both financially and because one has to live with the result thereafter. For this reason, providing assurance is paramount.
- Unlike a B2B interaction however, most customers are not industry experts and don't fully understand the problem, the solution or best practice. It is well known that among builders there are many 'cowboys' and those who will try to overcharge as much as possible. For this reason, it is vital that the site instills a positive emotional response in potential customers that inspires trust.
- Given how important trust is, with the goal of a long term relationship that hopefully lead to more jobs, honesty is important. This has implications for presentation also. If I made a super slick, shiny and ‘professional’ site, the customer may feel somewhat catfished if someone turns up a bit late, in trackies, cracking a smile front and back. I would rather the site were a bit more subtle, down to earth, what it says on the tin kind of thing.

## Scope Plane

1) What the customer says they need - a builder
2) What the customer actually needs - a good value, trustworthy builder
3) What the customer doesn't know they need - a long term contact who can offer other home-improvements that may be more affordable than previously realised

This site will act as an extended business card and will include information about

- Services offered
- Experience
- Character
- Contact details
- Job quote request form

As the handyman is based in South Wales, I wondered whether or not to make the site bilingual. However, as the client doesn't speak Welsh himself, I thought it would not offer sufficient benefit.

User stories

- Old granny needs help with a leaky tap. Finds clear, easy to use, reassuring website. The site's accessibility allowed her to contact the handyman.
- A home-owner who usually turns to DIY to save money needs help with a problem above his skill level, or a problem he has no time to deal with.

## Structure Plane

Information needs to convey what (services), who (experience and character), how (contact) and how much (quote request form). Given that our strategy has set out to instill trust, this order makes sense for our site's pages. 

Given that the customer getting in contact is the desired outcome, the contact information will always be visible in the footer, as will the 'Get Quote' call to action, one click away.

The information will be structured as follows:

### Header 

1) Name
2) Nav bar

### Footer 

1) Contact details
2) Base location
3) **Call to action** (Get Quote!)
4) Check a trade
5) Instagram
6) My GitHub?

### Home page

1) Immediately understandable summary/hook.
2) Provided services (categories, examples, and pics)

### About page

1) Background, history, experience
2) Ethos, customer care
3) Testimonials

### Contact

1) Get quote form (Job description, attach pics, customer details, submit button)
2) Contact details 
3) Map with base location and operating radius

## Skeleton Plane

I drew up some wireframes (available to view in the assets folder) in order to help direct the building phase. I decided to focus on building the structure of the site first before worrying about surface plane considerations. The reason is that this is my first solo site, and I'm not completely sure of what is possible for me to build, and that some trial and error will be involved. It would thus be more time efficient to focus on surface plane features after I have made a web structure to work with, that is within my capability.

In the next section, I will log the building process and the considerations and problems that arise, and then return to consider the surface plane.

With regards to the actual content of the site at this stage, I have to use some imagination as my client is rather unresponsive shall we say (contrary to the raving testimonials I shall later devise).

## Building the navbar and footer

I knew that I wanted to use the bootstrap navbar, because of its collapse functionality. However, I wondered whether or not I should wrap it in a header tag for semantic reasons. I decided that the nav element does this sufficiently well.

I copied the bootstrap navbar and modified the content.

Following my mentor's advice (shout out to Ben Kavanagh!) I focused first on mobile design.

My first concern was centering the mobile menu items, for which I used CSS.

I had a problem vertically aligning the logo text and the menu items due to the differing text sizes I presume. I resorted to eye-balling it with my client's business card and adjusting with CSS margin-top.

The navbar and footer are fixed to top and bottom, so that everything is only one click away at all times.

By this point, I was wondering how extensively I should use Bootstrap classes rather than CSS. After all, one of the main points of using a stylesheet is to make the HTML more readable. I've decided to make use of bootstrap classes for the sake of consistency with regards to structural considerations such as flexbox, grid, centering items etc and using CSS if I can reuse code for more refined or superficial purposes multiple times (eg, using CSS to set margin-right: 20px for all the menu items rather than .me-x for each one). I realise this is something I'll have to refine with experience.

Initially, I thought I would vertically stack the footer items on small screens. However, I decided that this would be a pointless waste of screen real estate, because the contact details are only one click away anyway on the contact page. I therefore made all but the button .d-none at small screen sizes.

I had to reconstruct my footer using bootstrap row and column classes because flexbox wasn't enough to keep the button central.

On md screens, I divided the footer into 3 columns at md-size, with the 2 items on each side stacked with .flex-column. For lg screens, I wanted the items next to each other. To this end, I used nested bootstrap rows and columns. Looking at the result, I appreciate why mobile-first design makes sense! It would be much harder to work backwards from lg screens.

In the spirit of DRY, I think I'm actually going to have to declare the string "I had a problem with alignment" as a variable due to how frequently I foresee its use...

`const ballAche = "I have/had a problem with alignment.";`

`console.log(ballAche);`

![capture-1.png](assets/captures/capture-1.png)

GPT-4 informed me that I'd forgotten to give the last div a class of .col-lg-6. I am so grateful that I am learning to code in the age of AI tools like this. The amount of time it has saved me debugging has been enormous. I have huge respect for all those who treaded this path without it, and made this possible for those behind them.

`console.log(ballAche);`

Even on the largest screen I have, the email icon would not fall inline. Using Chrome dev tools, I could see that the column proportions were not working for lg-sizes. The button column was huge and the four sub-columns were cramped. I adjusted the outer column proportions to 5:2:5, which fixed the issue.

`console.log(ballAche);`

Vertical alignment this time. By drawing borders around the divs, I eventually realised that I had to:
- increase footer height with CSS 
- give the outer row the classes .h-100, and .align-items-center
- give each column the class .justify-content-center
- remove previous code attempting but failing to do this

`console.log(ballAche);`

According to Chrome dev tools, between roughly 992px and 1236px width, I was getting this...

![capture-2.png](assets/captures/capture-2.PNG)

With the dev tools, I could see that div padding was cramping the email. I removed this which resulted in the awkward range shrinking to 992-1120px. One temptation is to somehow redefine the lg breakpoint to skip this range. I will leave this problem for now however, as the content of the footer may change.

I decided I wanted to have icons between sm-md. I initially tried to move the icons out of the paragraph with classes .d-none d-md-block so that they would always appear. I eventually realised I could put a span around the text and move the display classes from the paragraph to the span, leaving the icons visible. I had to change the display from 'block' to 'inline' however in order to keep the icons and text inline when displayed together. I also set the icons to disappear below sm by adding classes to the icon. This also required adding a .col-sm-6 to the containing divs in order for the icons to line up.

```
<div class="row">
  <div class="col-sm-6 col-md-12 col-lg-6 text-center">
    <p>
      <i class="fa-solid fa-phone-volume d-none d-sm-inline"></i>
      <span class="d-none d-md-inline">
        07359637607
      </span>
    </p>
  </div>
  <div id="email-col" class="col-sm-6 col-md-12 col-lg-6 text-center">
    <p>
      <i class="fa-regular fa-envelope d-none d-sm-inline"></i>
      <span class="d-none d-md-inline">
        a.andrew.jones71@gmail.com
      </span>
    </p>
  </div>
</div>
```
![capture-3.png](assets/captures/capture-3.PNG)

I had previously tried to format the icons to appear in xs size, but I think the button text size was compressing other columns which made it hard. I then thought that if I made the button text responsive (dropping 'Free' at smaller sizes) that the icons would align better which turned out to be true.

![capture-4.png](assets/captures/capture-4.PNG)


I realised that dealing with the awkward range at the lg breakpoint would be easy if I changed the sub-column stacking from stacked to inline at the xl breakpoint instead, only 3 changes.

I wanted to give the navbar and footer a dark theme so I could better see their outlines. I had to check the bootstrap docs to see that I needed a data-bs-theme attribute to apply this to the navbar. 

## Building the hero (header)

I was unsure of how to use the header element, but I think it is ok to use for the hero section.

Because my navbar and footer are fixed, I set a margin to the header to exactly match their heights. However, on the small width I've noticed that the bootstrap navbar height is responsive and narrows, leaving whitespace. To address this I will remove the background-image margin. Because my text was centered, getting rid of the margin has also centered the text relative to the viewport.

I looked at w3 schools to learn how to add the parallax effect, and only one line was required, background-attachment: fixed;

## Building the services section

Having gained some confidence with bootstrap grid after the footer, I went back and made a mobile wireframe of this section. When I made my first item, the image overflowed from its container, so I went to Bootstrap docs, and under images I saw the option for the .img-thumbnail class, which conveniently sizes the images for me.

I downloaded the smallest version of each image from unsplash.com.

I used padding to reduce the thumbnail size. However, with dev tools, I realised that I could keep the image size and bring the items closer together by using .px-4 rather than .p-4.

![capture-5.png](assets/captures/capture-5.PNG)

I decided to turn the service titles into bootstrap dropdown buttons.

![capture-6.png](assets/captures/capture-6.PNG)

My partner then strolled in and said this was a lot of whitespace and it wasn't clear which title belonged to what, so I decided to add dividers.

I asked GPT-4 for ideas on how I might do this and it suggested using an empty div and formatting the borders. At this stage, I'm hoping that I'll be able to manage this well as I modify the grid layout for larger screens.

The following day, my fears turned out to be justified! Trying to be clever, I wanted the service dividers to switch to vertical alignment at the md-breakpoint. I thought this would be easy by changing the col-md-x proportions and simply adding a media query and switching the width declaration for height as follows.

![capture-7.png](assets/captures/capture-7.png)

``` css
.service-divider {
  border-bottom: 2px solid #212529;
  width: 60%;
  margin: 10px auto;
}

@media only screen and (min-width: 768px) {
  .service-divider {
    border-left: 2px solid #212529;
    height: 60%;
    margin: 0 auto;
  }
}
```
![capture-8.png](assets/captures/capture-8.PNG)

I have no idea why it's behaving like this. I know that divs have different default widths and heights, but surely the horizontal dividers should at least not appear at all at the mid width range?

I managed to solve it by removing any reference to height whatsoever. 

``` css
@media only screen and (min-width: 768px) {
  .service-divider {
    border-left: 2px solid #212529;
    border-right: 2px solid #212529;
    width: 0px;
    margin: 0 auto;
    padding: 0;
  }
}
```
![capture-9.png](assets/captures/capture-9.PNG)

Even if I set the divider height to 100% it completely disappears. I am however content to move on!

`console.log(ballAche);`

![capture-10.png](assets/captures/capture-10.PNG)

Some of the pictures have different sizes. I don't know how bootstraps .img-thumbnail class works.

This was actually easy to solve. Using dev tools, I realised that all the images had equal widths, and sometimes varying height. I measured the most common height, then set a max-height at 1px greater.

As I'm working on the 4x2 layout for xl+ screens, I initially reactivated the fourth service div and limited the media query with a (max-width: 1200px) but I got this.

![capture-11.png](assets/captures/capture-11.PNG)

I've got a feeling that this is due to the max-width declaration on this div.

I had to write a separate media query for this, which fixed the issue. I also had to adjust the margin to suit the layout.

``` css
@media only screen and (min-width: 1200px) {
  .service-divider {
    width: 100%;
    margin: 0 auto 30px auto;
  }
}
```
I changed the width to 90% in order to better match the sm layout. And that's the home page done for now!

## Building the About page

At this point I wondered how should I organise the stylesheet. I considered a separate stylesheet for the navbar and footer, one for the content of each page. But I thought that it's currently not that long and it would be easier to stylise the whole site if it were one document. I then separated the stylesheet with comments into its different components.

I found a found a YouTube tutorial covering "Split Screen Parallax Effect Tutorial | HTML CSS & Javascript". 

https://www.youtube.com/watch?v=jvbL-VqACyM

However, having started to follow along and apply the principles to my site, I am wondering how I am going to make this responsive. I think I am going to use Bootstrap grid to set one column on small screens and two on md+. In the one column layout, the subsection title will pin to the top of the screen (hopefully) and in the two column layout, the subsection titles will pin to the side as per the tutorial.

With the tutorial above, I had trouble implementing ScrollMagic as I do not fully understand the automatic formatting it implements. I found another lesson YouTube series that is very good.

https://www.youtube.com/watch?v=qTzXNJeoHDw&list=PLugdEmbrdWSwKttz5Yfqt9jpNakpA_1Io&index=2

On my About page, I have now been able to pin an item for a fixed duration of scrolling. 

![capture-12.png](assets/captures/capture-12.PNG)

![capture-13.png](assets/captures/capture-13.PNG)

At this point my progress was stalling. I asked my mentor if he was familiar with ScrollMagic as I was wondering if there were an industry standard for animated scrolling, perhaps with better, more recent tutorials online. He pointed out that JavaScript would not be marked for this project and that CSS would be sufficient for my needs. Upon further research I came across the Holy Grail

`position: sticky;`

Having experimented with it, I am in love with how much simpler it is.

My new plan is to have a very simple sticky effect, where the title of each section sticks to the top of the screen below the navbar. I will try to simulate text appearing and disappearing at the start and end by placing a cover with a high-z index at the top and bottom of each section.

With the fixed images, I had a fair amount of trouble with containing them. To get a parallax effect, I had to use CSS background properties rather than an image element. I then found out that the background-attachment: fixed; declaration positions and sizes the background image relative to the viewport, not the container. To get around this I set...

```css
.image-col {
  padding: 0;
  background-repeat: no-repeat;
  background-position: 10% center;
  background-size: auto 70%;
  background-attachment: fixed;
}

#image-1 {
  background-image: url(../images/about/about-fake-1.png);
}
```

However, because these values are relative to the viewport, not the container, it is hard to perfect positioning on all screen sizes, as all the other elements behave relative to their containers.

My next challenge is to replicate fading in and out of the .sticky-title elements. First I want to set the titles so that they start their 'fix' at the right time so that they can pop out from under their cover, have space to appear before paragraphs. This is how it currently looks...

![capture-14.png](assets/captures/capture-14.PNG)

![capture-15.png](assets/captures/capture-15.PNG)

After some tinkering, I ended up inserting a div (.title-cover) above the h2 element in the .text-col, and styling as follows...

```css
.text-col {
  padding: 0;
  position: relative;
}

.title-cover {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 65px;
  background-color: purple;
  z-index: 1;
}

.sticky-title {
  margin-bottom: 0;
  padding: 20px 0 10px 0;
  position: sticky;
  top: 70px;
  background-color: lightgoldenrodyellow
}

.text-col p:first-of-type {
  background-color: pink;
  margin-top: 120px;
}
```
Which turned out pretty dang good...

![capture-16.png](assets/captures/capture-16.PNG)

![capture-17.png](assets/captures/capture-17.PNG)

![capture-18.png](assets/captures/capture-18.PNG)

I had to leave a fair bit of padding at the top of the .sticky-title to help cover up the text passing underneath.

















































