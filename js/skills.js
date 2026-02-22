// JSONデータを読み込んで画面を作る関数
async function initTool() {
    try {
        // 1. JSONファイルを読み込む
        const response = await fetch('data/mch.json');
        const data = await response.json();
        const skills = data.skills;

        // 2. 表示先のエリア（HTMLのid="skill-palette"）を取得
        const palette = document.getElementById('skill-palette');
        palette.innerHTML = ''; // 中身を一度空にする

        // 3. スキルデータをループしてHTMLを自動生成する
        // order（順番）の数字が小さい順に並べる
        const sortedSkills = Object.entries(skills).sort((a, b) => a[1].order - b[1].order);

        for (const [skillName, detail] of sortedSkills) {
            // スキル1個分の箱を作る
            const skillDiv = document.createElement('div');
            skillDiv.className = 'skill-container';

            // 中身のHTMLを組み立てる
            // ※チャージ数が0の場合は表示しない、などの工夫もできます
            skillDiv.innerHTML = `
                <img src="${detail.icon}" class="skill-icon" alt="${skillName}">
                <div class="skill-info">
                    <span class="recast">${detail.リキャスト > 0 ? detail.リキャスト + 's' : 'GCD'}</span>
                    <span class="charge">${detail.チャージ数 > 0 ? 'MAX:' + detail.チャージ数 : ''}</span>
                </div>
            `;

            // 画面に追加
            palette.appendChild(skillDiv);
        }

        console.log("スキルの生成が完了しました！");

    } catch (error) {
        console.error("データの読み込みに失敗しました:", error);
    }
}

// ページが読み込まれたら実行
window.onload = initTool;