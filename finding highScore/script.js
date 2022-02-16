function highScore(array) {

    var max = array[0];

    for (var i = 1; i < 9; i++) {

        if (max < array[i]) {
            max = array[i];
        }
    }

    return max;
}

var n = parseInt(prompt("enter student number : "));
var score = Array();

for (var u = 0; u < n; u++) {

    score[u] = parseInt(prompt("score of student : " + u));

}

var high = highScore(score);

document.write("score's are : " + score + "<br>");
document.write("highScore is : " + high);