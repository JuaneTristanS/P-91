function send() {
    no1 = document.getElementById("input1").value;
    no2 = document.getElementById("input2").value;
    actual_answer = parseInt(no1) + parseInt(no2);

    document.getElementById("Question").innerHTML = no1 + " + ";
    document.getElementById("Question").innerHTML = no2;

    question_number = "<h4>"+ no1 + "+" + no2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;

    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
}