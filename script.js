function toggleAnimation() {
    const orbits = document.querySelectorAll('.orbit');
    const btn = document.getElementById('toggleBtn');

    orbits.forEach(orbit => {
        orbit.classList.toggle('paused');
    });

    if (btn.innerText === 'Pause Orbits') {
        btn.innerText = 'Resume Orbits';
    } else {
        btn.innerText = 'Pause Orbits';
    }
}