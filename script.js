window.addEventListener('load', function() {

  const navItems = Array.from(document.querySelectorAll('a')),
        banners = Array.from(document.querySelectorAll('iframe')),
        buttons = Array.from(document.querySelectorAll('button'));
  let group = document.querySelector('.active').textContent,
      design = document.querySelector('.btn-active').textContent,
      subDirectory = 'FACILITY-',
      directory = `1/web/${subDirectory}`;


  /* EVENT HANDLERS */
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', updateDesign);
  }

  for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', updateGroup);
  } 


  /* HELPER FUNCTIONS */
  function updateDesign(e) {
    design = this.textContent;
    subDirectory = design === '1' ? 'FACILITY-' : 'SPIRE-';
    directory = `${design}/web/${subDirectory}`;
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('btn-active');
    }
    this.classList.add('btn-active');
    updateBanners();
  }

  function updateGroup() {
    group = this.textContent;
    for (let i = 0; i < navItems.length; i++) {
      navItems[i].classList.remove('active');
    }
    this.classList.add('active');
    updateBanners();
  }

  function updateBanners() {
    for (let i = 0; i < banners.length; i++) {
      let bannerSize = banners[i].dataset.size;
      let filePath = `${directory}${group}/${bannerSize}/index.html`;
      banners[i].setAttribute('src', filePath);
    }
  }

})