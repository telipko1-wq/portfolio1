/* ===========================================
   Юлия Телипко — логика сайта
   =========================================== */

/* ---------- ДАННЫЕ РАБОТ ----------
   Чтобы добавить кейс — скопируйте блок и поменяйте поля.
   img: путь к файлу в папке images/
------------------------------------- */
const WORKS = [
  {
    img: "video.jpg",
    cat: "video",
    video: { url: "https://t.me/yuliya_portfoliovideo/2" },
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
    img: "photo.jpg",
    cat: "photo",
    gallery: ["photo.jpg", "photo-2.jpg", "photo-3.jpg", "photo-4.jpg", "photo-5.jpg", "photo-6.jpg", "photo-7.jpg", "photo-8.jpg", "photo-9.jpg", "photo-10.jpg", "photo-11.jpg", "photo-12.jpg"],
    tag: { ru: "Нейрофотосессия", en: "AI photoshoot" },
    title: { ru: "Нейрофотосессия", en: "AI photoshoot" },
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
    img: "avatar.jpg",
    cat: "avatar",
    video: { url: "https://t.me/yuliya_portfoliovideo/8" },
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
    img: "carousel.jpg",
    cat: "posts",
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
    img: "music.jpg",
    cat: "music",
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
    img: "slides.jpg",
    cat: "slides",
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
  },
  {
    img: "restore-after.jpg",
    cat: "restore",
    gallery: ["restore-after.jpg", "restore-before.jpg"],
    video: { url: "https://t.me/yuliya_portfoliovideo/7" },
    tag: { ru: "Реставрация", en: "Restoration" },
    title: { ru: "Реставрация и оживление старого фото", en: "Restoration and animation of an old photo" },
    task: {
      ru: "Старый снимок выцвел и был испорчен временем — хотелось вернуть ему чёткость и цвет.",
      en: "The old print had faded and was damaged by time — the goal was to bring back its clarity and colour."
    },
    result: {
      ru: "Восстановила фото: убрала повреждения и вернула цвет. Затем из реставрированного снимка сделала короткое видео — фотография оживает.",
      en: "Restored the photo: removed the damage and brought back the colour. Then made a short video from the restored image — the photo comes alive."
    }
  },
  {
    img: "video-2.jpg",
    cat: "video",
    videos: [
      { url: "https://t.me/yuliya_portfoliovideo/4" },
      { url: "https://t.me/yuliya_portfoliovideo/5" }
    ],
    tag: { ru: "Видео", en: "Video" },
    title: { ru: "Видеоролик", en: "Video clip" },
    task: {
      ru: "Нужен был короткий ролик под публикацию — с движением, а не статичными кадрами.",
      en: "Needed a short clip for a post — with movement rather than static frames."
    },
    result: {
      ru: "Собрала ролик: подобрала визуальный ряд, оживила кадры и смонтировала в единую историю.",
      en: "Produced the clip: sourced the visuals, animated the frames and edited them into one story."
    }
  },
  {
    img: "avatar-2.jpg",
    cat: "avatar",
    video: { url: "https://t.me/yuliya_portfoliovideo/6" },
    tag: { ru: "ИИ-аватар", en: "AI avatar" },
    title: { ru: "Аватар из фотографии", en: "Avatar from a photo" },
    task: {
      ru: "Показать, как из обычного портрета получается говорящий аватар.",
      en: "To show how an ordinary portrait turns into a talking avatar."
    },
    result: {
      ru: "Пример работы: по фотографии собрала аватар — он говорит и выглядит как человек на снимке.",
      en: "A sample of the process: built an avatar from a photo — it speaks and looks like the person in the image."
    }
  },
  {
    img: "reviews.jpg",
    cat: "reviews",
    scroll: "#reviews",
    tag: { ru: "Отзывы", en: "Reviews" },
    title: { ru: "Что говорят клиенты", en: "What clients say" },
    task: { ru: "", en: "" },
    result: { ru: "", en: "" }
  },
];

/* ---------- ОТЗЫВЫ ----------
   Пока реальных отзывов нет — показываем заглушки.
   Чтобы добавить настоящий отзыв: скопируйте объект,
   впишите текст, имя, роль и уберите строку placeholder: true.
   Если поставить REVIEWS = [] — раздел исчезнет с сайта.
------------------------------------- */
const REVIEWS = [
  {
    placeholder: true,
    text: {
      ru: "Здесь появится отзыв вашего клиента — пара предложений о том, что получилось и как проходила работа.",
      en: "A client review will appear here — a couple of sentences about the result and how the process went."
    },
    name: { ru: "Имя клиента", en: "Client name" },
    role: { ru: "Кто он и что заказывал", en: "Who they are and what they ordered" }
  },
  {
    placeholder: true,
    text: {
      ru: "Здесь появится отзыв вашего клиента — пара предложений о том, что получилось и как проходила работа.",
      en: "A client review will appear here — a couple of sentences about the result and how the process went."
    },
    name: { ru: "Имя клиента", en: "Client name" },
    role: { ru: "Кто он и что заказывал", en: "Who they are and what they ordered" }
  },
  {
    placeholder: true,
    text: {
      ru: "Здесь появится отзыв вашего клиента — пара предложений о том, что получилось и как проходила работа.",
      en: "A client review will appear here — a couple of sentences about the result and how the process went."
    },
    name: { ru: "Имя клиента", en: "Client name" },
    role: { ru: "Кто он и что заказывал", en: "Who they are and what they ordered" }
  }
];

/* ---------- ПЕРЕВОДЫ ---------- */
const I18N = {
  ru: {
    "brand.role": "ИИ-креатор",
    "nav.services": "Услуги",
    "nav.restoration": "Реставрация",
    "nav.works": "Работы",
    "nav.reviews": "Отзывы",
    "nav.about": "Обо мне",
    "nav.contact": "Контакт",
    "cta.short": "Обсудить проект",
    "cta.main": "Обсудить проект",
    "cta.works": "Смотреть работы",
    "hero.eyebrow": "Юлия Телипко · ИИ-креатор и контент-продюсер",
    "hero.title": "Контент, который делает ИИ\u00A0— и\u00A0я.",
    "hero.lead": "Видео, музыка, нейрофотосессии, ИИ-аватары, презентации и посты. Быстро, аккуратно и с человеческим смыслом.",
    "mq.1": "Сценарии", "mq.2": "Видео", "mq.3": "Нейрофотосессии", "mq.4": "ИИ-аватары",
    "mq.5": "Музыка", "mq.6": "Презентации", "mq.7": "Посты и карусели", "mq.8": "Реставрация фото",
    "services.title": "Что я делаю",
    "services.sub": "Семь направлений — можно взять одно или собрать всё вместе.",
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
    "s7.t": "Реставрация и оживление старых фото",
    "s7.d": "Возвращаю чёткость выцветшим и повреждённым снимкам. А потом фотография оживает: человек на ней улыбается, моргает, поворачивает голову.",
    "s7.cta": "До и после",
    "works.title": "Работы",
    "works.sub": "Нажмите на карточку — покажу задачу и результат.",
    "reviews.title": "Отзывы",
    "tab.all": "Все", "tab.video": "Видео", "tab.photo": "Нейрофотосессии", "tab.avatar": "ИИ-аватары",
    "tab.posts": "Посты", "tab.music": "Музыка", "tab.slides": "Презентации", "tab.restore": "Реставрация",
    "reviews.sub": "Что говорят те, с кем уже работали.",
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
    "rest.eyebrow": "Реставрация",
    "rest.title": "Вернуть жизнь старой фотографии",
    "rest.sub": "Трещины, заломы, выцветание, потерянные фрагменты — восстановлю. И сделаю то, что раньше казалось невозможным: снимок начнёт двигаться.",
    "rest.before": "До",
    "rest.after": "После",
    "rest.hint": "Потяните за ползунок, чтобы сравнить",
    "rest.sliderLabel": "Сравнение фото до и после реставрации",
    "rest.l1t": "Реставрация",
    "rest.l1d": "Убираю царапины, пятна и заломы, восстанавливаю утраченные детали, возвращаю естественный цвет. Бережно — без «пластикового» лица.",
    "rest.l2t": "Оживление",
    "rest.l2d": "Короткое видео, где человек на снимке двигается: улыбается, смотрит, поворачивает голову. Формат подходит для подарка и для семейного архива.",
    "rest.l3t": "Что подойдёт",
    "rest.l3d": "Скан или фото снимка, даже снятое на телефон. Чем крупнее и резче исходник — тем больше деталей получится вернуть.",
    "rest.cta": "Восстановить фото",
    "modal.taskLabel": "Задача",
    "modal.resultLabel": "Результат",
    "modal.watchVideo": "Смотреть видео",
    "modal.videoN": "Видео",
    "works.channel": "Все видео в Telegram-канале →",
    "rest.video": "Смотреть оживление в канале →"
  },
  en: {
    "brand.role": "AI creative",
    "nav.services": "Services",
    "nav.restoration": "Restoration",
    "nav.works": "Work",
    "nav.reviews": "Reviews",
    "nav.about": "About",
    "nav.contact": "Contact",
    "cta.short": "Start a project",
    "cta.main": "Start a project",
    "cta.works": "See the work",
    "hero.eyebrow": "Yuliya Telipko · AI creative & content producer",
    "hero.title": "Content made by AI\u00A0— and\u00A0me.",
    "hero.lead": "Video, music, AI photoshoots, AI avatars, presentations and posts. Fast, polished, and actually meaningful.",
    "mq.1": "Scripts", "mq.2": "Video", "mq.3": "AI photoshoots", "mq.4": "AI avatars",
    "mq.5": "Music", "mq.6": "Presentations", "mq.7": "Posts & carousels", "mq.8": "Photo restoration",
    "services.title": "What I do",
    "services.sub": "Seven directions — take one or combine them all.",
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
    "s7.t": "Restoration and animation of old photos",
    "s7.d": "I bring back clarity to faded and damaged prints. Then the photograph comes alive: the person in it smiles, blinks, turns their head.",
    "s7.cta": "Before and after",
    "works.title": "Selected work",
    "works.sub": "Tap a card to see the brief and the result.",
    "reviews.title": "Reviews",
    "tab.all": "All", "tab.video": "Video", "tab.photo": "AI photoshoots", "tab.avatar": "AI avatars",
    "tab.posts": "Posts", "tab.music": "Music", "tab.slides": "Presentations", "tab.restore": "Restoration",
    "reviews.sub": "What the people I've worked with say.",
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
    "rest.eyebrow": "Restoration",
    "rest.title": "Bringing an old photograph back to life",
    "rest.sub": "Cracks, creases, fading, lost fragments — I restore them. And then I do what used to seem impossible: the image starts to move.",
    "rest.before": "Before",
    "rest.after": "After",
    "rest.hint": "Drag the slider to compare",
    "rest.sliderLabel": "Before and after restoration comparison",
    "rest.l1t": "Restoration",
    "rest.l1d": "I remove scratches, stains and creases, rebuild lost details and bring back natural colour. Carefully — without a plastic-looking face.",
    "rest.l2t": "Animation",
    "rest.l2d": "A short video where the person in the photo moves: smiles, looks around, turns their head. Works as a gift and for the family archive.",
    "rest.l3t": "What works best",
    "rest.l3d": "A scan or a photo of the print, even taken on a phone. The larger and sharper the original, the more detail can be recovered.",
    "rest.cta": "Restore a photo",
    "modal.taskLabel": "Brief",
    "modal.resultLabel": "Result",
    "modal.watchVideo": "Watch the video",
    "modal.videoN": "Video",
    "works.channel": "All videos in the Telegram channel →",
    "rest.video": "Watch the animation in the channel →"
  }
};

/* ---------- Состояние ---------- */
let lang = localStorage.getItem("yt-lang") || "ru";

/* ---------- Рендер работ ---------- */
const grid = document.getElementById("worksGrid");
const reviewsGrid = document.getElementById("reviewsGrid");

function renderReviews(){
  if(!reviewsGrid) return;
  const section = reviewsGrid.closest("section");
  const navReviewLink = document.querySelector('.nav a[href="#reviews"]');
  const footReviewLink = document.querySelector('.footer-links a[href="#reviews"]');

  if(!REVIEWS.length){
    if(section) section.style.display = "none";
    if(navReviewLink) navReviewLink.style.display = "none";
    if(footReviewLink) footReviewLink.style.display = "none";
    return;
  }
  if(section) section.style.display = "";
  if(navReviewLink) navReviewLink.style.display = "";
  if(footReviewLink) footReviewLink.style.display = "";

  reviewsGrid.innerHTML = REVIEWS.map(r => {
    const initial = (r.name[lang] || "?").trim().charAt(0).toUpperCase();
    const avatar = r.photo
      ? '<img class="review-avatar" src="' + r.photo + '" alt="' + r.name[lang] + '" loading="lazy">'
      : '<span class="review-avatar-fallback" aria-hidden="true">' + initial + '</span>';

    return '<article class="review reveal' + (r.placeholder ? ' review-placeholder' : '') + '">'
      + '<span class="review-mark" aria-hidden="true">\u201C</span>'
      + '<p class="review-text">' + r.text[lang] + '</p>'
      + '<div class="review-author">' + avatar
      + '<div class="review-meta">'
      + '<span class="review-name">' + r.name[lang] + '</span>'
      + '<span class="review-role">' + r.role[lang] + '</span>'
      + '</div></div></article>';
  }).join("");

  observeReveals();
}

let workFilter = "all";
const TAB_KEYS = ["all","video","photo","avatar","posts","music","slides","restore"];
const tabsEl = document.getElementById("workTabs");

function renderTabs(){
  tabsEl.innerHTML = TAB_KEYS.map(k =>
    `<button class="work-tab${k === workFilter ? " is-active" : ""}" type="button" data-cat="${k}" aria-pressed="${k === workFilter}">${I18N[lang]["tab." + k]}</button>`
  ).join("");
  tabsEl.querySelectorAll(".work-tab").forEach(b => {
    b.addEventListener("click", () => { workFilter = b.dataset.cat; renderWorks(); });
  });
}

function renderWorks(){
  renderTabs();
  const visible = WORKS.map((w, i) => ({ w, i })).filter(({ w }) => workFilter === "all" || w.cat === workFilter);
  grid.innerHTML = visible.map(({ w, i }) => `
    <button class="work reveal" type="button" data-index="${i}" aria-label="${w.title[lang]}">
      <img src="${w.img}" alt="${w.title[lang]}" loading="lazy" width="1200" height="1200">
      <span class="work-label">
        <span class="work-tag">${w.tag[lang]}</span>
        <span class="work-title">${w.title[lang]}</span>
      </span>
    </button>
  `).join("");

  grid.querySelectorAll(".work").forEach(btn => {
    btn.addEventListener("click", () => {
      const w = WORKS[+btn.dataset.index];
      if(w.scroll){
        const target = document.querySelector(w.scroll);
        if(target) target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      openModal(+btn.dataset.index);
    });
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
const modalVideos = document.getElementById("modalVideos");
const modalThumbs = document.getElementById("modalThumbs");
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

  const vids = w.videos || (w.video ? [w.video] : []);
  if(vids.length){
    const many = vids.length > 1;
    modalVideos.innerHTML = vids.map((v, j) =>
      `<a class="btn btn-ghost" href="${v.url}" target="_blank" rel="noopener">${many ? I18N[lang]["modal.videoN"] + " " + (j + 1) : I18N[lang]["modal.watchVideo"]}</a>`
    ).join("");
    modalVideos.hidden = false;
  } else {
    modalVideos.innerHTML = "";
    modalVideos.hidden = true;
  }

  if(w.gallery && w.gallery.length > 1){
    modalThumbs.innerHTML = w.gallery.map((src, j) =>
      `<button type="button" class="modal-thumb${j === 0 ? " is-active" : ""}" data-src="${src}" aria-label="${j + 1}"><img src="${src}" alt="" loading="lazy"></button>`
    ).join("");
    modalThumbs.hidden = false;
    modalThumbs.querySelectorAll(".modal-thumb").forEach(btn => {
      btn.addEventListener("click", () => {
        modalImg.src = btn.dataset.src;
        modalThumbs.querySelectorAll(".modal-thumb").forEach(x => x.classList.toggle("is-active", x === btn));
      });
    });
  } else {
    modalThumbs.innerHTML = "";
    modalThumbs.hidden = true;
  }

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

  document.querySelectorAll("[data-i18n-aria]").forEach(el => {
    const val = I18N[l][el.dataset.i18nAria];
    if(val !== undefined) el.setAttribute("aria-label", val);
  });

  document.title = l === "ru"
    ? "Юлия Телипко — ИИ-креатор и контент-продюсер"
    : "Yuliya Telipko — AI creative & content producer";

  renderWorks();
  renderReviews();
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

/* ---------- Сравнение до/после ---------- */
function initBeforeAfter(){
  const ba = document.getElementById("ba");
  const before = document.getElementById("baBefore");
  const handle = document.getElementById("baHandle");
  if(!ba || !before || !handle) return;

  let pos = 50;
  let dragging = false;

  function setPos(p){
    pos = Math.max(0, Math.min(100, p));
    before.style.clipPath = "inset(0 " + (100 - pos) + "% 0 0)";
    handle.style.left = pos + "%";
    handle.setAttribute("aria-valuenow", Math.round(pos));
  }

  function posFromEvent(e){
    const rect = ba.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    return (x / rect.width) * 100;
  }

  function start(e){
    dragging = true;
    setPos(posFromEvent(e));
    e.preventDefault();
  }
  function move(e){
    if(!dragging) return;
    setPos(posFromEvent(e));
    if(e.cancelable) e.preventDefault();
  }
  function end(){ dragging = false; }

  ba.addEventListener("mousedown", start);
  window.addEventListener("mousemove", move);
  window.addEventListener("mouseup", end);

  ba.addEventListener("touchstart", start, { passive: false });
  window.addEventListener("touchmove", move, { passive: false });
  window.addEventListener("touchend", end);

  // доступность: стрелки сдвигают ползунок
  handle.addEventListener("keydown", e => {
    if(e.key === "ArrowLeft"){ setPos(pos - 4); e.preventDefault(); }
    if(e.key === "ArrowRight"){ setPos(pos + 4); e.preventDefault(); }
    if(e.key === "Home"){ setPos(0); e.preventDefault(); }
    if(e.key === "End"){ setPos(100); e.preventDefault(); }
  });

  setPos(50);
}

/* ---------- Старт ---------- */
applyLang(lang);
initBeforeAfter();
observeReveals();
