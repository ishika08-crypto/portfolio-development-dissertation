document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openResumeModal');
  const resumeModal = document.getElementById('resumeModal'); // backdrop element
  const closeModalBtn = document.getElementById('closeModal');
  const printBtn = document.getElementById('printResumeBtn');

  // Modal control functions
  function showModal() {
    if (!resumeModal) return;
    resumeModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    closeModalBtn?.focus();
  }

  function hideModal() {
    if (!resumeModal) return;
    resumeModal.classList.add('hidden');
    document.body.style.overflow = '';
    openBtn?.focus();
  }

  // Print function
  function printResume() {
    window.print();
  }

  // Event Listeners
  openBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    showModal();
  });

  closeModalBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    hideModal();
  });

  printBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    printResume();
  });

  // Close modal when clicking on the backdrop
  resumeModal?.addEventListener('click', (e) => {
    if (e.target === resumeModal) {
      hideModal();
    }
  });

  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && resumeModal && !resumeModal.classList.contains('hidden')) {
      hideModal();
    }
  });

  // Animate skill bars on scroll
  const skillBars = document.querySelectorAll('.bar-fill');
  
  // Set initial width to 0 for anim effect
  skillBars.forEach(bar => {
    const targetWidth = bar.style.width;
    bar.style.width = '0';
    bar.dataset.width = targetWidth;
  });

  const animateSkills = () => {
    skillBars.forEach(bar => {
      const rect = bar.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      if (isVisible && bar.style.width === '0px') {
        bar.style.width = bar.dataset.width;
      }
    });
  };

  // Trigger animations once on load after a short delay
  setTimeout(animateSkills, 300);

  // Trigger animations on scroll
  window.addEventListener('scroll', animateSkills);
});
