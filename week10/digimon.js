async function getDigimon() {
    const digimonResponse = await fetch('https://digimon-api.vercel.app/api/digimon');
    const digimonData = await digimonResponse.json(); 
    console.log(digimonData); 

    const digimonTableRef = document.querySelector(".digimon-table"); 
    for (let i=0; i < digimonData.length; i++) {
        const digimon = digimonData[i]; 
        console.log(`
            <tr>
                <td>${digimon.name}</td>
                <td>
                    <img src="${digimon.img}"/>
                </td>
                <td>${digimon.level}</td>
            </tr>
            `); 
    }
}