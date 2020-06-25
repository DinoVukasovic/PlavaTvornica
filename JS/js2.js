var p = 1;
var numbers = 100;
var rotation = false;
var answer;
for (i = 1; i <= numbers; i++) {
    answer = p;
	if (i % 7 === 0) {
		rotation = !rotation
	} else if (i % 13 === 0) {
		if (rotation) {
			p = p -1;
		} else {
			p = p+1;
		}
	} else if (!rotation){
		p = p+1;
	} else if (rotation) {
		p = p-1;
	}
	if (p < 1) {
		p = p+10;
	} else if (p > 10) {
		p = p - 10;
	}

}
console.log(answer);
