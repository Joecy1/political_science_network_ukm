document.addEventListener('DOMContentLoaded', () => {
    const leftSidebar = document.querySelector('.left-sidebar') ||
                       document.querySelector('.filetree-sidebar');

    const rightSidebar = document.querySelector('.right-sidebar') ||
                        document.querySelector('.sidebar-right') ||
                        document.querySelector('.dg-right-sidebar');

    function setCollapsedState(sidebar, side, collapsed, toggle) {
        sidebar.classList.toggle('collapsed', collapsed);

        // Also collapse parent wrappers that control layout width.
        const filetreeWrapper = sidebar.closest('.filetree-wrapper');
        if (filetreeWrapper) filetreeWrapper.classList.toggle('collapsed', collapsed);

        const aside = sidebar.closest('aside');
        if (aside) aside.classList.toggle('collapsed', collapsed);

        localStorage.setItem(`${side}-sidebar-collapsed`, collapsed);
        if (toggle) toggle.innerHTML = collapsed ? '▶' : '◀';
        if (toggle) toggle.setAttribute('aria-label', `${collapsed ? 'Expand' : 'Collapse'} ${side} sidebar`);
    }

    function createToggle(sidebar, side) {
        if (!sidebar) return;

        const toggle = document.createElement('button');
        toggle.className = 'sidebar-toggle';
        toggle.type = 'button';
        toggle.innerHTML = '◀';
        toggle.title = `Toggle ${side} sidebar`;

        sidebar.style.position = 'relative';
        sidebar.appendChild(toggle);

        const isCollapsed = localStorage.getItem(`${side}-sidebar-collapsed`) === 'true';
        setCollapsedState(sidebar, side, isCollapsed, toggle);

        toggle.addEventListener('click', () => {
            const collapsed = !sidebar.classList.contains('collapsed');
            setCollapsedState(sidebar, side, collapsed, toggle);
        });
    }

    createToggle(leftSidebar, 'left');
    createToggle(rightSidebar, 'right');
});
