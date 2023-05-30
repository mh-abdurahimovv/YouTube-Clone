 class YoutubeCard {
    constructor(
         video, 
         videoPicture, 
         videoTime, 
         profilePic,   
         bloggerTittle,
         followers,
         videoTittle,
         videoStats,
         parentSelector
         ) {
            this.video = video;
            this.videoPicture = videoPicture;
            this.videoTime = videoTime;
            this.profilePic = profilePic;
            this.bloggerTittle = bloggerTittle;
            this.followers = followers;
            this.videoTittle = videoTittle;
            this.videoStats = videoStats;
            this.parent = document.querySelector(parentSelector);


    }

    render() {
        const element = document.createElement('div');
        element.innerHTML = `
    <div>   
        <div class="picture-row">
                    <a href=${this.video}target="blank">
                      <img src="${this.videoPicture}" alt="photo"  class="firstph">
                   </a>
                    <div class="video-time">
                     ${this.videoTime}
                    </div>
                  </div>
                  <div class="video-info-grid">
                  <div class="video-author-preview">
                    <img src="${this.profilePic}" class="profile-picture">
                    <div class="channel-info-preview">
                      <img src="${this.profilePic}" class="profile-picture-preview">
                      <div class="text-info-preview">
                        <p class="blogger-name-preview">${this.bloggerTittle}</p>
                        <p class="video-author2">${this.followers}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                     <a href=${this.video} target="blank">
                       <p class="video-title">${this.videoTittle}</p>
                    </a>
                     <p class="video-author2">
                     ${this.bloggerTittle}
                     </p>
                     <p class="video-stats2">
                      ${this.videoStats}
                     </p>
                  </div>
         </div>
    </div>  
            `;
        
        this.parent.append(element);    
    }

 }


        const getResources = async(url) => {
            const result = await fetch(url);

            if(!result.ok) {
                throw new Error(`Could not fetch ${url}, status: ${result.status}`);


            }

            return await result.json();

        };

        getResources('http://localhost:4000/youtubeCards')
        .then(data => {
          data.forEach(({ videoLink, videoPicture, videoTime, profilePic, bloggerTittle, followers, videoTittle, videoStats }) => {
            new YoutubeCard(videoLink, videoPicture, videoTime, profilePic, bloggerTittle, followers, videoTittle, videoStats, '.everything .video-grid').render();
          });
        });
 




    // ===================================================================
// SIDE-BAR    
    const menuIconButton = document.querySelector("[data-menu-icon-btn]")
    const sidebar = document.querySelector("[data-sidebar]")
    const iconClick = document.querySelectorAll('.sidebar-list-item') 

            menuIconButton.addEventListener("click", function() {
            sidebar.classList.toggle("open")
            })
      

          //   const notificationCheck = document.querySelector('.notification_check_container');
            
          //   notificationCheck.innerHTML = `
          //   <div class="notification_check_container"  >
          //   <div class="notification_check_header">
          //     <div>Уведомления</div>
          //     <div>Settings</div>
          //   </div>
          //   <div>
          //     <div>
          //       <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96 c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z M19,17.77l-2-1.88v-5.47 c0-2.47-1.19-4.36-3.13-5.1c-1.26-0.53-2.64-0.5-3.84,0.03C8.15,6.11,7,7.99,7,10.42v5.47l-2,1.88V18h14V17.77z" class="style-scope yt-icon"></path></g></svg>
          //       <div class="notification_check_text">
          //         Здесь пока ничего нет <br>
          // В этом разделе будут собраны уведомления о новых видео на каналах, на которые вы подписаны.
          //       </div>
          //     </div>
          //   </div>
          // </div>
            
          //   `




