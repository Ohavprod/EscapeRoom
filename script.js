// אפקט הפנס - מעדכן את מיקום הגרדיאנט לפי מיקום העכבר
document.addEventListener('mousemove', (e) => {
    const flashlight = document.getElementById('flashlight');
    flashlight.style.setProperty('--x', e.clientX + 'px');
    flashlight.style.setProperty('--y', e.clientY + 'px');
});

// ניהול המודל (פופ-אפ החידה)
function openModal() {
    document.getElementById("riddle-modal").style.display = "block";
}

function closeModal() {
    document.getElementById("riddle-modal").style.display = "none";
}

// בדיקת הקוד בדלת
function checkCode() {
    const code = document.getElementById('door-code').value;
    // התשובה היא "נר" -> הגימטריה היא 250 (נ=50, ר=200)
    if(code === "250") {
        alert("כל הכבוד! פתרת את החידה הראשונה. עוברים לשלב הבא (המטבח)...");
        // כאן נכניס בהמשך הפניה לעמוד ה-HTML של השלב השני:
        // window.location.href = "stage2.html";
    } else {
        alert("קוד שגוי. נסה לחפש את הרמז שוב ולעיין בפניני הלכה פרק ד'.");
    }
}
