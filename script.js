const navLinks = document.querySelectorAll('.main-nav a[href^="#"]'); 

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // デフォルトのジャンプ動作をキャンセル

        const targetId = this.getAttribute('href'); // リンクのhref属性からID名を取得 (#profile-section など)
        const targetElement = document.querySelector(targetId); // 該当するIDの要素を取得

        if (targetElement) {
            // スムーズにスクロールさせる
            targetElement.scrollIntoView({
                behavior: 'smooth' // ここがスムーズスクロールの魔法！
            });
            // 必要であれば、ヘッダーの高さ分を考慮してスクロール位置を調整するJavaScriptも追加
            // (これは少し複雑になるので、まずは上記で試す)
        }
    });
});