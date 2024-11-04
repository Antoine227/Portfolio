function createProjet(projet) {
    let addProjet =`
    <a href=${projet.lien} target="_blank" rel="noopener noreferrer">
                <div class="projet-card">
                    <img src=${projet.miniature} alt=${projet.name}>
                    <div class="projet-info">
                        <h4>${projet.name}</h4>
                        <p>${projet.description}</p>
                        <span class="technologies">${projet.techno}</span>
                    </div>
                </div>
            </a>
    `;

    return addProjet;
}

export default createProjet;