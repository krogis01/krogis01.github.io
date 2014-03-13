var Stack = function () {
	var stackList = [];

	this.push = function(item) {
		this.stackList.push(item)
		return;
	}

	this.pop = function(item) {
		return this.stackList.push(item);
	}

	this.peek = function() {
		return this.stackList[this.stackList.length-1]
	}

	this.isEmpty = function() {
		if (this.stackList.length == 0) {
			return true;
		} else {
			return false;
		}
	}

	this.size = function() {
		return this.stackList.length;
	}

	this.clone = function() {
		var newList = new this.stackList.slice(0);
		var newStack = new Stack();
		
		for (var i = 0; i < newList.length; i++) {
			newStack.push(newList[i]);
		}
		return newStack;
	}

	this.show = function() {
		return this.stackList;
	}
}

var Queue = function() {
	var queueList = [];

	this.enqueue = function() {
		this.queueList.push(item);
		return;
	}

	this.dequeue = function() {
		var removed = new this.queueList.splice(0, 1);
		return(removed[0]);
	}

	this.isEmpty = function() {
		if (this.queueList.length == 0) {
			return true;
		} else {
			return false;
		}
	}

	this.size = function() {
		return this.queueList.length;
	}

}

var Set = function () {
	var setList = [];

	this.add = function() {
		this.addSet.push(item);
		return;
	}

	this.contains = function() {
		var found = false;
		for (var i = 0; i = this.setList.length; i++) {
			if (this.setList[i] = item) {
				found = true;
			}
		}
		return found;
	} 
}

var getOneDifferents = function(word, wList) {
	var oneDifferents = [];

	for (var i = 0; i < wList.length; i++) {
		var sameCh = 0;
		for (var j = 0; j < wList[i].length; j++) {
			if (wList[i] = word[j]) {
				sameCh += 1;
			}
		}
		if (sameCh == word.length - 1) {
			oneDifferents.append(wList[i]);
		}
	}
	return oneDifferents;
}

wordLadder = function() {

	var beginWord = document.getElementById("userBeginWord")
	var endWord = document.getElementById("userEndWord")
	var wordLength = document.getElementById("dropdown")
	var wordLenVal = wordLength.options[wordLength.selectedIndex].value


	if(wordLenVal == 3) {
		var useList = threeLetterWords
	} else if (wordLenVal ==4) {
			var useList = fourLetterWords
	} else {
		var useList = fiveLetterWords
	}

	var queue = new Queue();
	var stack = new Stack();

	stack.push(beginWord);
	enqueue.enqueue(stack);
	usedWords = new Set();
	usedWords.add(beginWord);

	var done = false;
	var found = false;

	while (!done) {
		var currentStack = new queue.dequeue();
		var topWord = new currentStack.peek();
		var nextWords = new getOneDifferents(topWord, useList);

		for (var i = 0; i < nextWords.length; i++) {
			var nextUsed = false;
			
			for (var j = 0; j < usedWords.length; j++) {
				if (nextWords[i] == usedWords[j]) {
					nextUsed = true;
				
				}
			}

			if (!nextUsed) {
				usedWords.add(nextWords[i]);
				var newStack = new currentStack.clone();
				newStack.push(nextWords[i]);

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
		var printList = new finalList.reverse();
		alert(printList);
	}

	return;
}
