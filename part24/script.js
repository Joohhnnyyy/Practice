const reels = [
  {
    username: "ansh.codes",
    likeCount: 1243,
    isLinked: false,
    commentCount: 87,
    shareCount: 34,
    caption: "Consistency beats motivation. Day 21 🚀",
    video: "reels/video1.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/11.jpg",
    isFollow: true
  },
  {
    username: "dev.journal",
    likeCount: 982,
    isLinked: true,
    commentCount: 56,
    shareCount: 19,
    caption: "One hour a day can change everything 💻",
    video: "reels/video2.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/22.jpg",
    isFollow: false
  },
  {
    username: "habitflow",
    likeCount: 4532,
    isLinked: false,
    commentCount: 211,
    shareCount: 145,
    caption: "Every day you waste is proof you don’t want it.",
    video: "reels/video3.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/33.jpg",
    isFollow: true
  },
  {
    username: "buildinpublic",
    likeCount: 1678,
    isLinked: false,
    commentCount: 94,
    shareCount: 41,
    caption: "From zero to shipping 🚢",
    video: "reels/video4.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/44.jpg",
    isFollow: false
  },
  {
    username: "code.daily",
    likeCount: 2190,
    isLinked: true,
    commentCount: 132,
    shareCount: 60,
    caption: "Write bad code. Then make it better.",
    video: "reels/video5.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/55.jpg",
    isFollow: true
  },
  {
    username: "ui.motion",
    likeCount: 3054,
    isLinked: false,
    commentCount: 178,
    shareCount: 96,
    caption: "Micro-interactions matter ✨",
    video: "reels/video6.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/66.jpg",
    isFollow: false
  },
  {
    username: "js.mastery",
    likeCount: 3891,
    isLinked: false,
    commentCount: 264,
    shareCount: 120,
    caption: "You don’t need frameworks to understand JavaScript.",
    video: "reels/video7.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/77.jpg",
    isFollow: true
  },
  {
    username: "focus.mode",
    likeCount: 742,
    isLinked: true,
    commentCount: 39,
    shareCount: 12,
    caption: "Delete distractions. Build discipline.",
    video: "reels/video8.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/88.jpg",
    isFollow: false
  },
  {
    username: "techhabits",
    likeCount: 1846,
    isLinked: false,
    commentCount: 101,
    shareCount: 48,
    caption: "Habits compound faster than motivation.",
    video: "reels/video9.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/99.jpg",
    isFollow: true
  },
  {
    username: "learn.by.doing",
    likeCount: 2614,
    isLinked: false,
    commentCount: 189,
    shareCount: 77,
    caption: "Stop watching tutorials. Start building.",
    video: "reels/video10.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/15.jpg",
    isFollow: false
  }
];

const allReels = document.querySelector(".all-reels");

function addData(){
  var sum = '';
  
  reels.forEach(function(elem,idx){
    sum = sum + `        <div class="reels">
          <video muted autoplay loop src="${elem.video}"></video>
          <div class="bottom">
            <div class="user">
              <img src="${elem.userProfile}" alt="">
              <h4>${elem.username}</h4>
              <button id = "follow-${idx}" class = "follow" >${elem.isFollow ? "Unfollow" : "Follow"}</button>
            </div>
            <h3>${elem.caption}</h3>
          </div>
          <div class="right">
            <div id = "like-${idx}" class="like">
              <h3 class="like-icon"><i class="ri-heart-fill"></i></h3>
              <h3 class="count">${elem.likeCount}</h3>
            </div>
            <div class="chat">
              <h3 class="chat-icon"><i class="ri-chat-3-line"></i></h3>
              <h3 class="count">${elem.commentCount}</h3>
            </div>

            <div class="share">
              <h3 class="share-icon"><i class="ri-share-forward-fill"></i></h3>
              <h3 class="count">${elem.shareCount}</h3>
            </div>

            <div class="send">
              <h3 class="send-icon"><i class="ri-send-plane-fill"></i></h3>
              <h3 class="count">73</h3>
            </div>
          
            <div class="menu">

              <i class="ri-more-2-line"></i>
            </div>
          </div>
        
        </div>`;
  
  })
  
  allReels.innerHTML = sum;

}
addData()


allReels.addEventListener('click', function (dets) {

  if (dets.target.className == 'like') {
    if (!reels[dets.target.id].isLiked) {
      reels[dets.target.id].likeCount++
      reels[dets.target.id].isLiked = true
    } else {
      reels[dets.target.id].likeCount--
      reels[dets.target.id].isLiked = false
    }

    addData()
  }
  if (dets.target.className == 'follow') {
    if (!reels[dets.target.id].isFollowed) {
      reels[dets.target.id].isFollowed = true
    } else {
      reels[dets.target.id].isFollowed = false
    }

    addData()
  }

 if (dets.target.className == 'mute') {
    if (!reels[dets.target.id].ismuted) {
      reels[dets.target.id].ismuted = true
    } else {
      reels[dets.target.id].ismuted = false
    }
    addData()
  }

})
