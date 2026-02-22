// fetchを使ってJSONファイルを読み込む（これが一番確実！）
async function loadSkills() {
    const response = await fetch('data/mch.json');
    const data = await response.json();
    
    // ここから先で、data.skills を使って画面を作っていく
    console.log("読み込んだスキル:", data.skills);
}

loadSkills();