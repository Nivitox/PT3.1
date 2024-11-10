//info.js

// Función para mostrar la tarjeta de información y actualizar sus campos
function showInfoCard(question) {
    // Muestra la información relevante de la pregunta en la tarjeta de información
    document.getElementById('user-id').innerText = question.ID;
    document.getElementById('user-cluster').innerText = question.Cluster;
    document.getElementById('user-image').innerText = question.Image === "1" ? 'True' : 'False';

    // Inicializa los valores "próximamente" para respuestas correctas, incorrectas, saltadas y progresión
    document.getElementById('correct-answers').innerText = "próximamente";
    document.getElementById('incorrect-answers').innerText = "próximamente";
    document.getElementById('skipped-answers').innerText = "próximamente";
    document.getElementById('user-progression').innerText = "próximamente";

    // Muestra la tarjeta de información eliminando la clase 'hidden'
    document.getElementById('info-card').classList.remove('hidden');
}

// Exporta la función para que pueda ser usada en otros archivos
export { showInfoCard };


