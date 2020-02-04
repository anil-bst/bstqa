export class HowToJoinSection {
  static bindEvents() {
    const stepsItem = document.querySelectorAll('.step-item');
    if (stepsItem && stepsItem.length) {
      stepsItem.forEach(item => {
        item.addEventListener('click', () => {
          const activeTab = item
            .closest('.steps-list')
            .querySelector('.active');
          if (!item.classList.contains('active')) {
            activeTab.classList.remove('active');
            const imgSrc = item
              .closest('li')
              .querySelector('.step-image img')
              .getAttribute('src');
            const imgTag = item
              .closest('.steps-desc')
              .querySelector('.steps-image-section img');
            imgTag.setAttribute('src', imgSrc);
            item.classList.add('active');
          }
        });
      });
    }
  }
}
