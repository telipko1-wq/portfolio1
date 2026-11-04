/* ===========================================
   Юлия Телипко — логика сайта
   =========================================== */

/* ---------- ДАННЫЕ РАБОТ ----------
   Чтобы добавить кейс — скопируйте блок и поменяйте поля.
   img: путь к файлу в папке images/
------------------------------------- */
const WORKS = [
  {
    img: "images/video.jpg",
    tag: { ru: "Видео", en: "Video" },
    title: { ru: "Видео-поздравление с песней", en: "Greeting video with a song" },
    task: {
      ru: "Клиенту нужен был личный подарок к юбилею — не открытка из шаблона, а что-то, что действительно заденет.",
      en: "The client wanted a personal birthday gift — not a template card, but something that would genuinely land."
    },
    result: {
      ru: "Собрала сценарий, написала текст песни, сгенерировала музыку и вокал, смонтировала видео с фото и титрами. Отдала готовый файл под отправку в мессенджере.",
      en: "Wrote the script and the lyrics, generated the music and vocals, edited the video with photos and titles. Delivered a final file ready to send in a messenger."
    }
  },
  {
    img: "images/photo.jpg",
    tag: { ru: "Нейрофотосессия", en: "AI photoshoot" },
    title: { ru: "Нейрофотосессия для личного бренда", en: "AI photoshoot for a personal brand" },
    task: {
      ru: "Нужны были аккуратные портреты для профиля — без студии, визажиста и многочасовой съёмки.",
      en: "Needed clean portraits for a profile — without a studio, a makeup artist or a multi-hour shoot."
    },
    result: {
      ru: "Подобрала визуальный референс, собрала серию из нескольких образов в единой эстетике. Клиент выбрал кадры для профиля и постов.",
      en: "Defined the visual reference and produced a series of looks within one consistent aesthetic. The client picked the shots for the profile and posts."
    }
  },
  {
    img: "images/avatar.jpg",
    tag: { ru: "ИИ-аватар", en: "AI avatar" },
    title: { ru: "Экспертный ИИ-аватар", en: "Expert AI avatar" },
    task: {
      ru: "Эксперту нужно было регулярно выпускать видео, но времени на съёмку каждый раз не было.",
      en: "An expert needed to publish video regularly but had no time to film each time."
    },
    result: {
      ru: "Сделала цифрового двойника: внешность, голос, манера речи. Теперь ролик собирается из текста — без камеры и пересъёмок.",
      en: "Built a digital double: appearance, voice, delivery. Now a video is assembled from a script — no camera, no reshoots."
    }
  },
  {
    img: "images/carousel.jpg",
    tag: { ru: "Посты и карусели", en: "Posts & carousels" },
    title: { ru: "Серия постов-каруселей", en: "A series of carousel posts" },
    task: {
      ru: "Нужен был контент, который читают до конца, а не пролистывают на втором слайде.",
      en: "The goal was content people actually read to the end instead of swiping past slide two."
    },
    result: {
      ru: "Придумала структуру истории, написала тексты и собрала визуальный ритм слайдов — одна мысль на слайд, единый стиль серии.",
      en: "Designed the narrative structure, wrote the copy and set the visual rhythm of the slides — one idea per slide, one consistent style across the series."
    }
  },
  {
    img: "images/music.jpg",
    tag: { ru: "Музыка", en: "Music" },
    title: { ru: "Персональная песня на заказ", en: "Custom personal song" },
    task: {
      ru: "Поздравление должно было звучать как настоящая песня, а не как синтезированная заготовка.",
      en: "The greeting had to sound like a real song, not a synthesised placeholder."
    },
    result: {
      ru: "Написала текст под конкретного человека и повод, собрала аранжировку и вокал. Трек вошёл в видео-поздравление.",
      en: "Wrote lyrics for a specific person and occasion, produced the arrangement and vocals. The track became the backbone of the greeting video."
    }
  },
  {
    img: "images/slides.jpg",
    tag: { ru: "Презентации", en: "Presentations" },
    title: { ru: "Презентация с анализом темы", en: "Presentation with topic analysis" },
    task: {
      ru: "Материала было много и вразнобой — нужно было собрать его в понятную историю для выступления.",
      en: "There was plenty of scattered material that needed to become a clear story for a talk."
    },
    result: {
      ru: "Разобрала тему, выстроила логику, собрала слайды с аккуратной вёрсткой и внятной иерархией.",
      en: "Analysed the topic, built the logic, and produced slides with clean layout and clear hierarchy."
    }
  }
];

/* ---------- ПЕРЕВОДЫ ---------- */
const I18N = {
  ru: {
    "brand.role": "ИИ-креатор",
    "nav.services": "Услуги",
    "nav.works": "Работы",
    "nav.about": "Обо мне",
    "nav.contact": "Контакт",
    "cta.short": "Обсудить проект",
    "cta.main": "Обсудить проект",
    "cta.works": "Смотреть работы",
    "hero.eyebrow": "Юлия Телипко · ИИ-креатор и контент-продюсер",
    "hero.title": "Контент, который делает ИИ\u00A0— и\u00A0я.",
    "hero.lead": "Видео, музыка, нейрофотосессии, ИИ-аватары, презентации и посты. Быстро, аккуратно и с человеческим смыслом.",
    "mq.1": "Сценарии", "mq.2": "Видео", "mq.3": "Нейрофотосессии", "mq.4": "ИИ-аватары",
    "mq.5": "Музыка", "mq.6": "Презентации", "mq.7": "Посты и карусели",
    "services.title": "Что я делаю",
    "services.sub": "Шесть направлений — можно взять одно или собрать всё вместе.",
    "s1.t": "Видео и поздравления",
    "s1.d": "Ролики, видеооткрытки, поздравления с песней — от идеи и сценария до финального монтажа.",
    "s2.t": "Нейрофотосессии",
    "s2.d": "Портреты и образы без студии, света и перелётов. Ваше лицо — в нужной эстетике и сценарии.",
    "s3.t": "ИИ-аватары",
    "s3.d": "Говорящий цифровой двойник для контента и презентаций. Экспертный аватар — уже есть в портфеле.",
    "s4.t": "Музыка и озвучка",
    "s4.d": "Треки, джинглы и персональные песни — с текстом под ваш повод и задачу.",
    "s5.t": "Тексты, посты, карусели",
    "s5.d": "Сценарии, посты и карусели с внятной мыслью и визуальным ритмом — не «нейросетевой воды».",
    "s6.t": "Презентации и анализ",
    "s6.d": "Разбор темы, структура и слайды: собрать разрозненное в понятную и красивую историю.",
    "works.title": "Работы",
    "works.sub": "Нажмите на карточку — покажу задачу и результат.",
    "about.title": "Обо мне",
    "about.p1": "Меня зовут Юлия Телипко. Я ИИ-креатор и контент-продюсер: беру задачу, разбираю её на смыслы и собираю готовый контент — от сценария и текста до видео, музыки и визуала.",
    "about.p2": "Работаю с инструментами ИИ, но отвечаю за результат как автор: за идею, за вкус, за то, чтобы получилось уместно и по делу.",
    "about.f1n": "1", "about.f1l": "подход — под задачу, а не под шаблон",
    "about.f2n": "2 языка", "about.f2l": "работаю с русским и английским контентом",
    "about.f3n": "Онлайн", "about.f3l": "вся работа и правки — в переписке",
    "process.title": "Как проходит работа",
    "p1.t": "Заявка",
    "p1.d": "Пишете в Telegram: что нужно, для кого и к какой дате. Я задаю вопросы и называю срок.",
    "p2.t": "Концепция",
    "p2.d": "Предлагаю идею, референсы и формат. Согласуем — и я ухожу в производство.",
    "p3.t": "Готовый контент",
    "p3.d": "Отдаю файлы в нужных форматах, вношу правки и помогаю с публикацией.",
    "ctaBlock.title": "Расскажите, что нужно — предложу решение.",
    "ctaBlock.sub": "Напишите в Telegram, это самый быстрый способ. Отвечаю лично.",
    "footer.role": "ИИ-креатор и контент-продюсер",
    "footer.up": "Наверх ↑",
    "modal.taskLabel": "Задача",
    "modal.resultLabel": "Результат"
  },
  en: {
    "brand.role": "AI creative",
    "nav.services": "Services",
    "nav.works": "Work",
    "nav.about": "About",
    "nav.contact": "Contact",
    "cta.short": "Start a project",
    "cta.main": "Start a project",
    "cta.works": "See the work",
    "hero.eyebrow": "Yuliya Telipko · AI creative & content producer",
    "hero.title": "Content made by AI\u00A0— and\u00A0me.",
    "hero.lead": "Video, music, AI photoshoots, AI avatars, presentations and posts. Fast, polished, and actually meaningful.",
    "mq.1": "Scripts", "mq.2": "Video", "mq.3": "AI photoshoots", "mq.4": "AI avatars",
    "mq.5": "Music", "mq.6": "Presentations", "mq.7": "Posts & carousels",
    "services.title": "What I do",
    "services.sub": "Six directions — take one or combine them all.",
    "s1.t": "Video & greetings",
    "s1.d": "Promos, video cards and birthday videos with an original song — from idea and script to the final cut.",
    "s2.t": "AI photoshoots",
    "s2.d": "Portraits and looks without a studio, lighting or travel. Your face, in the right aesthetic and story.",
    "s3.t": "AI avatars",
    "s3.d": "A talking digital double for content and presentations. An expert avatar is already in the portfolio.",
    "s4.t": "Music & voice",
    "s4.d": "Tracks, jingles and custom songs — with lyrics written for your occasion and goal.",
    "s5.t": "Copy, posts, carousels",
    "s5.d": "Scripts, posts and carousels with a clear point and a visual rhythm — not generic AI filler.",
    "s6.t": "Presentations & analysis",
    "s6.d": "Topic research, structure and slides: turning scattered material into a clear, good-looking story.",
    "works.title": "Selected work",
    "works.sub": "Tap a card to see the brief and the result.",
    "about.title": "About me",
    "about.p1": "I'm Yuliya Telipko, an AI creative and content producer. I take a brief, break it down into what actually matters, and deliver finished content — from script and copy to video, music and visuals.",
    "about.p2": "I work with AI tools, but I answer for the result as an author: for the idea, for the taste, for it being appropriate and on point.",
    "about.f1n": "1", "about.f1l": "approach — built around the task, not a template",
    "about.f2n": "2 languages", "about.f2l": "content in Russian and English",
    "about.f3n": "Remote", "about.f3l": "the whole process and revisions happen in chat",
    "process.title": "How it works",
    "p1.t": "Your brief",
    "p1.d": "Message me on Telegram: what you need, for whom, and by when. I ask questions and give you a timeline.",
    "p2.t": "The concept",
    "p2.d": "I propose the idea, references and format. Once we agree, I go into production.",
    "p3.t": "Final content",
    "p3.d": "I deliver files in the formats you need, make revisions and help with publishing.",
    "ctaBlock.title": "Tell me what you need — I'll suggest a solution.",
    "ctaBlock.sub": "Message me on Telegram, it's the fastest way. I answer personally.",
    "footer.role": "AI creative & content producer",
    "footer.up": "Back to top ↑",
    "modal.taskLabel": "Brief",
    "modal.resultLabel": "Result"
  }
};

/* ---------- Состояние ---------- */
let lang = localStorage.getItem("yt-lang") || "ru";

/* ---------- Рендер работ ---------- */
const grid = document.getElementById("worksGrid");

function renderWorks(){
  grid.innerHTML = WORKS.map((w, i) => `
    <button class="work reveal" type="button" data-index="${i}" aria-label="${w.title[lang]}">
      <img src="${w.img}" alt="${w.title[lang]}" loading="lazy" width="1200" height="1200">
      <span class="work-label">
        <span class="work-tag">${w.tag[lang]}</span>
        <span class="work-title">${w.title[lang]}</span>
      </span>
    </button>
  `).join("");

  grid.querySelectorAll(".work").forEach(btn => {
    btn.addEventListener("click", () => openModal(+btn.dataset.index));
  });

  observeReveals();
}

/* ---------- Модальное окно ---------- */
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalTag = document.getElementById("modalTag");
const modalTitle = document.getElementById("modalTitle");
const modalTask = document.getElementById("modalTask");
const modalResult = document.getElementById("modalResult");
let lastFocused = null;

function openModal(index){
  const w = WORKS[index];
  if(!w) return;
  lastFocused = document.activeElement;

  modalImg.src = w.img;
  modalImg.alt = w.title[lang];
  modalTag.textContent = w.tag[lang];
  modalTitle.textContent = w.title[lang];
  modalTask.innerHTML = `<strong>${I18N[lang]["modal.taskLabel"]}.</strong> ${w.task[lang]}`;
  modalResult.innerHTML = `<strong>${I18N[lang]["modal.resultLabel"]}.</strong> ${w.result[lang]}`;

  modal.hidden = false;
  document.body.classList.add("no-scroll");
  modal.querySelector(".modal-close").focus();
}

function closeModal(){
  modal.hidden = true;
  document.body.classList.remove("no-scroll");
  if(lastFocused) lastFocused.focus();
}

modal.addEventListener("click", e => {
  if(e.target.closest("[data-close]")) closeModal();
});
document.addEventListener("keydown", e => {
  if(e.key === "Escape" && !modal.hidden) closeModal();
});

/* ---------- Язык ---------- */
const langBtn = document.getElementById("lang");

function applyLang(l){
  lang = l;
  localStorage.setItem("yt-lang", l);
  document.documentElement.lang = l;
  langBtn.textContent = l === "ru" ? "EN" : "RU";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    const val = I18N[l][key];
    if(val !== undefined) el.textContent = val;
  });

  document.title = l === "ru"
    ? "Юлия Телипко — ИИ-креатор и контент-продюсер"
    : "Yuliya Telipko — AI creative & content producer";

  renderWorks();
}

langBtn.addEventListener("click", () => applyLang(lang === "ru" ? "en" : "ru"));

/* ---------- Меню на мобильном ---------- */
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  burger.setAttribute("aria-expanded", String(open));
});

nav.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  });
});

/* ---------- Тень у шапки при скролле ---------- */
const header = document.getElementById("header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------- Анимация появления ---------- */
let io = null;
function observeReveals(){
  if(!("IntersectionObserver" in window)){
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("in"));
    return;
  }
  if(!io){
    io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  }
  document.querySelectorAll(".reveal:not(.in)").forEach(el => io.observe(el));
}

/* ---------- Старт ---------- */
applyLang(lang);
observeReveals();
