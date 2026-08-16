# Landing Page Playbook

The structure to follow when building a landing page for a new Ready Jet Roam
product. Based on the direct-response format used by pages like
mariawendt.com/cash-spike, /words-into-money, and /viral-product-course.

Reference examples:
- https://www.mariawendt.com/cash-spike/
- https://www.mariawendt.com/words-into-money/
- https://www.mariawendt.com/viral-product-course/

---

## The 9 sections, in order

### 1. Big promise at the top
- A clear headline stating exactly what they'll get (the **result**).
- A short sentence underneath to add excitement or explain the benefit.
- A picture or mockup of the product/course.
- A big button they can click right away to join/buy.

### 2. Show proof it works
- A quick personal story (how you discovered this works).
- A big result you got (income, sales, transformation).
- Ask them to imagine getting the same results.

### 3. Bust their worries
- List the common things people think they need (time, tech, audience, etc.).
- Cross them out — show they are NOT required.
- Explain how your way is easier, faster, better.

### 4. Share results & examples
- Screenshots of results, before/after transformations, money made, sales
  coming in, success charts — anything that visually shows the outcome.
- Quick wins (e.g. students making money within days).
- Real numbers, stats, or pictures as proof.

### 5. Happy student stories
- Real testimonials (screenshots, quotes, or videos).
- Before-and-after transformations.
- Stories that feel relatable to the target reader.

### 6. Price & offer
- Show the price clearly (with discount or "today only" if desired).
- List everything included as one "stacked" list.
- Add urgency (limited time, bonuses ending).
- Reassure that it works for everyone.

### 7. Extra bonuses
- Add a surprise bonus (checklist, script, template).
- Show the regular price, then mark it FREE.
- Make it feel like a must-have add-on.

### 8. Answer common questions
Address hesitations directly:
- "Will this work for me?"
- "Do I need a big audience?"
- "What if I've never done this before?"

Answers should make people feel safe to buy.

### 9. Final push to buy
- Repeat the main promise/outcome.
- Another big buy/join button.
- Optionally a short video inviting them in.
- Close with one more happy student story.

---

## House conventions (from the Safer Travel build)

Carry these over to new pages unless the product calls for something different.

**Structure & hosting**
- One folder per guide: `/<slug>/index.html` → `guides.readyjetroam.com/<slug>`.
- Images for a guide live in that guide's folder (relative paths).
- `CNAME` at the repo root sets the custom domain — leave it alone.

**Reusable components**
- Hero: title pill → headline → lede → buy card (CTA, price, bullets, secure note).
- "About the author" credibility card under the product image.
- Story band (navy) — the personal "why I made this" section.
- "What's inside" feature grid.
- Testimonials as blurred email-style cards (see privacy note below).
- Final CTA band.
- Sticky CTA bar — appears after the hero scrolls away, hides at the final CTA.
- Favicon: `<link rel="icon" type="image/png" href="https://readyjetroam.com/wp-content/uploads/2020/10/green-icon-logo.png">`

**Design lessons learned**
- Design for a **hierarchy**, not "the fold." Guarantee headline + CTA + price
  on small laptops and phones; secondary content (author card, testimonials)
  may scroll. A visible "peek" of the next section encourages scrolling.
- The **sticky CTA** is what makes fold-chasing unnecessary — the buy button is
  always one tap away.
- **CSS gotcha:** don't use the `padding` shorthand (e.g. `padding: 40px 0`) on
  an element that also has the `.wrap` class — it zeroes out `.wrap`'s 24px side
  padding and the content bleeds off-screen on mobile. Use `padding-top` /
  `padding-bottom` longhand instead.
- Verify every change at both desktop and mobile widths before shipping.

**Testimonial privacy**
- Never publish customer email addresses.
- Blur/redact names — keep the name out of the DOM entirely, not just visually
  obscured.
- Get the customer's OK before quoting them publicly, especially for anything
  personal.
- Keep timestamp formatting consistent across cards (or omit timestamps).
