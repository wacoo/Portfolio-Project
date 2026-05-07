// Load portfolio data from individual JSON files
async function loadPortfolioData() {
  try {
    // Load recent work
    const recentWorkResponse = await fetch('data/recent-work.json');
    const recentWork = await recentWorkResponse.json();
    
    // Load all project files
    const projectFiles = [
      'data/health-clinic-website.json',
      'data/effective-expense-management.json',
      'data/cheapr-project-web-application.json',
      'data/orbit-space-travel-agency.json',
      'data/tv-show-spotter-website.json',
      'data/aedya-chat-game.json',
      'data/iso-documentation.json',
      'data/smart-math-magician.json',
      'data/addis-property-hub.json'
    ];
    
    const projects = [];
    for (const file of projectFiles) {
      try {
        const response = await fetch(file);
        const project = await response.json();
        projects.push(project);
      } catch (error) {
        console.warn(`Failed to load ${file}:`, error);
      }
    }
    
    return {
      recentWork: recentWork,
      projects: projects
    };
  } catch (error) {
    console.error('Error loading portfolio data:', error);
    return {
      recentWork: {
        title: 'My Recent Works',
        name: 'No Recent Work',
        description: 'Unable to load portfolio data.',
        featuredImage: '',
        technologies: [],
        link_to_live_version: '',
        link_to_source: ''
      },
      projects: []
    };
  }
}
