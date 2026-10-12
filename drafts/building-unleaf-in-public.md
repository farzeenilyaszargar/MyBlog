---
title: "Building In Public, Buying Eyeballs And What Happened"
date: "2026-10-13"
summary: "I built Unleaf in 30 minutes, posted it on Twitter, experimented with ads and launched on Product Hunt. Here are the screenshots, the numbers, and what it made me think about distribution and virality."
tags:
  - unleaf
  - building in public
  - marketing
  - distribution
  - product hunt
keywords:
  - Unleaf LaTeX editor
  - building in public experiment
  - Twitter ads and website traffic
  - Product Hunt launch lessons
---

I used to think that building in public was simple. You build something cool, post it, people see it and some of them start using it. Then if the product is good enough, more people come.

Well I wanted to see what actually happens. So I built [Unleaf](https://unleaf.lol/), an online LaTeX editor. No login. No workspace. Just write, compile and get your PDF.

I built it in around **30 minutes using 6 Astra and goal setting**. The idea was to give the agent a clear goal and let it work towards a usable product. This was just for experimentation. I wanted to find out how building in public, marketing, ads and launches work when you actually do them yourself.

The building part was quick. The getting-people-to-use-it part was where things got interesting.

### First, the thing I built

I wanted something which lets you get to the document without doing a dozen other things first. An editor on the left, a preview on the right and an export button. That was the pitch.

![Unleaf with LaTeX source on the left and a rendered research paper on the right](/blog-assets/unleaf/editor.webp)

*The actual editor. This is what people reached after clicking through to [unleaf.lol](https://unleaf.lol/).*

It was also a useful product to experiment with because the promise was easy to explain. People who write LaTeX already know what getting a PDF means. I did not need to explain an entirely new category of software.

### Then I put it on Twitter

On September 27 I posted that Overleaf made LaTeX feel like enterprise software, so I made Unleaf. No login, no workspace, no clutter. Just write LaTeX, compile instantly and get your PDF.

I also experimented with Twitter ads. I wanted to see if putting money behind distribution would bring people to the product, and what would happen after that.

![September 27 Unleaf launch tweet showing 6 replies, 2 reposts, 52 likes and approximately 21K views](/blog-assets/unleaf/launch-tweet.webp)

*The launch tweet as captured on October 13: 6 replies, 2 reposts, 52 likes and around 21K views.*

21K looks nice. It feels like something happened. But what actually happened on the other end?

### Eyeballs and people arriving are different numbers

The analytics screenshot for the last 30 days showed **238 visitors, 340 page views and an 84% bounce rate**. There was a spike around September 27 and the days immediately after, then the traffic fell off quite sharply.

![Unleaf analytics for the last 30 days showing 238 visitors, 340 page views, an 84 percent bounce rate and a launch-period traffic spike](/blog-assets/unleaf/traffic.webp)

*A snapshot of the last 30 days, taken on October 13. The launch brought a burst of traffic. The burst did not keep going by itself.*

Twitter was the biggest named referrer in the screenshot. **t.co brought 93 visitors**. Google brought 8, LinkedIn's website brought 6 and its Android app brought 4. Product Hunt brought 4.

![Unleaf referrers showing t.co with 93 visitors, Google with 8, LinkedIn with 6, LinkedIn Android with 4 and Product Hunt with 4](/blog-assets/unleaf/referrers.webp)

*The referrer breakdown. There were also single visitors attributed to Asana and fizzy.blog.*

So Twitter did bring people. It was the strongest visible source of referrals here. But I cannot call those 93 people conversions into actual users just because they arrived.

The tweet views and t.co visitors are also different measurements. Dividing 93 by 21K gives roughly 0.44%, but that is not a measured ad conversion rate. The referrer screenshot does not separate paid clicks from organic ones, or tell me whether every visitor came from that one tweet. I also do not have ad spend or ad clicks in these screenshots to calculate what acquiring a visitor cost.

And there is another problem. Unleaf is a no-login editor. Someone can open it, write something and leave. A bounce alone does not tell me whether they got value, and a page view does not tell me whether they compiled anything. I needed to measure successful compiles, PDF exports and people coming back. These screenshots do not answer that part.

That was a lesson for me. I could see attention and arrivals. I could not yet see the whole journey from attention to useful work.

### Product Hunt was a much smaller event

I put Unleaf on Product Hunt too. The launch snapshot showed **9 points, 1 comment, #58 for the day and #317 for the week**.

![Unleaf Product Hunt launch showing 9 points, 1 comment, day rank 58 and week rank 317](/blog-assets/unleaf/product-hunt.webp)

*The Product Hunt result at the time of the screenshot. No magical number one launch here.*

The site analytics showed 4 visitors referred from Product Hunt. In this experiment Twitter brought substantially more visible referrals than Product Hunt did.

I think I had treated launching as if the platform would do the distribution for me. You put the product there and people discover it. But my result was small. Being listed somewhere and having an audience waiting for you there are different things.

### Can people go viral on command?

I wrote something in my notes after watching other launches. It sometimes looks like people go viral purely on command. A tweet is made, medium-sized accounts reply and repost, ads run, and then there is a Product Hunt launch with a crowd already around it. From outside it can look all prepurposed.

My suspicion is that some of what looks spontaneous has a lot of preparation behind it. A community, friends, employees, people who already know the founder, maybe paid promotion. If a company has ten active employees, it already has people who can see the post, talk about it and share it. A solo builder is starting from a different place.

In my notes I even wondered whether you could spend something like $200 and pad a post to 200K views. That was a thought, not a result from this experiment. These screenshots do not establish that price or that outcome.

I also wondered about people being paid to post in tech communities and large Discord groups. Are some of the simultaneous tweets, quotes and reposts part of a campaign? Maybe. That is my theory, not something I have proved about any particular launch. I have no evidence here of duplicate-account voting or paid engagement behind someone else's ranking either.

Still, the question interests me. How much of what we call virality is the product spreading by itself, and how much is a distribution effort which we only see the final result of?

I do not think every successful launch is fake. I think I was underestimating how much work can happen before the first public post.

### What I learnt

The experiment made distribution feel more concrete to me. You can build something quickly now. You can also buy attention. But after someone sees it, they still have to care enough to click, understand what it does, try it and have a reason to come back.

In Unleaf's case, the launch got attention and brought visitors. The traffic spike then faded. I cannot look at that graph and say I had a growing base of people using the product every day. I also cannot say everyone who left hated it. I simply did not measure enough to know.

Next time I would use separate tagged links for ads, organic posts and Product Hunt. I would measure whether someone compiled a document or exported a PDF, and whether they returned. Then I could see which channel brought people who actually wanted the thing, rather than just which channel made the numbers move.

I would also spend more time finding the people who need the product. For a LaTeX editor that might be students, researchers and people writing technical documents. A crowd of developers liking the launch is nice, but are they the ones who need to write a paper today?

I still want more people using what I build. Going viral sounds fun. But this experiment made me want to understand what happens after the viral part too.

Unleaf was built in 30 minutes. Learning how to bring it to people, and figuring out what those people did with it, took longer. That was the point of the experiment. I wanted to try things, see the numbers myself and learn how marketing and the other stuff actually works.

You can try it at [unleaf.lol](https://unleaf.lol/). I am still learning.
