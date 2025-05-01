export var pack = {
    "name": "TestPack",
    "author": "M0D1N",
    "ProfileLink": "https://playentry.org/profile/6026539845673d648281f982",
    "PackLink": null,
    "PackIcon": "../../../../../uploads/e8/49/e8494736m1p50q5a2n6nee8421e0kqg5.png",
    "Category": "test",
    "CategoryName": "테스트",
    "CategoryColor": "#ff8254",
    "CategoryIcon": {
        "BlockIcon": "../../../../../uploads/e8/49/e8494736m1p50q5a2n6nee8421e0kqg5.png",
        "CategoryIcon": [
            "../../../../../uploads/e8/49/e8494736m1p50q5a2n6nee8421e0kqg5.png", //평상
            "../../../../../uploads/e8/49/e8494736m1p50q5a2n6nee8421e0kqg5.png", //활성
        ]
    }  
}
    

export var blocks = [ 
    {
        "template": "콘솔에 %1출력하기 %2",
        "type": "console_log",
        "class": "entry",
        "skeleton": "basic",
        "color": [ "#303030", "#000000", "#ffffff" ],
        "statements": [],
        "events": {},
        "params": [
            {
                "type": "Block",
                "accept": "string",
                "defaultType": "number",
                "defaultValue": ["Hello, World!"],
                "key": "VALUE"
            }
        ],
        "py": ["Entry.console_log(%1)"],
        "func": function(sprite, script) {
            const value = script.getStringValue('VALUE', script);
            return console.log(value)
        },
        "isFor": [],
        "isNotFor": []
    },
    {
        "template": "UserAgent",
        "type": "Useragent",
        "class": "entry",
        "skeleton": "basic_string_field",
        "color": [ "#303030", "#000000", "#ffffff" ],
        "statements": [],
        "events": {},
        "params": [],
        "py": ["Entry.UserAgent"],
        "func": function(sprite, script) {
            return window.navigator.userAgent
        },
        "isFor": [],
        "isNotFor": []
    },
    {
        "template": "%1",
        "type": "can_enable_WebGPU",
        "class": "entry",
        "skeleton": "basic",
        "color": [ "#303030", "#000000", "#ffffff" ],
        "statements": [],
        "events": {},
        "params": [
            {
                "type": "Text",
                "text": "이 기기에서 WebGPU를 사용할 수 있는가?"
            }
        ],
        "py": ["Entry.can_enable_WebGPU()"],
        "func": function(sprite, script) {
            if (navigator.gpu) return true
            else return false
        },
        "isFor": [],
        "isNotFor": []
    },
]
