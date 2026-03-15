// ניהול מעברי מסכים
function switchScreen(screenId) {
    // מסתיר את כל המסכים
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active-screen'));
    
    // מציג רק את המסך המבוקש
    document.getElementById(screenId).classList.add('active-screen');
}

function startGame() {
    switchScreen('room-1');
}

function goToRoom(roomId) {
    switchScreen(roomId);
}

// אפקט הפנס לחדר 1
document.addEventListener('mousemove', (e) => {
    const flashlight = document.getElementById('flashlight');
    if(flashlight) {
        flashlight.style.setProperty('--x', e.clientX + 'px');
        flashlight.style.setProperty('--y', e.clientY + 'px');
    }
});

// מאגר החידות
const riddles = {
    'riddle-1': `<h2>חידת בדיקת חמץ</h2>
                 <p>לפי פניני הלכה (פרק ד'): "בתחילת ליל י"ד בניסן בודקים את החמץ..."</p>
                 <p><strong>אני מאיר את החושך אך איני פנס, דרכי מחפשים בחורים ובסדקים את מה שאסור שייכנס. מי אני?</strong></p>
                 <p style="font-size: 0.9em; color: #aaa;">(הזן את הגימטריה של התשובה בכספת)</p>`
};

function showRiddle(riddleId) {
    const modal = document.getElementById('riddle-modal');
    const modalText = document.getElementById('modal-text');
    modalText.innerHTML = riddles[riddleId];
    modal.classList.remove('hidden');
}

function closeModal() {
    document.getElementById('riddle-modal').classList.add('hidden');
}

// פתיחת הכספת (מעבר חלק ללא Alert)
function trySafeCode() {
    const code = document.getElementById('safe-code').value;
    const safeClosed = document.getElementById('safe-closed');
    const safeOpened = document.getElementById('safe-opened');

    if(code === "250") {
        // מסתירים את הכספת הסגורה ומציגים את התוכן שלה
        safeClosed.classList.add('hidden');
        safeOpened.classList.remove('hidden');
        
        // אפשר גם להוסיף סאונד של מנעול נפתח כאן בהמשך!
    } else {
        // במקום Alert נוכל לעשות אפקט של רטט (Shake) או צבע אדום לתיבת הטקסט
        const input = document.getElementById('safe-code');
        input.style.border = "2px solid red";
        setTimeout(() => input.style.border = "", 1000);
    }
}
