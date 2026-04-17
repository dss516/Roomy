(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

function scrollFilters(distance) {
  document.getElementById('filters').scrollBy({ left: distance, behavior: 'smooth' });
}

const filterElements = document.querySelectorAll('.filter');
filterElements.forEach(filter => {
  filter.addEventListener('click', () => {
    document.querySelector('.filter.active')?.classList.remove('active');
    filter.classList.add('active');
  });
});