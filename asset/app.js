// JavaScript for showing recipe details when clicked
function showRecipeDetails(recipeId) {
    const detailsSection = document.getElementById('recipe-details');
    let recipeContent = '';

    if (recipeId === 1) {
        recipeContent = `
            <h2>Biryani Recipe</h2>
            <p>This is a detailed description of Biryani Recipe...</p>
            <ul>
                <li>Ingredient 1</li>
                <li>Ingredient 2</li>
                <li>Ingredient 3</li>
            </ul>
            <h3>Instructions:</h3>
            <p>Step-by-step instructions...</p>
        `;
    } else if (recipeId === 2) {
        recipeContent = `
            <h2>Mutton Qorma Recipe</h2>
            <p>This is a detailed description of Mutton Qorma Recipe...</p>
            <ul>
                <li>Ingredient A</li>
                <li>Ingredient B</li>
                <li>Ingredient C</li>
            </ul>
            <h3>Instructions:</h3>
            <p>Step-by-step instructions...</p>
        `;
    }

    detailsSection.innerHTML = recipeContent;
}