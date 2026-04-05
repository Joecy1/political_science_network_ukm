document.addEventListener('DOMContentLoaded', () => {
    const leftSidebar = document.querySelector('.left-sidebar') || 
                       document.querySelector('.filetree-sidebar');
    
    const rightSidebar = document.querySelector('.right-sidebar') || 
                        document.querySelector('.sidebar-right') || 
                        document.querySelector('.dg-right-sidebar');

    function createToggle(sidebar, side) {
        if (!sidebar) return;
        
        const toggle = document.createElement('div');
        toggle.className = 'sidebar-toggle';
        toggle.innerHTML = '◀';
        toggle.title = `Toggle ${side} sidebar`;
        
        sidebar.style.position = 'relative';
        sidebar.appendChild(toggle);

        const isCollapsed = localStorage.getItem(`${side}-sidebar-collapsed`) === 'true';
        if (isCollapsed) sidebar.classList.add('collapsed');

        toggle.addEventListener('click', () => {
            const collapsed = sidebar.classList.toggle('collapsed');
            localStorage.setItem(`${side}-sidebar-collapsed`, collapsed);
            toggle.innerHTML = collapsed ? '▶' : '◀';
        });
    }

    createToggle(leftSidebar, 'left');
    createToggle(rightSidebar, 'right');
});
