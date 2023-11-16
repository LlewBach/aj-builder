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

## Building the header and footer

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

































