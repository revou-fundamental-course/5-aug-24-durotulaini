// js/script.js
function calculateBMI() {
    event.preventDefault();  // Prevent form from submitting

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    if (!weight || !height) {
        alert('Please enter valid weight and height');
        return;
    }

    const bmi = weight / (height * height);
    let category = '';
    let explanation = '';
    let solusi = '';

    if (bmi < 18.5) {
        category = 'Kekurangan berat badan';
        explanation = 'Anda berada dalam kategori kekurangan berat badan.';
        solusi = 'salah satu upaya untuk menambah berat badan adalah dengan mengonsumsi Makanan Kaya Nutrisi, fokus pada makanan yang kaya akan protein, karbohidrat kompleks, dan lemak sehat seperti telur, ikan, daging tanpa lemak, kentang, nasi, quinoa, kacang-kacangan, dan produk susu.' ;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Normal (ideal)';
        explanation = 'Anda berada dalam kategori berat badan ideal.';
        solusi = 'Pertahankan berat badan ideal Anda dengan teruskan kebiasaan makan sehat dengan kombinasi yang baik dari karbohidrat, protein, lemak sehat, sayuran dan buah-buahan serta jangan lupakan olahraga secara rutin';
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = 'Kelebihan berat badan';
        explanation = 'Anda berada dalam kategori berat badan berlebih.';
        solusi ='upaya yang dapat Anda lakukan adalah dengan mengurangi asupan kalori gantilah makanan berkalori tinggi dengan makanan rendah kalori namun bergizi dan jangan lewatkan olahraga';

    } else {
        category = 'Kegemukan (Obesitas)';
        explanation = 'Anda berada dalam kategori kegemukan atau obesitas.';
        solusi ='Jika anda mengalami kesulitan menurunkan berat badan, berkonsultasilah dengan dokter atau ahli gizi untuk program penurunan berat badan yang lebih terstruktur.';

    }

    document.getElementById('bmiValue').textContent = `BMI Anda: ${bmi.toFixed(1)}`;
    document.getElementById('bmiCategory').textContent = `Kategori: ${category}`;
    document.getElementById('bmiExplanation').textContent = explanation;
    document.getElementById('bmiResult').style.display = 'block';
    document.getElementById('solusi').textContent = solusi;
}
