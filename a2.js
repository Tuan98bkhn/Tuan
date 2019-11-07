class Student {
    constructor (name, code, address){
        this.name = name;
        this.code = code;
        this.address = address;
    }
}
class UI {
    addStudentToList(student){
        const list = document.getElementById('student-list');
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.code}</td>
        <td>${student.address}</td>
        <td><a href="" class="delete">X</a></td>

        `;
        list.appendChild(row);
    }

showAlert(message, className){
    const div = document.createElement('div');
    div.className =`alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#student-form')
    //insert alert
    container.insertBefore(div, form);
    //set out
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000);
}
deleteStudent(target){
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}
clearFields(){
    document.getElementById('name').value = '';
    document.getElementById('code').value = '';
    document.getElementById('address').value = '';
}
}

document.getElementById('student-form').addEventListener('submit', function(e){
    const name = document.getElementById('name').value;
    const code = document.getElementById('code').value;
    const address = document.getElementById('address').value;

    const student = new Student (name, code, address);
    const ui = new UI();
    //validate
    if(name ==='' || code === '' || address === ''){
        ui.showAlert('Hãy nhập đầy đủ thông tin', 'error');
    } else {
        ui.addStudentToList(student);
        ui.showAlert('Thêm mới thành công', 'success');
        ui.clearFields();
    }
    e.preventDefault();
})

// delete
document.getElementById('student-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteStudent(e.target);
    ui.showAlert('Xóa thành công!', 'success');
    e.preventDefault();
})