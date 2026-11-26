[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/hannanfen4157/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/hannanfen4157/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

# World News — Thursday, 26 November 2026

A front-page-style image that sums up the world news of Thursday
26 November 2026 in six stories. The image is `entry.png`, a
1024 × 1024 PNG drawn by hand with Python/PIL; `main.ts` (Node 22,
standard library only) copies it to the output directory and checks
that the copy is a whole, byte-complete PNG.

## The six stories

Each story below was reported on Thursday 26 November 2026, and every
date and number was checked against wire reporting before the image
was drawn.

1. **Trump unveils new tariffs on 14 economies** — Washington proposes
   new Section 301 duties on China, the EU, Japan and 11 other trading
   partners to counter factory overcapacity. China faces a capped 20%
   rate (40% if the trade truce fails); the EU 15%. Public hearings are
   set for 25 January. (Reuters, BBC, The Times, 26 Nov 2026)
2. **Houthis claim a strike on Saudi Arabia's Ras Tanura refinery** —
   Yemen's Houthis say they hit the kingdom's largest refinery and
   Riyadh's financial district. Riyadh says its air defences shot down
   four drones over Ras Tanura. Brent crude settled at $94.61 a barrel,
   up 3.5%. (Reuters, 25–26 Nov 2026)
3. **FCC clears SpaceX to launch 1 million satellites** — the Federal
   Communications Commission authorises SpaceX's Starmind constellation
   of up to one million AI data-centre satellites, the first such
   approval in US history. The first satellite is due by 2033 and the
   full network by 2040. (Reuters, Wall Street Journal, 25–26 Nov 2026)
4. **Kim orders wider tactical nuclear deployment** — North Korea's
   leader Kim Jong Un, inspecting nuclear material production and
   weapons research facilities, says the country should deploy tactical
   nuclear weapons across multiple domains, and calls its status as a
   nuclear weapons state "absolutely inviolable". (KCNA via Reuters,
   26 Nov 2026)
5. **Fuel tanker fire kills 31 on Cairo's Ring Road** — a tanker
   carrying petroleum products overturns in Giza and bursts into
   flames, engulfing cars on the highway. At least 31 people are
   killed, 21 injured and 27 vehicles charred, Egyptian authorities
   say. (AP, CNN, 25–26 Nov 2026)
6. **Ukraine hits five jets at a Russian air base** — Kyiv says its
   strike on Savasleyka air base, 300 km east of Moscow, damaged three
   MiG-31 jets that fire Kinzhal hypersonic missiles and two Su-34
   fighter-bombers, knocking them out of operation for some time.
   (Reuters, 25–26 Nov 2026)

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.png` and verifies the PNG signature, the
1024 × 1024 size limit, the IEND trailer and that the copy is
byte-identical to the source. Running it twice produces identical
bytes.

## Reproduce the image

The drawing script is kept outside the repository at
`draw-news-image-20261126.py` (it is a build tool, not part of the
entry). It renders `entry.png` from the six verified stories above
with Pillow; the committed `entry.png` is the file it produces.
