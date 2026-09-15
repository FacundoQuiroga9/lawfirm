# Google reviews — verified snapshot, 2026-09-15

## Profile and identity

[Law Office of Marc J. Fratter, PLLC](https://www.google.com/maps/place/Law+Office+of+Marc+J.+Fratter,+PLLC/data=!4m2!3m1!1s0x0:0x3d1063f6fa34ed64)
was inspected directly in the connected Chrome browser, using the Google Business
reviews dialog reached from the user's Google Search profile link.

| Field | Live Google listing | Project comparison |
| --- | --- | --- |
| Name | Law Office of Marc J. Fratter, PLLC | Same attorney |
| Website | http://www.marcjfratter.com/ | Same domain |
| Phone | (469) 782-0166 | Exact match |
| Address | 101 E Park Blvd Ste 355, Plano, TX 75074 | Same office; Suite abbreviated |

Knowledge Graph ID: `/g/1tddb7hb`. Maps feature ID:
`0x864c1749bb466877:0x3d1063f6fa34ed64`. CID: `4400126748351851876`.
No unobserved Place ID was inferred. Original user link:
<https://share.google/JOkL7HXqS2ojEMnNs>.

Google shows “Open 24 hours”; the project's approved office hours were preserved.
Earlier directory results used other cities, old phone numbers, or the spelling
“Mark”. The live Google panel now directly matches all four requested identity
checks, so those directory snippets were not used for review content.

## Collection completeness and requested selection

**Complete for the visible profile on the consultation date:** all **15** rows
were loaded by scrolling the unfiltered review list to its end. Each row's actual
rating was checked from Google's displayed star icons (gold vs. gray SVG fills).
Both long eligible comments (chris V and Roger Gulledge) were expanded before
capture. The 15 distinct review IDs reconcile with Google's displayed total.

- 14 five-star ratings, including 13 with comments.
- 11 published: five stars with a comment, excluding the two requested authors.
- Facundo Quiroga and Brittney Justice: excluded at the user's request.
- Beth K: five stars, no comment; excluded under the user's latest instruction.
- Chelsea Allen: one star; excluded by the rating criterion.

The collection contains selected five-star Google reviews. The visible selection
subtitle was removed at the user’s request; no business-wide score is displayed.
Completeness refers to this dated snapshot; future edits,
new reviews, and any Google-hidden/deleted entries cannot be covered by it.

## Included records

| Public author | Rating | Google date label | Direct review |
| --- | --- | --- | --- |
| chris V | 5 | a year ago | [Google](https://share.google/j50ip7HhY1WJDsmDk) |
| Don Rhoads | 5 | a year ago | [Google](https://share.google/A3v1izZCf2hrceNX6) |
| Roger Gulledge Sr. MBA Esq - Ret Army | 5 | a year ago | [Google](https://share.google/dwL1Ff9B7Uz4XTLHv) |
| Natalie Shafer | 5 | 6 months ago | [Google](https://share.google/CGqg3SnYYOTf9PE1V) |
| Cortney Fielder | 5 | a year ago | [Google](https://share.google/CdXNWruHEKc9ka8r9) |
| Tony West | 5 | 9 months ago | [Google](https://share.google/ZN1DPZwaWs7aL272n) |
| Brian Van Ness | 5 | a year ago | [Google](https://share.google/VD2KPicwtPTGWUeOa) |
| Caleb Young | 5 | a year ago | [Google](https://share.google/bHwLSb0Hp3yDIMLWD) |
| Dalilah Velazquez | 5 | 3 years ago | [Google](https://share.google/oEuVM1PESQiXnMqAS) |
| Nicky D | 5 | 7 years ago | [Google](https://share.google/NKJpTR6u9GR3b2QJ8) |
| David Shafer | 5 | 2 years ago | [Google](https://share.google/7WNIrshRhtJEPRwnX) |

Each published record in `src/data/googleReviews.js` stores Google's stable review
ID, exact public author name, rating, full original comment, relative date label,
direct share URL, author profile URL, source, consultation date, and verified flag.
Spaces and paragraph breaks were retained, including typos. Text was read from
the expanded DOM text nodes; `<br>` elements became newline characters. No review
photos were added. Google displayed relative dates only, so `publishedAt` is null;
no exact calendar date was invented from “a year ago”.

The actual Google author **chris V** and full comment are now verified and included.
The abbreviated “Chris V.” quote formerly in the code is not used as source data;
the current record comes directly from the expanded Google review.

## Highlight presentation requested by the user

The carousel now displays one manually selected `excerpt` from each of the 11
reviews. Excerpts are contiguous, verbatim passages from `text`, not generated
endorsements or paraphrases. Some are parts of sentences; each quote links to “Full review on Google”.
The visible “Highlights from 5-star Google reviews” subtitle was subsequently
removed at the user’s request.
Quotation marks are presentation only. No Read more or line truncation remains.

The entire original `text` and all provenance fields remain unchanged in the
central collection. For new entries, choose a concise, representative passage,
preserve its spelling/capitalization, and verify that `text.includes(excerpt)`.
The data checks enforce this for every published record.

## Updating the snapshot

1. Reopen the verified profile, check identity and traverse the complete list.
2. Expand eligible comments; retain exact text and stable IDs. Obtain direct
   review URLs from Google's Share review dialog without sending anything.
3. Apply `selection`: rating 5, nonblank comment, excluded author names. Keep
   exclusions centralized; the selector compares names without altering them.
4. Update the source date, counts and completeness honestly. If only part of the
   list is accessible, record the limitation and never call the snapshot complete.
5. Run `node --test tests/*.test.mjs`, `npm run lint`, and `npm run build`, then
   check the carousel in the browser at desktop and mobile widths.

This is static site data. No credentials, scraping endpoint, Google SDK, or
per-visitor review request was added. The earlier access limitation was resolved
when the user connected Chrome on 2026-09-15; no owner export is currently needed.
