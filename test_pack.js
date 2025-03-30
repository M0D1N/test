export var pack = {
    "name": "TestPack",
    "author": "M0D1N",
    "ProfileLink": "https://playentry.org/profile/6026539845673d648281f982",
    "PackLink": null,
    "PackIcon": "",
    "Category": "test",
    "CategoryName": "테스트",
    "CategoryIcon": {
        "BlockIcon": "../../../../../uploads/e8/49/e8494736m1p50q5a2n6nee8421e0kqg5.png",
        "CategoryIcon": [
            "../../../../../uploads/e8/49/e8494736m1p50q5a2n6nee8421e0kqg5.png", //평상
            "../../../../../uploads/e8/49/e8494736m1p50q5a2n6nee8421e0kqg5.png", //활성성
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
            },
            {
                "type": "Indicator",
                "img": "block_icon/moving_icon.svg",
                "size": 11
            }
        ],
        "py": ["Entry.console_log(%1)"],
        "func": function(sprite, script) {
            const value = script.getStringValue('VALUE', script);
            return console.log(value)
        },
        "isFor": [],
        "isNotFor": []
        }
]
