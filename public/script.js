document.getElementById('year').textContent = new Date().getFullYear();
document.querySelectorAll('[data-service]').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('appliance').value = link.dataset.service;
    document.getElementById('appliance').dispatchEvent(new Event('change'));
  });
});
const form = document.querySelector('form');
form.addEventListener('submit', async event => {
  event.preventDefault();
  const button = form.querySelector('button');
  const status = form.querySelector('.form-status');
  button.disabled = true;
  button.textContent = 'Sending your request…';
  status.textContent = '';
  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form)).toString(),
    });
    if (!response.ok) throw new Error('Submission failed');
    window.location.assign('/thank-you');
  } catch {
    status.textContent = 'Your request could not be sent. Please try again or call 571-330-8412.';
    button.disabled = false;
    button.innerHTML = 'Try sending again <span aria-hidden="true">↗</span>';
  }
});


// Native details remain available when JavaScript is off.
const guide = document.getElementById('installation-guide');
const panels = [...guide.querySelectorAll('.guide-panel')];
const choices = guide.querySelector('.guide-choices');
const choiceButtons = [];
function selectGuide(appliance) {
  panels.forEach((panel, index) => {
    const selected = panel.dataset.appliance === appliance;
    panel.hidden = !selected;
    choiceButtons[index].setAttribute('aria-pressed', String(selected));
  });
}
panels.forEach(panel => {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'guide-choice';
  button.append(document.createTextNode(panel.dataset.appliance));
  const arrow = document.createElement('span');
  arrow.textContent = '↗';
  arrow.setAttribute('aria-hidden', 'true');
  button.append(arrow);
  button.addEventListener('click', () => selectGuide(panel.dataset.appliance));
  choices.append(button);
  choiceButtons.push(button);
  panel.querySelector('.prep-progress').hidden = false;
  const checks = [...panel.querySelectorAll('input[type="checkbox"]')];
  checks.forEach(check => check.addEventListener('change', () => {
    const count = checks.filter(input => input.checked).length;
    panel.querySelector('.prep-progress').textContent = count === checks.length
      ? 'All 3 steps checked. You’re ready to discuss your setup!'
      : `${count} of ${checks.length} preparation steps checked`;
  }));
});
choices.hidden = false;
guide.classList.add('guide-enhanced');
selectGuide(panels[0].dataset.appliance);
document.querySelectorAll('[data-guide]').forEach(link => {
  link.addEventListener('click', () => {
    selectGuide(link.dataset.guide);
    // Move keyboard focus to the matching control at the destination.
    choiceButtons.find(button => button.getAttribute('aria-pressed') === 'true').focus({ preventScroll: true });
  });
});
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.section-heading, .guide-layout, .approach-grid, .contact-copy').forEach(element => {
    element.classList.add('reveal-ready');
    observer.observe(element);
  });
}
