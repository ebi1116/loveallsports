/* =========================================================
   LOVE ALL SPORTS - contact form
   The site has no server, so this form does NOT send anything by itself.
   Choose one option below:
     1) Set FORM_ENDPOINT to a form service URL (Formspree, Getform, Web3Forms...)
        and the form will POST to it.
     2) Leave it empty and the form opens the visitor's email app with the
        message pre-filled (uses SITE_CONFIG.email from products.js).
   ========================================================= */
const FORM_ENDPOINT = ''; // e.g. 'https://formspree.io/f/xxxxxxx'

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (!form) return;
  const status = document.getElementById('formStatus');

  const rules = {
    name: (v) => (v.trim().length >= 2 ? '' : 'Please enter your name (at least 2 characters).'),
    email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'Enter a valid email address, like name@example.com.'),
    phone: (v) => (/^[+()\d\s-]{8,16}$/.test(v.trim()) ? '' : 'Enter a valid phone number (8 to 16 digits).'),
    message: (v) => (v.trim().length >= 10 ? '' : 'Tell us a little more (at least 10 characters).'),
  };

  const validateField = (input) => {
    const msg = rules[input.name](input.value);
    const field = input.closest('.field');
    field.classList.toggle('invalid', !!msg);
    field.querySelector('.err').textContent = msg;
    input.setAttribute('aria-invalid', !!msg);
    return !msg;
  };

  form.querySelectorAll('.input, .textarea').forEach((input) => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => { if (input.closest('.field').classList.contains('invalid')) validateField(input); });
  });

  const show = (type, html) => { status.className = 'form-status show ' + type; status.innerHTML = html; };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const inputs = [...form.querySelectorAll('.input, .textarea')];
    const results = inputs.map(validateField);
    if (results.includes(false)) {
      inputs[results.indexOf(false)].focus();
      show('bad', 'Please fix the highlighted fields and try again.');
      return;
    }
    const data = Object.fromEntries(new FormData(form).entries());

    if (FORM_ENDPOINT) {
      try {
        const res = await fetch(FORM_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) });
        if (!res.ok) throw new Error('Request failed');
        form.reset();
        show('ok', '<strong>Message sent.</strong> Thanks for reaching out. We will reply soon.');
      } catch (err) {
        show('bad', 'We could not send your message. Please try again, or use the WhatsApp button.');
      }
      return;
    }

    const subject = encodeURIComponent(`Website enquiry from ${data.name}`);
    const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\n\n${data.message}`);
    window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
    show('ok', '<strong>Your email app should open with the message ready to send.</strong> This website is not connected to a mail server yet, so nothing has been sent until you press Send there. You can also use the WhatsApp button.');
  });
});
