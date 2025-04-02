document.getElementById('add-subject').addEventListener('click', function() {
    const subjectInputs = document.getElementById('subject-inputs');
    const subjectDiv = document.createElement('div');
    subjectDiv.classList.add('subject');
    subjectDiv.innerHTML = `
        <input type="text" placeholder="Subject Name" required>
        <input type="number" placeholder="Total Classes Held" required>
        <input type="number" placeholder="Classes Attended" required>
    `;
    subjectInputs.appendChild(subjectDiv);
});

document.getElementById('calculate-attendance').addEventListener('click', function() {
    const subjects = document.querySelectorAll('.subject');
    let totalClasses = 0;
    let totalAttended = 0;
    const attendanceBody = document.getElementById('attendance-body');
    attendanceBody.innerHTML = ''; 

    subjects.forEach(subject => {
        const inputs = subject.querySelectorAll('input');
        const subjectName = inputs[0].value;
        const totalHeld = parseInt(inputs[1].value) || 0;
        const attended = parseInt(inputs[2].value) || 0;

        totalClasses += totalHeld;
        totalAttended += attended;
        if(attended > totalHeld){
            alert(`Classes attended cannot be greater than total classes held for ${subjectName}.`);
            return;
        }

        const attendancePercentage = totalHeld > 0 ? (attended / totalHeld) * 100 : 0;

        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${subjectName}</td>
            <td>${totalHeld}</td>
            <td>${attended}</td>
            <td>${attendancePercentage.toFixed(2)}%</td>
        `;
        attendanceBody.appendChild(row);
    });

    const overallAttendance = totalClasses > 0 ? (totalAttended / totalClasses) * 100 : 0;
    document.getElementById('result').innerText = `Overall Attendance: ${overallAttendance.toFixed(2)}%`;
    
});

