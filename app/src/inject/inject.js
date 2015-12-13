chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------
	}
	}, 10);


});


var snippetGroupList = [];

//hideSnippetContainer();


Array.prototype.unique = function() {
	var uniq = {};
	this.forEach(function(item) { uniq[item] = true; });
	return Object.keys(uniq);
};

getSnippets();

snippetGroupList = snippetGroupList.unique();

console.log(snippetGroupList);

function getSnippets() {
	var snippetListSelector = document.querySelector('#snippets-pjax').querySelectorAll('.iterable')[0].querySelectorAll("tr");

	for (var i = 0; i < snippetListSelector.length; i++) {
		var snippetSelector = snippetListSelector[i];
		var snippetTitleSelector = snippetSelector.querySelectorAll(".title")[0].querySelectorAll("[title]")[0];
		if(snippetTitleSelector) {
			var snippetTitle = snippetTitleSelector.getAttribute('title');
			var titleRegex = /\[(.*?)\]/g;
			var snippetGroups = snippetTitle ? snippetTitle.match(titleRegex) : [];

			var snippetGroupAttributeValue = "";

			var stringifiedSnippetGroups = snippetGroups.join();
			snippetSelector.setAttribute("snippet-groups", stringifiedSnippetGroups);

			snippetGroupList = snippetGroupList.concat(snippetGroups);
		}
	}
}

function hideSnippetContainer() {
	var snippetListSelector = document.querySelector('#snippets-pjax').querySelectorAll('.iterable');
	console.log(snippetListSelector);
	snippetListSelector[0].style.display = 'none';
}