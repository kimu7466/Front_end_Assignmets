document.addEventListener("DOMContentLoaded", () => {
    var connectPeopleCount = document.getElementById("connectPeopleCount");
    var counterElement = document.querySelector(".counter");
    function countUp() {
      var count = 0;
      var maxCount = 1278945;
      var startTime = performance.now();
      function updateCount() {
        var currentTime = performance.now();
        var elapsedTime = currentTime - startTime;
        var duration = 3000; 
        var progress = elapsedTime / duration;
        if (progress >= 1) {
          connectPeopleCount.textContent = maxCount;
          return;}
        var targetCount = Math.floor(maxCount * progress);
        connectPeopleCount.textContent = targetCount;
        requestAnimationFrame(updateCount);}
      updateCount();}
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );}
    function handleScroll() {
      if (isElementInViewport(counterElement)) {
        countUp();
        window.removeEventListener('scroll', handleScroll);}}
    window.addEventListener('scroll', handleScroll);
  });