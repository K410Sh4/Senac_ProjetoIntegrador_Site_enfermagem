(function(){
  const btn = document.querySelector('[data-totop]');
  const onScroll = () => {
    if(!btn) return;
    btn.style.display = (window.scrollY > 600) ? 'inline-flex' : 'none';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  if(btn){
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // Active nav link
  const path = location.pathname.split('/').pop();
  document.querySelectorAll('a[data-nav]').forEach(a => {
    const href = a.getAttribute('href');
    if(!href) return;
    const target = href.split('/').pop();
    if(target === path){
      a.classList.add('active');
    }
  });
})();
