const users = [
  {
    name: "Amisha Rathore",
    pic: "https://images.unsplash.com/photo-1611235897327-4e167d246b21?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
    bio: "Silent chaos in a loud world | Not for everyone"
  },
  {
    name: "Karina Mehta",
    pic: "https://images.unsplash.com/photo-1700955599409-1f5a1670054a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Dreamer • Believer • Achiever 🌿"
  },
    {
    name: "Sahil Bhati ",
    pic: "images/sa.jpeg",
    bio: " Life is a beautiful struggle 🎶"
  },
  {
    name: "Priya Sharma",
    pic: "https://plus.unsplash.com/premium_photo-1661730351855-346069d20ef5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Smiles, coffee, and sunsets ☕🌅"
  },
  {
    name: "Deni Deniels ",
    pic: "https://i.pinimg.com/originals/62/42/3a/62423aeb2c7d90f733ce3c5d72b8be2d.jpg",
    bio: "Still breaking the internet, just with more clothes (sometimes) 😉"
  },
  {
    name: "Rohita Kapoor",
    pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.1.0",
    bio: "Caffeine + Code = Life 👨‍💻💙"
  },
  {
    name: "Prim Minister",
    pic: "images/na.jpeg",
    bio: "Life isn't about being perfect it's about accomplishing your Dreams ☕"
  },

   {
    name: "Alisha",
    pic: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Designing dreams into pixels 🎨✨"
  },
  {
    name: "Isha Verma",
    pic: "https://images.unsplash.com/photo-1565291981226-1283441a98ec?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Lost in books and brewed thoughts 📚☕"
  },
  {
    name: "Meera Kapoor",
    pic: "https://images.unsplash.com/photo-1609737944658-b496efcb3c3b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Chasing sunsets and code 🌅💻"
  },
  {
    name: "Riya Sen",
    pic: "https://images.unsplash.com/photo-1620505074728-ebf981053d46?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Creating magic with minimalism ✨🖤"
  },
  {
    name: "Kavya Nair",
    pic: "https://plus.unsplash.com/premium_photo-1683147790940-1971d636e4df?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Engineer by mind, artist by heart 💡🎨"
  },
  {
    name: "Tanya Desai",
    pic: "https://plus.unsplash.com/premium_photo-1664871749020-a5decff37c60?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Fueled by curiosity and coffee ☕🚀"
  },
  {
    name: "Simran Kaur",
    pic: "https://plus.unsplash.com/premium_photo-1687485794385-51bfc47f1ef5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Building brands, breaking stereotypes 💁‍♀️🔥"
  },
  {
    name: "Neha Ansari",
    pic: "https://plus.unsplash.com/premium_photo-1683817138040-7213dfd76746?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Fashion, food, and frontend 🍜👗💻"
  },
  {
    name: "Niharika Joshi",
    pic: "https://plus.unsplash.com/premium_photo-1683817397838-d79f1e3771ce?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Binge-watching life, one episode at a time 🎬❤️"
  },
  {
    name: "Aarohi Mehta",
    pic: "https://plus.unsplash.com/premium_photo-1671541242901-0ebfb5908867?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Dancing through life with a smile 💃😊"
  },
  {
    name: "Pooja Reddy",
    pic: "https://plus.unsplash.com/premium_photo-1734388423021-4cc4ce7d7d11?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Nature lover with a tech twist 🌿💻"
  },
  {
    name: "Vidhi Chauhan",
    pic: "https://plus.unsplash.com/premium_photo-1708110921332-d9bbc0293ac5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Writer of code and poetry ✍️💻"
  },
  {
    name: "Diya Bansal",
    pic: "https://plus.unsplash.com/premium_photo-1690534929887-034ce683f2c6?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Adventure awaits — always exploring 🌍🎒"
  },
  {
    name: "Sanya Malik",
    pic: "https://plus.unsplash.com/premium_photo-1690376983004-3fbfe32386bb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Coffee, code, and cat cuddles ☕💻🐱"
  },
  {
    name: "Priya Dutta",
    pic: "https://plus.unsplash.com/premium_photo-1690587673708-d6ba8a1579a5?q=80&w=679&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Turning ideas into impact 💡🚀"
  },
   {
    name: "Nikhil Ch",
    pic: "images/nik.jpeg",
    bio: "Graphic Designer 💻 जय श्री राम"
  },
   {
    name: "Aaliya Khan",
    pic: "https://plus.unsplash.com/premium_photo-1753235080186-29023a83414d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Bold spirit with a soft heart 💫"
  },
  {
    name: "Bianca D’Costa",
    pic: "https://plus.unsplash.com/premium_photo-1722556811920-d483d294f99d?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Organized chaos, thriving on deadlines 🗂️⏰"
  },
  {
    name: "Rishu Tiwari",
    pic: "images/r.jpeg",
    bio: "When you plan something well, there's no need to rush 🌕 "
  },
  {
    name: "Charvi Rastogi",
    pic: "https://plus.unsplash.com/premium_photo-1753061596601-e1459bbe8063?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Living between code and cosmos ✨👩‍💻"
  },
  {
    name: "Disha Paul",
    pic: "https://images.unsplash.com/photo-1599672254820-a85bf4f5f81c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Minimal words, maximum impact 🎯"
  },
  {
    name: "Esha Narang",
    pic: "https://plus.unsplash.com/premium_photo-1668485967313-51d00c0b3cf9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Brewing thoughts and herbal tea 🍵🧠"
  },
  {
    name: "Falak Zia",
    pic: "https://plus.unsplash.com/premium_photo-1668896123808-cd4f065911fe?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Between stargazing and daydreaming 🌠"
  },
  {
    name: "Gauri Mishra",
    pic: "https://images.unsplash.com/photo-1735854393259-9f020d961ce3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Grace under pressure, always 🌸"
  },
  {
    name: "Hiral Patel",
    pic: "https://images.unsplash.com/photo-1629935101344-6174a69aa297?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Scribbles, sketches, and sass ✍️✨"
  },
  {
    name: "Ira Saxena",
    pic: "https://images.unsplash.com/photo-1644418747405-cff9b32567b6?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Quiet mind. Loud ideas. 💡"
  },
  {
    name: "Jiya Deshmukh",
    pic: "https://images.unsplash.com/photo-1593302489811-1decb76b364b?q=80&w=989&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Dancing through code and creativity 💃🧩"
  },
  {
    name: "Kritika Anand",
    pic: "https://images.unsplash.com/photo-1723621177482-7d86aca1b79b?q=80&w=677&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Smiling through spreadsheets and sass 😄📊"
  },
  {
    name: "Lavanya Shekhar",
    pic: "https://images.unsplash.com/photo-1622586292600-86158774001e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Design thinker and dream chaser 🧠🎯"
  },
  {
    name: "Mahi Chawla",
    pic: "https://images.unsplash.com/photo-1582479120024-70a82616fee5?q=80&w=704&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Optimist with a planner and playlists 📒🎧"
  },
  {
    name: "Nupur Jain",
    pic: "https://plus.unsplash.com/premium_photo-1676741369522-1c11eb52025c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Logic with a touch of poetry ✨💬"
  },
  {
    name: "Oorja Bhandari",
    pic: "https://plus.unsplash.com/premium_photo-1714839369302-ead6d8bb672c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Energy in motion, ideas in progress ⚡🚀"
  },
  {
    name: "Prisha Singh",
    pic: "https://plus.unsplash.com/premium_photo-1679619556701-9b0c9d05fd3d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Coding with confidence and coffee ☕💻"
  },
  {
    name: "Qirat Zaidi",
    pic: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Still figuring it out — and loving it 🌈"
  },
  {
    name: "Ravya Kapoor",
    pic: "https://images.unsplash.com/photo-1469460340997-2f854421e72f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Sunshine mixed with strategy 🌞🧠"
  },
  {
    name: "Versha Taneja",
    pic: "https://plus.unsplash.com/premium_photo-1708275302970-7867d3ad2692?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Bookworm, builder, believer 📚🏗️✨"
  },
  {
    name: "Tanvi Aggarwal",
    pic: "https://images.unsplash.com/photo-1510706019500-d23a509eecd4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Silence isn’t empty, it’s full of answers 🤫💭"
  },
  {
    name: "Urmi Vaidya",
    pic: "https://images.unsplash.com/flagged/photo-1556151994-b611e5ab3675?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Laughing, learning, leading 💬📘🌟"
  },
  {
    name: "varun Kumar",
    pic: "images/va.jpeg",
    bio: "Caffeine + Code = Life ⭐⭐"
  },
  {
    name: "Vanya Batra",
    pic: "https://images.unsplash.com/photo-1675105162027-4f296fbf4e89?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Focused. Fierce. Fearless. 💥"
  },
  {
    name: "Wamika Roy",
    pic: "https://images.unsplash.com/photo-1562894369-193bedce28e3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Wandering mind, steady hands 🧭🖌️"
  },
  {
    name: "Xara Fernandes",
    pic: "https://images.unsplash.com/photo-1601288496920-b6154fe3626a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "One step ahead, two coffees in ☕☕"
  },
    {
    name: "Abhay Mishra",
    pic: "images/a.jpeg",
    bio: "Caffeine + Code = Life ☕💻"
  },
  {
    name: "Yamini Ghosh",
    pic: "https://plus.unsplash.com/premium_photo-1668896123841-2ddfc6c6e8da?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Living her story, not a stereotype ✨📖"
  },
  {
    name: "Noora Sheikh",
    pic: "https://images.unsplash.com/photo-1741280190149-03082d8ff3a2?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Not loud, but unforgettable 🎤🌺"
  },
  {
    name: "Abhinav Dubey",
    pic: "images/av.jpeg",
    bio: "Code, Curious, Creative, Persistent, Learner  ✨📚"
  }
];
function showUsers(arr, limit = 7) {
  const container = document.querySelector(".cards");
  container.innerHTML = "";

  if (arr.length === 0) {
    const message = document.createElement("p");
    message.textContent = "Sorry, user not found 😞";
    message.classList.add("no-user");
    container.appendChild(message);
    return;
  }

  arr.forEach((user, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    // Hide extra cards on desktop
    if (index >= limit && !isSearching) card.style.display = "none";

    const img = document.createElement("img");
    img.src = user.pic;
    img.classList.add("bg-img");

    const blurredLayer = document.createElement("div");
    blurredLayer.style.backgroundImage = `url(${user.pic})`;
    blurredLayer.classList.add("blurred-layer");

    const content = document.createElement("div");
    content.classList.add("content");

    const heading = document.createElement("h3");
    heading.textContent = user.name;

    const para = document.createElement("p");
    para.textContent = user.bio;

    content.appendChild(heading);
    content.appendChild(para);

    card.appendChild(img);
    card.appendChild(blurredLayer);
    card.appendChild(content);

    container.appendChild(card);
  });
}

let isSearching = false;

// Show first 7 users initially
showUsers(users);

let inp = document.querySelector(".inp");
inp.addEventListener("input", function () {
  const value = inp.value.toLowerCase();
  isSearching = value !== "";

  if (value === "") {
    showUsers(users);
    return;
  }

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(value) ||
    user.bio.toLowerCase().includes(value)
  );

  showUsers(filteredUsers, filteredUsers.length);
});
