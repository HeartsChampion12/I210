async function getDigimon() {
    const digimonResponse = await fetch('https://digimon-api.vercel.app/api/digimon');
    const digimonData = await digimonResponse.json(); 
    console.log(digimonData); 

    const digimonTableRef = document.querySelector(".digimon-table"); 
    for (let i=0; i < digimonData.length; i++) {
        const digimon = digimonData[i]; 
        digimonTableRef.innerHTML += `
            <tr>
                <td>${digimon.name}</td>
                <td>
                    <img src="${digimon.img}" height="50"/>
                </td>
                <td>${digimon.level}</td>
            </tr>
            `; 
    }
}