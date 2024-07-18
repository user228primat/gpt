function sleep(millis) {
    var t = (new Date()).getTime();
    var i = 0;
    while (((new Date()).getTime() - t) < millis) {
        i++;
    }
}

function bet() {
    sleep(100);
    const buttons = document.querySelectorAll('div.market-button');
    buttons.forEach(button => {
        const title = button.querySelector('.market-button-title');
        if (title && title.textContent.trim() === 'Нет') {
            button.click();
        }
    });
}

function denomination(index) {
    document.getElementsByClassName("relative mr-1")[index].click();
}

function b25() {
    denomination(1);
    bet();
}

function b50() {
    denomination(1);
    bet();
    bet();
}

function b150() {
    denomination(1);
    bet();
    bet();
    denomination(2);
    bet();
}

function b325() {
    denomination(3);
    bet();
    denomination(2);
    bet();
    denomination(1);
    bet();
}

function b725() {
    denomination(4);
    bet();
    denomination(3);
    bet();
    denomination(1);
    bet();
}

function b1650() {
    denomination(5);
    bet();
    denomination(4);
    bet();
    denomination(3);
    bet();
    denomination(1);
    bet();
}

function b(sum){
	const buttons = document.querySelectorAll('div.market-button');
    buttons.forEach(button => {
        const title = button.querySelector('.market-button-title');
        if (title && title.textContent.trim() === 'Нет') {
			console.log(444);
			let a = document.getElementsByClassName("outcome-chip");
			if(a.length==0){
				console.log(228);
				if(sum==25){
					b25();
				}else if (sum==50){
					b50();
				}else if (sum==150){
					b150();
				}else if (sum==325){
					b325();
				}else if (sum==725){
					b725();
				}else if (sum==1650){
					b1650();
				}
			}
        }
    });
}

