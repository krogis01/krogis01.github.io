var Stack = function () {
	var stackList = new Array();

	this.pushOnto = function(item) {
		stackList.push(item)
		return;
	}

	this.popOff = function() {
		return stackList.pop();
	}

	this.peek = function() {
		return stackList[stackList.length-1]
	}

	this.isEmpty = function() {
		if (stackList.length == 0) {
			return true;
		} else {
			return false;
		}
	}

	this.size = function() {
		return stackList.length;
	}

	this.clone = function() {
		var newList = stackList.slice(0);
		var newStack = new Stack();
		
		for (var i = 0; i < newList.length; i++) {
			newStack.push(newList[i]);
		}
		
		return newStack;
	}

	this.show = function() {
		return stackList;
	}
}

var Queue = function() {
	var queueList = new Array();

	this.enqueue = function(item) {
		queueList.push(item);
		return;
	}

	this.dequeue = function() {
		var removed = queueList.splice(0, 1);
		return removed[0];
	}

	this.isEmpty = function() {
		if (queueList.length == 0) {
			return true;
		} else {
			return false;
		}
	}

	this.size = function() {
		return queueList.length;
	}

}

var Set = function () {
	var setList = new Array();

	this.add = function(item) {
		setList.push(item);
		return;
	}

	this.contains = function(item) {
		var found = false;
		
		for (var i = 0; i < setList.length; i++) {
			if (setList[i] == item) {
				found = true;
			}
		}
		return found;
	} 
}

var getOneDifferents = function(word, wList) {
	var oneDifferents = new Array();

	console.log(word.lenth);
	console.log(word[1]);

	for (var i = 0; i < wList.length; i++) {
		var sameCh = 0;
		for (var j = 0; j < wList[i].length; j++) {
			if (wList[i][j] = word[j]) {
				sameCh += 1;
			}
		}
		if (sameCh == word.length - 1) {
			oneDifferents.push(wList[i]);
		}
	}
	console.log(oneDifferents);
	return oneDifferents;
}

var wordLadder = function() {

	var beginWord = document.getElementById("userBeginWord").value;
	var endWord = document.getElementById("userEndWord").value;
	var wordLength = document.getElementById("dropdown");
	var wordLenVal = wordLength.options[wordLength.selectedIndex].value;


	if(wordLenVal == 3) {
		var useList = threeLetterWords
	} else if (wordLenVal ==4) {
			var useList = fourLetterWords
	} else {
		var useList = fiveLetterWords
	}

	var queue = new Queue();
	var stack = new Stack();

	stack.pushOnto(beginWord);
	queue.enqueue(stack);
	usedWords = new Set();
	usedWords.add(beginWord);

	var done = false;
	var found = false;

	while (!done) {
		var currentStack = queue.dequeue();
		var topWord = currentStack.peek();
		var nextWords = getOneDifferents(topWord, useList);

		for (var i = 0; i < nextWords.length; i++) {
			var nextUsed = false;
			
			for (var j = 0; j < usedWords.length; j++) {
				if (nextWords[i] == usedWords[j]) {
					nextUsed = true;
				
				}
			}

			if (!nextUsed) {
				usedWords.add(nextWords[i]);
				var newStack = currentStack.clone();
				newStack.pushOnto(nextWords[i]);

				if (nextWords[i] == endWord) {
					done = true;
					found = true;
					var finalList = newStack.show();

				}

				queue.enqueue(newStack);
				
			}
		}
	
	if (queue.size() == 0) {
		done = true;
		found = false;
	}
	
	}

	if (!found) {
		alert("No matches can be found!");
	} else {
		var finalString = "";
		for (var i = 0; i < finalList.length; i++) {
			finalString += "<p>" + finalList[i] + "</p>";
		}
	document.getElementById("results").innerHTML = finalString;
	}

	return;
}
