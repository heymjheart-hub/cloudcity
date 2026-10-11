# MJ in Cloud City RP

My character page for Allie, Margo and Scarlet in Cloud City V2 RP.

## How to edit

**Almost everything you'll want to change is in `content.js`.** Open it and change the words between the quote marks.

| I want to change... | Go to... |
|---|---|
| The big title, the intro, the Twitch button | `content.js` → TOP OF THE PAGE |
| A girl's name, tag, intro, backstory or facts | `content.js` → MY CHARACTERS |
| A girl's colors or her floating sparkles | `content.js` → her `color`, `color2`, `background`, `sparkles` |
| Who shows up first | `content.js` → move her whole `{ ... }` block to the top |
| Quiz questions, answers or results | `content.js` → QUIZ |
| The Cloud City Discord box | `content.js` → CLOUD CITY DISCORD BOX |
| My bio, schedule and social links | `content.js` → ABOUT ME |
| A photo | Put the new picture in `images/` with the same file name (or change the file name in `content.js`) |

### Rules of thumb
- Keep the quote marks, commas and brackets where they are. Only change the words.
- Apostrophes are fine ("she's"). For a quote mark inside your text, use curly ones “ ”.
- If the page goes blank after an edit, you probably deleted a comma or a quote mark. Undo your last change and try again.

## The other files (you usually don't need these)
- `index.html` is the layout.
- `style.css` is how it looks.
- `app.js` is the engine that builds the page from `content.js`.

## Hearts
Hearts are saved on each viewer's own device, so everyone sees their own picks.
