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
                    <a href=${this.vode}target="blank">
                      <img src=${this.videoPicture} alt="photo"  class="firstph">
                   </a>
                    <div class="video-time">
                     ${this.videoTime}
                    </div>
                  </div>
                  <div class="video-info-grid">
                  <div class="video-author-preview">
                    <img src=${this.profilePic}" class="profile-picture">
                    <div class="channel-info-preview">
                      <img src=${this.profilePic} class="profile-picture-preview">
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


        const getResources = async(url, data) => {
            const result = await fetch(url);

            if(!result.ok) {
                throw new Error(`Could not fetch ${url}, status: ${result.status}`);


            }

            return await result.json();

        };

        getResources('http://localhost:3000/youtubeCards')
            .then(data => {
            data.forEach(({videoLinl, videoPicture, videoTime, profilePic, bloggerTittle, followers, videoTittle, videoStats}) => {
                new MenuCard(videoLinl, videoPicture, videoTime, profilePic, bloggerTittle, followers, videoTittle, videoStats,
                    '.everything .video-grid').render();
            });
            });


    // new YoutubeCard(
    //     "https://www.youtube.com/watch?v=G3e-cpL7ofc&t=21906s",
    //     "video-picture/1stph.jpg",
    //     '6:31:24',
    //     "channel-picture/simple_dev.jpeg",
    //     'SuperSimpleDev',
    //     '108 тыс. подписчиков',
    //     'HTML & CSS Full Course - Beginner to Pro (2022)',
    //     ' 2,2 млн просмотров &#183; 9 месяцев назад',
    //     '.everything .video-grid'

    // ).render();

    // new YoutubeCard(
    //     "https://www.youtube.com/watch?v=VGVsxcw6kgo&t=2s",
    //     "video-picture/2ndph.jpg" ,
    //     '29:48',
    //     "channel-picture/anatomy.jpeg",
    //     'Anatomy of a Fighter',
    //     '680 тыс. подписчиков',
    //     'Anatomy of UFC 280 Finale - Before & After The Madness (Islam Makhachev becomes a UFC Champion)',
    //     ' 1 млн просмотров &#183; 12 дней назад',
    //     '.everything .video-grid'

    // ).render();

    // new YoutubeCard(
    //     "https://www.youtube.com/watch?v=RAeMMP4PFqI",
    //     "video-picture/3rdph.jpg" ,
    //     '04:55',
    //     "channel-picture/fabtizio.jpeg",
    //     'Fabrizio Romano',
    //     '1,34 млн подписчиков',
    //     '🚨 MUDRYK new bid & truth on NKUNKU: what’s really going on?',
    //     '126 тыс просмотров &#183; 1 день назад',
    //     '.everything .video-grid'

    // ).render();

    // new YoutubeCard(
    //     "https://www.youtube.com/watch?v=W4hgkHuZ8tU",
    //     "video-picture/4thph.jpg",
    //     '12:32',
    //     "channel-picture/saliheen.jpeg" ,
    //     'SaleheenTV',
    //     '243 тыс. подписчиков',
    //     'Дорандааш обро мехарад, нодораш мушкили мекашад',
    //     '87 тыс. просмотров &#183; 23 часа назад',
    //     '.everything .video-grid'

    // ).render();


    // new YoutubeCard(
    //     "https://www.youtube.com/watch?v=rgfiZB5EudA",
    //     "video-picture/5thph.jpg",
    //     '16:26',
    //     "channel-picture/nick.jpeg" ,
    //     'Nicklas Christl',
    //     '863 тыс. подписчиков',
    //     'How To Build Self-Discipline & Stop Procrastinating',
    //     '1,1 млн просмотров &#183; 1 год назад',
    //     '.everything .video-grid'

    // ).render();

    // new YoutubeCard(
    //     "https://www.youtube.com/watch?v=Y1vEv7YHD74" ,
    //     "video-picture/6thph.jpg",
    //     '07:38',
    //     "channel-picture/ufc.jpeg",
    //     'UFC Russia',
    //     '3,32 млн. подписчиков',
    //     'UFC 281: Битвы взглядов',
    //     '371 тыс. просмотров &#183; 14 часов назад',
    //     '.everything .video-grid'

    // ).render();


    // new YoutubeCard(
    //     "https://www.youtube.com/watch?v=2QcZSVu3CCY",
    //     "video-picture/7thph.jpg",
    //     '29:48',
    //     "channel-picture/piers.jpeg",
    //     'Piers Morgan Uncensored',
    //     '678 тыс. подписчиков',
    //     'Piers Morgan Takes On Andrew Tate AGAIN! | The Full Interview #2',
    //     '3,3 млн просмотров &#183; 3 дней назад',
    //     '.everything .video-grid'

    // ).render();


    // new YoutubeCard(
    //     "https://www.youtube.com/watch?v=vYAiS_Am3aM",
    //     "video-picture/8thph.jpg",
    //     '29:42',
    //     "channel-picture/ielts.jpeg" ,
    //     'TOP IELTS TESTS',
    //     '572 тыс. подписчиков',
    //     'IELTS Speaking Test | Band 9 | Real Test!',
    //     '3,3 млн просмотров &#183; 1 год назад',
    //     '.everything .video-grid'

    // ).render();


    // new YoutubeCard(
    //     "https://www.youtube.com/watch?v=G3e-cpL7ofc&t=21906s",
    //     "video-picture/1stph.jpg",
    //     '6:31:24',
    //     "channel-picture/simple_dev.jpeg",
    //     'SuperSimpleDev',
    //     '108 тыс. подписчиков',
    //     'HTML & CSS Full Course - Beginner to Pro (2022)',
    //     ' 2,2 млн просмотров &#183; 9 месяцев назад',
    //     '.everything .video-grid'

    // ).render();

    // new YoutubeCard(
    //     "https://www.youtube.com/watch?v=VGVsxcw6kgo&t=2s",
    //     "video-picture/2ndph.jpg" ,
    //     '29:48',
    //     "channel-picture/anatomy.jpeg",
    //     'Anatomy of a Fighter',
    //     '680 тыс. подписчиков',
    //     'Anatomy of UFC 280 Finale - Before & After The Madness (Islam Makhachev becomes a UFC Champion)',
    //     ' 1 млн просмотров &#183; 12 дней назад',
    //     '.everything .video-grid'

    // ).render();

    // new YoutubeCard(
    //     "https://www.youtube.com/watch?v=RAeMMP4PFqI",
    //     "video-picture/3rdph.jpg" ,
    //     '04:55',
    //     "channel-picture/fabtizio.jpeg",
    //     'Fabrizio Romano',
    //     '1,34 млн подписчиков',
    //     '🚨 MUDRYK new bid & truth on NKUNKU: what’s really going on?',
    //     '126 тыс просмотров &#183; 1 день назад',
    //     '.everything .video-grid'

    // ).render();

    // new YoutubeCard(
    //     "https://www.youtube.com/watch?v=W4hgkHuZ8tU",
    //     "video-picture/4thph.jpg",
    //     '12:32',
    //     "channel-picture/saliheen.jpeg" ,
    //     'SaleheenTV',
    //     '243 тыс. подписчиков',
    //     'Дорандааш обро мехарад, нодораш мушкили мекашад',
    //     '87 тыс. просмотров &#183; 23 часа назад',
    //     '.everything .video-grid'

    // ).render();


    // new YoutubeCard(
    //     "https://www.youtube.com/watch?v=rgfiZB5EudA",
    //     "video-picture/5thph.jpg",
    //     '16:26',
    //     "channel-picture/nick.jpeg" ,
    //     'Nicklas Christl',
    //     '863 тыс. подписчиков',
    //     'How To Build Self-Discipline & Stop Procrastinating',
    //     '1,1 млн просмотров &#183; 1 год назад',
    //     '.everything .video-grid'

    // ).render();

    // new YoutubeCard(
    //     "https://www.youtube.com/watch?v=Y1vEv7YHD74" ,
    //     "video-picture/6thph.jpg",
    //     '07:38',
    //     "channel-picture/ufc.jpeg",
    //     'UFC Russia',
    //     '3,32 млн. подписчиков',
    //     'UFC 281: Битвы взглядов',
    //     '371 тыс. просмотров &#183; 14 часов назад',
    //     '.everything .video-grid'

    // ).render();


    // new YoutubeCard(
    //     "https://www.youtube.com/watch?v=2QcZSVu3CCY",
    //     "video-picture/7thph.jpg",
    //     '29:48',
    //     "channel-picture/piers.jpeg",
    //     'Piers Morgan Uncensored',
    //     '678 тыс. подписчиков',
    //     'Piers Morgan Takes On Andrew Tate AGAIN! | The Full Interview #2',
    //     '3,3 млн просмотров &#183; 3 дней назад',
    //     '.everything .video-grid'

    // ).render();


    // new YoutubeCard(
    //     "https://www.youtube.com/watch?v=vYAiS_Am3aM",
    //     "video-picture/8thph.jpg",
    //     '29:42',
    //     "channel-picture/ielts.jpeg" ,
    //     'TOP IELTS TESTS',
    //     '572 тыс. подписчиков',
    //     'IELTS Speaking Test | Band 9 | Real Test!',
    //     '3,3 млн просмотров &#183; 1 год назад',
    //     '.everything .video-grid'

    // ).render();



    // ===================================================================
// SIDE-BAR    
    const menuIconButton = document.querySelector("[data-menu-icon-btn]")
    const sidebar = document.querySelector("[data-sidebar]")
    const iconClick = document.querySelectorAll('.sidebar-list-item') 

            menuIconButton.addEventListener("click", function() {
            sidebar.classList.toggle("open")
            })
      


