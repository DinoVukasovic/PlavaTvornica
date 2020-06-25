var p = 1;
var numbers = 100;
var rotation = false;
for (i = 1; i <= numbers; i++) {
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
	if (rotation) {
		p = p+1;
	} else if (!rotation) {
		p = p -1;
	}
}
console.log(p);
