document.addEventListener('DOMContentLoaded', () => {
    // Left Sidebar (Filetree)
    const leftSidebar = document.querySelector('.left-sidebar') || 
                       document.querySelector('.filetree-sidebar');
    
    // Right Sidebar
    const rightSidebar = document.querySelector('.right-sidebar') || 
                        document.querySelector('.sidebar-right') || 
                        document.querySelector('.dg-right-sidebar');

    function createToggle(sidebar, side) {
        if (!sidebar) return;
        
        const toggle = document.createElement('div');
        toggle.className = 'sidebar-toggle';
        toggle.innerHTML = '◀';  // Change to ▶ when collapsed
        toggle.title = `Toggle ${side} sidebar`;
        
        sidebar.style.position = 'relative';
        sidebar.appendChild(toggle);

        // Load saved state
        const isCollapsed = localStorage.getItem(`${side}-sidebar-collapsed`) === 'true';
        if (isCollapsed) sidebar.classList.add('collapsed');

        toggle.addEventListener('click', () => {
            const collapsed = sidebar.classList.toggle('collapsed');
            localStorage.setItem(`${side}-sidebar-collapsed`, collapsed);
            
            // Rotate icon
            toggle.innerHTML = collapsed ? '▶' : '◀';
        });
    }

    createToggle(leftSidebar, 'left');
    createToggle(rightSidebar, 'right');
});
