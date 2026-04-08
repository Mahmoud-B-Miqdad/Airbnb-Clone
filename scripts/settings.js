// Settings page JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize settings page
    initializeSettings();

    // Handle menu item clicks
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            switchSection(sectionId);
        });
    });

    // Handle toggle switches
    const toggles = document.querySelectorAll('.toggle input');
    toggles.forEach(toggle => {
        toggle.addEventListener('change', function() {
            handleToggleChange(this);
        });
    });

    // Handle edit buttons (placeholder functionality)
    const editButtons = document.querySelectorAll('.edit-btn');
    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            handleEditClick(this);
        });
    });
});

function initializeSettings() {
    // Set default active section
    switchSection('personal');

    // Load user preferences from localStorage if available
    loadUserPreferences();
}

function switchSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.settings-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Remove active class from all menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.classList.remove('active');
    });

    // Show selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // Add active class to clicked menu item
    const targetMenuItem = document.querySelector(`[data-section="${sectionId}"]`);
    if (targetMenuItem) {
        targetMenuItem.classList.add('active');
    }

    // Update URL hash for bookmarking
    window.location.hash = sectionId;
}

function handleToggleChange(toggle) {
    const settingItem = toggle.closest('.setting-item');
    const settingLabel = settingItem.querySelector('.setting-label h3').textContent;
    const isChecked = toggle.checked;

    // Here you would typically send this to your backend
    console.log(`${settingLabel}: ${isChecked ? 'Enabled' : 'Disabled'}`);

    // Show feedback to user
    showFeedback(settingItem, isChecked ? 'Enabled' : 'Disabled', isChecked ? 'success' : 'info');
}

function handleEditClick(button) {
    const settingItem = button.closest('.setting-item');
    const settingLabel = settingItem.querySelector('.setting-label h3').textContent;

    // For demo purposes, just show an alert
    // In a real app, this would open a modal or form
    alert(`Edit ${settingLabel} - This would open an edit form in a real application.`);

    // You could also implement inline editing
    // toggleInlineEdit(settingItem);
}

function showFeedback(element, message, type = 'info') {
    // Remove existing feedback
    const existingFeedback = element.querySelector('.feedback-message');
    if (existingFeedback) {
        existingFeedback.remove();
    }

    // Create feedback element
    const feedback = document.createElement('div');
    feedback.className = `feedback-message ${type}`;
    feedback.textContent = message;
    feedback.style.cssText = `
        position: absolute;
        right: 24px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 12px;
        font-weight: 500;
        padding: 4px 8px;
        border-radius: 4px;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;

    // Set color based on type
    switch(type) {
        case 'success':
            feedback.style.color = '#00A699';
            feedback.style.backgroundColor = '#E8F5F3';
            break;
        case 'error':
            feedback.style.color = '#FF5A5F';
            feedback.style.backgroundColor = '#FFF5F5';
            break;
        default:
            feedback.style.color = '#717171';
            feedback.style.backgroundColor = '#F7F7F7';
    }

    element.style.position = 'relative';
    element.appendChild(feedback);

    // Animate in
    setTimeout(() => {
        feedback.style.opacity = '1';
    }, 10);

    // Remove after 2 seconds
    setTimeout(() => {
        feedback.style.opacity = '0';
        setTimeout(() => {
            feedback.remove();
        }, 300);
    }, 2000);
}

function loadUserPreferences() {
    // Load saved preferences from localStorage
    const preferences = {
        emailNotifications: localStorage.getItem('emailNotifications') !== 'false',
        pushNotifications: localStorage.getItem('pushNotifications') !== 'false'
    };

    // Apply preferences to toggles
    const emailToggle = document.querySelector('#notifications .setting-item:nth-child(1) .toggle input');
    const pushToggle = document.querySelector('#notifications .setting-item:nth-child(2) .toggle input');

    if (emailToggle) emailToggle.checked = preferences.emailNotifications;
    if (pushToggle) pushToggle.checked = preferences.pushNotifications;
}

function saveUserPreferences() {
    // Save preferences to localStorage
    const emailToggle = document.querySelector('#notifications .setting-item:nth-child(1) .toggle input');
    const pushToggle = document.querySelector('#notifications .setting-item:nth-child(2) .toggle input');

    if (emailToggle) {
        localStorage.setItem('emailNotifications', emailToggle.checked);
    }
    if (pushToggle) {
        localStorage.setItem('pushNotifications', pushToggle.checked);
    }
}

// Handle browser back/forward navigation
window.addEventListener('hashchange', function() {
    const hash = window.location.hash.substring(1);
    if (hash) {
        switchSection(hash);
    }
});

// Check for initial hash on page load
if (window.location.hash) {
    const initialSection = window.location.hash.substring(1);
    switchSection(initialSection);
}

// Save preferences when toggles change
document.addEventListener('change', function(e) {
    if (e.target.matches('.toggle input')) {
        saveUserPreferences();
    }
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    const menuItems = Array.from(document.querySelectorAll('.menu-item'));
    const activeItem = document.querySelector('.menu-item.active');
    const currentIndex = menuItems.indexOf(activeItem);

    if (e.key === 'ArrowUp' && currentIndex > 0) {
        e.preventDefault();
        menuItems[currentIndex - 1].click();
    } else if (e.key === 'ArrowDown' && currentIndex < menuItems.length - 1) {
        e.preventDefault();
        menuItems[currentIndex + 1].click();
    }
});

// Add loading states for async operations
function showLoading(button) {
    const originalText = button.textContent;
    button.textContent = 'Saving...';
    button.disabled = true;

    return function() {
        button.textContent = originalText;
        button.disabled = false;
    };
}

// Example of how you might handle form submissions
function handleFormSubmission(formData) {
    const resetLoading = showLoading(document.activeElement);

    // Simulate API call
    setTimeout(() => {
        resetLoading();
        showFeedback(document.activeElement.closest('.setting-item'), 'Saved successfully', 'success');
    }, 1000);
}

// Export functions for potential use in other scripts
window.SettingsPage = {
    switchSection,
    showFeedback,
    handleFormSubmission
};
