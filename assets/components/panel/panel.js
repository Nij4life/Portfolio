export default function panel() {
    const panels = document.querySelector('.panel'); // поменять на All ! нужно чтобы установить слушателей на все панели
    
    function toggleArrow(arrow) {
        arrow.className = arrow.classList.contains('fa-chevron-up') ? 'fas fa-chevron-down fa-2x' : 'fas fa-chevron-up fa-2x';
    }

    document.querySelector('.panel-head button').addEventListener('click', (e) => {
        const panel = e.target.closest('.panel');
        if (!panel) return;

        toggleArrow(panel.querySelector('i'));
        panel.lastElementChild.classList.toggle('hidden');

    });
}

