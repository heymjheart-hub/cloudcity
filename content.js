/* =====================================================================
   CONTENT.JS  ·  ALL THE WORDS ON THE SITE LIVE HERE
   ---------------------------------------------------------------------
   HOW TO EDIT (no coding needed):
   • Only change the words BETWEEN the quote marks "like this".
   • Keep the quote marks, commas and brackets exactly where they are.
   • Need an apostrophe? Go for it: "she's" works fine inside " ".
   • Need a quote mark inside your text? Use curly ones “ ” instead.
   • To swap a photo, put a new picture in the images folder with the
     SAME file name, or change the file name here to match your new one.
   • Lines that start with // are notes for you. The site ignores them.
   ===================================================================== */

window.SITE = {

  /* ---------- TOP OF THE PAGE ---------- */
  pageTitle:   "MJ in Cloud City RP",            // shows in the browser tab
  smallLabel:  "mjheart · Cloud City V2 RP",     // tiny line above the big title
  title:       "MJ in",                          // big title, first part
  titlePretty: "Cloud City",                     // big title, fancy italic part
  intro:       "Haiiiiii y'all! These are the girls I play in Cloud City. Tap a picture to meet her, and heart the ones you love!!!!",

  twitch: {
    url:    "https://twitch.tv/mjheart",
    button: "Watch live on Twitch",
    handle: "twitch.tv/mjheart"
  },

  /* ---------- MY CHARACTERS ----------
     The order here is the order on the page. To move someone first,
     cut her whole { ... } block and paste it above the others.

     color      = her main color (the glow, buttons, borders)
     color2     = her second color (tagline, little accents)
     background = the dark color behind everything when she's picked
     sparkles   = "sprinkles", "sparkles" or "embers"
     policeLights = true turns on the red and blue light at the top
  */
  characters: [

    {
      id: "allie",                               // don't change this one
      name: "Allie Darling",
      shortName: "Allie",
      role: "Owner of Wednesdays",
      tag: "Sugar coated",                       // little label on her card
      cardPhoto: "images/allie-card.jpg",
      profilePhoto: "images/allie-profile.jpg",
      color: "#ffa6d1", color2: "#ff6fb5", background: "#1e1119",
      sparkles: "sprinkles", policeLights: false,

      tagline: "Hi, sweetie. The usual? I already started it.",
      intro: "Allie Darling is my sweetheart (and my little menace). She's the warmest person in any room and she means every hug. She owns Wednesdays, a pink coffee shop where a drink sometimes goes out with a secret ingredient. She rides with the Loyal Bloodline MC as a prospect, and lately she's really into science. If you go down near her, check your arm.",
      backstory: "Allie lost her mom and her brother, and her dream of being a lawyer went with them. Somewhere in all that, she stopped being scared of pain and got curious about it instead. Currently dating Bishop, the leader of the Loyal Bloodline.",

      facts: [
        ["Age",        "34"],
        ["Owns",       "Wednesdays"],
        ["Club",       "Loyal Bloodline MC · prospect"],
        ["Works with", "LA Bridges (coworker, not friend)"]
      ],

      photosTitle: "Around the city",
      photos: [
        { src: "images/allie-bloodline-meeting.jpg", caption: "Church with the Loyal Bloodline", wide: true },
        { src: "images/allie-vest.jpg",              caption: "Wearing the colors" },
        { src: "images/allie-pool.jpg",              caption: "Pool night" },
        { src: "images/allie-car.jpg",               caption: "Her pink ride" },
        { src: "images/allie-coffee-shop.jpg",       caption: "Behind the counter at Wednesdays", wide: true }
      ]
    },

    {
      id: "margo",
      name: "Margo Blake",
      shortName: "Margo",
      role: "Real estate & city tours",
      tag: "Realtor",
      cardPhoto: "images/margo-card.jpg",
      profilePhoto: "images/margo-profile.jpg",
      color: "#e8c26a", color2: "#f3dca0", background: "#1f170c",
      sparkles: "sparkles", policeLights: false,

      tagline: "Right, so, first of all? Welcome.",
      intro: "Margo Blake is my realtor girl. She sells houses, gives tours, and somehow knows everybody in Cloud City. Just got to town? Find Margo. She'll get you a place, show you around, and introduce you to the right people.",
      backstory: "Margo's from Essex, England. She came to Cloud City with big hair, bigger opinions and a gift for getting people settled.",

      facts: [
        ["From",     "Essex, England"],
        ["Job",      "Real estate agent and tour guide"],
        ["Find her", "Showing a property, or giving someone a tour"]
      ],

      box: {
        title: "New in Cloud City?",
        text:  "Find Margo in the city and she'll help you with:",
        list: [
          "A tour of the city and where everything is",
          "Finding your first apartment or house",
          "Meeting the people you should know"
        ]
      }
    },

    {
      id: "scarlet",
      name: "Scarlet Rae Delacroix",
      shortName: "Scarlet",
      role: "Police officer",
      tag: "Velvet & steel",
      cardPhoto: "images/scarlet.jpg",
      profilePhoto: "images/scarlet.jpg",
      color: "#ef4444", color2: "#ff9b9b", background: "#1c0708",
      sparkles: "embers", policeLights: true,

      tagline: "Ma'am, I'm going to need you to lower your voice. Thank you.",
      intro: "Scarlet Rae Delacroix is the newest officer at the PD, and y'all, she seems put together. She's polite but she's a lil slick.",
      backstory: "If you watched my Red Dead stories, that last name should ring a bell. Scarlet is Hazel Mae Delacroix's great-great-great-granddaughter. Hazel never married but she had a son, and the name came all the way down to Scarlet's mama, Rose, who raised her to stand her ground.",

      facts: [
        ["Job",       "Police officer, newly hired"],
        ["Family",    "The Delacroix line · mama Rose"],
        ["Known for", "That familiar face. People swear they've met her before."]
      ],

      file: {
        title: "Personnel file · Delacroix, Scarlet Rae",
        rows: [
          ["Strengths",     "storytelling & making people feel calm"],
          ["Training note", "“Needs to learn police work from scratch...training will be... interesting.”"]
        ]
      }
    }

  ],

  /* ---------- FAVORITES (the hearts) ---------- */
  favorites: {
    title: "Favorites",
    text:  "Heart your favorites up top. Pick as many as you want."
  },

  /* ---------- QUIZ ----------
     Each answer gives points to the girls listed after it:
     a = Allie, m = Margo, s = Scarlet. Bigger number = more points.
     "agree" questions use the four Strongly agree ... Strongly disagree answers,
     and their points go in that same order.
  */
  quiz: {
    title: "Which one are you?",
    text:  "Eight quick questions. Answer honest and see which of my girls you match.",
    questions: [
      { label: "Picture this", question: "You walk into a party where you don't know anyone. What do you notice first?",
        answers: [
          ["Who's standing with whom, and who's pretending not to look", {m:2}],
          ["The one odd detail nobody else has clocked yet",             {a:2}],
          ["Where the exits are",                                        {s:2}],
          ["The person standing by themselves",                          {s:1, a:1}]
        ]},
      { label: "How much do you agree?", question: "I'd rather know a secret than keep one.",
        agree: [ {m:2}, {m:1, a:1}, {s:1}, {s:2} ] },
      { label: "Picture this", question: "A friend admits they did something genuinely bad. Your honest first thought?",
        answers: [
          ["“Okay. Who else knows?”",                    {m:2}],
          ["“Wait, how? Walk me through the whole thing.”", {a:2}],
          ["“We have to make this right.”",              {s:2}],
          ["You quietly decide how much you still trust them", {m:1, s:1}]
        ]},
      { label: "How much do you agree?", question: "Rules are more like suggestions.",
        agree: [ {a:2}, {a:1, m:1}, {s:1}, {s:2} ] },
      { label: "Be honest", question: "When something really hurts, you usually...",
        answers: [
          ["Talk it through with someone (or a few someones)", {m:2}],
          ["Turn it into a project, or a joke",                {a:2}],
          ["Push through and deal with the feelings later",    {s:2}]
        ]},
      { label: "How much do you agree?", question: "I'm usually the calmest person in a crisis.",
        agree: [ {s:2, a:1}, {s:1}, {m:1}, {m:2} ] },
      { label: "Pick one", question: "Which compliment would stay with you the longest?",
        answers: [
          ["“Everyone feels welcome around you.”", {m:2}],
          ["“Your mind is fascinating.”",          {a:2}],
          ["“I'd trust you with my life.”",        {s:2}]
        ]},
      { label: "Pick one", question: "A free Saturday with nothing planned. Where does it go?",
        answers: [
          ["Brunch that turns into dinner with whoever shows up", {m:2}],
          ["Down a rabbit hole learning something strange",       {a:2}],
          ["Knocking out the to-do list so the evening is earned", {s:2}]
        ]}
    ],
    results: {
      allie:   "You're warm all the way through and curious all the way down. Where other people look away, you lean in. You turn pain into projects and dark moments into punchlines, and you love your people hard. Folks underestimate you because you're sweet. That's their mistake.",
      margo:   "You read a room like other people read a menu. You notice who's connected to who, you remember everybody, and people end up telling you things they didn't plan to. You make people feel at home (and you know that information is power).",
      scarlet: "You're the one people call when everything falls apart. You hold the line, keep your word, and carry more than you let on. Your gift is being steady. Your growth edge is letting somebody else carry a little for once."
    }
  },

  /* ---------- CLOUD CITY DISCORD BOX (under the quiz) ---------- */
  discord: {
    title:  "Want to play in Cloud City with us?",
    text:   "Come make your own story. Join the Discord, read the rules, and I'll see you in the city.",
    button: "Join the Cloud City Discord",
    url:    "https://discord.gg/jAxzkJy3FX"
  },

  /* ---------- ABOUT ME ---------- */
  about: {
    title: "About me",
    photo: "images/mj.jpg",
    paragraphs: [
      "Hey y'all, I'm MJ (mjheart on Twitch). I run a warm, neurodivergent-friendly variety stream: chatting, gaming, coworking, and a whole lot of roleplay. Allie, Margo and Scarlet are all me, and so is Hazel Mae Delacroix over on TrueGrit RP.",
      "RP for me is improv, storytelling and character work, so the stories are gonna grow (and get a little messy) as we go. New here and lost mid-scene? Just say hi in chat."
    ],
    details: [
      ["Stream schedule", "Sundays, Mondays (coworking) and Wednesdays"],
      ["Community",       "The Glow Garden, my Discord for chat, updates and polls between streams"],
      ["Support",         "Watch, follow, or sub on Twitch for ad-free viewing"]
    ],
    links: [
      ["Twitch",              "https://www.twitch.tv/mjheart"],
      ["Glow Garden Discord", "https://discord.gg/94GAfuGdfG"],
      ["X / Twitter",         "https://x.com/heymjheart"],
      ["YouTube",             "https://www.youtube.com/@heymjheart"]
    ]
  },

  /* ---------- BOTTOM OF THE PAGE ---------- */
  footerLeft:  "Every new chapter happens live on Twitch",
  footerRight: "Glow Garden · Cloud City V2 RP"
};
