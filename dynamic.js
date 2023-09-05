var blockedUrls = [
	"*://*.doubleclick.net/*",
	"*://*.googleadservices.com/*",
	"*://*.googlesyndication.com/*",
	"twitter.com"
];


chrome.declarativeNetRequest.updateDynamicRules({
  addRules: DynamicRules(),
  removeRuleIds: [1001]
});


function DynamicRules()
{
	var ruleSet = [];
	for(var i=0;i<blockedUrls.length;i++)
    { 
		ruleSet.push(rule(i+1,blockedUrls[i]))
	};
	
	return ruleSet;
}



function rule(id,url)
{
	return {
    'id': id,
    'priority': id,
    'action': {
      'type': 'block'
    },
    'condition': {
      'urlFilter': url,
      'resourceTypes': [
        'csp_report', 'font', 'image', 'main_frame', 'media', 'object', 'other', 'ping', 'script',
        'stylesheet', 'sub_frame', 'webbundle', 'websocket', 'webtransport', 'xmlhttprequest'
      ]
    }
  };	
}

class Rule {
  constructor(id, url) {
    this.id = id;
    this.priority = id;
    this.action = {type:'block'};
    this.condition = {urlFilter: url};
    this.condition.resourceTypes = ['csp_report', 'font', 'image', 'main_frame', 'media', 'object', 'other', 'ping', 'script',
    'stylesheet', 'sub_frame', 'webbundle', 'websocket', 'webtransport', 'xmlhttprequest'];
  }
}
